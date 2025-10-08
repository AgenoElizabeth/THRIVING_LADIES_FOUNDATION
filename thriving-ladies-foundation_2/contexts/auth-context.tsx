'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'user'
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
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

  // Demo credentials (in a real app, this would be handled by your backend)
  const DEMO_CREDENTIALS = {
    email: 'admin@thrivingladies.org',
    password: 'admin123',
    user: {
      id: '1',
      email: 'admin@thrivingladies.org',
      name: 'Admin User',
      role: 'admin' as const
    }
  }

  // Check for existing session on app load
  useEffect(() => {
    checkExistingSession()
  }, [])

  const checkExistingSession = () => {
    try {
      // Check if there's a stored session
      const storedUser = localStorage.getItem('auth-user')
      const authToken = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth-token='))
        ?.split('=')[1]

      if (storedUser && authToken) {
        const userData = JSON.parse(storedUser)
        setUser(userData)
      }
    } catch (error) {
      console.error('Error checking session:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check credentials (in a real app, this would be an API call)
      if (email === DEMO_CREDENTIALS.email && password === DEMO_CREDENTIALS.password) {
        const userData = DEMO_CREDENTIALS.user
        
        // Set user data
        setUser(userData)
        
        // Store session data
        localStorage.setItem('auth-user', JSON.stringify(userData))
        
        // Set HTTP-only cookie (in a real app, this would be done by your backend)
        document.cookie = `auth-token=demo-jwt-token; path=/; secure; samesite=strict; max-age=86400` // 24 hours
        
        return true
      }
      
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth-user')
    
    // Remove auth cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    
    // Redirect to login
    router.push('/login')
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}