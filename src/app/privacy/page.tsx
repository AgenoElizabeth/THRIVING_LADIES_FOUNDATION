"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, Mail, Phone } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full px-6 py-3">
              <Shield className="h-5 w-5 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent">Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Your Privacy{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Matters to Us
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We are committed to protecting your personal information and being transparent about our data practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">

            {/* Introduction */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Eye className="h-6 w-6 text-primary" />
                  Introduction
                </CardTitle>
                <CardDescription className="text-base">
                  Last updated: January 2025
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Thriving Ladies Foundation ("we," "our," or "us") respects your privacy and is committed to protecting your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p>
                  By using our website or services, you agree to the collection and use of information in accordance with this policy.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Lock className="h-6 w-6 text-secondary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Personal Information</h4>
                  <p className="text-muted-foreground mb-3">
                    We may collect personally identifiable information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Donation information and payment details</li>
                    <li>Communication preferences</li>
                    <li>Information provided in forms or surveys</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Automatically Collected Information</h4>
                  <p className="text-muted-foreground mb-3">
                    When you visit our website, we may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>IP address and location information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Your Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="h-6 w-6 text-accent" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Processing donations and providing receipts</li>
                  <li>Communicating with you about our programs and impact</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Sending newsletters and updates (with your consent)</li>
                  <li>Conducting research and analysis to improve our programs</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist our operations</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access,
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>
                <p className="text-muted-foreground">
                  We regularly review and update our security practices to ensure the protection of your information.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction or objection to processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p className="text-muted-foreground">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
                <CardDescription>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
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

            {/* Updates */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page
                  and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}