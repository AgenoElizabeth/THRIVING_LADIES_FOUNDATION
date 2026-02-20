"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import {
  Heart,
  Users,
  GraduationCap,
  TrendingUp,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Calendar,
  Target,
  Award,
  Globe,
  Sparkles,
  Zap,
  Shield,
  Eye,
  Play,
  Download,
  BookOpen,
  Lightbulb,
  Rocket,
  Trophy,
  X,
} from "lucide-react"

export default function ProjectsPage() {
  // State for dynamic data
  const [projects, setProjects] = useState<any[]>([])
  const [galleryImages, setGalleryImages] = useState<any[]>([])
  const [impactMetrics, setImpactMetrics] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, galleryRes, impactRes] = await Promise.all([
          fetch('/api/projects'),
          fetch('/api/gallery'),
          fetch('/api/impact')
        ])

        const projectsData = projectsRes.ok ? await projectsRes.json() : []
        const galleryData = galleryRes.ok ? await galleryRes.json() : []
        const impactData = impactRes.ok ? await impactRes.json() : []

        setProjects(projectsData.filter((p: any) => p.is_published))
        setGalleryImages(galleryData.map((g: any) => ({
          src: g.image_url,
          alt: g.title || 'Gallery image'
        })))
        setImpactMetrics(impactData)
      } catch (error) {
        console.error('Error fetching projects data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const featuredProject = projects.find(p => p.is_featured) || projects[0]
  const otherProjects = projects.filter(p => p.id !== featuredProject?.id)

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement | null>(null)

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
    <div className="min-h-screen bg-background  overflow-x-hidden">

      {/* Hero Section with Image Background */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />

          {/* Readability overlays */}
          <div className="absolute inset-0 bg-white/50 md:bg-white/50" aria-hidden="true"></div>
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/25 via-secondary/15 to-background/60 mix-blend-multiply"
            aria-hidden="true"
          ></div>
          {/* Brand tint overlay */}
          <div
            className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 opacity-60 mix-blend-overlay"
            aria-hidden="true"
          ></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl text-center">
          <div className="space-y-8">
            {/* Magnificent Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full px-6 py-3 border-2 border-primary/20 backdrop-blur-sm shadow-xl">
              <Sparkles className="h-5 w-5 text-primary motion-safe:animate-spin" aria-hidden="true" />
              <span className="text-base font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transforming Lives • Creating Impact • Building Futures
              </span>
              <Sparkles className="h-5 w-5 text-secondary motion-safe:animate-spin" aria-hidden="true" />
            </div>

            {/* Spectacular Title */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent motion-safe:animate-pulse">
                  Our Amazing
                </span>
                <span className="block text-foreground mt-2">
                  Projects
                </span>
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Discover our groundbreaking initiatives that are revolutionizing menstrual health education and
                empowering young women across Uganda with innovative, sustainable solutions.
              </p>
            </div>

            {/* Stunning Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-lg group relative overflow-hidden"
                onClick={() => {
                  const element = document.querySelector('#gallery-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Rocket className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:scale-125 transition-transform duration-300" />
                Explore Projects
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/40 text-primary hover:bg-primary/10 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-full px-6 md:px-10 py-3 md:py-4 text-sm md:text-lg group"
                onClick={() => {
                  const element = document.querySelector('#impact-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Eye className="mr-2 md:mr-3 h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                Watch Impact Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marvelous Project Showcase */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          {featuredProject && (
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6">
                  <Trophy className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                  <span className="text-xs md:text-sm font-bold text-primary">Featured Project</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">{featuredProject.title}</h2>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                  {featuredProject.description}
                </p>
              </div>

              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white via-primary/5 to-secondary/5 shadow-3xl hover:shadow-4xl transition-all duration-700 group">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-white rounded-3xl"></div>
                </div>

                <div className="relative p-8 md:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6 md:space-y-8">
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                          <span className="text-base md:text-lg font-semibold text-primary">{featuredProject.schools?.name || 'Uganda'}</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                          Impact on the Community
                        </h3>

                        <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                          {featuredProject.long_description || featuredProject.description}
                        </p>
                      </div>

                      {/* Dynamic Impact Stats */}
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 md:p-6 text-center group hover:scale-105 transition-transform duration-300">
                          <div className="text-2xl md:text-3xl font-black text-primary mb-2">UGX {(featuredProject.budget || 0).toLocaleString()}</div>
                          <div className="text-xs md:text-sm font-medium text-muted-foreground">Budget Allocation</div>
                        </div>
                        <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-4 md:p-6 text-center group hover:scale-105 transition-transform duration-300">
                          <div className="text-2xl md:text-3xl font-black text-secondary mb-2">{featuredProject.status.toUpperCase()}</div>
                          <div className="text-xs md:text-sm font-medium text-muted-foreground">Current Status</div>
                        </div>
                      </div>

                      <Button
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base group"
                        asChild
                      >
                        <Link href="/about">
                          <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                          Our Mission
                          <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>

                    <div className="relative">
                      <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                        <div className="aspect-square rounded-2xl relative overflow-hidden">
                          {featuredProject.video_url ? (
                            <video
                              src={featuredProject.video_url}
                              controls
                              className="w-full h-full object-cover"
                              preload="metadata"
                            >
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <Image
                              src={featuredProject.image_url || 'https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg'}
                              alt={featuredProject.title}
                              fill
                              className="object-cover"
                            />
                          )}

                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                            <div className="text-xl font-bold mb-1">{featuredProject.title}</div>
                            <div className="text-sm opacity-90">{featuredProject.schools?.name}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Project Grid with Stunning Design */}
          <div className="space-y-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full px-6 py-3 mb-6">
                <Lightbulb className="h-5 w-5 text-secondary animate-pulse" />
                <span className="text-sm font-bold text-secondary">Innovation in Action</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">More Amazing Projects</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our diverse portfolio of life-changing initiatives across Uganda
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <Card key={project.id} className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-primary/5 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image_url || 'https://ik.imagekit.io/xjtx0zx5v/images/training6.jpg'}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/80 to-primary/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="p-6">
                    <CardTitle className="text-xl text-primary mb-3">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="px-6 pb-6">
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 inline mr-1" />
                        {project.schools?.name || 'Uganda'}
                      </div>
                      <div className="text-xs font-bold text-primary">
                        {project.status.toUpperCase()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spectacular Impact Visualization */}
      <section id="impact-section" className="py-24 px-6 bg-gradient-to-br from-muted/10 via-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-secondary/25 to-accent/25 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="relative container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <TrendingUp className="h-5 w-5 text-primary animate-bounce" />
              <span className="text-sm font-bold text-primary">Measurable Impact</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Amazing Results
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our projects deliver transformative outcomes that create lasting change in communities
            </p>
          </div>

          {/* Video Showcase Section */}
          <div className="mb-16">
            <Card className="border-0 bg-gradient-to-br from-white/90 to-primary/10 shadow-3xl backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">See Our Impact in Action</h3>
                  <p className="text-lg text-muted-foreground">Watch real stories from the communities we serve</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 p-1 rounded-2xl">
                      <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                        <iframe
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/K2d3XOkM3y8"
                          title="Impact Video 1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 p-1 rounded-2xl">
                      <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                        <iframe
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/dMkElEjCNNo"
                          title="Impact Video 2"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Dynamic Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.slice(0, 4).map((metric, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-110">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                    {metric.icon === 'Users' ? <Users className="h-10 w-10 text-white" /> :
                      metric.icon === 'GraduationCap' ? <GraduationCap className="h-10 w-10 text-white" /> :
                        metric.icon === 'Heart' ? <Heart className="h-10 w-10 text-white" /> :
                          metric.icon === 'Globe' ? <Globe className="h-10 w-10 text-white" /> :
                            <Sparkles className="h-10 w-10 text-white" />}
                  </div>
                  <div className="text-4xl font-black text-primary mb-2 animate-pulse">{metric.value}{metric.suffix}</div>
                  <div className="text-sm font-semibold text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
            {impactMetrics.length === 0 && (
              <>
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-110">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-black text-primary mb-2 animate-pulse">250+</div>
                    <div className="text-sm font-semibold text-muted-foreground">Girls Empowered</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-110">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-black text-secondary mb-2 animate-pulse">8</div>
                    <div className="text-sm font-semibold text-muted-foreground">Schools Transformed</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-110">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-black text-accent mb-2 animate-pulse">1000+</div>
                    <div className="text-sm font-semibold text-muted-foreground">Lives Impacted</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-110">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-300">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <div className="text-4xl font-black text-primary mb-2 animate-pulse">5</div>
                    <div className="text-sm font-semibold text-muted-foreground">Districts Reached</div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Premium Professional Gallery */}
      <section id="gallery-section" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3 mb-6">
              <Eye className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Visual Stories</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">Project Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the visual journey of our transformative projects across Uganda
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(index)}
                className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-3 group">
              <Link href="/gallery">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl"
          >
            <X className="h-8 w-8" />
          </button>

          <button type="button" onClick={prevImage} className="absolute left-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl">
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button type="button" onClick={nextImage} className="absolute right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shadow-2xl">
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-[90vw] h-[80vh]">
            {galleryImages[currentIndex] && (
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                fill
                className="object-contain"
                priority
              />
            )}
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ik.imagekit.io/xjtx0zx5v/images/training4.jpeg"
            alt="CTA background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative container mx-auto text-center max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
            <Rocket className="h-6 w-6 text-white animate-bounce" />
            <span className="text-lg font-bold text-white uppercase tracking-wider">Join Our Mission</span>
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Be Part of the <span className="text-primary italic">Transformation</span>
          </h2>

          <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Your support helps us expand these life-changing projects to reach more communities across Uganda.
          </p>

          <div className="flex justify-center pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-2xl rounded-full px-12 py-6 text-xl group scale-110">
              <Link href="/about">
                <Heart className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform" />
                Support Our Projects
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
