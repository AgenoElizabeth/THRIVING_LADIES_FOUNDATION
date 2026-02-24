export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password, name, role } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Create user with admin API
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email
      user_metadata: {
        name: name || email.split('@')[0],
        role: role || 'admin'
      }
    })

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    // Also add to admin_users table
    const { error: tableError } = await supabaseAdmin
      .from('admin_users')
      .insert({
        auth_user_id: data.user.id,
        email: data.user.email,
        full_name: name || email.split('@')[0],
        role: role || 'admin'
      })

    if (tableError) {
      console.error('Error adding to admin_user table:', tableError)
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Error creating admin user:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

