'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
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
  Moon
} from "lucide-react"

export default function AboutPage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-green-900/20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 rounded-full px-8 py-4 border-2 border-blue-300/30 dark:border-blue-500/30 shadow-lg backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">Our Inspiring Story</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight tracking-tight">
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
                src="/images/distribution1.jpeg"
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
      <section id="mission-section" className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-cyan-500/10 rounded-full px-8 py-4 border-2 border-green-300/30 dark:border-green-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Target className="h-5 w-5 text-green-600 dark:text-green-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Purpose & Direction</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-extrabold mb-6">
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

          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-800 dark:via-blue-900/20 dark:to-cyan-900/20 backdrop-blur-sm transform hover:scale-105 hover:-rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
                  <Rocket className="h-10 w-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium mb-6">
                  To empower women, girls, and boys in Uganda through comprehensive menstrual health education,
                  improved access to clean water and sanitation, and sustainable community development programs
                  that create lasting positive change.
                </CardDescription>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold shadow-lg">Education</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-green-500 text-white rounded-full text-sm font-bold shadow-lg">Empowerment</span>
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-bold shadow-lg">Health</span>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white via-green-50 to-emerald-50 dark:from-gray-800 dark:via-green-900/20 dark:to-emerald-900/20 backdrop-blur-sm transform hover:scale-105 hover:rotate-1">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-emerald-400/10 to-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300 shadow-xl">
                  <Eye className="h-10 w-10 text-white animate-pulse" />
                </div>
                <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium mb-4">
                  A Uganda where every woman, girl, and boy has the knowledge, resources, and confidence to thrive
                  without barriers related to menstrual health, poverty, or lack of opportunity.
                </CardDescription>
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-4 mb-6 border-2 border-green-300/50 dark:border-green-500/30">
                  <p className="text-xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center">
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
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-green-50 dark:from-gray-900 dark:via-cyan-900/10 dark:to-blue-900/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-green-500/10 rounded-full px-8 py-4 border-2 border-cyan-300/30 dark:border-cyan-500/30 shadow-lg backdrop-blur-sm mb-6">
              <Users className="h-5 w-5 text-cyan-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Our Amazing Team</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Meet Our</span>{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Passionate leaders and changemakers dedicated to creating lasting impact in communities across Uganda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Awino Victoria",
                role: "Founder & Director",
                image: "/images/founder.jpeg",
                description: "Visionary community development leader with 8+ years of transformative experience in women's empowerment.",
                tags: ["Leadership", "Development", "Vision"]
              },
              {
                name: "Achan Gloria Dengole",
                role: "Program Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Expert in educational programs and community outreach, driving meaningful change in rural schools.",
                tags: ["Education", "Outreach", "Impact"]
              },
              {
                name: "Bella",
                role: "Operations Manager",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Strategic operations expert managing logistics and fostering powerful partnerships for growth.",
                tags: ["Operations", "Partnerships", "Strategy"]
              }
            ].map((member, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white dark:bg-gray-800 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <CardHeader className="relative pb-3">
                  <CardTitle className="text-2xl font-extrabold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">{member.name}</CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400 font-bold text-base">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 font-medium">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold shadow-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-full px-8 py-4 border-2 border-green-300/30 dark:border-green-500/30 shadow-lg backdrop-blur-sm mb-6">
              <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400 animate-pulse" />
              <span className="text-base font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Measurable Impact</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-extrabold mb-6">
              <span className="text-gray-800 dark:text-gray-200">Our</span>{" "}
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Impact Story</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-medium">
              Real impact measured through lives transformed, communities empowered, and futures brightened.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Girls Educated", icon: Users, gradient: "from-blue-500 to-purple-500" },
              { number: "20", label: "Schools Reached", icon: BookOpen, gradient: "from-green-500 to-blue-500" },
              { number: "10", label: "Water Projects", icon: Droplets, gradient: "from-cyan-500 to-blue-500" },
              { number: "98%", label: "Success Rate", icon: Trophy, gradient: "from-yellow-500 to-orange-500" }
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
              
              <h2 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
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
