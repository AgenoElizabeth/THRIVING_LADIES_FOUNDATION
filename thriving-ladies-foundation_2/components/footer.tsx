"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight, MessageCircle, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-card to-primary/5 border-t py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Organization Info - Full width on mobile */}
            <div className="md:col-span-2 lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white fill-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Thriving Ladies</h4>
                  <p className="text-sm text-muted-foreground">Foundation</p>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering girls through comprehensive menstrual hygiene management programs, education, and community
                support across Uganda.
              </p>
              
              {/* Social Media Links */}
              <div className="space-y-4">
                <h6 className="font-semibold text-foreground text-sm">Follow Us</h6>
                <div className="flex gap-3">
                  <Link 
                    href="https://facebook.com/thrivingladiesfoundation" 
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link 
                    href="https://instagram.com/thrivingladiesfoundation" 
                    className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg flex items-center justify-center transition-all group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link 
                    href="https://tiktok.com/@thrivingladiesfoundation" 
                    className="w-10 h-10 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </Link>
                  <Link 
                    href="https://twitter.com/thrivingladies" 
                    className="w-10 h-10 bg-sky-500 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links - Stacked on mobile */}
            <div className="space-y-6">
              <h5 className="font-semibold text-foreground mb-4">Our Work</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/where-we-work" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Where We Work</Link></li>
                <li><Link href="/what-we-do" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />What We Do</Link></li>
                <li><Link href="/impact-stories" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Impact Stories</Link></li>
                <li><Link href="/projects" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Buwaiswa Primary School</Link></li>
                <li><Link href="/programs" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Education Programs</Link></li>
                <li><Link href="/projects" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Community Outreach</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Our Impact</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h5 className="font-semibold text-foreground mb-4">Get Involved</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/donate" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Donate</Link></li>
                <li><Link href="/questions" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Volunteer</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Partner with Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><ArrowRight className="h-3 w-3" />Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h5 className="font-semibold text-foreground mb-4">Contact</h5>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>Kampala District, Uganda</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <Link href="tel:+256123456789" className="hover:text-primary transition-colors">+256 788 553 224</Link>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <Link href="mailto:info@thrivingladies.org" className="hover:text-primary transition-colors">info@thrivingladies.org</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t mt-8 md:mt-12 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-muted-foreground text-sm text-center md:text-left">
                © 2024 Thriving Ladies Foundation. Transforming lives through innovative projects.
              </p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Enhanced WhatsApp Button */}
        <Link
          href="https://wa.me/256778501066?text=Welcome%20to%20Thriving%20Ladies%20Foundation%2C%20how%20may%20we%20help%20you%20today%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* Pulsing ring animations */}
          <div className="absolute inset-0 rounded-xl bg-green-500 animate-ping opacity-60"></div>
          <div className="absolute inset-0 rounded-xl bg-green-400 animate-pulse opacity-40"></div>
          
          {/* Main button - clean square design with animations */}
          <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce-whatsapp flex items-center justify-center">
            <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
          </div>

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-white shadow-sm"></div>

          {/* Simple tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
              WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </Link>

        {/* Scroll to Top Button - positioned below WhatsApp */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="group w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-slide-up flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            
            {/* Simple tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
                Back to top
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </button>
        )}
      </div>
    </>
  );
}
