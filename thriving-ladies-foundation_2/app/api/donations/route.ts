import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Testing Supabase connection...')
    console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log('Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

    // Try different possible table names for donations
    const possibleTables = ['donations', 'donation']

    for (const tableName of possibleTables) {
      try {
        console.log(`Trying table: ${tableName}`)
        const { data, error } = await supabase
          .from(tableName)
          .select('*')
          .order('created_at', { ascending: false })

        console.log(`Table ${tableName} - Error:`, error)
        console.log(`Table ${tableName} - Data length:`, data?.length || 0)

        if (!error && data) {
          console.log(`Success with table: ${tableName}`)
          return NextResponse.json(data)
        }
      } catch (error) {
        console.log(`Exception with table ${tableName}:`, error)
        continue
      }
    }

    console.log('No tables found, returning empty array')
    // If no table found, return empty array
    return NextResponse.json([])
  } catch (error) {
    console.error('Internal server error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Try different possible table names
    const possibleTables = ['donations', 'donation']

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