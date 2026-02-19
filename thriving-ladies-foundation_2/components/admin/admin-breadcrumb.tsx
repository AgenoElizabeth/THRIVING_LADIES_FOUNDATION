'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const breadcrumbMap: Record<string, { label: string }> = {
  "/dashboard": { label: "Overview" },
  "/dashboard/analytics": { label: "Analytics" },
  "/dashboard/gallery": { label: "Photo Gallery" },
  "/dashboard/videos": { label: "Videos" },
  "/dashboard/projects": { label: "Projects" },
  "/dashboard/donations": { label: "Donations" },
  "/dashboard/users": { label: "Users" },
  "/dashboard/reports": { label: "Reports" },
  "/dashboard/settings": { label: "Settings" },
  "/dashboard/help": { label: "Help & Support" },
}

export function AdminBreadcrumb() {
  const pathname = usePathname()
  const currentPage = breadcrumbMap[pathname]
  
  if (!currentPage) return null

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/dashboard" className="flex items-center gap-1 hover:text-primary">
              <Home className="h-3 w-3" />
              Dashboard
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathname !== "/dashboard" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{currentPage.label}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}