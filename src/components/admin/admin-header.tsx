'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAdmin } from "@/contexts/admin-context"
import { useAuth } from "@/contexts/auth-context"
import {
  Bell,
  Search,
  Settings,
  LogOut,
  Menu,
  X,
  User
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AdminHeader() {
  const { sidebarOpen, setSidebarOpen, isMobile } = useAdmin()
  const { user, adminUser, signOut } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-xl">
      <div className="flex h-[72px] items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-xl lg:hidden"
            >
              {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          )}

          {/* Desktop sidebar toggle */}
          {!isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
               className="hidden rounded-xl lg:flex"
            >
              <Menu className="h-4 w-4" />
            </Button>
          )}

          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-background p-1 transition-transform group-hover:-rotate-3 lg:h-10 lg:w-10">
              <Image
                src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png"
                alt="Thriving Ladies Foundation"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-display)' }}>Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Thriving Ladies Foundation</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          {/* Search - hidden on mobile */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search..." 
              className="w-48 rounded-xl border-border bg-muted/45 pl-10 lg:w-64"
            />
          </div>

          {/* Action buttons */}
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-border bg-background/60">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9 rounded-xl border-border bg-background/60">
            <Settings className="h-4 w-4" />
          </Button>
          
          {/* User info and logout */}
          <div className="hidden items-center gap-2 rounded-xl border border-border bg-muted/35 px-3 py-2 md:flex">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">
              {adminUser?.full_name || user?.email || 'Admin'}
            </span>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-9 w-9 rounded-xl text-destructive hover:bg-destructive hover:text-destructive-foreground"
            onClick={signOut}
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}