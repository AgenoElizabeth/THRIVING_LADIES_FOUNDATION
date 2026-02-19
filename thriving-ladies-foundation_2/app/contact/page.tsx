"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { Send, Phone, Mail, MapPin, Clock, Globe, Users, Heart, X } from 'lucide-react'

export default function ContactPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(true)
  const [showChatbot, setShowChatbot] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const chatSteps = [
    {
      id: 'greeting',
      message: "Hi! I'm here to help you get in touch with us. What's your name?",
      field: 'name',
      placeholder: 'Enter your name...',
    },
    {
      id: 'email',
      message: `Nice to meet you! What's your email address so we can respond to you?`,
      field: 'email',
      placeholder: 'Enter your email...',
    },
    {
      id: 'message',
      message: "Perfect! Now, what would you like to tell us about?",
      field: 'message',
      placeholder: 'Type your message...',
      isTextarea: true
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Show button when user scrolls past first section
      if (scrollPosition > windowHeight * 0.3) {
        setShowFloatingButton(true)
      } else {
        setShowFloatingButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

    // Modal focus management, Escape to close, and simple focus trap
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!showChatbot) return
        if (e.key === 'Escape') {
          setShowChatbot(false)
        }
        if (e.key === 'Tab' && modalRef.current) {
          const focusable = modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
          )
          if (focusable.length === 0) return
          const first = focusable[0]
          const last = focusable[focusable.length - 1]
          const active = document.activeElement as HTMLElement | null
          if (e.shiftKey) {
            if (active === first) {
              e.preventDefault()
              last.focus()
            }
          } else {
            if (active === last) {
              e.preventDefault()
              first.focus()
            }
          }
        }
      }

      if (showChatbot) {
        document.addEventListener('keydown', handleKeyDown)
        // Focus the input when opening
        setTimeout(() => {
          const input = document.getElementById('chatInput') as HTMLElement | null
          input?.focus()
        }, 0)
      } else {
        // return focus to trigger when closing
        triggerButtonRef.current?.focus()
      }

      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [showChatbot])

  const handleStepSubmit = () => {
    if (currentStep < chatSteps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Final submit
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowChatbot(false)
        setCurrentStep(0)
        setFormData({ name: '', email: '', message: '' })
        setShowSuccessMessage(false)
      }, 3000)
    }
  }

  const handleInputChange = (value: string) => {
    const currentField = chatSteps[currentStep].field
    setFormData(prev => ({
      ...prev,
      [currentField]: value
    }))
  }

  const currentStepData = chatSteps[currentStep]
  const isEmailStep = currentStepData?.field === 'email'
  const emailValue = formData.email.trim()
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
  const isStepValid = isEmailStep
    ? emailValid
    : (formData[currentStepData?.field as keyof typeof formData]?.trim().length ?? 0) > 0
  const widthClass = currentStep === 0 ? 'w-1/3' : currentStep === 1 ? 'w-2/3' : 'w-full'

  return (
    <div className="min-h-screen  ">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="https://ik.imagekit.io/xjtx0zx5v/images/distribution1.jpeg" 
            alt="Woman on phone providing support"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-background/10 to-background/20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Let's Connect</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 animate-fadeIn">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to make a difference? We'd love to hear from you. Whether you want to volunteer, donate, or learn more about our programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300" asChild>
                <a href="tel:+256788553224">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-primary/10 transition-all duration-300" asChild>
                <a href="mailto:info@thrivingladies.org">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        {/* Contact Methods Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the method that works best for you. We're here to help and respond quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card via-card to-primary/5 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Call Us</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Speak directly with our team for immediate assistance and personalized support.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-primary text-lg">+256 788 553 224 / +256 779 153 111</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card via-card to-secondary/5 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Send us a detailed message and we'll respond within 2 hours during business hours.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-secondary text-lg">info@thrivingladies.org</p>
                  <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card via-card to-accent/5 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Visit Us</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Come see our work in person and meet the amazing women we serve every day.
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-accent text-lg">Mutungo Avenue</p>
                  <p className="text-sm text-muted-foreground">Community Center, CC 12345</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Connect Section */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                How to Connect With Us
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                We make it easy to reach out. Use our Quick Message button for instant contact, or choose any method below.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
                <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Clock className="h-6 w-6 text-primary" />
                      Office Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Mon - Fri</span>
                        <span className="text-primary font-semibold">9 AM - 6 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Saturday</span>
                        <span className="text-secondary font-semibold">10 AM - 4 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sunday</span>
                        <span className="text-muted-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                      <Globe className="h-6 w-6 text-secondary" />
                      Our Impact
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-accent" />
                        <span><strong>500+</strong> Women Empowered</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Heart className="h-5 w-5 text-primary" />
                        <span><strong>50+</strong> Active Volunteers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-secondary" />
                        <span><strong>10+</strong> Community Programs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-600/20 rounded-2xl p-6 text-center border border-red-500/20">
                  <h4 className="text-lg font-bold mb-2 text-red-600 dark:text-red-400">Emergency Contact</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need immediate assistance? Our emergency line is available 24/7.
                  </p>
                  <Button variant="outline" className="font-semibold border-red-500/30 text-red-600 hover:bg-red-500/10">
                    <Phone className="mr-2 h-4 w-4" />
                    +256 788 553 224-HELP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Chatbot Modal */}
      {showChatbot && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="bg-background rounded-3xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden animate-slideUp border border-primary/20"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quick-message-title"
            id="quick-message-modal"
            ref={modalRef}
          >
            {!showSuccessMessage ? (
              <>
                {/* Enhanced Header */}
                <div className="bg-gradient-to-r from-primary via-secondary to-accent p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                        <Send className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 id="quick-message-title" className="text-2xl font-bold">Quick Message</h3>
                        <p className="text-white/90 text-sm">Fast & Easy Contact</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowChatbot(false)}
                      className="text-white/80 hover:text-white transition-all duration-200 hover:bg-white/10 rounded-full p-2"
                      aria-label="Close chat"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-6 relative z-10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 text-sm font-medium">Step {currentStep + 1} of {chatSteps.length}</span>
                      <span className="text-white/90 text-sm">{Math.round(((currentStep + 1) / chatSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className={`bg-white rounded-full h-2 progress-bar ${widthClass}`}></div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Chat Content */}
                <div className="p-8">
                  {/* Bot Avatar & Message */}
                  <div className="mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl rounded-tl-sm p-6 shadow-sm border border-muted/30">
                          <p className="text-base leading-relaxed font-medium">
                            {currentStep === 0 
                              ? currentStepData?.message 
                              : currentStepData?.message.replace('Nice to meet you!', `Nice to meet you, ${formData.name}!`)
                            }
                          </p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 ml-2">Thriving Ladies Assistant</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Input Field */}
                  <div className="space-y-4">
                    <Label htmlFor="chatInput" className="text-base font-semibold flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Your Response
                    </Label>
                    {currentStepData?.isTextarea ? (
                      <Textarea
                        id="chatInput"
                        placeholder={currentStepData.placeholder}
                        value={formData[currentStepData.field as keyof typeof formData]}
                        onChange={(e) => handleInputChange(e.target.value)}
                        rows={5}
                        className="resize-none focus:ring-2 focus:ring-primary/30 border-2 border-muted/30 focus:border-primary/50 rounded-xl text-base p-4 transition-all duration-300"
                      />
                    ) : (
                      <Input
                        id="chatInput"
                        type={currentStepData?.field === 'email' ? 'email' : 'text'}
                        placeholder={currentStepData?.placeholder}
                        value={formData[currentStepData?.field as keyof typeof formData]}
                        onChange={(e) => handleInputChange(e.target.value)}
                        aria-invalid={isEmailStep ? (!emailValid && formData.email.trim().length > 0) : undefined}
                        aria-describedby={isEmailStep ? 'email-help' : undefined}
                        className="focus:ring-2 focus:ring-primary/30 border-2 border-muted/30 focus:border-primary/50 rounded-xl text-base h-14 px-4 transition-all duration-300"
                      />
                    )}
                    {isEmailStep && formData.email.trim().length > 0 && !emailValid && (
                      <p id="email-help" className="text-sm text-red-500">Please enter a valid email address.</p>
                    )}
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex gap-4 mt-8">
                    {currentStep > 0 && (
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="flex-1 h-12 border-2 hover:bg-muted/50 transition-all duration-300 rounded-xl font-medium"
                      >
                        ← Back
                      </Button>
                    )}
                    <Button
                      onClick={handleStepSubmit}
                      disabled={!isStepValid}
                      className={`${currentStep === 0 ? 'w-full' : 'flex-1'} h-12 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-xl transition-all duration-300 font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed animate-gradient`}
                    >
                      {currentStep === chatSteps.length - 1 ? 'Send Message' : 'Continue'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              /* Enhanced Success Message */
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Message Sent Successfully!
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-primary">{formData.name}</span>! 
                  We'll get back to you within 24 hours.
                </p>
                <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    Check your email at <span className="font-medium text-primary">{formData.email}</span> for confirmation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Chat Button - Animated Gradient */}
      {showFloatingButton && (
        <div className="fixed top-1/2 right-3 z-50 transform -translate-y-1/2">
          <a
            href="sms:+256778501066?body=Welcome%20to%20Thriving%20Ladies%20Foundation%2C%20how%20may%20we%20help%20you%20today%3F"
            ref={triggerButtonRef as any}
            className="group relative shine-effect bg-gradient-to-r from-gray-900 via-black to-gray-900 hover:from-primary hover:via-secondary hover:to-accent text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 w-14 h-16 flex items-center justify-center animate-gradient"
            aria-label="Send quick SMS message"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Telegram icon (Send icon) */}
            <Send className="relative z-10 h-6 w-6 transition-transform duration-300 group-hover:rotate-180" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
                Quick Message
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-t-4 border-b-4 border-transparent border-l-gray-900"></div>
              </div>
            </div>
          </a>
        </div>
      )}
    </div>
  )
}