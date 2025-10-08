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
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full px-6 py-3 border border-primary/20">
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Our Story</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-thin leading-tight tracking-tight">
              <span className="text-foreground">Empowering</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold">
                Uganda's Future
              </span>
            </h1>
            
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionary approach to menstrual health education and women's empowerment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                className="bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-100 rounded-full px-8 py-4 text-base font-medium"
              >
                <Rocket className="mr-2 h-4 w-4" />
                Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 py-4 text-base font-medium bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Story
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team working together"
                width={1200}
                height={600}
                className="object-cover w-full h-[300px] md:h-[400px] lg:h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">1000+</div>
                  <div className="text-xs text-muted-foreground">Lives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-thin text-foreground mb-4">
              Mission <span className="font-bold">&</span> Vision
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Driving sustainable change through education and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/50 backdrop-blur-sm">
              <CardHeader className="relative z-10 pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  To empower women and girls in Uganda through comprehensive menstrual health education, 
                  improved access to clean water and sanitation.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Education</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Empowerment</span>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/50 backdrop-blur-sm">
              <CardHeader className="relative z-10 pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  A Uganda where every woman and girl has the knowledge, resources, and confidence to thrive 
                  without barriers related to menstrual health.
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">Equality</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">Dignity</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-thin text-foreground mb-4">
              Meet Our <span className="font-bold">Team</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Passionate leaders creating lasting change.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Nakato",
                role: "Founder & Director",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Community development leader with 8+ years experience.",
                tags: ["Leadership", "Development"]
              },
              {
                name: "Grace Namukasa", 
                role: "Program Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Oversees educational programs and community outreach.",
                tags: ["Education", "Outreach"]
              },
              {
                name: "David Mukisa",
                role: "Operations Manager", 
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                description: "Manages logistics and partnership development.",
                tags: ["Operations", "Partnerships"]
              }
            ].map((member, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-background/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="object-cover w-full h-48 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="relative pb-2">
                  <CardTitle className="text-lg font-bold text-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium text-sm">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {member.description}
                  </p>
                  <div className="flex gap-2">
                    {member.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
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
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-6xl font-thin text-foreground mb-4">
              Our <span className="font-bold">Impact</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Real impact measured through lives transformed.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "1,200+", label: "Girls Educated", icon: Users },
              { number: "25", label: "Schools", icon: BookOpen },
              { number: "15", label: "Water Projects", icon: Droplets },
              { number: "98%", label: "Success Rate", icon: Trophy }
            ].map((stat, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 text-center bg-background/50 backdrop-blur-sm">
                <CardContent className="p-6 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-thin text-foreground">
                Ready to <span className="font-bold">Make a Difference?</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Join us in transforming lives through education and empowerment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black dark:bg-white dark:text-black text-white hover:bg-gray-800 dark:hover:bg-gray-100 rounded-full px-8 py-4 text-base font-medium transition-all duration-300"
              >
                <Heart className="mr-2 h-4 w-4" />
                Support Our Mission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full px-8 py-4 text-base font-medium bg-transparent"
              >
                <Users className="mr-2 h-4 w-4" />
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
