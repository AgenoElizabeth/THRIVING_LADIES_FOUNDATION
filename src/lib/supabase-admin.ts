import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'

if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
    console.warn('Supabase environment variables are missing. Data fetching will fail at runtime.')
}

/**
 * Admin client — SERVER-SIDE ONLY.
 * Uses the service role key — bypasses Row Level Security (RLS).
 * NEVER import this file in client components or pages rendered in the browser.
 * Use only in: app/api/** route handlers.
 */
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
    },
})
