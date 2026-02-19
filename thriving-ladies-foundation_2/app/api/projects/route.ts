import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Try different possible table names for projects
    const possibleTables = ['projects', 'project']

    for (const tableName of possibleTables) {
      try {
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .order('created_at', { ascending: false })

        if (!error && data) {
          return NextResponse.json(data)
        }
      } catch (error) {
        continue
      }
    }

    // If no table found, return empty array
    return NextResponse.json([])
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}