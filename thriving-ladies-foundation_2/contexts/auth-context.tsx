'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import type { User as SupabaseUser } from '@supabase/supabase-js'

interface User {
  id: string
  email: string
  name?: string
  role: 'admin' | 'user'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check for existing session on app load
  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email!,
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
          role: 'admin' // You can customize this based on your user metadata or database
        })
      }
      setIsLoading(false)
    }

    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email!,
            name: session.user.user_metadata?.name || session.user.email?.split('@')[0],
            role: 'admin' // Customize based on your needs
          })
        } else {
          setUser(null)
        }
        setIsLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setIsLoading(false)
        return { success: false, error: error.message }
      }

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.name || data.user.email?.split('@')[0],
          role: 'admin' // Customize role logic
        })
      }

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      setIsLoading(false)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  const signup = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      })

      if (error) {
        setIsLoading(false)
        return { success: false, error: error.message }
      }

      // Note: Supabase signup may require email confirmation
      // The user will be automatically logged in if email confirmation is disabled
      if (data.user && !data.user.email_confirmed_at) {
        setIsLoading(false)
        return { success: true, error: 'Please check your email to confirm your account' }
      }

      if (data.user) {
        setUser({
          id: data.user.id,
          email: data.user.email!,
          name: data.user.user_metadata?.name || data.user.email?.split('@')[0],
          role: 'admin' // Customize role logic
        })
      }

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      console.error('Signup error:', error)
      setIsLoading(false)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/eliz-2020-256')
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}