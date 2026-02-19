'use client'

import { useEffect, useState, useRef } from "react"
import { useRef as useRefReact } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Users,
  Globe,
  Target,
  Award,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
  Eye,
  Play,
  MapPin,
  Calendar,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Trophy,
  Rocket,
  Share,
  Download,
  Droplets,
  Sun,
  Moon,
  Home
} from "lucide-react"

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [counters, setCounters] = useState({
    girls: 0,
    schools: 0,
    projects: 0,
    rate: 0
  })
  const [selectedMember, setSelectedMember] = useState<any>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true, playOnInit: false })).current

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 }
    )

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (visibleSections.has('impact-numbers')) {
      const animateCounter = (key: keyof typeof counters, target: number, duration: number = 2000) => {
        const start = Date.now()
        const step = () => {
          const progress = Math.min((Date.now() - start) / duration, 1)
          setCounters(prev => ({ ...prev, [key]: Math.floor(progress * target) }))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }

      animateCounter('girls', 1000)
      animateCounter('schools', 20)
      animateCounter('projects', 10)
      animateCounter('rate', 98)
    }
  }, [visibleSections])

  useEffect(() => {
    if (isPlaying) {
      autoplay.play()
    } else {
      autoplay.stop()
    }
  }, [isPlaying, autoplay])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-green-900/20 overflow-x-hidden">
      {/* Hero Section */}
      <section id="hero" ref={(el) => { sectionRefs.current.hero = el }} className={`pt-24 pb-16 px-6 relative overflow-hidden transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-700" style={{ transform: `translateY(${scrollY * -0.3}px)` }}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 rounded-full px-8 py-4 border-2 border-blue-300/30 dark:border-blue-500/30 shadow-lg backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">Our Inspiring Story</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
                Empowering
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Uganda's Future
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Revolutionary approach to menstrual health education and women's empowerment,
              creating lasting change in communities across Uganda.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket className="mr-3 h-6 w-6 animate-bounce" />
                Discover Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-400 dark:border-green-500 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-full px-10 py-6 text-lg font-bold bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Our Story
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-5xl ring-4 ring-blue-300/50 dark:ring-blue-500/30">
              <Image
                src="https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg"
                alt="Distribution of menstrual health supplies to Ugandan students"
                width={1200}
                height={600}
                className="object-cover w-full h-[350px] md:h-[450px] lg:h-[550px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-green-900/20"></div>
              
              {/* Enhanced Floating Stats */}
              <div className="absolute bottom-8 left-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-blue-300/50 dark:border-blue-500/30 transform hover:scale-110 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">5+</div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Years of Impact</div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-green-300/50 dark:border-green-500/30 transform hover:scale-110 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">1000+</div>
                  <div className="text-sm font-semibold text-gray-600 dark:text-gray-400">Lives Changed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" ref={(el) => { sectionRefs.current.mission = el }} className={`py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10 relative overflow-hidden transition-all duration-1000 ${visibleSections.has('mission') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-cyan-500/10 rounded-full px-8 py-4 border-2 border-green-300/30 dark:border-green-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Target className="h-5 w-5 text-green-600 dark:text-green-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Purpose & Direction</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent">
                Mission
              </span>
              <span className="text-gray-800 dark:text-gray-200 mx-4">&</span>
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Driving sustainable change through education, empowerment, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-cyan-900/20 backdrop-blur-sm transform hover:scale-105 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Rocket className="h-10 w-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-grow">
                <CardDescription className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium mb-6">
                  To create lasting change by breaking cycles of poverty, inspiring leadership and fostering community collaboration.
                </CardDescription>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg">Leadership</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-full text-sm font-bold shadow-lg">Collaboration</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">Change</span>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-gray-800 dark:via-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm transform hover:scale-105 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-xl">
                  <Eye className="h-10 w-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-grow">
                <CardDescription className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium mb-6">
                  To create a world free from poverty.
                </CardDescription>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-4 mb-6 border-2 border-green-300/50 dark:border-green-500/30">
                  <p className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center">
                    "A WORLD FREE FROM POVERTY"
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">Equality</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full text-sm font-bold shadow-lg">Dignity</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg">Hope</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-cyan-900/10 dark:to-blue-900/10 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-700" style={{ transform: `translateY(${scrollY * -0.3}px)` }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-green-500/10 rounded-full px-8 py-4 border-2 border-cyan-300/30 dark:border-cyan-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Users className="h-5 w-5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Our Amazing Team</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Meet Our</span>{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Passionate leaders and changemakers dedicated to creating lasting impact in communities across Uganda.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                name: "Awino Victoria",
                role: "Founder & Director",
                image: "https://ik.imagekit.io/xjtx0zx5v/images/vicky1.jpeg",
                description: "Visionary community development leader with 8+ years of transformative experience in women's empowerment and menstrual health education.",
                message: "\"Breaking the silence around menstrual health and empowering every girl to reach her full potential without barriers.\"",
                tags: ["Leadership", "Development", "Vision"]
              },
              {
                name: "Achan Gloria Dengole",
                role: "Program Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Expert in educational programs and community outreach, driving meaningful change in rural schools and fostering sustainable development.",
                message: "\"Education forms the foundation of empowerment. Building a future where every child has the knowledge and resources they need.\"",
                tags: ["Education", "Outreach", "Impact"]
              },
              {
                name: "Acayo ChristBella",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Strategic operations expert managing logistics, supply chains, and fostering powerful partnerships for organizational growth and efficiency.",
                message: "\"Meticulous planning and strong partnerships ensure our operations run smoothly to maximize impact.\"",
                tags: ["Operations", "Partnerships", "Strategy"]
              },
              {
                name: "Ageno Elizabeth",
                role: "IT and Media Manager",
                image: "https://ik.imagekit.io/xjtx0zx5v/images/liz1.jpeg",
                description: "Innovative IT and Media specialist managing digital infrastructure, content creation, and communication strategies to amplify our mission's reach.",
                message: "\"Technology and media serve as powerful tools for change. Connecting our story with supporters worldwide.\"",
                tags: ["IT", "Media", "Technology"]
              },
              {
                name: "Kiza Kizito",
                role: "Chairman Board of Directors",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Experienced leader overseeing all organizational operations and strategic initiatives to ensure sustainable growth and maximum community impact.",
                message: "\"Guiding our foundation with integrity, innovation, and inclusivity to create lasting positive change in Uganda.\"",
                tags: ["Leadership", "Strategy", "Oversight"]
              }
            ].map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                <div className="flex-1">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="object-cover object-top w-full h-80 md:h-96 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent"></div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">{member.name}</h3>
                  <p className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">{member.role}</p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{member.description}</p>
                  <blockquote className="text-xl italic text-gray-800 dark:text-gray-200 mb-6 border-l-4 border-blue-500 pl-6">
                    {member.message}
                  </blockquote>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {member.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Video Story Section */}
      <section id="video" ref={(el) => { sectionRefs.current.video = el }} className={`py-20 px-6 bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900/10 dark:to-zinc-900/10 relative overflow-hidden transition-all duration-1000 ${visibleSections.has('video') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/10 via-slate-500/10 to-zinc-500/10 rounded-full px-8 py-4 border-2 border-gray-300/30 dark:border-gray-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Play className="h-5 w-5 text-gray-600 dark:text-gray-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 bg-clip-text text-transparent">Our Story in Motion</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Watch Our</span>{" "}
              <span className="bg-gradient-to-r from-gray-600 via-slate-600 to-zinc-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Experience the real stories of transformation and hope that drive our mission forward.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-gray-300/50 dark:ring-gray-500/30">
              <Carousel plugins={[autoplay]} className="w-full">
                <CarouselContent>
                  {[
                    { type: 'image', src: "https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg" },
                    { type: 'image', src: "https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg" },
                    { type: 'video', src: "https://ik.imagekit.io/xjtx0zx5v/images/video1.mp4" },
                    { type: 'image', src: "https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg" },
                    { type: 'image', src: "https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg" }
                  ].map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="h-80 relative">
                        {item.type === 'video' ? (
                          <video
                            src={item.src}
                            controls
                            className="w-full h-full object-cover"
                            preload="metadata"
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <Image
                            src={item.src}
                            alt={`Impact story ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    size="lg"
                    className="bg-white/90 text-black hover:bg-white rounded-full p-6"
                  >
                    <Play className="h-8 w-8 ml-2" />
                    Play Story
                  </Button>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-slate-900/20"></div>
            </div>

            {/* Floating testimonial cards */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border-2 border-gray-300/50 dark:border-gray-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800 dark:text-gray-200">Anonymous Student</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Grade 8</div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                "This program changed my life. I can now attend school without fear."
              </p>
            </div>

            <div className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border-2 border-gray-300/50 dark:border-gray-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800 dark:text-gray-200">Mary Teacher</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Educator</div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                "The transformation in our students is incredible. They're confident and thriving."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-full px-8 py-4 border-2 border-purple-300/30 dark:border-purple-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Award className="h-5 w-5 text-purple-600 dark:text-purple-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Our Core Values</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">The Principles That</span>{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Guide Us</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Our core values shape every decision we make and every action we take in our mission to empower communities.
            </p>
          </div>

          <div className="flex flex-row overflow-x-auto gap-4 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              {
                value: "Resilience",
                description: "We bounce back from challenges stronger than before, teaching our communities to persevere through adversity and emerge victorious.",
                icon: Shield,
                color: "from-purple-500 to-indigo-500",
                image: "https://ik.imagekit.io/xjtx0zx5v/images/child4.jpeg"
              },
              {
                value: "Ambition",
                description: "We dream big and work tirelessly to turn those dreams into reality, inspiring others to reach for the stars.",
                icon: Rocket,
                color: "from-pink-500 to-rose-500",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                value: "Continuous Learning",
                description: "We embrace growth through education and adaptation, ensuring our methods evolve with the changing needs of our communities.",
                icon: BookOpen,
                color: "from-red-500 to-orange-500",
                image:  "https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg"
              },
              
              {
                value: "Self Leadership",
                description: "We lead by example, taking ownership of our actions and inspiring others to become confident, capable leaders in their own right.",
                icon: Star,
                color: "from-indigo-500 to-purple-500",
                image: "https://ik.imagekit.io/xjtx0zx5v/images/class3.jpeg"
              },
              {
                value: "Integrity",
                description: "We act with honesty, transparency, and ethical principles in all our dealings, building trust that lasts generations.",
                icon: CheckCircle,
                color: "from-rose-500 to-pink-500",
                image: "https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg",
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 backdrop-blur-sm min-w-80">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>{item.value}</h3>
                  <Image
                    src={item.image}
                    alt={item.value}
                    width={400}
                    height={200}
                    className="w-full h-48 object-contain rounded-lg mb-4"
                  />
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/impact-stories">
                <BookOpen className="mr-3 h-6 w-6 animate-pulse" />
                Read Our Impact Stories
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community and Connection Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/10 dark:to-emerald-900/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-full px-8 py-4 border-2 border-green-300/30 dark:border-green-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Users className="h-5 w-5 text-green-600 dark:text-green-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Community & Connection</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Building</span>{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">Stronger Bonds</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              We believe in the power of genuine connections and inclusive communities that uplift everyone involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: "Inclusivity",
                description: "We create spaces where everyone belongs, regardless of background, gender, or circumstance, fostering a sense of unity and shared purpose.",
                icon: Heart,
                color: "from-green-500 to-emerald-500"
              },
              {
                value: "Collaboration",
                description: "We work together with communities, partners, and stakeholders to achieve greater impact than any one organization could alone.",
                icon: Share,
                color: "from-emerald-500 to-teal-500"
              },
              {
                value: "Authenticity",
                description: "We stay true to our values and mission, building genuine relationships based on trust, respect, and mutual understanding.",
                icon: Eye,
                color: "from-teal-500 to-cyan-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>{item.value}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-full px-8 py-4 border-2 border-blue-300/30 dark:border-blue-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Impact</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Creating</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Lasting Change</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Through our comprehensive approach, we are transforming lives and building stronger communities across Uganda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                impact: "Empowering Women",
                description: "Providing women with the tools, knowledge, and opportunities to become leaders in their communities and beyond.",
                icon: Users,
                color: "from-blue-500 to-indigo-500"
              },
              {
                impact: "Promoting Education",
                description: "Ensuring every child has access to quality education that opens doors to brighter futures and endless possibilities.",
                icon: BookOpen,
                color: "from-indigo-500 to-purple-500"
              },
              {
                impact: "Fostering Innovation",
                description: "Developing creative solutions to complex challenges, from menstrual hygiene to community development.",
                icon: Lightbulb,
                color: "from-purple-500 to-pink-500"
              },
              {
                impact: "Advocating for Change",
                description: "Speaking up for the vulnerable and driving systemic change that addresses root causes of poverty and inequality.",
                icon: TrendingUp,
                color: "from-pink-500 to-red-500"
              },
              {
                impact: "Building Strong Communities",
                description: "Creating networks of support and collaboration that strengthen families and neighborhoods for generations to come.",
                icon: Home,
                color: "from-red-500 to-orange-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-4`}>{item.impact}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-yellow-900/10 dark:to-orange-900/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10 rounded-full px-8 py-4 border-2 border-yellow-300/30 dark:border-yellow-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Sparkles className="h-5 w-5 text-yellow-600 dark:text-yellow-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Our Foundation</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Guided By</span>{" "}
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">Faith & Purpose</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Our work is rooted in spiritual principles and a deep commitment to holistic community development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                foundation: "God Fearing",
                description: "We operate with reverence for divine guidance, ensuring our actions align with higher principles of compassion and justice.",
                icon: Star,
                color: "from-yellow-500 to-orange-500"
              },
              {
                foundation: "Community Empowerment",
                description: "We strengthen communities by building capacity, fostering leadership, and creating sustainable systems of support.",
                icon: Users,
                color: "from-orange-500 to-red-500"
              },
              {
                foundation: "Child Development",
                description: "We prioritize the holistic growth of children - physical, emotional, intellectual, and spiritual - for a brighter future.",
                icon: Heart,
                color: "from-red-500 to-pink-500"
              },
              {
                foundation: "Education",
                description: "We champion quality education as the cornerstone of poverty eradication and social transformation.",
                icon: BookOpen,
                color: "from-pink-500 to-purple-500"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}>{item.foundation}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-xs leading-relaxed font-medium">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section id="impact-numbers" ref={(el) => { sectionRefs.current['impact-numbers'] = el }} className={`py-20 px-6 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10 relative overflow-hidden transition-all duration-1000 ${visibleSections.has('impact-numbers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-full px-8 py-4 border-2 border-green-300/30 dark:border-green-500/30 shadow-lg backdrop-blur-sm mb-6">
              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Measurable Impact</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Our</span>{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Impact Story</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Real impact measured through lives transformed, communities empowered, and futures brightened.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: `${counters.girls}+`, label: "Girls Educated", icon: Users, gradient: "from-blue-500 to-purple-500" },
              { number: counters.schools.toString(), label: "Schools Reached", icon: BookOpen, gradient: "from-green-500 to-blue-500" },
              { number: counters.projects.toString(), label: "Water Projects", icon: Droplets, gradient: "from-cyan-500 to-blue-500" },
              { number: `${counters.rate}%`, label: "Success Rate", icon: Trophy, gradient: "from-yellow-500 to-orange-500" }
            ].map((stat, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 text-center bg-white dark:bg-gray-800 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl`}>
                    <stat.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className={`text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>{stat.number}</div>
                  <div className="text-gray-700 dark:text-gray-300 font-bold text-base">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-cyan-600 to-green-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-300/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border-2 border-white/30 shadow-xl mb-4">
                <Sparkles className="h-6 w-6 text-white animate-pulse" />
                <span className="text-lg font-bold text-white">Join Our Movement</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  Make a Difference?
                </span>
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
                Join us in transforming lives through education, empowerment, and sustainable community development.
                Your support creates lasting change.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <Link href="/donate">
                  <Heart className="mr-3 h-6 w-6 animate-pulse" />
                  Support Our Mission
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 rounded-full px-10 py-6 text-lg font-bold bg-transparent backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <Link href="/contact">
                  <Users className="mr-3 h-6 w-6" />
                  Volunteer With Us
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-white/90">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">Trusted by 1000+</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6" />
                <span className="font-semibold">98% Success Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6" />
                <span className="font-semibold">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
