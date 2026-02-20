import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function GET() {
    try {
        // Fetch latest donations
        const { data: donations, error: dError } = await supabaseAdmin
            .from('donations')
            .select(`
        id,
        amount,
        currency,
        status,
        created_at,
        donor:donors(first_name, last_name)
      `)
            .eq('status', 'completed')
            .order('created_at', { ascending: false })
            .limit(5)

        // Fetch latest projects
        const { data: projects, error: pError } = await supabaseAdmin
            .from('projects')
            .select('id, title, category, created_at')
            .eq('is_published', true)
            .order('created_at', { ascending: false })
            .limit(5)

        // Fetch latest gallery items
        const { data: gallery, error: gError } = await supabaseAdmin
            .from('gallery')
            .select('id, title, image_url, created_at')
            .eq('is_published', true)
            .order('created_at', { ascending: false })
            .limit(5)

        if (dError || pError || gError) {
            console.error('Activities Fetch Error:', { dError, pError, gError })
            return NextResponse.json({ error: 'Failed to fetch some activities' }, { status: 500 })
        }

        // Combine and format
        const activities = [
            ...(donations?.map(d => ({
                id: d.id,
                type: 'donation',
                title: `Donation from ${(d as any).donor?.first_name || 'Anonymous'}`,
                description: `${d.amount} ${d.currency}`,
                timestamp: d.created_at
            })) || []),
            ...(projects?.map(p => ({
                id: p.id,
                type: 'project',
                title: `New Project: ${p.title}`,
                description: `Category: ${p.category}`,
                timestamp: p.created_at
            })) || []),
            ...(gallery?.map(g => ({
                id: g.id,
                type: 'gallery',
                title: `New Photo: ${g.title}`,
                description: 'Check out our latest update',
                timestamp: g.created_at
            })) || [])
        ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
            .slice(0, 10)

        return NextResponse.json(activities)
    } catch (err) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
