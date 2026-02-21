'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { useAdmin } from "@/contexts/admin-context"
import {
  LayoutDashboard,
  Users,
  Camera,
  Video,
  FolderPlus,
  DollarSign,
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Calendar,
  Mail,
  Shield,
  Database,
  Heart,
  Target,
  TrendingUp
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface SidebarProps {
  className?: string
}

const navigationItems = [
  {
    title: "Main",
    items: [
      { id: "overview", label: "Overview", icon: LayoutDashboard, href: "/dashboard" },
      { id: "analytics", label: "Analytics", icon: BarChart3, href: "/dashboard/analytics" },
    ]
  },
  {
    title: "Content Management",
    items: [
      { id: "gallery", label: "Photo Gallery", icon: Camera, href: "/dashboard/gallery" },
      { id: "videos", label: "Videos", icon: Video, href: "/dashboard/videos" },
      { id: "projects", label: "Projects", icon: FolderPlus, href: "/dashboard/projects" },
    ]
  },
  {
    title: "Operations",
    items: [
      { id: "donations", label: "Donations", icon: DollarSign, href: "/dashboard/donations" },
      { id: "users", label: "Users", icon: Users, href: "/dashboard/users" },
      { id: "reports", label: "Reports", icon: FileText, href: "/dashboard/reports" },
    ]
  },
  {
    title: "Database Management",
    items: [
      { id: "admin-users", label: "Admin Users", icon: Shield, href: "/dashboard/admin-users" },
      { id: "beneficiaries", label: "Beneficiaries", icon: Heart, href: "/dashboard/beneficiaries" },
      { id: "donors", label: "Donors", icon: Users, href: "/dashboard/donors" },
      { id: "projects", label: "Projects", icon: Target, href: "/dashboard/projects" },
      { id: "impact", label: "Impact Metrics", icon: TrendingUp, href: "/dashboard/impact" },
    ]
  },
  {
    title: "System",
    items: [
      { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/settings" },
      { id: "help", label: "Help & Support", icon: HelpCircle, href: "/dashboard/help" },
    ]
  }
]

export function AdminSidebar({ className }: SidebarProps) {
  const { sidebarOpen } = useAdmin()
  const pathname = usePathname()

  return (
    <div className={cn(
      "bg-card/50 backdrop-blur-md border-r border-border/50 transition-all duration-300",
      sidebarOpen ? "w-64" : "w-16",
      className
    )}>
      <ScrollArea className="h-full py-4">
        <div className="space-y-6">
          {navigationItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="px-3">
              {sidebarOpen && (
                <h2 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </h2>
              )}
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link key={item.id} href={item.href}>
                      <Button
                        variant={isActive ? "default" : "ghost"}
                        className={cn(
                          "w-full transition-all duration-200",
                          sidebarOpen ? "justify-start" : "justify-center px-2",
                          isActive && "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                        )}
                        title={!sidebarOpen ? item.label : undefined}
                      >
                        <Icon className={cn("h-4 w-4", sidebarOpen && "mr-2")} />
                        {sidebarOpen && <span>{item.label}</span>}
                      </Button>
                    </Link>
                  )
                })}
              </div>
              {sectionIndex < navigationItems.length - 1 && sidebarOpen && (
                <Separator className="my-4" />
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}