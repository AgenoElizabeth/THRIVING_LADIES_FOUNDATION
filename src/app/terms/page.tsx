"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Heart, Shield, Users, Mail, Phone } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3">
              <FileText className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Terms of Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Terms of{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">

            {/* Acceptance of Terms */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Scale className="h-6 w-6 text-primary" />
                  Acceptance of Terms
                </CardTitle>
                <CardDescription className="text-base">
                  Last updated: January 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using the Thriving Ladies Foundation website ("Service"), you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  These Terms of Service apply to all visitors, users, and others who access or use our Service.
                </p>
              </CardContent>
            </Card>

            {/* Description of Service */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Heart className="h-6 w-6 text-secondary" />
                  Description of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Thriving Ladies Foundation provides an online platform for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Information about our charitable programs and initiatives</li>
                  <li>Online donation processing</li>
                  <li>Communication and engagement with our community</li>
                  <li>Educational resources and program updates</li>
                  <li>Volunteer and partnership opportunities</li>
                </ul>
                <p>
                  Our services are provided "as is" and we reserve the right to modify or discontinue any aspect of our services at any time.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-accent" />
                  User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By using our Service, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information when making donations or inquiries</li>
                  <li>Use the Service only for lawful purposes</li>
                  <li>Not attempt to interfere with or disrupt our services</li>
                  <li>Respect the intellectual property rights of Thriving Ladies Foundation</li>
                  <li>Not use the Service to transmit harmful or inappropriate content</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Donations and Payments */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Donations and Payments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  All donations made through our platform are voluntary contributions to support our charitable work.
                  By making a donation, you acknowledge that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Donations are not refundable except as required by law</li>
                  <li>You are authorized to use the payment method provided</li>
                  <li>All donation information provided is accurate</li>
                  <li>You may receive tax documentation for your donation</li>
                  <li>98% of donations go directly to program activities</li>
                </ul>
                <p>
                  We use secure third-party payment processors to handle all transactions.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of
                  Thriving Ladies Foundation and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p>
                  You may not duplicate, copy, or reuse any portion of the HTML/CSS, JavaScript, or visual design elements
                  without express written permission from Thriving Ladies Foundation.
                </p>
              </CardContent>
            </Card>

            {/* Privacy Policy */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="h-6 w-6 text-primary" />
                  Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms by reference,
                  explains how we collect, use, and protect your personal information. By using our Service, you agree to
                  the collection and use of information in accordance with our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  In no event shall Thriving Ladies Foundation, nor its directors, employees, partners, agents, suppliers,
                  or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                  resulting from your use of the Service.
                </p>
                <p>
                  Our total liability shall not exceed the amount paid by you for donations made through our Service in the
                  twelve months preceding the claim.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may terminate or suspend your access to our Service immediately, without prior notice or liability,
                  for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease immediately.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms shall be interpreted and governed by the laws of Uganda, without regard to its conflict of law provisions.
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                  If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
                <CardDescription>
                  If you have any questions about these Terms of Service, please contact us:
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@thrivingladies.org</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+256 788 553 224</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}