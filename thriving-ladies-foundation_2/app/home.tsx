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
    <main className="flex-1 relative">
      {/* Office Interior Background for entire page */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
        {/* Enhanced Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />
        {/* 3D Building Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 animate-pulse"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Slogan Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30 shadow-lg animate-fade-in">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  A World Free From Poverty
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight animate-fade-in-up">
                Empowering Girls, Widows and Boys Through{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Health & Education
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-200">
                Transforming lives through innovative menstrual hygiene management programs
                and education initiatives in disadvantaged primary schools in Uganda.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-400">
                <Button className="btn-demo shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/about">
                    View Our Impact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="btn-outline-gradient shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
              {/* Enhanced Stats with animations */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 animate-fade-in-up animation-delay-600">
                <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-primary">50+</h3>
                  <p className="text-sm text-muted-foreground font-medium">Girls Supported</p>
                </div>
                <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-secondary">100%</h3>
                  <p className="text-sm text-muted-foreground font-medium">Program Completion</p>
                </div>
                <div className="space-y-2 p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h3 className="text-3xl font-bold text-accent">61.6%</h3>
                  <p className="text-sm text-muted-foreground font-medium">Improved Hygiene</p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg"
                  alt="Empowering Children Through Education"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Enhanced Floating Cards */}
              <Card className="absolute -left-12 top-1/4 bg-background/95 backdrop-blur-md p-4 rounded-xl floating shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary/20">
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
              <Card className="absolute -right-8 bottom-1/4 bg-background/95 backdrop-blur-md p-4 rounded-xl floating shadow-xl hover:shadow-2xl transition-all duration-300 delay-200 border-2 border-secondary/20">
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

      {/* Director's Message Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              {/* Enhanced image container with better aspect ratio for full portrait */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                {/* Beautiful gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
                
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/Victoria.jpg"
                  alt="Awino Victoria - Founder & Director"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Decorative border effect */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-500" />
              </div>
              
              {/* Decorative floating element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-2xl animate-pulse delay-700" />
            </div>
            <div className="space-y-6 animate-fade-in-up relative">
              {/* Logo Watermark Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-30 pointer-events-none">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png"
                  alt="Thriving Ladies Foundation Logo"
                  width={500}
                  height={500}
                  className="object-contain dark:brightness-150"
                />
              </div>
              
              {/* Section title */}
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 relative z-10">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Message from Our Founder</span>
              </div>
              
              <blockquote className="text-2xl lg:text-3xl font-bold text-primary italic border-l-4 border-primary pl-6 hover:border-l-8 transition-all duration-300 relative z-10">
                "Poverty is gender-blind, and so is our compassion."
              </blockquote>
              <div className="space-y-4 text-muted-foreground leading-relaxed relative z-10">
                <p>
                  When we founded Thriving Ladies Foundation, our heartbeat was the vulnerable girl child in rural Uganda. We saw firsthand how a lack of sanitary supplies and health education silenced the potential of young women. But as we walked through the gates of various disadvantaged schools and sat in the homes of resilient widows, we saw a larger picture.
                </p>
                <p>
                  We realized that poverty and lack of opportunity do not discriminate.
                </p>
                <p>
                  We saw boys struggling to stay in school without basic scholastic materials. We saw the need for young men to be part of the conversation regarding health and dignity so they can grow into supportive allies. We saw that for a widow to truly thrive, her entire household—sons and daughters alike—must have a path to a better future.
                </p>
                <p>
                  Today, Thriving Ladies Foundation has evolved. We have moved beyond a single school to reach multiple communities across Uganda. Our mission has expanded to ensure that every vulnerable pupil, regardless of gender, receives the education and health support they deserve.
                </p>
                <p>
                  We are no longer just supporting "ladies"—we are fostering a thriving society. By empowering the girl, mentoring the boy, and uplifting the widow, we are weaving a stronger fabric for our nation.
                </p>
                <p>
                  Thank you for standing with us as we transform lives, one school and one community at a time.
                </p>
              </div>
              <div className="pt-6 border-t-2 border-primary/20 relative z-10">
                <p className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'cursive' }}>
                  Awino Victoria
                </p>
                <p className="text-base text-muted-foreground font-medium">
                  Founder & Director, Thriving Ladies Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Target className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">What We Do</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Our Project Objectives
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Working towards better health, education, and well-being for primary school girls
              through comprehensive menstrual hygiene management and boys through health education and importance of being in school.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            {/* Enhanced Feature Cards */}
            <Card className="feature-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30">
              <div className="bg-gradient-to-br from-primary/20 to-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                Improved MHM Knowledge
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive education and training on menstrual hygiene management practices
                for primary school girls.
              </p>
            </Card>

            <Card className="feature-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-secondary/30">
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors duration-300">
                Enhanced Access
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Providing reusable sanitary pads and improving hygiene facilities for better
                menstrual health management.
              </p>
            </Card>

            <Card className="feature-card group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-accent/30">
              <div className="bg-gradient-to-br from-accent/20 to-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                Better Education
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reducing absenteeism and dropout rates through improved menstrual hygiene
                support systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">What We Do</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Empowering Communities Through Education, Counseling, and Support
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We are dedicated to transforming lives by providing comprehensive education, compassionate counseling, and unwavering support to vulnerable children and families in Uganda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            <div className="text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg"
                  alt="Education Programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Education</h3>
                  <p className="text-sm opacity-90">Empowering minds with knowledge</p>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg"
                  alt="Counseling Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Counseling</h3>
                  <p className="text-sm opacity-90">Guiding hearts with compassion</p>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg"
                  alt="Support Programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Support</h3>
                  <p className="text-sm opacity-90">Lifting lives with care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-400">
            <Button className="btn-demo shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link href="/what-we-do">
                Learn More About Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Where We Work Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">Where We Work</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Making a Difference Across Uganda
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our programs reach communities in need across various regions of Uganda, bringing hope and transformation to schools, homes, and hearts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            <div className="text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg"
                  alt="Rural Schools Education"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Rural Schools</h3>
                  <p className="text-sm opacity-90">Bringing education to remote areas</p>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg"
                  alt="Water Access Programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Community Centers</h3>
                  <p className="text-sm opacity-90">Supporting local development</p>
                </div>
              </div>
            </div>

            <div className="text-center group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 mb-6">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg"
                  alt="Distribution Programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Urban Outreach</h3>
                  <p className="text-sm opacity-90">Extending help to city communities</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl h-[400px] w-full animate-fade-in-up animation-delay-300">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.7576595460515!2d32.64315561110901!3d0.32043112954319564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTknMTMuNiJOIDMywrAzOC'NDQuNiJF!5e0!3m2!1sen!2suk!4v1715690000000!5m2!1sen!2suk"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="text-center mt-12 animate-fade-in-up animation-delay-400">
            <Button variant="outline" className="btn-outline-gradient shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
              <Link href="/where-we-work">
                Read More About Our Locations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
                  <Button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-gray-900 hover:scale-105 hover:shadow-2xl transform transition-all duration-500 text-xl px-12 py-4 rounded-full group animate-bounce-gentle" asChild>
                    <Link href="/about">
                      <span className="group-hover:animate-pulse">View Our Impact</span>
                      <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-4">
              <Heart className="h-5 w-5 text-primary animate-heartbeat" />
              <span className="text-sm font-semibold text-primary">Make an Impact Today</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Support our mission to improve menstrual hygiene management and education
            for primary school girls and boys in Uganda.
          </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button className="btn-demo text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110" asChild>
                <Link href="/donate">
                  Make a Donation
                  <Heart className="ml-2 h-5 w-5 animate-heartbeat" />
                </Link>
              </Button>
              <Button variant="outline" className="btn-outline-gradient text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110" asChild>
                <Link href="/contact">
                  Become a Partner
                  <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
