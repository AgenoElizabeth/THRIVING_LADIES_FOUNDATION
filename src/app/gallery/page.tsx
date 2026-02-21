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
  X,
} from "lucide-react"

export default function GalleryPage() {
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

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
            story: img.description || 'No story provided.'
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

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-6 py-3 mb-6">
            <Eye className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Full Gallery</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Complete Visual Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore all our project photos and community stories in one comprehensive gallery
          </p>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Link
                key={image.id}
                href={`/gallery/${image.id}`}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer block"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}