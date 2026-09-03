'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUp, Facebook, Mail, MapPin, MessageCircle, Phone, Twitter } from 'lucide-react'

const workLinks = [
  ['What we do', '/what-we-do'],
  ['Where we work', '/where-we-work'],
  ['Programs', '/programs'],
  ['Projects', '/projects'],
  ['Impact stories', '/impact-stories'],
  ['Gallery', '/gallery'],
]

const joinLinks = [
  ['Donate', '/donate'],
  ['Volunteer', '/contact'],
  ['Partner with us', '/contact'],
  ['Questions', '/questions'],
  ['Contact us', '/contact'],
]

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 560)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-border bg-[hsl(var(--foreground))] text-[hsl(var(--background))]">
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_.8fr_.8fr_1fr]">
            <div className="max-w-sm">
              <Link href="/" className="group inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--background))] p-1 transition-transform group-hover:-rotate-3">
                  <Image src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png" alt="Thriving Ladies Foundation Logo" width={56} height={56} className="h-10 w-10 object-contain" />
                </span>
                <span>
                  <span className="block text-sm font-black tracking-[0.1em]">THRIVING LADIES</span>
                  <span className="block text-[10px] uppercase tracking-[0.32em] text-[hsl(var(--background)/.62)]">Foundation</span>
                </span>
              </Link>
              <p className="mt-6 text-sm leading-7 text-[hsl(var(--background)/.72)]">
                We stand with girls, women, widows, youth, and families across Uganda as they build durable, dignified futures.
              </p>
              <div className="mt-7 flex gap-2">
                <Link aria-label="Thriving Ladies Foundation on Facebook" href="https://facebook.com/thrivingladiesfoundation" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--background)/.2)] transition-colors hover:bg-[hsl(var(--background)/.12)]">
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link aria-label="Thriving Ladies Foundation on WhatsApp" href="https://wa.me/256740349235?text=Welcome%20to%20Thriving%20Ladies%20Foundation%2C%20how%20may%20we%20help%20you%20today%3F" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--background)/.2)] transition-colors hover:bg-[hsl(var(--background)/.12)]">
                  <MessageCircle className="h-4 w-4" />
                </Link>
                <Link aria-label="Thriving Ladies Foundation on X" href="https://x.com/thrivingladies" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--background)/.2)] transition-colors hover:bg-[hsl(var(--background)/.12)]">
                  <Twitter className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <FooterList title="Explore" links={workLinks} />
            <FooterList title="Get involved" links={joinLinks} />

            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[hsl(var(--background)/.55)]">Talk with us</h2>
              <div className="mt-5 space-y-4 text-sm text-[hsl(var(--background)/.74)]">
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" /> Kampala District, Uganda</p>
                <p className="flex items-start gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" /><span><Link href="tel:+256740349235" className="block hover:text-[hsl(var(--accent))]">+256 740 349 235</Link><Link href="tel:+256793661558" className="block hover:text-[hsl(var(--accent))]">+256 793 661 558</Link></span></p>
                <p className="flex items-start gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--accent))]" /><Link href="mailto:info@thrivingladies.org" className="hover:text-[hsl(var(--accent))]">info@thrivingladies.org</Link></p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-[hsl(var(--background)/.16)] pt-6 text-xs text-[hsl(var(--background)/.55)] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2024 Thriving Ladies Foundation. Transforming lives across Uganda.</p>
            <div className="flex gap-5"><Link href="/privacy" className="hover:text-[hsl(var(--background))]">Privacy policy</Link><Link href="/terms" className="hover:text-[hsl(var(--background))]">Terms of service</Link></div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <Link href="https://wa.me/256740349235?text=Welcome%20to%20Thriving%20Ladies%20Foundation%2C%20how%20may%20we%20help%20you%20today%3F" target="_blank" rel="noopener noreferrer" aria-label="Chat with Thriving Ladies Foundation on WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-lg transition-transform hover:-translate-y-1">
          <MessageCircle className="h-5 w-5" />
        </Link>
        {showScrollTop && (
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:-translate-y-1">
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  )
}

function FooterList({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[hsl(var(--background)/.55)]">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm text-[hsl(var(--background)/.74)]">
        {links.map(([label, href]) => <li key={href + label}><Link href={href} className="transition-colors hover:text-[hsl(var(--accent))]">{label}</Link></li>)}
      </ul>
    </div>
  )
}