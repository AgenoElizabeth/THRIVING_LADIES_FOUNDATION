"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"

interface PageProps {
  params: {
    id: string
  }
}

export default function GalleryStoryPage({ params }: PageProps) {
  const [image, setImage] = useState<any>(null)
  const [prevId, setPrevId] = useState<string | null>(null)
  const [nextId, setNextId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStoryAndSiblings = async () => {
      try {
        setLoading(true)
        // Fetch all published gallery items to handle navigation
        const res = await fetch('/api/gallery')
        if (!res.ok) throw new Error('Failed to fetch gallery')

        const data = await res.json()
        const published = data.filter((img: any) => img.is_published)

        const currentIndex = published.findIndex((img: any) => img.id === params.id)

        if (currentIndex === -1) {
          setError('Story not found')
          setLoading(false)
          return
        }

        const currentImage = published[currentIndex]
        setImage({
          id: currentImage.id,
          src: currentImage.image_url,
          alt: currentImage.title || 'Gallery image',
          story: currentImage.description || 'No story provided.'
        })

        const prevIdx = (currentIndex - 1 + published.length) % published.length
        const nextIdx = (currentIndex + 1) % published.length

        setPrevId(published[prevIdx].id)
        setNextId(published[nextIdx].id)

      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchStoryAndSiblings()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-primary animate-spin" />
      </div>
    )
  }

  if (error || !image) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-bold text-foreground">{error || 'Story not found'}</h2>
        <Button asChild>
          <Link href="/gallery">Back to Gallery</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {image.alt}
          </h1>
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-bold">
            Project Story
          </p>
        </div>
      </section>

      {/* Image and Story */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {image.story}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                {prevId && (
                  <Link href={`/gallery/${prevId}`}>
                    <Button variant="outline" className="gap-2">
                      <ChevronLeft className="h-4 w-4" />
                      Previous Story
                    </Button>
                  </Link>
                )}

                {nextId && (
                  <Link href={`/gallery/${nextId}`}>
                    <Button className="gap-2 bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg hover:shadow-xl transition-all">
                      Next Story
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}