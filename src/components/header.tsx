"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, ChevronDown, Phone, Mail, MapPin, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border/50 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5"></div>
        <div className="relative container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center group">
              <Link href="/" className="flex items-center gap-6 hover:opacity-95 transition-opacity">
                <div className="relative">
                  <div className="w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center p-2 bg-white/80 dark:bg-white/10 rounded-2xl backdrop-blur-md border-2 border-primary/20 shadow-xl group-hover:scale-105 transition-all duration-500">
                    <Image
                      src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png"
                      alt="Thriving Ladies Foundation Logo"
                      width={128}
                      height={128}
                      className="object-contain filter drop-shadow-md"
                      priority
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse border-4 border-white shadow-lg z-10"></div>
                </div>
                <div className="hidden sm:flex flex-col">
                  <h1 className="text-2xl lg:text-3xl font-black tracking-tighter text-foreground leading-none">
                    THRIVING <span className="text-primary">LADIES</span>
                  </h1>
                  <p className="text-sm font-bold text-muted-foreground tracking-[0.3em] uppercase mt-1 opacity-80">Foundation</p>
                </div>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground font-semibold">Home</Link>
              <div className="relative group">
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  About <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-64 py-2 flex flex-col">
                    <Link href="/about#mission" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Our Mission</Link>
                    <Link href="/about#programs" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Three Pillars of Lasting Change</Link>
                    <Link href="/about#team" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Our Team</Link>
                    <Link href="/about#video" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Video Story</Link>
                    <Link href="/about#values" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Core Values</Link>
                    <Link href="/about#impact-numbers" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Our Impact</Link>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <Link href="/what-we-do" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  What We Do <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-48 py-2 flex flex-col">
                    <Link href="/what-we-do#education" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Education & Girls' Empowerment</Link>
                    <Link href="/what-we-do#economic" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Economic Empowerment</Link>
                    <Link href="/what-we-do#environment" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Climate Action</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link href="/where-we-work" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Where We Work <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-56 py-2 flex flex-col">
                    <Link href="/where-we-work#rural-schools" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Rural Schools</Link>
                    <Link href="/where-we-work#community-centers" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Community Centers</Link>
                    <Link href="/where-we-work#urban-outreach" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Urban Outreach</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Projects <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-48 py-2 flex flex-col">
                    <Link href="/projects#featured" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Featured Project</Link>
                    <Link href="/projects#all-projects" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">All Projects</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Programs <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-56 py-2 flex flex-col">
                    <Link href="/programs#menstrual-health" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Menstrual Health</Link>
                    <Link href="/programs#water-sanitation" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Water & Sanitation</Link>
                    <Link href="/programs#girls-empowerment" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Girls' Empowerment</Link>
                    <Link href="/programs#environment" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Environment & Agri</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link href="/community-voices" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Voices <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-48 py-2 flex flex-col">
                    <Link href="/community-voices#magazine" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">TLF Magazine</Link>
                    <Link href="/community-voices#community" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Community</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link href="/questions" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  FAQ <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-48 py-2 flex flex-col">
                    <Link href="/questions#faq" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
                    <Link href="/questions#contact-form" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Form</Link>
                    <Link href="/questions#get-involved" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Get Involved</Link>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Contact <ChevronDown className="h-4 w-4" />
                </Link>
                <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-background border border-border/50 rounded-lg shadow-xl w-48 py-2 flex flex-col">
                    <Link href="/contact#methods" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Methods</Link>
                    <Link href="/contact#connect" className="px-4 py-2 hover:bg-muted text-sm text-muted-foreground hover:text-foreground transition-colors">Connect</Link>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-9 h-9 p-0"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
              <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-xl animate-slide-down-menu">
              <div className="container mx-auto px-6 py-6">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="text-foreground font-semibold py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      About
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/about#mission" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Our Mission</Link>
                      <Link href="/about#programs" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Three Pillars of Lasting Change</Link>
                      <Link href="/about#team" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
                      <Link href="/about#video" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Video Story</Link>
                      <Link href="/about#values" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Core Values</Link>
                      <Link href="/about#impact-numbers" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Our Impact</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/what-we-do"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      What We Do
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/what-we-do#education" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Education & Girls' Empowerment</Link>
                      <Link href="/what-we-do#economic" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Economic Empowerment</Link>
                      <Link href="/what-we-do#environment" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Climate Action</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/where-we-work"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Where We Work
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/where-we-work#rural-schools" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Rural Schools</Link>
                      <Link href="/where-we-work#community-centers" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Community Centers</Link>
                      <Link href="/where-we-work#urban-outreach" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Urban Outreach</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/projects"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Projects
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/projects#featured" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Featured Project</Link>
                      <Link href="/projects#all-projects" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>All Projects</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/programs"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Programs
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/programs#menstrual-health" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Menstrual Health</Link>
                      <Link href="/programs#water-sanitation" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Water & Sanitation</Link>
                      <Link href="/programs#girls-empowerment" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Girls' Empowerment</Link>
                      <Link href="/programs#environment" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Environment & Agri</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/community-voices"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Voices
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/community-voices#magazine" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>TLF Magazine</Link>
                      <Link href="/community-voices#community" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Community</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/questions"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/questions#faq" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
                      <Link href="/questions#contact-form" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Contact Form</Link>
                      <Link href="/questions#get-involved" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</Link>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="/contact"
                      className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Contact
                    </Link>
                    <div className="pl-6 flex flex-col space-y-2 border-l border-border/50 ml-6">
                      <Link href="/contact#methods" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Methods</Link>
                      <Link href="/contact#connect" className="text-sm text-muted-foreground hover:text-foreground py-1" onClick={() => setIsMobileMenuOpen(false)}>Connect</Link>
                    </div>
                  </div>
                  <div className="border-t pt-4 mt-4 flex flex-col space-y-3">
                    <Button
                      variant="outline"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="w-full justify-center"
                    >
                      {theme === "light" ? (
                        <>
                          <Moon className="h-4 w-4 mr-2" />
                          Dark Mode
                        </>
                      ) : (
                        <>
                          <Sun className="h-4 w-4 mr-2" />
                          Light Mode
                        </>
                      )}
                    </Button>
                    <Button
                      asChild
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link href="/donate">Donate Now</Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
