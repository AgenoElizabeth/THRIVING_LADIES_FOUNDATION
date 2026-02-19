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
  BookOpen,
  MessageCircle,
  HandHeart,
} from "lucide-react";

export default function WhatWeDo() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,107,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/30 shadow-lg">
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our Mission
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                What We Do: Transforming Lives Through{" "}
                <span className="text-gradient bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Education, Counseling & Support
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                At Thriving Ladies Foundation, we are committed to empowering vulnerable children and families in Uganda through comprehensive programs that address their physical, emotional, and educational needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-demo shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/donate">
                    Support Our Work
                    <Heart className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="btn-outline-gradient shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/contact">
                    Get Involved
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg"
                  alt="Our Programs in Action"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg"
                  alt="Education Programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Education</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Empowering Minds with Knowledge</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our education programs focus on providing quality learning opportunities to children in disadvantaged primary schools across Uganda. We believe that education is the foundation for breaking the cycle of poverty.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-primary" />
                  </div>
                  <span>Menstrual hygiene management education for girls</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-primary" />
                  </div>
                  <span>Health education for boys to promote gender equality</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-primary" />
                  </div>
                  <span>Distribution of scholastic materials and supplies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-primary" />
                  </div>
                  <span>Teacher training and capacity building</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Counseling</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Guiding Hearts with Compassion</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our counseling services provide emotional support and guidance to children and families facing various challenges. We create safe spaces for healing and personal growth.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Individual counseling for children experiencing trauma</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Family counseling to strengthen household bonds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Peer support groups for adolescents</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Crisis intervention and emergency support</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg"
                  alt="Counseling Services"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg"
                  alt="Support Programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <HandHeart className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Support</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Lifting Lives with Care</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our support programs provide essential resources and assistance to ensure that no child is left behind. We address both immediate needs and long-term sustainability.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-accent" />
                  </div>
                  <span>Distribution of reusable sanitary pads and hygiene kits</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-accent" />
                  </div>
                  <span>School feeding programs and nutritional support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-accent" />
                  </div>
                  <span>Medical care and health service referrals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-accent" />
                  </div>
                  <span>Community outreach and awareness campaigns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Impact So Far
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-primary">500+</h3>
              <p className="text-sm text-muted-foreground font-medium">Children Educated</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-secondary">200+</h3>
              <p className="text-sm text-muted-foreground font-medium">Counseling Sessions</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-accent">50+</h3>
              <p className="text-sm text-muted-foreground font-medium">Families Supported</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-primary">10+</h3>
              <p className="text-sm text-muted-foreground font-medium">Schools Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Your support helps us continue our mission of transforming lives through education, counseling, and support.
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