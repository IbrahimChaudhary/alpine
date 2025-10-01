"use client"

import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useState, useEffect } from "react"

/**
 * Navigation Item Interface
 */
interface NavItem {
  name: string
  href: string
}

/**
 * Navbar Component - Redesigned
 *
 * A modern, unique navigation bar with:
 * - Centered logo with decorative elements
 * - Pill-shaped navigation container
 * - Icon-based CTA
 * - Smooth animations
 * - Glassmorphism effects
 */
export function Navbar() {
  // Navigation menu items
  const navItems: NavItem[] = [
    { name: "Product", href: "/products" },
    { name: "Specifications", href: "/specifications" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ]

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${
      scrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navigation Container */}
        <div className={`relative bg-background/80 dark:bg-background/80 backdrop-blur-lg border border-border/50 rounded-full shadow-lg transition-all duration-300 ${
          scrolled ? 'shadow-xl' : ''
        }`}>
          <div className="flex items-center justify-between px-4 sm:px-6 h-16 sm:h-20">

            {/* Left: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-1 flex-1">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-full transition-all duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Center: Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group mx-4"
            >
              <div className="w-2 h-2 bg-foreground rounded-full group-hover:scale-150 transition-transform duration-300" />
              <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                ALPINE
              </span>
              <div className="w-2 h-2 bg-foreground rounded-full group-hover:scale-150 transition-transform duration-300" />
            </Link>

            {/* Right: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-1 flex-1 justify-end">
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 lg:px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-full transition-all duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Far Right: Actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />

              {/* Shop Button */}
              <Button
                size="icon"
                className="rounded-full w-10 h-10 bg-foreground text-background hover:bg-foreground/90"
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-background/95 backdrop-blur-lg border border-border/50 rounded-3xl shadow-xl p-6 animate-in slide-in-from-top-5 duration-300">
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-xl transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6 pt-6 border-t border-border/50">
              <Button
                className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90 gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-4 w-4" />
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}