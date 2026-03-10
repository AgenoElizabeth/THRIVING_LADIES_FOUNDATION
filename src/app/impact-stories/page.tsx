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
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null)

  const stories = [
    {
      title: "Our Journey to Confidence",
      story: "Through the menstrual hygiene management program, we have learned about proper hygiene practices and received reusable sanitary pads. Today, we are confident young women who regularly attend school and dream of becoming the future leaders of Uganda.'  We can now focus on our studies instead of worrying about stains and discomfort.'",
      // image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.49.01.jpeg?updatedAt=1771330516345",
      name: "Buwaiswa Primary School Girls",
      location: "Buwaiswa Primary School",
      // beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg",
      beforeCaption: "Before: We as pupils of Buwaiswa primary school faced alot of challenges"
    },
    // {
    //   title: "A Mother's Hope Restored",
    //   story: "Grace lost her husband five years ago and struggled to provide for her three children. Our community outreach program connected her with educational resources and small business training. With our support, Grace started a small tailoring business and enrolled her children in our after-school program. 'I thought my dreams died with my husband,' Grace shares. 'But Thriving Ladies Foundation showed me that hope is never lost.' Her children now excel in school and Grace's business supports the entire family.",
    //   // image: "https://ik.imagekit.io/xjtx0zx5v/Visit%204%20Group1?updatedAt=1771502256136",
    //   name: "Grace, 42",
    //   location: "Kampala Community",
    //   // beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/house1.jpg",
    //   beforeCaption: "Before: Grace struggled to provide for her family"
    // },
    {
      title: "From Dropout to Dreamer",
      story: "I was on the verge of dropping out of school due to lack of basic supplies and family financial difficulties. Our scholarship program provided him with books, uniforms, and school fees. More importantly, our mentorship program connected him with positive male role models who taught him about responsibility and the importance of education. Today, Michael is in secondary school and aspires to be an engineer. 'Education is my ticket to a better life,' he says proudly.",
      // image: "https://ik.imagekit.io/xjtx0zx5v/WhatsApp%20Image%202026-02-17%20at%2014.41.45%20(1).jpeg?updatedAt=1771330517456",
      name: "Michael, 16",
      location: "Eastern Uganda",
      // beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/toilet2.jpg",
      beforeCaption: "Before: Poor school facilities affected attendance"
    },
    {
      title: "A Teacher's Transformation",
      story: "Mrs. Nakato had been teaching for 15 years but felt frustrated by the lack of resources in her rural school. Our teacher training program equipped her with modern teaching methods and menstrual hygiene education materials. She now confidently teaches comprehensive health education to both boys and girls. 'I've seen my pupils change,' she says. 'The girls are more confident, the boys are more understanding, and absenteeism has dropped significantly.' Her school has become a model for other institutions in the region.",
      // image: "https://ik.imagekit.io/xjtx0zx5v/images/staff1.jpeg",
      name: "Mrs. Nakato, 38",
      location: "Rural Primary School",
      // beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/slum1.jpg",
      beforeCaption: "Before: Limited resources in rural schools"
    },
    {
      title: "Community Unity Through Action",
      story: "The village of Kitgum was divided by poverty and lack of clean water. Our water project not only provided clean water access but also brought the community together for maintenance and education sessions. Parents, teachers, and local leaders worked side by side. 'We learned that when we unite, we can solve our problems,' says village elder Mr. Oola. The project reduced waterborne diseases by 70% and created a sense of community pride and ownership.",
      // image: "https://ik.imagekit.io/xjtx0zx5v/images/clean-water.jpg",
      name: "Mr. Oola, 65",
      location: "Kitgum Village",
      // beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/water.jpeg",
      beforeCaption: "Before: Lack of clean water affected the entire community"
    },
    {
      title: "Breaking the Cycle of Poverty",
      story: "At 19, Patricia was a single mother struggling to provide for her infant daughter. Our vocational training program taught her tailoring skills and connected her with microfinance opportunities. She now runs a successful dressmaking business that employs three other women. 'I was trapped in poverty,' Patricia explains. 'But the foundation didn't just give me skills—they gave me hope and a future.' Her daughter is now in preschool, and Patricia mentors other young mothers in her community.",
      // image: "https://ik.imagekit.io/xjtx0zx5v/images/making.jpeg",
      name: "Patricia, 21",
      location: "Urban Kampala",
      // beforeImage: "https://ik.imagekit.io/xjtx0zx5v/images/hustle1.jpg",
      beforeCaption: "Before: Patricia faced daily struggles as a single mother"
    }
  ]

  const playFlipSound = () => {
    try {
      const audio = new Audio('https://www.soundjay.com/misc/sounds/page-flip-01a.mp3')
      audio.volume = 0.5
      audio.play().catch(e => console.log("Audio play failed:", e))
    } catch (error) {
      console.log("Audio error:", error)
    }
  }

  const openBook = () => {
    setIsBookOpen(true)
    setCurrentPage(0)
    playFlipSound()
  }

  const closeBook = () => {
    setIsBookOpen(false)
    playFlipSound()
  }

  const nextPage = () => {
    if (isFlipping || currentPage >= stories.length - 1) return
    setIsFlipping(true)
    setFlipDirection('next')
    playFlipSound()
    setTimeout(() => {
      setCurrentPage((prev) => prev + 1)
      setIsFlipping(false)
      setFlipDirection(null)
    }, 600)
  }

  const prevPage = () => {
    if (isFlipping || currentPage === 0) return
    setIsFlipping(true)
    setFlipDirection('prev')
    playFlipSound()
    setTimeout(() => {
      setCurrentPage((prev) => prev - 1)
      setIsFlipping(false)
      setFlipDirection(null)
    }, 600)
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
        <section className="pb-16 px-6 perspective-2000">
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
            <div className="relative flex justify-center py-10 scale-90 sm:scale-100 transition-transform duration-500">
              <div className="book-shadow relative w-full max-w-5xl h-[650px] flex preserve-3d">

                {/* Book Spine (3D) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 transform -translate-x-1/2 z-50 rounded-sm shadow-inner overflow-hidden">
                  <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)]" />
                </div>

                {/* Left Page (Static Backdrop) */}
                <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-white dark:bg-gray-800 rounded-l-2xl shadow-inner-left border-l-8 border-t-4 border-b-4 border-amber-800 dark:border-amber-900 p-8 overflow-hidden">
                  <div className="h-full flex flex-col space-y-6 opacity-60">
                    <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 border-b-2 border-amber-200 pb-2">Previous Chapter</h3>
                    <div className="relative aspect-video rounded-xl bg-gray-100 dark:bg-gray-700 animate-pulse" />
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-full" />
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4" />
                    </div>
                  </div>
                </div>

                {/* Right Page (Static Backdrop) */}
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white dark:bg-gray-800 rounded-r-2xl shadow-inner-right border-r-8 border-t-4 border-b-4 border-amber-800 dark:border-amber-900 p-8 overflow-hidden">
                  <div className="h-full flex flex-col space-y-6 opacity-60">
                    <h3 className="text-xl font-bold text-green-800 dark:text-green-400 border-b-2 border-green-200 pb-2">Next Chapter</h3>
                    <div className="relative aspect-video rounded-xl bg-gray-100 dark:bg-gray-700 animate-pulse" />
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-full" />
                      <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-3/4" />
                    </div>
                  </div>
                </div>

                {/* Active Flip Page (The animated part) */}
                <div
                  className={`absolute right-0 top-0 bottom-0 w-1/2 z-40 transition-all duration-600 preserve-3d origin-left ${isFlipping && flipDirection === 'next' ? 'rotate-y--180' :
                    isFlipping && flipDirection === 'prev' ? 'rotate-y-0' : 'rotate-y-0'
                    }`}
                  style={{
                    transform: isFlipping && flipDirection === 'next' ? 'rotateY(-180deg)' : 'rotateY(0deg)',
                    visibility: isFlipping ? 'visible' : 'visible'
                  }}
                >
                  {/* Front of flipping page (Content being hidden) */}
                  <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 p-10 shadow-page-right rounded-r-2xl border-t-2 border-b-2 border-gray-100 dark:border-gray-700">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 space-y-6">
                        <div className="flex items-center justify-between border-b-2 border-green-100 dark:border-green-900 pb-4">
                          <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">{currentStory.title}</h3>
                          <Heart className="text-red-500 h-6 w-6 animate-pulse" />
                        </div>

                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                          {/* <Image
                            src={currentStory.image}
                            alt={currentStory.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            priority
                          /> */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-6">
                            <p className="text-white text-2xl font-black tracking-tight">{currentStory.name}</p>
                            <div className="flex items-center gap-2 text-green-400 text-sm font-bold uppercase tracking-widest">
                              <span className="w-4 h-0.5 bg-green-400" />
                              {currentStory.location}
                            </div>
                          </div>
                        </div>

                        <div className="relative bg-green-50/50 dark:bg-green-900/20 p-6 rounded-2xl border-l-4 border-green-500">
                          <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium italic">
                            "{currentStory.story}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of flipping page (Next content coming in) */}
                  <div className="absolute inset-0 backface-hidden bg-white dark:bg-gray-800 p-10 shadow-page-left rounded-l-2xl border-t-2 border-b-2 border-gray-100 dark:border-gray-700 rotate-y-180" style={{ transform: 'rotateY(180deg)' }}>
                    <div className="h-full flex flex-col space-y-8">
                      <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-400 border-b-2 border-amber-100 pb-4">The Challenge</h3>
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl grayscale-50 opacity-80">
                        {/* <Image
                          src={currentStory.beforeImage}
                          alt="Context Image"
                          fill
                          className="object-cover"
                        /> */}
                        <div className="absolute inset-0 bg-black/40" />
                        <p className="absolute bottom-4 left-4 text-white font-bold bg-black/50 px-3 py-1 rounded-md">{currentStory.beforeCaption}</p>
                      </div>
                      <p className="text-xl text-gray-600 dark:text-gray-400 font-serif leading-relaxed line-clamp-4">
                        {currentStory.story.split('.')[0]}. {currentStory.story.split('.')[1]}.
                        Understanding the roots of these challenges helps us measure the true magnitude of transformation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Page Decoration Layers */}
                <div className="absolute right-1 top-2 bottom-2 w-1 bg-gray-200 dark:bg-gray-700 rounded-r shadow-sm z-30" />
                <div className="absolute right-2 top-4 bottom-4 w-1 bg-gray-100 dark:bg-gray-800 rounded-r shadow-sm z-20" />
                <div className="absolute left-1 top-2 bottom-2 w-1 bg-gray-200 dark:bg-gray-700 rounded-l shadow-sm z-30" />

              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col items-center gap-8 mt-4">
              <div className="flex items-center gap-6">
                <Button
                  onClick={prevPage}
                  disabled={isFlipping || currentPage === 0}
                  variant="outline"
                  size="icon"
                  className="group relative overflow-hidden rounded-full border-4 border-amber-200 text-amber-700 hover:text-white h-16 w-16 transition-all duration-300 disabled:opacity-30 flex items-center justify-center p-0"
                >
                  <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <ChevronLeft className="h-8 w-8 relative z-10" />
                </Button>

                <div className="flex flex-col items-center">
                  <div className="text-3xl font-black text-amber-900 dark:text-amber-200 mb-2 font-serif">
                    {currentPage + 1} / {stories.length}
                  </div>
                  <div className="flex gap-3">
                    {stories.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (index !== currentPage) {
                            playFlipSound()
                            setCurrentPage(index)
                          }
                        }}
                        className={`transition-all duration-500 rounded-full ${index === currentPage
                          ? 'w-12 h-3 bg-gradient-to-r from-amber-600 to-green-600 shadow-lg'
                          : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-amber-400'
                          }`}
                        aria-label={`Go to chapter ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <Button
                  onClick={nextPage}
                  disabled={isFlipping || currentPage === stories.length - 1}
                  variant="outline"
                  size="icon"
                  className="group relative overflow-hidden rounded-full border-4 border-green-200 text-green-700 hover:text-white h-16 w-16 transition-all duration-300 disabled:opacity-30 flex items-center justify-center p-0"
                >
                  <div className="absolute inset-0 bg-green-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <ChevronRight className="h-8 w-8 relative z-10" />
                </Button>
              </div>

              <p className="text-amber-800 dark:text-amber-400 font-bold italic animate-bounce">
                Click the arrows to turn the pages
              </p>
            </div>
          </div>

          <style jsx global>{`
            .perspective-2000 {
              perspective: 2000px;
            }
            .preserve-3d {
              transform-style: preserve-3d;
            }
            .backface-hidden {
              backface-visibility: hidden;
            }
            .rotate-y-180 {
              transform: rotateY(180deg);
            }
            .rotate-y--180 {
              transform: rotateY(-180deg);
            }
            .origin-left {
              transform-origin: left center;
            }
            .book-shadow {
              filter: drop-shadow(0 20px 50px rgba(0,0,0,0.3));
            }
            .shadow-page-right {
              box-shadow: inset -50px 0 50px rgba(0,0,0,0.05), 10px 10px 20px rgba(0,0,0,0.1);
            }
            .shadow-page-left {
              box-shadow: inset 50px 0 50px rgba(0,0,0,0.05), -10px 10px 20px rgba(0,0,0,0.1);
            }
            .shadow-inner-left {
              box-shadow: inset -30px 0 50px rgba(0,0,0,0.1);
            }
            .shadow-inner-right {
              box-shadow: inset 30px 0 50px rgba(0,0,0,0.1);
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
          `}</style>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10" />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
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
