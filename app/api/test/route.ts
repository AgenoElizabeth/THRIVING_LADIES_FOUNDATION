import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    // Test Supabase connection
    const { data: connectionTest, error: connectionError } = await supabase
      .from('_supabase_tables')  // This might not work, but let's try
      .select('*')
      .limit(1)

    // Try to get table information
    const { data: tables, error: tablesError } = await supabase
      .rpc('get_table_names')  // This might not exist

    // Test with a known table - let's try to see what happens
    const testTables = ['donations', 'donation', 'projects', 'project', 'inquiries', 'inquiry', 'donors', 'donor', 'gallery', 'videos']

    const results: Record<string, any> = {}

    for (const tableName of testTables) {
      try {
        const { data, error, count } = await supabase
          .from(tableName)
          .select('*', { count: 'exact', head: true })

        results[tableName] = {
          exists: !error,
          count: count || 0,
          error: error?.message
        }
      } catch (err) {
        results[tableName] = {
          exists: false,
          count: 0,
          error: 'Table does not exist or access denied'
        }
      }
    }

    return NextResponse.json({
      connection: {
        url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Not set',
        key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Not set'
      },
      tables: results,
      connectionTest,
      connectionError: connectionError?.message
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to test Supabase connection',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
