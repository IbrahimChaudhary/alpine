"use client"

import Link from "next/link"
import { ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"

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
    { name: "Product", href: "#" },
    { name: "Specifications", href: "#" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "#" },
    { name: "Contact", href: "/contact" },
  ]

  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium transition-all duration-200 hover:opacity-60 dark:text-white"
                  style={{
                    color: '#575757',
                    fontSize: '16px'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile CTA Button */}
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 text-[#575757] text-[16px] font-medium hover:text-gray-800 transition-all duration-200 group"
                >
                  Buy now
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}