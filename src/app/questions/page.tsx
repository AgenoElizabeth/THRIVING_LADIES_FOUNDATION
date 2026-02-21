"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageCircle,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Users,
  Heart,
  BookOpen,
  DollarSign,
  Calendar,
  Star
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const faqs = [
  {
    question: "How does Thriving Ladies Foundation help girls in Uganda?",
    answer: "We provide comprehensive support including menstrual health education, reusable sanitary pad distribution, school supplies, mentorship programs, and community outreach to break the cycle of poverty through education."
  },
  {
    question: "What percentage of donations actually reach the programs?",
    answer: "98% of all donations go directly to our programs. We maintain extremely low administrative costs through volunteer leadership and strategic partnerships."
  },
  {
    question: "How can I volunteer with your organization?",
    answer: "We welcome volunteers for various roles including program implementation, administrative support, and community outreach. Contact us to learn about current opportunities."
  },
  {
    question: "Do you accept international donations?",
    answer: "Yes, we accept donations from anywhere in the world. All international donations are processed securely and go directly to our programs in Uganda."
  },
  {
    question: "How can I track the impact of my donation?",
    answer: "We provide quarterly impact reports and can share specific stories about how your donation has made a difference. Contact us for personalized updates."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept MTN Mobile Money, Airtel Money, bank transfers, and international cards. All payments are processed securely."
  }
]

export default function QuestionsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast({
          title: "Message Sent Successfully",
          description: "We'll get back to you within 24 hours."
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          category: ""
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3">
              <HelpCircle className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Get Answers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Have Questions?{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our work, or reach out directly.
              We're committed to transparency and open communication.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to the most common questions about our work and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Contact Us Directly
                </h2>
                <p className="text-lg text-muted-foreground">
                  Can't find what you're looking for? Send us a message and we'll respond promptly.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">info@thrivingladies.org</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground">+256 414 123 456</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-5PM EAT</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">Kampala, Uganda</p>
                    <p className="text-sm text-muted-foreground">By appointment only</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24hrs</div>
                      <div className="text-sm text-muted-foreground">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-secondary">100%</div>
                      <div className="text-sm text-muted-foreground">Questions Answered</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+256 XXX XXX XXX"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="donation">Donation Related</SelectItem>
                          <SelectItem value="volunteer">Volunteering</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder="Brief subject line"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Other Ways to Get Involved
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond asking questions, there are many ways to support our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Make a Donation</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your financial support directly impacts lives in Uganda.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/donate">Donate Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Volunteer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our team of dedicated volunteers making a difference.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/contact">Get Involved</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Learn More</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Read our impact stories and program details.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/about">Our Story</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}