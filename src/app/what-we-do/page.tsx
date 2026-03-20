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
  Globe,
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default async function WhatWeDo() {
  // Fetch impact metrics from Supabase
  const { data: metrics } = await supabase
    .from('impact_metrics')
    .select('*')
    .eq('is_published', true);

  const getMetric = (key: string, defaultValue: string) => {
    const metric = metrics?.find(m => m.metric_key === key);
    return metric ? metric.display_value : defaultValue;
  };

  const childrenEducated = getMetric('children_educated', '500+');
  const counselingSessions = getMetric('counseling_sessions', '200+');
  const familiesSupported = getMetric('families_supported', '50+');
  const schoolsReached = getMetric('schools_partnered', '10+');

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
                At Thriving Ladies Foundation, we are committed to empowering vulnerable girls, women, and widows through integrated programs in education, economic empowerment, and environmental sustainability.
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
      <section id="education" className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.41.45%20(1).jpeg?updatedAt=1771330517456"
                  alt="Education training"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <BookOpen className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Core Program 1</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Education & Girls' Empowerment</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our education and girls’ empowerment programs support vulnerable children from low-income households by removing barriers to schooling and promoting dignity, health, and personal development. We focus on keeping girls and boys in school, improving their well-being, and creating safe, supportive learning environments.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-primary" />
                  </div>
                  <span><strong>Child sponsorship programs:</strong> providing school fees, learning materials, and essential support to vulnerable children.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-primary" />
                  </div>
                  <span><strong>Menstrual hygiene management (MHM):</strong> initiatives including reusable pad production units, hygiene training, and private changing facilities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-primary" />
                  </div>
                  <span><strong>Life skills and reproductive health:</strong> comprehensive training on adolescent health, decision-making, and future planning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary/10 p-1 rounded-full mt-1">
                    <Heart className="h-3 w-3 text-primary" />
                  </div>
                  <span><strong>Educational infrastructure support:</strong> through improved WASH facilities to ensure safe and dignified learning environments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Empowerment Section */}
      <section id="economic" className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Core Program 2</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Women & Youth Economic Empowerment</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our women and youth economic empowerment programs focus on strengthening household incomes and building sustainable livelihoods, especially for vulnerable and women-headed families. By improving financial stability and skills development, we help communities become more resilient while supporting children’s ability to stay in school.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-secondary" />
                  </div>
                  <span><strong>Income-generating activities (IGAs):</strong> providing startup capital and training for sustainable enterprises.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-secondary" />
                  </div>
                  <span><strong>Village savings and loan associations (VSLAs):</strong> establishing savings groups to promote financial inclusion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-secondary" />
                  </div>
                  <span><strong>Youth entrepreneurship training:</strong> equipping young people with business skills and vocational training.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-secondary" />
                  </div>
                  <span><strong>Agricultural skills development:</strong> training in climate-smart agriculture and sustainable farming practices.</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/visit0.jpeg"
                  alt="Economic Empowerment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Action Section */}
      <section id="environment" className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/tree%20planting.png"
                  alt="Climate Action"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Core Program 3</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Climate Action & Environmental Sustainability</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our environmental sustainability programs focus on restoring ecosystems, promoting sustainable livelihoods, and protecting natural resources. We empower communities with environmentally friendly practices to address environmental degradation while improving food security.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-accent" />
                  </div>
                  <span><strong>Community tree planting initiatives:</strong> supporting large-scale tree distribution and planting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-accent" />
                  </div>
                  <span><strong>Agroforestry programs:</strong> integrating trees into farming systems to improve soil health and generate income.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-accent" />
                  </div>
                  <span><strong>Wetland conservation:</strong> protecting and restoring wetlands through community engagement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <Target className="h-3 w-3 text-accent" />
                  </div>
                  <span><strong>Climate-smart agriculture:</strong> training farmers in drought-resistant crops and sustainable farming methods.</span>
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
              <h3 className="text-3xl font-bold text-primary">{childrenEducated}</h3>
              <p className="text-sm text-muted-foreground font-medium">Children Educated</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-secondary">{counselingSessions}</h3>
              <p className="text-sm text-muted-foreground font-medium">Counseling Sessions</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-accent">{familiesSupported}</h3>
              <p className="text-sm text-muted-foreground font-medium">Families Supported</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-primary">{schoolsReached}</h3>
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