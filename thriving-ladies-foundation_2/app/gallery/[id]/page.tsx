import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

interface PageProps {
  params: {
    id: string
  }
}

export default function GalleryStoryPage({ params }: PageProps) {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1607142634950-c5e8b5a8b72c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      alt: "Girls learning in classroom",
      story: "In the heart of Buwaiswa Primary School, young girls gather for their first menstrual health education session. With wide eyes and eager minds, they learn about their bodies and the importance of hygiene. This moment marks the beginning of empowerment for these brave students."
    },
    {
      src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Water facilities",
      story: "Clean water is the foundation of health. Our team worked tirelessly to install proper water facilities at local schools, ensuring students have access to safe drinking water and proper sanitation. This simple yet crucial improvement has transformed daily life for hundreds of children."
    },
    {
      src: "/images/training3.jpeg",
      alt: "Community meeting",
      story: "Community meetings bring together parents, teachers, and local leaders to discuss menstrual health education. These gatherings foster understanding and support, creating a network of advocates who champion girls' education and well-being in their communities."
    },
    {
      src: "https://images.unsplash.com/photo-1576077221130-691ce93e6b58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Students studying",
      story: "Education continues uninterrupted. With proper menstrual health management, girls can focus on their studies without fear or embarrassment. This young student represents the thousands of girls whose academic performance has improved through our programs."
    },
    {
      src: "https://images.unsplash.com/photo-1493555433180-6bdec08efad8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Health education",
      story: "Our comprehensive health education curriculum covers anatomy, hygiene, and self-care. Teachers receive specialized training to deliver these sensitive topics with confidence and cultural sensitivity, ensuring every student receives accurate information."
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Happy students",
      story: "Smiles tell the real story. When girls have the knowledge and resources they need, confidence soars and joy returns to learning. These happy faces are the true measure of our success in transforming lives through education and empowerment."
    },
    {
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "School facilities",
      story: "Modern school facilities create safe, welcoming environments for learning. Our infrastructure improvements include private changing rooms, clean restrooms, and proper waste disposal systems, all designed to support girls' dignity and comfort."
    },
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Group activities",
      story: "Group activities build community and confidence. Through interactive workshops and peer education programs, girls learn from each other and develop leadership skills that will serve them throughout their lives."
    },
    {
      src: "/images/children1.jpg",
      alt: "Children in school",
      story: "Every child deserves an education. Our programs ensure that both boys and girls receive health education that supports their well-being and academic success. This inclusive approach creates healthier, more educated communities."
    },
    {
      src: "/images/children2.jpg",
      alt: "Young students",
      story: "Young minds are our future. By providing comprehensive health education to children at an early age, we equip them with the knowledge and confidence to make healthy choices and advocate for their own well-being."
    },
    {
      src: "/images/happy1.jpeg",
      alt: "Happy community members",
      story: "Community happiness is our ultimate goal. When families understand and support menstrual health education, the entire community benefits. These smiling faces represent the ripple effect of our work in creating healthier, more supportive communities."
    },
    {
      src: "/images/outreach1.jpeg",
      alt: "Outreach program",
      story: "Our outreach programs extend our impact beyond school walls. Community health workers and local volunteers carry our message of empowerment to homes and villages, ensuring no girl is left behind in the journey toward better health and education."
    },
    {
      src: "/images/training2.jpeg",
      alt: "Training session",
      story: "Teacher training is essential to our success. Educators learn how to discuss sensitive health topics with confidence and cultural sensitivity, becoming champions of girls' education and well-being in their schools and communities."
    },
    {
      src: "/images/training4.jpeg",
      alt: "Educational workshop",
      story: "Workshops bring together stakeholders from across communities. Parents, teachers, health workers, and local leaders collaborate to create comprehensive support systems for girls' education and health, building lasting partnerships for change."
    },
    {
      src: "/images/making.jpeg",
      alt: "Making progress",
      story: "Progress happens one step at a time. Our team works tirelessly to implement sustainable solutions that address the root causes of girls' educational challenges, creating lasting change that benefits generations to come."
    },
    {
      src: "/images/making1.jpeg",
      alt: "Community development",
      story: "Community development requires collaboration. Local leaders, parents, and our team work together to identify needs and implement solutions that strengthen community health and education systems for the long term."
    },
    {
      src: "/images/slum1.jpg",
      alt: "Urban outreach",
      story: "Our work extends to urban areas where challenges may be different but needs are equally great. Urban outreach programs address the unique health and educational needs of city-dwelling families, ensuring comprehensive coverage across Uganda."
    },
    {
      src: "/images/staff1.jpeg",
      alt: "Our team",
      story: "Our dedicated team brings passion, expertise, and cultural understanding to every project. From field workers to educators, each team member plays a crucial role in delivering life-changing programs to communities across Uganda."
    },
    {
      src: "/images/toilet2.jpg",
      alt: "Sanitation facilities",
      story: "Proper sanitation facilities are essential for dignity and health. Our infrastructure improvements include modern toilets, handwashing stations, and waste management systems that create safe, hygienic environments for learning and personal care."
    },
    {
      src: "/images/water.jpeg",
      alt: "Water access",
      story: "Access to clean water transforms lives. Our water projects ensure that schools have reliable sources of safe drinking water, supporting hydration, hygiene, and overall health for students and staff alike."
    },
    {
      src: "/images/house1.jpg",
      alt: "Housing improvement",
      story: "Safe housing supports educational success. Our community development programs include housing improvements that create stable, supportive environments where children can focus on learning and personal growth."
    },
    {
      src: "/images/hustle1.jpg",
      alt: "Community hustle",
      story: "Community entrepreneurship supports families. Our programs include training in small business skills and microfinance, helping families create sustainable income sources that support children's education and health needs."
    },
    {
      src: "/images/lady-phone.jpeg",
      alt: "Mobile education",
      story: "Mobile technology brings education to remote areas. Our mobile education programs use phones and tablets to deliver health education content, ensuring that even the most isolated communities receive vital information and support."
    },
    {
      src: "/images/founder.jpeg",
      alt: "Founder interaction",
      story: "Direct engagement with communities drives our mission. Our founder regularly visits project sites, listening to community needs and sharing the vision of a Uganda where every child has the opportunity to thrive through health and education."
    },
    {
      src: "/images/Victoria.jpg",
      alt: "Victoria speaking",
      story: "Leadership inspires change. Our founder speaks passionately about the importance of menstrual health education, sharing personal stories and data that motivate communities to embrace comprehensive health education for all children."
    },
    {
      src: "/images/thrivingwater.png",
      alt: "Clean water initiative",
      story: "Clean water initiatives address fundamental health needs. By providing reliable access to safe water, we prevent waterborne diseases and support proper hygiene practices that are essential for effective menstrual health management."
    },
  ]

  const id = parseInt(params.id)
  const image = galleryImages[id]
  const prevId = id > 0 ? id - 1 : galleryImages.length - 1
  const nextId = id < galleryImages.length - 1 ? id + 1 : 0

  if (!image) {
    return <div>Image not found</div>
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-24 pb-8 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to Gallery
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {image.alt}
          </h1>
          <p className="text-muted-foreground">
            Story #{id + 1} of {galleryImages.length}
          </p>
        </div>
      </section>

      {/* Image and Story */}
      <section className="pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {image.story}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-8 border-t">
                <Link href={`/gallery/${prevId}`}>
                  <Button variant="outline" className="gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    Previous Story
                  </Button>
                </Link>

                <Link href={`/gallery/${nextId}`}>
                  <Button className="gap-2">
                    Next Story
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}n