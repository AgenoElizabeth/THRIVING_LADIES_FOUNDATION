"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react"

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch('/api/gallery')
        if (res.ok) {
          const data = await res.json()
          setGalleryImages(data.filter((img: any) => img.is_published).map((img: any) => ({
            id: img.id,
            src: img.image_url,
            alt: img.title || 'Gallery image',
            story: img.description || 'No story provided.',
            category: img.project?.title || img.school?.name || 'Community Impact'
          })))
        }
      } catch (error) {
        console.error('Error fetching gallery:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGallery()
  }, [])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentIndex((i) => (i + 1) % galleryImages.length)
  const prevImage = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)

  // Basic keyboard controls when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        nextImage()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevImage()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-6 py-3 mb-6 shadow-sm border border-primary/10">
            <Eye className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-wide">FULL GALLERY</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent pb-2">
            Our Visual Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the heartwarming moments, transformative projects, and impactful stories captured across our communities in Uganda.
          </p>
        </div>
      </section>

      {/* Full Gallery Grid - Card Layout */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group flex flex-col bg-card rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border/50 hover:border-primary/20 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {image.alt}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                      {image.story}
                    </p>

                    {/* Category Badge */}
                    <div className="mt-auto">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md"
        >
          {/* Top Bar Navigation */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
            {/* Title / Description info in top left */}
            <div className="text-white max-w-xl hidden md:block">
              <h3 className="text-xl font-bold mb-1">{galleryImages[currentIndex]?.alt}</h3>
              <p className="text-sm text-white/70 line-clamp-2">{galleryImages[currentIndex]?.story}</p>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl ml-auto"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <button type="button" onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl z-50">
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button type="button" onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl z-50">
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center mt-12 md:mt-0 p-4" onClick={closeLightbox}>
            {galleryImages[currentIndex] && (
              <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white bg-white/10 px-5 py-2 rounded-full backdrop-blur-md border border-white/20 z-50 text-sm font-medium tracking-widest">
            {currentIndex + 1} / {galleryImages.length}
          </div>

          {/* Mobile Info Overlay (Shown at bottom for small screens) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white md:hidden text-center pb-20 pointer-events-none z-40">
            <h3 className="text-lg font-bold mb-1">{galleryImages[currentIndex]?.alt}</h3>
            <p className="text-xs text-white/70 line-clamp-2">{galleryImages[currentIndex]?.story}</p>
          </div>
        </div>
      )}
    </div>
  )
}