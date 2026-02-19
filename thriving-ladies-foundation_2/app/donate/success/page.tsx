import { Suspense } from 'react'
import { CheckCircle, Heart, Share2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function SuccessContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Success Icon */}
        <div className="relative">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Payment Successful!
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Thank you for your generous donation to Thriving Ladies Foundation.
            Your support helps transform lives across Uganda.
          </p>
        </div>

        {/* Impact Summary */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">50+</div>
              <div className="text-sm text-gray-600">Girls Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-gray-600">Schools Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">1000+</div>
              <div className="text-sm text-gray-600">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">5</div>
              <div className="text-sm text-gray-600">Districts Reached</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/impact-stories">
              <Heart className="mr-2 h-5 w-5" />
              See Our Impact
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-green-300 text-green-700 hover:bg-green-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <Link href="/projects">
              <Share2 className="mr-2 h-5 w-5" />
              Explore Projects
            </Link>
          </Button>
        </div>

        {/* Thank You Message */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
          <p className="text-gray-700 italic">
            "Your donation today becomes hope tomorrow. Together, we're building a brighter future
            for girls across Uganda. Thank you for being part of this transformation."
          </p>
          <p className="text-sm text-gray-500 mt-2">
            - Thriving Ladies Foundation Team
          </p>
        </div>

        {/* Social Share */}
        <div className="pt-4">
          <p className="text-sm text-gray-500 mb-3">Share your impact</p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="text-blue-600 hover:bg-blue-50">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DonateSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}