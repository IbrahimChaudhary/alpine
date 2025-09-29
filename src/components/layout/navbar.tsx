"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
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
 * Navbar Component
 *
 * A responsive navigation bar with the following features:
 * - SONIC brand logo
 * - Main navigation links
 * - Theme toggle (dark/light mode)
 * - Call-to-action button
 * - Mobile responsive design
 * - Smooth transitions and hover effects
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

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <nav className=" w-full mt-3 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold text-foreground hover:opacity-80 transition-opacity duration-200"
            >
              ALPINE
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className=" flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-1 py-2 text-base font-[500]  transition-all duration-200 relative group hover:opacity-70 dark:text-white text-[#575757]"
                
                >
                  {item.name}

                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Call-to-Action Button */}
            <Button
            size={"lg"}
              variant="outline"
              className="hidden sm:flex items-center justify-center gap-2  px-6 py-7 rounded-full border-[1px] border-gray-300 text-[#575757] dark:text-white dark:bg-transparent text-[16px] bg-none font-medium hover:text-gray-800 transition-all duration-200 group"
            >
              Buy now
              <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>

            {/* Mobile Menu Button with 2-line hamburger */}
            <button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-6 h-0.5 bg-[#575757] dark:bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-[#575757] dark:bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Background overlay */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel - slides from right */}
            <div
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1a1a1a] shadow-2xl transform transition-transform duration-300 ease-out ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
          

              {/* Menu content with grid layout */}
              <div className="flex h-full">
                {/* Left side - Navigation */}
                <div className="flex flex-col h-full pt-20 pb-8 px-8 flex-1">
                  {/* Navigation links */}
                  <nav className="flex-1 space-y-8">
                    {navItems.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block text-2xl font-light text-white/80 hover:text-white transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Bottom CTA Button */}
                  <div className="mt-auto pt-8">
                    <Button
                      variant="secondary"
                      className="w-full flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-200 group"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Buy now
                      <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

             
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}