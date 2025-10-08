import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Heart,
  Users,
  School,
  Sparkles,
  BarChart,
  Target,
  Trophy,
} from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                Empowering Girls Through{" "}
                <span className="text-gradient">Health & Education</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transforming lives through innovative menstrual hygiene management programs
                and education initiatives at Buwaiswa Primary School in Kamuli District, Uganda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-demo">
                  View Our Impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="btn-outline-gradient">
                  Learn More
                </Button>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">50+</h3>
                  <p className="text-sm text-muted-foreground">Girls Supported</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-secondary">100%</h3>
                  <p className="text-sm text-muted-foreground">Program Completion</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-accent">61.6%</h3>
                  <p className="text-sm text-muted-foreground">Improved Hygiene</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/image1.jpg"
                  alt="Girls at Buwaiswa Primary School"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Floating Cards */}
              <Card className="absolute -left-12 top-1/4 bg-background/90 backdrop-blur-sm p-4 rounded-xl floating shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Community Impact</p>
                    <p className="text-sm text-muted-foreground">50+ Families Reached</p>
                  </div>
                </div>
              </Card>
              <Card className="absolute -right-8 bottom-1/4 bg-background/90 backdrop-blur-sm p-4 rounded-xl floating shadow-lg delay-200">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <School className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Education First</p>
                    <p className="text-sm text-muted-foreground">Reduced Absenteeism</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Project Objectives</h2>
            <p className="text-muted-foreground text-base">
              Working towards better health, education, and well-being for primary school girls
              through comprehensive menstrual hygiene management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <Card className="feature-card">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Improved MHM Knowledge</h3>
              <p className="text-muted-foreground">
                Comprehensive education and training on menstrual hygiene management practices
                for primary school girls.
              </p>
            </Card>

            <Card className="feature-card">
              <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Enhanced Access</h3>
              <p className="text-muted-foreground">
                Providing reusable sanitary pads and improving hygiene facilities for better
                menstrual health management.
              </p>
            </Card>

            <Card className="feature-card">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Better Education</h3>
              <p className="text-muted-foreground">
                Reducing absenteeism and dropout rates through improved menstrual hygiene
                support systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative min-h-[80vh] rounded-3xl overflow-hidden shadow-2xl">
            {/* Full Background Video */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Animated Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 animate-fade-in" />
            
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-500"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-center min-h-[80vh]">
              <div className="text-center space-y-12 max-w-4xl px-8 animate-fade-in-up">
                <h2 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg animate-slide-down opacity-0 animation-delay-200">
                  Making Real Impact
                </h2>
                
                {/* Animated Stats Grid */}
                <div className="grid grid-cols-3 gap-8 lg:gap-16">
                  <div className="text-center animate-slide-up opacity-0 animation-delay-400">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 hover:scale-110 hover:rotate-3 transform transition-all duration-500 hover:shadow-2xl group">
                      <Sparkles className="h-12 w-12 text-white mx-auto mb-4 animate-spin-slow group-hover:animate-bounce" />
                      <h3 className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">Knowledge</h3>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="text-center animate-slide-up opacity-0 animation-delay-600">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 hover:scale-110 hover:-rotate-3 transform transition-all duration-500 hover:shadow-2xl group">
                      <School className="h-12 w-12 text-white mx-auto mb-4 animate-pulse group-hover:animate-wiggle" />
                      <h3 className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">Education</h3>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  
                  <div className="text-center animate-slide-up opacity-0 animation-delay-800">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 hover:scale-110 hover:rotate-3 transform transition-all duration-500 hover:shadow-2xl group">
                      <Heart className="h-12 w-12 text-white mx-auto mb-4 animate-heartbeat group-hover:animate-bounce" />
                      <h3 className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">Well-being</h3>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                
                <div className="animate-fade-in-up opacity-0 animation-delay-1000">
                  <Button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-2xl transform transition-all duration-500 text-xl px-12 py-4 rounded-full group animate-bounce-gentle">
                    <span className="group-hover:animate-pulse">View Our Impact</span>
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-8">
            Support our mission to improve menstrual hygiene management and education
            for primary school girls in Uganda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-demo">
              Make a Donation
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="btn-outline-gradient">
              Become a Partner
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
