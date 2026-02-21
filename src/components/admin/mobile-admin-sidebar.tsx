'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { AdminSidebar } from "./admin-sidebar"
import { useAdmin } from "@/contexts/admin-context"
import Image from "next/image"

export function MobileAdminSidebar() {
  const { sidebarOpen, setSidebarOpen, isMobile } = useAdmin()

  if (!isMobile) return null

  return (
    <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
      <SheetContent side="left" className="p-0 w-64">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-3 text-left">
            <div className="relative w-8 h-8">
              <Image
                src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png"
                alt="Thriving Ladies Foundation"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">Admin Dashboard</p>
              <p className="text-xs text-muted-foreground">Thriving Ladies Foundation</p>
            </div>
          </SheetTitle>
        </SheetHeader>
        <AdminSidebar className="border-0" />
      </SheetContent>
    </Sheet>
  )
}