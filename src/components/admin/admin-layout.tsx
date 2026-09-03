'use client'

import { useEffect } from "react"
import { AdminProvider, useAdmin } from "@/contexts/admin-context"
import { AdminHeader } from "./admin-header"
import { AdminSidebar } from "./admin-sidebar"
import { MobileAdminSidebar } from "./mobile-admin-sidebar"
import { AdminBreadcrumb } from "./admin-breadcrumb"
import { cn } from "@/lib/utils"

interface AdminLayoutContentProps {
  children: React.ReactNode
}

function AdminLayoutContent({ children }: AdminLayoutContentProps) {
  const { sidebarOpen, setIsMobile } = useAdmin()

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

  return (
    <div className="min-h-[100dvh] bg-[hsl(var(--background))]">
      <AdminHeader />
      
      <div className="flex min-h-[calc(100dvh-4rem)]">
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
          <div className="space-y-6 p-4 lg:p-8">
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

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminProvider>
      <AdminLayoutContent>
        {children}
      </AdminLayoutContent>
    </AdminProvider>
  )
}