"use client"
import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
  Eye,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"

export default function GalleryPage() {
  // Gallery images - all images from the images folder with stories
  const galleryImages = [
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg",
      alt: "Girls learning in classroom",
      story: "In the heart of Buwaiswa Primary School, young girls gather for their first menstrual health education session. With wide eyes and eager minds, they learn about their bodies and the importance of hygiene. This moment marks the beginning of empowerment for these brave students."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg",
      alt: "Water facilities",
      story: "Clean water is the foundation of health. Our team worked tirelessly to install proper water facilities at local schools, ensuring students have access to safe drinking water and proper sanitation. This simple yet crucial improvement has transformed daily life for hundreds of children."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training3.jpeg",
      alt: "Community meeting",
      story: "Community meetings bring together parents, teachers, and local leaders to discuss menstrual health education. These gatherings foster understanding and support, creating a network of advocates who champion girls' education and well-being in their communities."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/class2.jpeg",
      alt: "Students studying",
      story: "Education continues uninterrupted. With proper menstrual health management, girls can focus on their studies without fear or embarrassment. This young student represents the thousands of girls whose academic performance has improved through our programs."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg",
      alt: "Health education",
      story: "Our comprehensive health education curriculum covers anatomy, hygiene, and self-care. Teachers receive specialized training to deliver these sensitive topics with confidence and cultural sensitivity, ensuring every student receives accurate information."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg",
      alt: "Happy students",
      story: "Smiles tell the real story. When girls have the knowledge and resources they need, confidence soars and joy returns to learning. These happy faces are the true measure of our success in transforming lives through education and empowerment."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg",
      alt: "School facilities",
      story: "Modern school facilities create safe, welcoming environments for learning. Our infrastructure improvements include private changing rooms, clean restrooms, and proper waste disposal systems, all designed to support girls' dignity and comfort."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/class3.jpeg",
      alt: "Group activities",
      story: "Group activities build community and confidence. Through interactive workshops and peer education programs, girls learn from each other and develop leadership skills that will serve them throughout their lives."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/children1.jpg",
      alt: "Children in school",
      story: "Every child deserves an education. Our programs ensure that both boys and girls receive health education that supports their well-being and academic success. This inclusive approach creates healthier, more educated communities."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/children2.jpg",
      alt: "Young students",
      story: "Young minds are our future. By providing comprehensive health education to children at an early age, we equip them with the knowledge and confidence to make healthy choices and advocate for their own well-being."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg",
      alt: "Happy community members",
      story: "Community happiness is our ultimate goal. When families understand and support menstrual health education, the entire community benefits. These smiling faces represent the ripple effect of our work in creating healthier, more supportive communities."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/outreach1.jpeg",
      alt: "Outreach program",
      story: "Our outreach programs extend our impact beyond school walls. Community health workers and local volunteers carry our message of empowerment to homes and villages, ensuring no girl is left behind in the journey toward better health and education."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training2.jpeg",
      alt: "Training session",
      story: "Teacher training is essential to our success. Educators learn how to discuss sensitive health topics with confidence and cultural sensitivity, becoming champions of girls' education and well-being in their schools and communities."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training4.jpeg",
      alt: "Educational workshop",
      story: "Workshops bring together stakeholders from across communities. Parents, teachers, health workers, and local leaders collaborate to create comprehensive support systems for girls' education and health, building lasting partnerships for change."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg",
      alt: "Making progress",
      story: "Progress happens one step at a time. Our team works tirelessly to implement sustainable solutions that address the root causes of girls' educational challenges, creating lasting change that benefits generations to come."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/making1.jpeg",
      alt: "Community development",
      story: "Community development requires collaboration. Local leaders, parents, and our team work together to identify needs and implement solutions that strengthen community health and education systems for the long term."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg",
      alt: "Urban outreach",
      story: "Our work extends to urban areas where challenges may be different but needs are equally great. Urban outreach programs address the unique health and educational needs of city-dwelling families, ensuring comprehensive coverage across Uganda."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg",
      alt: "Our team",
      story: "Our dedicated team brings passion, expertise, and cultural understanding to every project. From field workers to educators, each team member plays a crucial role in delivering life-changing programs to communities across Uganda."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg",
      alt: "Sanitation facilities",
      story: "Proper sanitation facilities are essential for dignity and health. Our infrastructure improvements include modern toilets, handwashing stations, and waste management systems that create safe, hygienic environments for learning and personal care."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg",
      alt: "Water access",
      story: "Access to clean water transforms lives. Our water projects ensure that schools have reliable sources of safe drinking water, supporting hydration, hygiene, and overall health for students and staff alike."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg",
      alt: "Housing improvement",
      story: "Safe housing supports educational success. Our community development programs include housing improvements that create stable, supportive environments where children can focus on learning and personal growth."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg",
      alt: "Community hustle",
      story: "Community entrepreneurship supports families. Our programs include training in small business skills and microfinance, helping families create sustainable income sources that support children's education and health needs."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/lady-phone.jpeg",
      alt: "Mobile education",
      story: "Mobile technology brings education to remote areas. Our mobile education programs use phones and tablets to deliver health education content, ensuring that even the most isolated communities receive vital information and support."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/founder.jpeg",
      alt: "Founder interaction",
      story: "Direct engagement with communities drives our mission. Our founder regularly visits project sites, listening to community needs and sharing the vision of a Uganda where every child has the opportunity to thrive through health and education."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/Victoria.jpg",
      alt: "Victoria speaking",
      story: "Leadership inspires change. Our founder speaks passionately about the importance of menstrual health education, sharing personal stories and data that motivate communities to embrace comprehensive health education for all children."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/clean-water.jpg",
      alt: "Clean water initiative",
      story: "Clean water initiatives address fundamental health needs. By providing reliable access to safe water, we prevent waterborne diseases and support proper hygiene practices that are essential for effective menstrual health management."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training5.jpg",
      alt: "Training session 5",
      story: "Comprehensive training sessions empower educators with the skills and confidence to deliver impactful health education. These sessions create lasting change in how communities approach menstrual health and girls' education."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training6.jpg",
      alt: "Training session 6",
      story: "Interactive training methods engage participants and ensure knowledge retention. Our training programs use hands-on activities and real-world scenarios to prepare educators for the challenges they'll face in the classroom."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training7.jpg",
      alt: "Training session 7",
      story: "Continuous professional development keeps our educators at the forefront of health education. Regular training updates ensure that our programs reflect the latest research and best practices in menstrual health education."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training8.jpg",
      alt: "Training session 8",
      story: "Peer learning strengthens our training programs. Educators share experiences and strategies, creating a supportive network that enhances the quality and effectiveness of health education across all our partner schools."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training9.jpg",
      alt: "Training session 9",
      story: "Cultural sensitivity training ensures our programs respect and honor local traditions while delivering essential health information. This approach builds trust and acceptance within communities."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/training10.jpg",
      alt: "Training session 10",
      story: "Leadership development is integral to our training programs. We cultivate local champions who can sustain and expand our work, ensuring long-term impact that extends far beyond our direct involvement."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg",
      alt: "Supply distribution",
      story: "Regular distribution of menstrual health supplies ensures girls have consistent access to the products they need. This reliable support removes barriers to education and empowers girls to manage their health with dignity."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/class1.jpeg",
      alt: "Classroom learning",
      story: "Engaged students in the classroom represent the success of our educational approach. When health education is integrated into the curriculum, students receive comprehensive knowledge that supports their overall well-being."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/class2.jpeg",
      alt: "Interactive class",
      story: "Interactive classroom sessions make learning engaging and memorable. Students participate actively in discussions about health and hygiene, building confidence and knowledge that will serve them throughout their lives."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/class3.jpeg",
      alt: "Student participation",
      story: "Student participation drives learning outcomes. Our programs encourage active engagement, questions, and peer discussion, creating dynamic learning environments where every voice is heard and valued."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/child.jpeg",
      alt: "Child empowerment",
      story: "Every child deserves the opportunity to learn and grow without barriers. Our programs provide the knowledge, resources, and support that enable children to reach their full potential."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/child4.jpeg",
      alt: "Young learner",
      story: "Young learners are the future of Uganda. By investing in their health education today, we create a generation of informed, confident individuals who will lead their communities toward better health and prosperity."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/books.jpg",
      alt: "Educational materials",
      story: "Quality educational materials support effective learning. Our programs provide books, visual aids, and interactive resources that make health education accessible and engaging for students of all ages."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/books1.jpeg",
      alt: "Learning resources",
      story: "Comprehensive learning resources ensure that students have access to accurate, age-appropriate health information. These materials support both classroom instruction and independent learning."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/vicky1.jpeg",
      alt: "Founder in action",
      story: "Our founder's dedication drives our mission forward. Through personal engagement with communities and tireless advocacy, she inspires change and builds partnerships that transform lives across Uganda."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/liz1.jpeg",
      alt: "Team member engagement",
      story: "Dedicated team members bring passion and expertise to every project. Their commitment to our mission ensures that programs are delivered with excellence and cultural sensitivity."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg",
      alt: "Community gathering",
      story: "Community gatherings foster dialogue and understanding. These events bring together diverse stakeholders to discuss health education, share experiences, and build collective commitment to girls' empowerment."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg",
      alt: "School environment",
      story: "Safe, supportive school environments enable learning. Our infrastructure improvements create spaces where students feel comfortable, respected, and ready to engage fully in their education."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg",
      alt: "Student success",
      story: "Student success is our ultimate measure of impact. When girls complete their education with confidence and knowledge, they become agents of change in their families and communities."
    },
    {
      src: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg",
      alt: "Joyful learning",
      story: "Joyful learning environments nurture curiosity and growth. When students feel safe and supported, education becomes a source of empowerment and opportunity rather than stress and anxiety."
    },
  ]

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const lightboxRef = useRef<HTMLDivElement | null>(null)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () => setCurrentIndex((i) => (i + 1) % galleryImages.length)
  const prevImage = () => setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)

  // Basic keyboard controls when lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeLightbox()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        nextImage()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevImage()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxOpen])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full px-6 py-3 mb-6">
            <Eye className="h-5 w-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary">Full Gallery</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Our Complete Visual Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore all our project photos and community stories in one comprehensive gallery
          </p>
        </div>
      </section>

      {/* Full Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Link
                key={index}
                href={`/gallery/${index}`}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer block"
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}