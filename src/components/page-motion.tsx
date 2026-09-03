'use client'

import { useGsapReveal } from '@/hooks/use-gsap-reveal'

interface PageMotionProps {
  children: React.ReactNode
}

export default function PageMotion({ children }: PageMotionProps) {
  const root = useGsapReveal<HTMLDivElement>({ selector: 'section, [data-reveal]' })

  return (
    <div ref={root} className="site-page-shell">
      {children}
    </div>
  )
}