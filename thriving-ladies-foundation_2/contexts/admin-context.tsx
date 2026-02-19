'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AdminContextType {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  isMobile: boolean
  setIsMobile: (mobile: boolean) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}

interface AdminProviderProps {
  children: ReactNode
}

export function AdminProvider({ children }: AdminProviderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  return (
    <AdminContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        isMobile,
        setIsMobile,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}