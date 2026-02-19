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
  MapPin,
  Home,
  Building,
} from "lucide-react";

export default function WhereWeWork() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,107,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm px-6 py-3 rounded-full border border-secondary/30 shadow-lg">
                <MapPin className="h-5 w-5 text-secondary animate-pulse" />
                <span className="text-sm font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Our Reach
                </span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Where We Work: Bringing Hope to{" "}
                <span className="text-gradient bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
                  Communities Across Uganda
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Our programs extend to rural schools, urban communities, and remote villages throughout Uganda, ensuring that no child is left behind in our mission to eradicate poverty through education and health.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-demo shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/projects">
                    View Our Projects
                    <Target className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="btn-outline-gradient shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/contact">
                    Partner With Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 group">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg"
                  alt="Our Work Locations"
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

      {/* Rural Schools Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/children2.jpg"
                  alt="Rural Schools"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                <School className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Rural Schools</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Bringing Education to Remote Areas</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Many of Uganda's most vulnerable children attend schools in rural and remote areas where access to basic education and health resources is limited. Our programs target these underserved communities.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <Card className="p-4 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <h3 className="font-semibold text-primary mb-2">Buwaiswa Primary School</h3>
                  <p className="text-sm text-muted-foreground">Our flagship program location, serving over 200 students with comprehensive MHM education and support.</p>
                </Card>
                <Card className="p-4 bg-gradient-to-r from-secondary/5 to-secondary/10 border-secondary/20">
                  <h3 className="font-semibold text-secondary mb-2">Kawempe Division Schools</h3>
                  <p className="text-sm text-muted-foreground">Multiple primary schools in Kampala's Kawempe area receiving our educational interventions.</p>
                </Card>
                <Card className="p-4 bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
                  <h3 className="font-semibold text-accent mb-2">Eastern Uganda Communities</h3>
                  <p className="text-sm text-muted-foreground">Expanding our reach to schools in Mbale and surrounding districts.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Centers Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                <Home className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold text-secondary">Community Centers</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Supporting Local Development</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We work closely with local community centers and organizations to extend our impact beyond school walls, addressing the needs of entire families and neighborhoods.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Community health education workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Parent-teacher association partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Local leader training programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/10 p-1 rounded-full mt-1">
                    <Users className="h-3 w-3 text-secondary" />
                  </div>
                  <span>Community resource distribution centers</span>
                </li>
              </ul>
            </div>
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg"
                  alt="Community Centers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urban Outreach Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-muted/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg"
                  alt="Urban Outreach"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                <Building className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Urban Outreach</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Extending Help to Rural Communities</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our work focuses on rural communities where poverty and lack of access to education persist despite proximity to city resources.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <MapPin className="h-3 w-3 text-accent" />
                  </div>
                  {/* <span>Kampala metropolitan area schools</span> */}
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <MapPin className="h-3 w-3 text-accent" />
                  </div>
                  <span>Rural slum community programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <MapPin className="h-3 w-3 text-accent" />
                  </div>
                  <span>City-based counseling centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-accent/10 p-1 rounded-full mt-1">
                    <MapPin className="h-3 w-3 text-accent" />
                  </div>
                  <span>Partnerships with urban NGOs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/50 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Life in Our Communities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These photos capture the reality of the communities we serve - vulnerable children, challenging living conditions, and the infrastructure gaps we work to address.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Vulnerable Children */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg"
                  alt="Vulnerable children in our programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Vulnerable Children</h3>
                  <p className="text-white/80 text-sm">Children who benefit from our educational programs</p>
                </div>
              </div>
            </div>

            {/* Bad Houses */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg"
                  alt="Poor housing conditions in communities we serve"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Housing Conditions</h3>
                  <p className="text-white/80 text-sm">The challenging living environments many families face</p>
                </div>
              </div>
            </div>

            {/* Toilets */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg"
                  alt="Sanitation facilities in our communities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Sanitation Facilities</h3>
                  <p className="text-white/80 text-sm">The sanitation challenges we work to improve</p>
                </div>
              </div>
            </div>

            {/* More Children */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg"
                  alt="Children participating in our programs"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Program Participants</h3>
                  <p className="text-white/80 text-sm">Young learners engaged in our educational activities</p>
                </div>
              </div>
            </div>

            {/* Slum Conditions */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg"
                  alt="Urban slum communities we serve"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Urban Communities</h3>
                  <p className="text-white/80 text-sm">Slum areas where poverty affects education and health</p>
                </div>
              </div>
            </div>

            {/* Training Session */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg"
                  alt="Educational training sessions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">Educational Sessions</h3>
                  <p className="text-white/80 text-sm">Teaching menstrual hygiene management to students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Stats Section */}
      <section className="py-24 bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
              Our Geographic Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From the bustling streets of Kampala to the remote villages of Eastern Uganda, our work spans diverse communities united by a common goal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <MapPin className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-bold text-primary">10+</h3>
              <p className="text-sm text-muted-foreground font-medium">Schools Served</p>
              <p className="text-xs text-muted-foreground">Across rural and urban areas</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Users className="h-12 w-12 text-secondary mx-auto" />
              <h3 className="text-2xl font-bold text-secondary">500+</h3>
              <p className="text-sm text-muted-foreground font-medium">Children Reached</p>
              <p className="text-xs text-muted-foreground">Direct program beneficiaries</p>
            </div>
            <div className="text-center space-y-4 p-6 rounded-xl bg-background/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Home className="h-12 w-12 text-accent mx-auto" />
              <h3 className="text-2xl font-bold text-accent">50+</h3>
              <p className="text-sm text-muted-foreground font-medium">Communities Impacted</p>
              <p className="text-xs text-muted-foreground">Families and neighborhoods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Expand Our Reach
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Help us bring our life-changing programs to even more communities across Uganda. Your support makes it possible.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button className="btn-demo text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110" asChild>
                <Link href="/donate">
                  Support Our Expansion
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