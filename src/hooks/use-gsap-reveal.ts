'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type RevealOptions = {
  selector?: string
  y?: number
  stagger?: number
  duration?: number
}

export function useGsapReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const root = useRef<T>(null)
  const {
    selector = '[data-reveal]',
    y = 22,
    stagger = 0.08,
    duration = 0.72,
  } = options

  useLayoutEffect(() => {
    const element = root.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector === '[data-reveal]' ? element.querySelectorAll(selector) : selector,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          clearProps: 'transform',
        },
      )
    }, element)

    return () => ctx.revert()
  }, [duration, selector, stagger, y])

  return root
}