'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Users,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react"

export default function ImpactStoriesPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [isFlipping, setIsFlipping] = useState(false)

  const stories = [
    {
      title: "Sarah's Journey to Confidence",
      story: "Sarah was a shy 14-year-old girl from Buwaiswa Primary School who missed school frequently due to menstrual discomfort. Through our menstrual hygiene management program, she learned about proper hygiene practices and received reusable sanitary pads. Today, Sarah is a confident young woman who regularly attends school and dreams of becoming a doctor. 'The pads changed my life,' she says. 'Now I can focus on my studies instead of worrying about stains and discomfort.'",
      image: "https://ik.imagekit.io/xjtx0zx5v/images/happy1.jpeg",
      name: "Sarah, 14",
      location: "Buwaiswa Primary School",
      beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg",
      beforeCaption: "Before: Sarah's community faced many challenges"
    },
    {
      title: "A Mother's Hope Restored",
      story: "Grace lost her husband five years ago and struggled to provide for her three children. Our community outreach program connected her with educational resources and small business training. With our support, Grace started a small tailoring business and enrolled her children in our after-school program. 'I thought my dreams died with my husband,' Grace shares. 'But Thriving Ladies Foundation showed me that hope is never lost.' Her children now excel in school and Grace's business supports the entire family.",
      image: "https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg",
      name: "Grace, 42",
      location: "Kampala Community",
      beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg",
      beforeCaption: "Before: Grace struggled to provide for her family"
    },
    {
      title: "From Dropout to Dreamer",
      story: "Michael was on the verge of dropping out of school due to lack of basic supplies and family financial difficulties. Our scholarship program provided him with books, uniforms, and school fees. More importantly, our mentorship program connected him with positive male role models who taught him about responsibility and the importance of education. Today, Michael is in secondary school and aspires to be an engineer. 'Education is my ticket to a better life,' he says proudly.",
      image: "https://ik.imagekit.io/xjtx0zx5v/images/training.jpeg",
      name: "Michael, 16",
      location: "Eastern Uganda",
      beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg",
      beforeCaption: "Before: Poor school facilities affected attendance"
    },
    {
      title: "A Teacher's Transformation",
      story: "Mrs. Nakato had been teaching for 15 years but felt frustrated by the lack of resources in her rural school. Our teacher training program equipped her with modern teaching methods and menstrual hygiene education materials. She now confidently teaches comprehensive health education to both boys and girls. 'I've seen my students change,' she says. 'The girls are more confident, the boys are more understanding, and absenteeism has dropped significantly.' Her school has become a model for other institutions in the region.",
      image: "https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg",
      name: "Mrs. Nakato, 38",
      location: "Rural Primary School",
      beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg",
      beforeCaption: "Before: Limited resources in rural schools"
    },
    {
      title: "Community Unity Through Action",
      story: "The village of Kitgum was divided by poverty and lack of clean water. Our water project not only provided clean water access but also brought the community together for maintenance and education sessions. Parents, teachers, and local leaders worked side by side. 'We learned that when we unite, we can solve our problems,' says village elder Mr. Oola. The project reduced waterborne diseases by 70% and created a sense of community pride and ownership.",
      image: "https://ik.imagekit.io/xjtx0zx5v/images/clean-water.jpg",
      name: "Mr. Oola, 65",
      location: "Kitgum Village",
      beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg",
      beforeCaption: "Before: Lack of clean water affected the entire community"
    },
    {
      title: "Breaking the Cycle of Poverty",
      story: "At 19, Patricia was a single mother struggling to provide for her infant daughter. Our vocational training program taught her tailoring skills and connected her with microfinance opportunities. She now runs a successful dressmaking business that employs three other women. 'I was trapped in poverty,' Patricia explains. 'But the foundation didn't just give me skills—they gave me hope and a future.' Her daughter is now in preschool, and Patricia mentors other young mothers in her community.",
      image: "https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg",
      name: "Patricia, 21",
      location: "Urban Kampala",
      beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg",
      beforeCaption: "Before: Patricia faced daily struggles as a single mother"
    }
  ]

  const openBook = () => {
    setIsBookOpen(true)
    setCurrentPage(0)
  }

  const closeBook = () => {
    setIsBookOpen(false)
  }

  const nextPage = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % stories.length)
      setIsFlipping(false)
    }, 300)
  }

  const prevPage = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + stories.length) % stories.length)
      setIsFlipping(false)
    }, 300)
  }

  const currentStory = stories[currentPage]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-green-900/20 overflow-x-hidden">
      {/* Header */}
      <section className="pt-24 pb-8 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-cyan-500/10 rounded-full px-8 py-4 border-2 border-blue-300/30 dark:border-blue-500/30 shadow-lg backdrop-blur-sm mb-6">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span className="text-base font-bold bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent">Impact Stories</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 bg-clip-text text-transparent drop-shadow-lg">
              Real Lives,
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Real Change
            </span>
          </h1>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Discover the powerful stories of transformation from the people whose lives we've touched.
            Each story is a testament to the impact of your support.
          </p>

          {!isBookOpen && (
            <div className="mt-8">
              <Button
                onClick={openBook}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Open the Book of Hope
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Book */}
      {isBookOpen && (
        <section className="pb-16 px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <Button
                onClick={closeBook}
                variant="outline"
                size="sm"
                className="rounded-full border-2 border-gray-300 hover:border-red-400 hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Book Container */}
            <div className="relative flex justify-center">
              {/* Book Cover/Spine */}
              <div className="relative w-full max-w-6xl h-[600px] bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-900/20 dark:to-amber-800/20 rounded-lg shadow-2xl border-4 border-amber-300 dark:border-amber-700">
                {/* Book Spine */}
                <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-800 to-amber-600 transform -translate-x-1/2 shadow-inner"></div>

                {/* Left Page */}
                <div className={`absolute left-0 top-0 bottom-0 w-1/2 bg-white dark:bg-gray-800 border-r-2 border-amber-300 dark:border-amber-700 p-8 overflow-hidden transition-transform duration-500 ${isFlipping ? 'transform -rotate-y-15' : ''}`}>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200 border-b-2 border-amber-300 pb-2">Before Our Help</h3>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={currentStory.beforeImage}
                          alt={currentStory.beforeCaption}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-sm font-medium">{currentStory.beforeCaption}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        This represents the challenges faced before our intervention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Page */}
                <div className={`absolute right-0 top-0 bottom-0 w-1/2 bg-white dark:bg-gray-800 p-8 overflow-hidden transition-transform duration-500 ${isFlipping ? 'transform rotate-y-15' : ''}`}>
                  <div className="h-full flex flex-col">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-lg font-bold text-green-800 dark:text-green-200 border-b-2 border-green-300 pb-2">After Our Impact</h3>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={currentStory.image}
                          alt={currentStory.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white font-bold">{currentStory.name}</p>
                          <p className="text-white text-sm opacity-90">{currentStory.location}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-green-700 dark:text-green-300">{currentStory.title}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-6">
                          {currentStory.story}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Page Number */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-800 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  {currentPage + 1} / {stories.length}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-8 mt-8">
              <Button
                onClick={prevPage}
                disabled={isFlipping}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20 disabled:opacity-50"
              >
                <ChevronLeft className="h-5 w-5" />
                Previous Page
              </Button>

              <div className="flex gap-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    disabled={isFlipping}
                    aria-label={`Go to page ${index + 1}`}
                    className={`w-4 h-4 rounded-full transition-all duration-300 disabled:opacity-50 ${
                      index === currentPage
                        ? 'bg-gradient-to-r from-blue-500 to-green-500 scale-125'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextPage}
                disabled={isFlipping}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 border-2 border-green-300 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/20 disabled:opacity-50"
              >
                Next Page
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-full px-8 py-4 border-2 border-white/30 shadow-xl">
              <Sparkles className="h-5 w-5 text-white animate-pulse" />
              <span className="text-lg font-bold text-white">Your Support Matters</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white">
              Be Part of More Stories Like These
            </h2>

            <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
              Every donation, every volunteer hour, every partnership helps us write more chapters of hope and transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/donate">
                  <Heart className="mr-2 h-5 w-5 animate-pulse" />
                  Make a Donation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 rounded-full px-8 py-4 text-lg font-bold bg-transparent backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/about">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to About
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}