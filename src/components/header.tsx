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
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image 
                    src="https://ik.imagekit.io/xjtx0zx5v/images/logo.png" 
                    alt="Thriving Ladies Foundation Logo" 
                    width={64} 
                    height={64} 
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Thriving Ladies</h1>
                <p className="text-sm text-muted-foreground font-medium">Foundation</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground font-semibold">Home</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="/programs" className="text-muted-foreground hover:text-foreground transition-colors">Programs</Link>
              <Link href="/questions" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
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
                  <Link 
                    href="/about" 
                    className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/projects" 
                    className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/programs"
                    className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Programs
                  </Link>
                  <Link
                    href="/questions"
                    className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground py-2 px-4 rounded-lg hover:bg-muted transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
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
