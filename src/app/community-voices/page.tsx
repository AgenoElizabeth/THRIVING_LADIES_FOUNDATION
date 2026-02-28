"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Users,
    ArrowLeft,
    Quote,
    Sparkles,
    Heart,
} from "lucide-react";
import Magazine from "@/components/Magazine";

export default function CommunityVoices() {
    const stakeholders = [
        {
            name: "Mirembe Justine",
            role: "Headteacher",
            image: "https://ik.imagekit.io/xjtx0zx5v/headteacher",
            speech: "The foundation's intervention has significantly reduced absenteeism among our girls. By providing both the knowledge and the resources for menstrual health, they've given our pupils the dignity and focus they need to excel in their studies.",
            color: "from-primary/10 to-transparent"
        },
        {
            name: "Nakiyemba Annet",
            role: "Senior Woman Teacher",
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.42.45%20(1).jpeg",
            speech: "I've seen a remarkable shift in the confidence of our female pupils. They are no longer afraid to come to school during their periods. The mentorship and health education have empowered them to stand tall and pursue their dreams without shame.",
            color: "from-secondary/10 to-transparent"
        },
        {
            name: "Waiswa Henry",
            role: "Senior Man Teacher",
            image: "https://ik.imagekit.io/xjtx0zx5v/Henry%20Waiswa.jpeg",
            speech: "Education is a holistic journey. Supporting our girls isn't just a 'woman's issue'—it's a community necessity. The foundation has helped us create an inclusive environment where every pupil, boy or girl, understands and respects each other's needs.",
            color: "from-accent/10 to-transparent"
        },
        {
            name: "Baluka Petu Isabirye",
            role: "Parents Coordinator",
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.42.44.jpeg",
            speech: "As parents, we are deeply grateful. Many of us couldn't afford the supplies our daughters needed. The foundation has relieved a huge burden from our families and given us hope for our children's future through their consistent support.",
            color: "from-orange-500/10 to-transparent"
        },
        {
            name: "Namukose Sarah",
            role: "Pupil at Buwaiswa P/S",
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.41.44%20(1).jpeg?updatedAt=1771330512518",
            speech: "I used to stay home every month and I fell behind in my classes. Now, I have my pads and I know how to use them. I haven't missed a single day this term! I want to study hard and become a teacher too, so I can help others like the foundation helped me.",
            color: "from-teal-500/10 to-transparent"
        }
    ];

    const magazinePages = [
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.37.54%20(1).jpeg?updatedAt=1771330502530",
            title: "Morning Assemblace",
            story: "The day begins with unity. Pupils gather to share news, celebrate achievements, and start their educational journey with a collective spirit of hope."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg",
            title: "Focus and Determination",
            story: "Inside our classrooms, the air is thick with concentration. Every desk represents a dream being built, supported by the resources provided by our donors."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.37.56%20(1).jpeg?updatedAt=1771330506605",
            title: "The Heart of Learning",
            story: "Our classrooms are safe havens where girls can learn without the fear of interruption. We provide the dignity they need to focus entirely on their studies."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg",
            title: "Skills for Life",
            story: "Practical empowerment is key. We teach our pupils valuable skills that extend beyond the classroom, fostering independence and creativity."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.49.02.jpeg?updatedAt=1771330513729",
            title: "Community Outreach",
            story: "We don't just work in schools; we work in the heart of the community. Engaging with families is essential for sustainable change."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg",
            title: "Health Education",
            story: "Knowledge is power. Our training sessions break taboos and equip pupils with the medical and hygiene facts they need to manage their health."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.41.47.jpeg?updatedAt=1771330514557",
            title: "Sisterhood",
            story: "The bond between our pupils is their greatest strength. They support each other through challenges, creating a network of resilience."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg",
            title: "Tangible Support",
            story: "Distribution days are filled with excitement. Providing physical supplies like sanitary pads directly removes one of the biggest barriers to school attendance."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.41.44.jpeg?updatedAt=1771330516527",
            title: "A Reason to Smile",
            story: "Confidence comes from knowing you are supported. A simple pack of supplies can change a girl's entire outlook on her future."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg",
            title: "In the Field",
            story: "Our team goes wherever the need is greatest. From rural villages to urban slums, we are dedicated to reaching every child."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.49.01.jpeg?updatedAt=1771330516345",
            title: "Infrastructure Matters",
            story: "Healthy environments require good facilities. We advocate for and help build the sanitation infrastructure that schools so desperately need."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/process5.jpg",
            title: "Behind the Scenes",
            story: "Our work is the result of countless hours of planning and dedication. Every project is carefully managed to maximize its impact on the community."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.37.56.jpeg?updatedAt=1771330518102",
            title: "Elders' Support",
            story: "We work closely with community elders to ensure our programs are culturally sensitive and widely accepted by the people we serve."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/child.jpeg",
            title: "Individual Potential",
            story: "Behind every statistic is a child with unique potential. Our goal is to see that potential fully realized, no matter the obstacles."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/training5.jpg",
            title: "Mentorship and Guidance",
            story: "Experienced educators provide one-on-one mentorship, ensuring no pupil feels alone in their pursuit of knowledge."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/process20.jpg",
            title: "Practical Skills",
            story: "Pupils learn the intricate details of creating reusable pads, a skill that provides both health security and economic opportunity."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/class2.jpeg",
            title: "A Glimpse of the Future",
            story: "Every lesson learned is a step toward a brighter future for these young women and their entire community."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/training8.jpg",
            title: "Shared Success",
            story: "We celebrate every milestone together. Each success story is a testament to the power of collective action."
        },
        {
            image: "https://ik.imagekit.io/xjtx0zx5v/images/water2.jpeg",
            title: "Resource Accessibility",
            story: "Our infrastructure brings essential resources directly to those who need them most, removing barriers to education and health."
        },
        {
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: "Caring for our Earth",
            story: "Pupils are trained in tree planting and environmental conservation, learning to protect the land that sustains their community."
        },
        {
            image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: "Inclusive Empowerment",
            story: "Our mission includes boys and youth, fostering a generation of understanding and supportive community leaders."
        },
        {
            image: "https://images.unsplash.com/photo-1523348830342-d01f9fc9d552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            title: "Agricultural Skills",
            story: "Through vegetable gardening and agricultural training, our pupils gain the skills needed to survive and thrive in a changing climate."
        }
    ];

    return (
        <main className="flex-1 bg-background">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,107,0.1),transparent_50%)]" />
                <div className="container mx-auto px-6 relative text-center">
                    <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-5 py-1.5 rounded-full border border-primary/20 shadow-sm mb-6 animate-fade-in">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-[10px] md:text-xs font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent uppercase tracking-widest">
                            Impact Stories
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tighter leading-tight">
                        Community <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent italic">Voices</span>
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-90">
                        High-impact testimonials from the front lines of change. Real stories from real people.
                    </p>
                </div>
            </section>

            {/* Magazine Section */}
            <section className="py-16 md:py-24 relative overflow-hidden bg-muted/30 border-y border-border/40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 space-y-2">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase">The Storybook</h2>
                        <div className="w-16 h-1 bg-primary mx-auto rounded-full opacity-50" />
                        <p className="text-muted-foreground text-sm md:text-base italic max-w-lg mx-auto leading-relaxed">
                            Flip through the moments that define our mission.
                        </p>
                    </div>

                    {/* Interactive Magazine Component */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <Magazine pages={magazinePages} />
                    </div>
                </div>
            </section>

            {/* Stakeholders Section - Alternating Layout */}
            <section className="py-20 md:py-28 bg-background overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24 space-y-3">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-2">
                            <Users className="h-3 w-3 text-primary" />
                            <span className="text-[10px] font-black tracking-[0.2em] text-primary uppercase">Leadership & Community</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black tracking-tight">Our Dedicated Community</h2>
                    </div>

                    <div className="space-y-32">
                        {stakeholders.map((voice, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24 relative group`}
                            >
                                {/* Background Accent */}
                                <div className={`absolute -inset-10 bg-gradient-to-br ${voice.color} rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-1000 -z-10`} />

                                {/* Avatar/Image Section */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-[320px] lg:h-[400px]">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-2xl rotate-3 scale-95 transition-transform duration-700 group-hover:rotate-6" />
                                        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700">
                                            <Image
                                                src={voice.image}
                                                alt={voice.name}
                                                fill
                                                className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                                    <div className="space-y-2">
                                        <h3 className="text-3xl lg:text-5xl font-black tracking-tighter text-gray-900 dark:text-white leading-none">
                                            {voice.name}
                                        </h3>
                                        <div className="inline-block bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                                            <p className="text-[10px] font-black text-primary tracking-widest uppercase">{voice.role}</p>
                                        </div>
                                    </div>

                                    <div className="relative p-8 lg:p-12 bg-muted/20 backdrop-blur-sm rounded-[2.5rem] border border-white/10 group-hover:bg-muted/30 transition-colors duration-500">
                                        <Quote className="absolute -top-6 -left-4 h-12 w-12 md:h-16 md:w-16 text-primary/10 transition-transform duration-700 group-hover:scale-110" />
                                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground italic leading-relaxed font-serif relative z-10">
                                            {voice.speech}
                                        </p>
                                        <div className="w-12 h-1 bg-primary/30 mt-8 rounded-full md:mx-0 mx-auto" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-b from-muted/10 to-background border-t border-border/40">
                <div className="container mx-auto px-6">
                    <Card className="max-w-4xl mx-auto overflow-hidden relative border-none bg-primary/5 p-10 md:p-20 text-center rounded-[3rem]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,107,0.1),transparent_70%)] opacity-30" />
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                                "Every voice adds a <span className="text-primary italic">chapter</span> of hope."
                            </h2>
                            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto opacity-80">
                                Join us in documenting the next success story. Your support creates the future we’re writing together.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <Button variant="default" size="lg" className="rounded-full px-10 py-7 text-xs font-black tracking-[0.2em] uppercase shadow-xl hover:scale-105 transition-transform bg-primary" asChild>
                                    <Link href="/donate">Support Today</Link>
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-xs font-black tracking-[0.2em] uppercase border-2 border-primary text-primary hover:bg-primary/5 transition-all hover:scale-105" asChild>
                                    <Link href="/where-we-work">
                                        Learn More
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    );
}
