import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message, category } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert inquiry into database
    const { data, error } = await supabase
      .from('inquiry')
      .insert([
        {
          name,
          email,
          phone,
          subject,
          message,
          category: category || 'general',
          status: 'pending',
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save inquiry' },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      data
    })

  } catch (error) {
    console.error('Inquiry submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Try different possible table names for inquiries
    const possibleTables = ['inquiries', 'inquiry', 'contacts', 'contact']

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