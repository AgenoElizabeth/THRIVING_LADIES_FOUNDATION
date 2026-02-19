import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Try different possible table names for gallery/media
    const possibleTables = ['gallery', 'media', 'images', 'photos']

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Try different possible table names
    const possibleTables = ['gallery', 'media', 'images', 'photos']

    for (const tableName of possibleTables) {
      try {
        const { data, error } = await supabase
          .from(tableName)
          .insert(body)
          .select()

        if (!error && data) {
          return NextResponse.json(data[0], { status: 201 })
        }
      } catch (error) {
        continue
      }
    }

    return NextResponse.json({ error: 'No suitable table found' }, { status: 500 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}