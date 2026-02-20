'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
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
  const { user, logout } = useAuth()

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
      <div className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
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
              className="hidden lg:flex"
            >
              <Menu className="h-4 w-4" />
            </Button>
          )}

          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8 lg:w-10 lg:h-10">
              <Image
                src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png"
                alt="Thriving Ladies Foundation"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Admin Dashboard</h1>
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
              className="pl-10 w-48 lg:w-64 bg-muted/50"
            />
          </div>

          {/* Action buttons */}
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Settings className="h-4 w-4" />
          </Button>
          
          {/* User info and logout */}
          <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-muted/30 rounded-lg">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-foreground font-medium">
              {user?.name || 'Admin'}
            </span>
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-9 w-9 text-destructive hover:bg-destructive hover:text-destructive-foreground"
            onClick={logout}
            title="Logout"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}