"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"
import { supabase } from "@/lib/supabase"
import type { User, Session } from "@supabase/supabase-js"

// ─── Types ────────────────────────────────────────────────────────────────────

interface AdminUser {
  id: string
  auth_id: string
  full_name: string
  email: string
  role: "super_admin" | "admin" | "editor" | "viewer"
  avatar_url: string | null
  is_active: boolean
}

interface AuthContextType {
  user: User | null
  adminUser: AdminUser | null
  session: Session | null
  isLoading: boolean
  isAuthenticated: boolean
  role: string | null
  signIn: (email: string, password: string) => Promise<{ error: string | null }>
  signup: (email: string, password: string) => Promise<{ success: boolean; error: string | null }>
  signOut: () => Promise<void>
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType>({
  user: null,
  adminUser: null,
  session: null,
  isLoading: true,
  isAuthenticated: false,
  role: null,
  signIn: async () => ({ error: null }),
  signup: async () => ({ success: false, error: null }),
  signOut: async () => { },
})

// ─── Provider ─────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  /** Fetch the admin_users record for a given Supabase auth user */
  const fetchAdminUser = useCallback(async (authUser: User) => {
    const { data, error } = await supabase
      .from("admin_users")
      .select("id, auth_id, full_name, email, role, avatar_url, is_active")
      .eq("auth_id", authUser.id)
      .single()

    if (error || !data) {
      console.warn("No admin_users record found for user:", authUser.id)
      return null
    }

    if (!data.is_active) {
      console.warn("Admin account is deactivated:", data.email)
      return null
    }

    return data as AdminUser
  }, [])

  /** Initialise auth state from existing session */
  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)

      if (session?.user) {
        const admin = await fetchAdminUser(session.user)
        setAdminUser(admin)
      }
      setIsLoading(false)
    })

    // Listen for auth state changes (login / logout / token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setSession(session)
        setUser(session?.user ?? null)

        if (session?.user) {
          const admin = await fetchAdminUser(session.user)
          setAdminUser(admin)
        } else {
          setAdminUser(null)
        }
        setIsLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [fetchAdminUser])

  const signIn = async (emailOrUsername: string, password: string): Promise<{ error: string | null }> => {
    setIsLoading(true)
    try {
      // ─── Hardcoded Fallback (Disabled in Production) ────────────────
      const isDev = process.env.PESAPAL_ENVIRONMENT !== "production"
      if (isDev && emailOrUsername === "admin" && password === "nimda") {
        const fallbackUser: AdminUser = {
          id: "fallback-admin",
          auth_id: "fallback-admin",
          full_name: "Foundation Admin",
          email: "admin@thrivingladies.org",
          role: "super_admin",
          avatar_url: null,
          is_active: true,
        }
        setAdminUser(fallbackUser)
        // Mock a basic Supabase user object for context compatibility
        setUser({ id: "fallback-admin", email: fallbackUser.email } as any)
        return { error: null }
      }

      // ─── Real Supabase Auth ──────────────────────────────────────
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailOrUsername,
        password
      })

      if (error) {
        return { error: error.message }
      }

      if (!data.user) {
        return { error: "Login failed. Please try again." }
      }

      // Verify this user exists in admin_users and is active
      const admin = await fetchAdminUser(data.user)
      if (!admin) {
        await supabase.auth.signOut()
        return { error: "Access denied. This account does not have admin privileges." }
      }

      // Update last_login timestamp
      await supabase
        .from("admin_users")
        .update({ last_login: new Date().toISOString() })
        .eq("auth_id", data.user.id)

      return { error: null }
    } catch {
      return { error: "An unexpected error occurred." }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password: string): Promise<{ success: boolean; error: string | null }> => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (data.user && !data.session) {
        return { success: true, error: "Please check your email for a confirmation link." }
      }

      return { success: true, error: null }
    } catch (error) {
      return { success: false, error: "An unexpected error occurred." }
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setIsLoading(true)
    await supabase.auth.signOut()
    setUser(null)
    setAdminUser(null)
    setSession(null)
    setIsLoading(false)
  }

  const value: AuthContextType = {
    user,
    adminUser,
    session,
    isLoading,
    isAuthenticated: !!user && !!adminUser,
    role: adminUser?.role ?? null,
    signIn,
    signup,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}