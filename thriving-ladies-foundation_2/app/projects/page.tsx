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
  // Gallery images used in the masonry grid
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1607142634950-c5e8b5a8b72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", alt: "Girls learning in classroom" },
    { src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Water facilities" },
    { src: "/images/training3.jpeg", alt: "Community meeting" },
    { src: "https://images.unsplash.com/photo-1576077221130-691ce93e6b58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Students studying" },
    { src: "https://images.unsplash.com/photo-1493555433180-6bdec08efad8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", alt: "Health education" },
    { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Happy students" },
    { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "School facilities" },
    { src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", alt: "Group activities" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg", alt: "Children in school" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/children2.jpg", alt: "Young students" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg", alt: "Happy community members" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg", alt: "Outreach program" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg", alt: "Training session" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/training4.jpeg", alt: "Educational workshop" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg", alt: "Making progress" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/making1.jpeg", alt: "Community development" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg", alt: "Urban outreach" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg", alt: "Our team" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg", alt: "Sanitation facilities" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg", alt: "Water access" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg", alt: "Housing improvement" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg", alt: "Community hustle" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/lady-phone.jpeg", alt: "Mobile education" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/founder.jpeg", alt: "Founder interaction" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/Victoria.jpg", alt: "Victoria speaking" },
    { src: "https://ik.imagekit.io/xjtx0zx5v/images/clean-water.jpg", alt: "Clean water initiative" },
  ]

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
          {/* Featured Project - Buwaiswa School */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6">
                <Trophy className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <span className="text-xs md:text-sm font-bold text-primary">Flagship Project</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4">Buwaiswa Primary School</h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Our crown jewel project transforming menstrual health education in rural Uganda
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
                        <span className="text-base md:text-lg font-semibold text-primary">Kamuli District, Uganda</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                        Transforming 50 Young Lives
                      </h3>
                      
                      <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                        Our comprehensive menstrual hygiene management program has revolutionized how young girls 
                        approach their health and education, creating lasting change in their communities.
                      </p>
                    </div>

                    {/* Spectacular Impact Stats */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 md:p-6 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl md:text-3xl font-black text-primary mb-2">61.6%</div>
                        <div className="text-xs md:text-sm font-medium text-muted-foreground">Improved Hygiene</div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-4 md:p-6 text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl md:text-3xl font-black text-secondary mb-2">↓85%</div>
                        <div className="text-xs md:text-sm font-medium text-muted-foreground">Reduced Absenteeism</div>
                      </div>
                    </div>

                    <Button 
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-6 md:px-8 py-2 md:py-3 text-sm md:text-base group"
                      onClick={() => {
                        const element = document.querySelector('#impact-section');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                      View Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="relative">
                    {/* Amazing Image Container with Real Project Images */}
                    <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-3 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                      <div className="aspect-square rounded-2xl relative overflow-hidden">
                        {/* Real Project Video */}
                        <video
                          src="https://ik.imagekit.io/xjtx0zx5v/images/video1.mp4"
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                        
                        {/* Overlay with Project Info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                          <div className="text-xl font-bold mb-1">Buwaiswa Primary School</div>
                          <div className="text-sm opacity-90">50 Girls Empowered • Kamuli District</div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-6 h-6 bg-accent rounded-full motion-safe:animate-bounce" aria-hidden="true"></div>
                        <div className="absolute bottom-20 left-4 w-4 h-4 bg-primary rounded-full motion-safe:animate-ping" aria-hidden="true"></div>
                      </div>
                    </div>

                    {/* Floating Achievement Badges */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-secondary rounded-2xl p-4 shadow-xl animate-bounce">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-secondary to-primary rounded-xl p-3 shadow-xl animate-pulse">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

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
              {/* Project 1 - Education Program */}
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-primary/5 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-primary" />
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/training6.jpg"
                    alt="Education program in action"
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
                  <CardTitle className="text-xl text-primary mb-3">Comprehensive Education Program</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    Age-appropriate menstrual health curriculum reaching 200+ girls across 5 schools
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Interactive workshops</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Teacher training modules</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Community outreach</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 inline mr-1" />
                      2024 - Ongoing
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-primary hover:bg-primary/10 group"
                      onClick={() => {
                        const element = document.querySelector('#gallery-section');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Eye className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 2 - Infrastructure Development */}
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-secondary/5 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-accent"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-secondary animate-spin" />
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/thrivingwater.png"
                    alt="School infrastructure development"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary/80 to-secondary/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <CardTitle className="text-xl text-secondary mb-3">Infrastructure Development</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    Building private facilities and improving WASH infrastructure in rural schools
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground">Private changing rooms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground">Clean water systems</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-xs text-muted-foreground">Waste management</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <Target className="h-3 w-3 inline mr-1" />
                      Phase 2 Active
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-secondary hover:bg-secondary/10 group"
                      onClick={() => {
                        const element = document.querySelector('#impact-section');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Eye className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                      View Progress
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Project 3 - Community Outreach */}
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-accent/5 shadow-2xl hover:shadow-3xl transition-all duration-500 group hover:scale-105">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-accent animate-pulse" />
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg"
                    alt="Community outreach and education"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/80 to-accent/60 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <CardHeader className="p-6">
                  <CardTitle className="text-xl text-accent mb-3">Community Outreach</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    Engaging parents, girls,teachers, and community leaders in menstrual health awareness
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Parent workshops</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Community dialogues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-xs text-muted-foreground">Cultural sensitization</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      <Users className="h-3 w-3 inline mr-1" />
                      500+ Reached
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="text-accent hover:bg-accent/10 group"
                      onClick={() => {
                        const element = document.querySelector('#impact-section');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <Eye className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                      View Impact
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                  {/* Video 1 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 p-1 rounded-2xl">
                      <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                        <iframe 
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/K2d3XOkM3y8?controls=1&showinfo=0&rel=0&modestbranding=1"
                          title="Education Programs Impact"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-sm">
                        <div className="font-semibold">Educational Impact Stories</div>
                        <div className="opacity-90">Real testimonials from students and teachers</div>
                      </div>
                    </div>
                  </div>

                  {/* Video 2 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 p-1 rounded-2xl">
                      <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                        <iframe 
                          className="w-full aspect-video"
                          src="https://www.youtube.com/embed/dMkElEjCNNo?controls=1&showinfo=0&rel=0&modestbranding=1"
                          title="Community Development Projects"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-sm">
                        <div className="font-semibold">Infrastructure Development</div>
                        <div className="opacity-90">Building better facilities for young women</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Stunning Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div>
        </div>
      </section>

      {/* Premium Professional Gallery */}
      <section id="gallery-section" className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6">
              <Eye className="h-4 w-4 md:h-5 md:w-5 text-accent animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-accent">Visual Stories</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4">Project Gallery</h2>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the visual journey of our transformative projects across Uganda
            </p>
          </div>

          {/* Advanced Masonry Gallery */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            
            {/* Large Featured Image */}
            <div onClick={() => openLightbox(0)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(0)} className="break-inside-avoid relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] cursor-pointer">
              <div className="relative h-80 md:h-96">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training10.jpg"
                  alt="Girls learning in classroom"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <h3 className="text-lg font-bold mb-2">Interactive Learning Sessions</h3>
                    <p className="text-sm opacity-90 mb-3">Students engaging in comprehensive menstrual health education at Buwaiswa Primary School</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs">Active Project</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Action */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="h-5 w-5 text-white ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Image */}
            <div onClick={() => openLightbox(1)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(1)} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg"
                  alt="Water facilities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Clean Water Infrastructure</h4>
                  <p className="text-xs opacity-90">Modern sanitation facilities</p>
                </div>
              </div>
            </div>

            {/* Small Image */}
            <div onClick={() => openLightbox(2)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(2)} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative h-48">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training3.jpeg"
                  alt="Community meeting"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium">Community Workshops</p>
                  <p className="text-xs opacity-90">Community-led outdoor learning through interactive discussion, real-life lessons, and collective engagement.</p>
                </div>
              </div>
            </div>

            {/* Tall Image */}
            <div onClick={() => openLightbox(3)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(3)} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-72 md:h-80">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/books.jpg"
                  alt="Students studying"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Educational Resources</h4>
                    <p className="text-xs opacity-90">Quality learning materials and books</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Image */}
            <div onClick={() => openLightbox(4)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(4)} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-56">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training9.jpg"
                  alt="Health education"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-bold text-base mb-1">Health Education</h4>
                  <p className="text-sm opacity-90">Comprehensive training programs</p>
                </div>
              </div>
            </div>

            {/* Square Image with Stats */}
            <div onClick={() => openLightbox(5)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(5)} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-60">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg"
                  alt="Happy students"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <p className="text-xs">Girls Empowered</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium Image with Icon */}
            <div onClick={() => openLightbox(6)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(6)} className="break-inside-avoid relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className="relative h-64">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training4.jpeg"
                  alt="School facilities"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-sm">Learner-centered</h4>
                  <p className="text-xs opacity-90">Learning beyond the classroom through outdoor, experiential, child-led, and community-based education.</p>
                </div>
              </div>
            </div>

            {/* Compact Image */}
            <div onClick={() => openLightbox(7)} role="button" tabIndex={0} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openLightbox(7)} className="break-inside-avoid relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative h-40">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg"
                  alt="Group activities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium">Group Activities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full px-8 py-3 group">
              <Link href="/gallery">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary/10 rounded-full px-8 py-3 group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Images
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
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Close viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 md:left-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 md:h-7 md:w-7" />
          </button>

          {/* Image container */}
          <div className="relative w-[92vw] h-[70vh] md:w-[80vw] md:h-[80vh]">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain select-none"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-white/10 rounded-full px-3 py-1">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}

     <section className="relative py-20 px-6 overflow-hidden">
  {/* Background Video for CTA */}
  <div className="absolute inset-0 z-0">
    <video  
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="https://ik.imagekit.io/xjtx0zx5v/images/training4.jpeg"
      aria-hidden="true"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>

    {/* Transparent Green Overlay */}
    <div
      className="absolute inset-0 bg-green-500/40"
      aria-hidden="true"
    ></div>

    {/* Optional: Keep other overlays if you want some gradients */}
    <div className="absolute inset-0 bg-gradient-to-b from-green-400/20 to-green-600/20 mix-blend-multiply" aria-hidden="true"></div>
  </div>

  <div className="relative container mx-auto text-center max-w-5xl space-y-6">
    <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30 shadow-xl">
      <Rocket className="h-6 w-6 text-primary motion-safe:animate-bounce" />
      <span className="text-base md:text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Join Our Mission
      </span>
      <Sparkles className="h-6 w-6 text-secondary motion-safe:animate-spin" />
    </div>

    <h2 className="text-4xl lg:text-6xl font-black leading-tight">
      <span className="block text-foreground">Be Part of the</span>
      <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent motion-safe:animate-pulse">
        Transformation
      </span>
    </h2>

    <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
      Your support helps us expand these life-changing projects to reach more communities, 
      empowering young women and creating lasting positive change across Uganda.
    </p>

    <div className="flex justify-center pt-8">
      <Button
        size="lg"
        className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 rounded-full px-10 py-4 text-lg group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Heart className="mr-3 h-6 w-6 group-hover:scale-125 transition-transform duration-300" />
        Support Our Projects
        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
      </Button>
    </div>
  </div>
</section>


    </div>
  )
}
