import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Try different possible table names
    const possibleTables = ['videos', 'media', 'video_library', 'video_files']

    for (const tableName of possibleTables) {
      try {
        const { error } = await supabase
          .from(tableName)
          .delete()
          .eq('id', params.id)

        if (!error) {
          return NextResponse.json({ message: 'Video deleted successfully' })
        }
      } catch (error) {
        continue
      }
    }

    return NextResponse.json({ error: 'Video not found or no suitable table' }, { status: 404 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}