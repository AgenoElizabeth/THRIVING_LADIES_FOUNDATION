import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    // Try different possible table names
    const possibleTables = ['gallery', 'media', 'images', 'photos']

    for (const tableName of possibleTables) {
      try {
        const { error } = await supabase
          .from(tableName)
          .update(body)
          .eq('id', params.id)

        if (!error) {
          return NextResponse.json({ message: 'Item updated successfully' })
        }
      } catch (error) {
        continue
      }
    }

    return NextResponse.json({ error: 'Item not found or no suitable table' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Try different possible table names
    const possibleTables = ['gallery', 'media', 'images', 'photos']

    for (const tableName of possibleTables) {
      try {
        const { error } = await supabase
          .from(tableName)
          .delete()
          .eq('id', params.id)

        if (!error) {
          return NextResponse.json({ message: 'Item deleted successfully' })
        }
      } catch (error) {
        continue
      }
    }

    return NextResponse.json({ error: 'Item not found or no suitable table' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}