'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Check if current route is a dashboard route
  const isDashboardRoute = pathname.startsWith('/dashboard') || pathname.startsWith('/eliz-2020-256')
  
  if (isDashboardRoute) {
    // Dashboard routes don't get the main site header/footer
    return <>{children}</>
  }
  
  // Regular site routes get the header and footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}