'use client'

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import {
  Heart,
  Users,
  GraduationCap,
  Droplets,
  TrendingUp,
  MapPin,
  ArrowRight,
  Star,
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
  BookOpen,
  Lightbulb,
  Trophy,
  Rocket,
  Share,
  Download,
  Clock,
  Building,
  MessageCircle,
  HandHeart,
  Briefcase,
  Scissors
} from "lucide-react"

export default function ProgramsPage() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false })).current
  const videoRef = useRef<HTMLVideoElement>(null)
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!api) return

    // Listen for slide changes
    api.on("select", () => {
      const slideIndex = api.selectedScrollSnap()
      setCurrentSlide(slideIndex)
      
      // If we're on the last slide (video slide - index 27)
      if (slideIndex === 27) {
        // Stop autoplay
        autoplay.stop()
        
        // Play video with volume
        if (videoRef.current) {
          videoRef.current.volume = 1.0
          videoRef.current.muted = false
          videoRef.current.play().catch(err => console.log("Video play error:", err))
        }
      }
    })
  }, [api, autoplay])

  // Handle video ended event to resume carousel
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnded = () => {
      // Resume autoplay when video ends
      autoplay.play()
    }

    video.addEventListener('ended', handleVideoEnded)
    return () => video.removeEventListener('ended', handleVideoEnded)
  }, [autoplay])
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
    
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3">
                <Rocket className="h-5 w-5 text-accent animate-pulse" />
                <span className="text-sm font-bold text-accent">Our Programs</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground">
                Transformative{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Impact Programs
                </span>
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto">
                Comprehensive initiatives designed to empower women and girls through education, 
                health, and sustainable community development across Uganda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary/30 text-primary hover:bg-primary/10 group">
                <HandHeart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join a Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-16">
            
            {/* Program 1: Menstrual Health Education */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-4 py-2">
                    <Heart className="h-4 w-4 text-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary">Flagship Program</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    Menstrual Health Education
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive education programs that break taboos and provide girls with the knowledge, 
                    resources, and confidence to manage their menstrual health with dignity.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">850+</div>
                    <div className="text-sm text-muted-foreground">Girls Educated</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">20</div>
                    <div className="text-sm text-muted-foreground">Schools Reached</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-sm text-muted-foreground">Attendance Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Districts Covered</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Program Components:</h3>
                  <div className="space-y-3">
                    {[
                      "Interactive workshops on menstrual health and hygiene",
                      "Distribution of reusable sanitary pads and hygiene kits",
                      "Teacher training on sensitive health education",
                      "Parent and community sensitization sessions"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white group">
                  <BookOpen className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg"
                    alt="Menstrual health education session"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px] md:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Achievement */}
                <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Award Winner</div>
                      <div className="text-xs text-muted-foreground">Best Health Program 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reusable Pad Making Process Slideshow */}
            <div className="py-16">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-6 py-3 mb-6">
                  <Scissors className="h-5 w-5 text-primary animate-pulse" />
                  <span className="text-sm font-bold text-primary">Making a Difference</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Reusable Pad Making Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Watch how girls at Buwaiswa Primary School learn to create their own reusable sanitary pads,
                  empowering them with sustainable menstrual health solutions.
                </p>
              </div>

              <div className="relative max-w-3xl mx-auto px-4">
                <div className="relative rounded-xl overflow-hidden shadow-xl ring-2 ring-primary/20 bg-gray-100 dark:bg-gray-800">
                  <Carousel
                    setApi={setApi}
                    plugins={[autoplay]}
                    className="w-full"
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                  >
                    <CarouselContent className="-ml-0">
                      {Array.from({ length: 27 }, (_, i) => i + 1).map((num) => (
                        <CarouselItem key={num} className="pl-0">
                          <div className="relative w-full aspect-[4/3]">
                            <Image
                              src={`https://ik.imagekit.io/xjtx0zx5v/images/process${num}.jpg`}
                              alt={`Pad making process step ${num}`}
                              fill
                              className="object-cover"
                              priority={num <= 3}
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                              <p className="text-xs sm:text-sm font-semibold text-white">Step {num} of 27</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                      {/* Video at the end */}
                      <CarouselItem className="pl-0">
                        <div className="relative w-full aspect-[4/3] bg-black">
                          <video
                            ref={videoRef}
                            src="https://ik.imagekit.io/xjtx0zx5v/images/video3.mp4"
                            controls
                            controlsList="nodownload"
                            className="w-full h-full object-cover"
                            preload="auto"
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 pointer-events-none">
                            <p className="text-xs sm:text-sm font-semibold text-white">Student Speech - Buwaiswa Primary School</p>
                          </div>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2 sm:left-4 h-9 w-9 sm:h-11 sm:w-11" />
                    <CarouselNext className="right-2 sm:right-4 h-9 w-9 sm:h-11 sm:w-11" />
                  </Carousel>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">50+ Girls Trained</h3>
                      <p className="text-sm text-muted-foreground">At Buwaiswa Primary School</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">Sustainable Solution</h3>
                      <p className="text-sm text-muted-foreground">Reusable for 2+ years</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">Skills for Life</h3>
                      <p className="text-sm text-muted-foreground">Empowerment through education</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Program 2: Water & Sanitation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg"
                    alt="Water and sanitation facilities"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px] md:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Video Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group">
                    <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="space-y-8 lg:order-2">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-full px-4 py-2">
                    <Droplets className="h-4 w-4 text-secondary animate-pulse" />
                    <span className="text-xs font-bold text-secondary">Infrastructure</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    Water & Sanitation Access
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Building sustainable water systems and modern sanitation facilities to ensure 
                    girls have access to clean, private spaces for personal hygiene management.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">10</div>
                    <div className="text-sm text-muted-foreground">Water Points Installed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">20</div>
                    <div className="text-sm text-muted-foreground">Toilets Constructed</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-muted-foreground">People Served</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">100%</div>
                    <div className="text-sm text-muted-foreground">Operational Rate</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Infrastructure Delivered:</h3>
                  <div className="space-y-3">
                    {[
                      
                      "Gender-separated sanitation facilities",
                      "Handwashing stations with soap dispensers",
                      "Waste management and disposal systems"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white group">
                  <Building className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Program 3: Community Empowerment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-4 py-2">
                    <Users className="h-4 w-4 text-accent animate-pulse" />
                    <span className="text-xs font-bold text-accent">Community</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    Girl's Empowerment
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive programs that equip girls with skills, knowledge, and resources 
                    to become leaders and change agents in their communities.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">300+</div>
                    <div className="text-sm text-muted-foreground">Girls Trained</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary">25</div>
                    <div className="text-sm text-muted-foreground">Support Groups</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-secondary">80%</div>
                    <div className="text-sm text-muted-foreground">Income Increase</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-accent">15</div>
                    <div className="text-sm text-muted-foreground">New Businesses</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Empowerment Areas:</h3>
                  <div className="space-y-3">
                    {[
                      "Financial literacy and savings groups",
                      "Entrepreneurship and business skills training",
                      "Leadership development and public speaking",
                      "Digital literacy and technology training"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white group">
                  <Briefcase className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Join Program
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg"
                    alt="Girls empowerment training"
                    width={600}
                    height={400}
                    className="object-cover w-full h-[400px] md:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Success Story Badge */}
                <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">↗ 85%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3 mb-6">
              <Clock className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Program Cycle</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">How Our Programs Work</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach ensuring sustainable impact and long-term community transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Community needs assessment and baseline studies",
                icon: Target,
                color: "primary"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Collaborative program design with community input",
                icon: Calendar,
                color: "secondary"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Program delivery with continuous monitoring",
                icon: Rocket,
                color: "accent"
              },
              {
                step: "04",
                title: "Evaluation",
                description: "Impact assessment and sustainability planning",
                icon: Award,
                color: "primary"
              }
            ].map((phase, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="p-8 relative z-10 text-center">
                  <div className="text-6xl font-bold text-muted-foreground/20 mb-4">{phase.step}</div>
                  <div className={`w-16 h-16 bg-gradient-to-br from-${phase.color} to-${phase.color}/70 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 -mt-12`}>
                    <phase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3 mb-6">
              <Star className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Impact Stories</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Voices of Change</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real stories from program participants who have transformed their lives and communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Achen Patricia",
                role: "Student Leader",
                program: "Menstrual Health Education",
                quote: "This program gave me confidence to speak openly about health issues. Now I help other girls in my school.",
                // image: "https://ik.imagekit.io/xjtx0zx5v/images/pi.webp"
              },
              {
                name: "Grace Nalubega",
                role: "Community Leader",
                program: "Women's Empowerment",
                quote: "I started my own business after the training. Now I employ 5 other women in my village.",
                // image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Sarah Mugisha",
                role: "School Administrator",
                program: "Water & Sanitation",
                quote: "Girl's attendance increased by 40% after we got proper sanitation facilities at our school.",
                // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
              }
            ].map((story, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      {/* <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      /> */}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                      <p className="text-xs text-primary font-medium">{story.program}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                    "{story.quote}"
                  </blockquote>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-6 py-3">
                <HandHeart className="h-5 w-5 text-accent animate-pulse" />
                <span className="text-sm font-bold text-accent">Get Involved</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Join Our{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Whether as a participant, volunteer, or partner, there are many ways to get involved 
                and make a lasting impact in communities across Uganda.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <Users className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Volunteer
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-secondary/30 text-secondary hover:bg-secondary/10 group">
                <HandHeart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Partner
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-accent/30 text-accent hover:bg-accent/10 group sm:col-span-2 lg:col-span-1">
                <Heart className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
