'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { AdminProvider, useAdmin } from "@/contexts/admin-context"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { MobileAdminSidebar } from "@/components/admin/mobile-admin-sidebar"
import { AdminBreadcrumb } from "@/components/admin/admin-breadcrumb"
import { cn } from "@/lib/utils"

interface DashboardLayoutContentProps {
  children: React.ReactNode
}

function DashboardLayoutContent({ children }: DashboardLayoutContentProps) {
  const { sidebarOpen, setIsMobile } = useAdmin()
  const { isLoading, isAuthenticated } = useAuth()

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1024
      setIsMobile(isMobileView)
    }

    // Set initial state
    handleResize()

    // Listen for window resize
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setIsMobile])

  // Show loading state while authentication is being checked
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Authentication will be handled by middleware, but we can show a fallback just in case
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Please log in to access the dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <AdminHeader />
      
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar */}
        <aside className={cn(
          "hidden lg:block transition-all duration-300 ease-in-out",
          sidebarOpen ? "w-64" : "w-16"
        )}>
          <AdminSidebar />
        </aside>

        {/* Mobile Sidebar */}
        <MobileAdminSidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 lg:p-6 space-y-6">
            <AdminBreadcrumb />
            <div className="min-h-full">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AdminProvider>
      <DashboardLayoutContent>
        {children}
      </DashboardLayoutContent>
    </AdminProvider>
  )
}
