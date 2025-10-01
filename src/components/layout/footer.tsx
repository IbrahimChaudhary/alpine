"use client"

import Link from "next/link"
import { Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react"

/**
 * Footer Component - Redesigned
 *
 * A modern, unique footer with:
 * - Wave/curved top border
 * - Newsletter signup
 * - Multi-column layout
 * - Social proof elements
 * - Modern card-based design
 */
export function Footer() {
  const productLinks = [
    { name: "Specifications", href: "/specifications" },
    { name: "Pricing", href: "/pricing" },
    { name: "Features", href: "/products" },
  ]

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20">
      {/* Curved Top Border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 sm:h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-muted/20"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">

        {/* Newsletter Section */}
        <div className="mb-16 bg-card border border-border rounded-3xl p-6 sm:p-8 lg:p-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Stay in the Loop
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg">
                Get exclusive updates on new products, special offers, and sound tech news.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
              />
              <button className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-foreground rounded-full" />
                <span className="text-3xl font-bold text-foreground">ALPINE</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Crafting premium audio experiences that elevate your everyday moments.
              Where innovation meets exceptional sound quality.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@alpine.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ALPINE. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden sm:inline">Follow us:</span>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-foreground hover:text-background flex items-center justify-center transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-foreground hover:text-background flex items-center justify-center transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 rounded-full bg-muted hover:bg-foreground hover:text-background flex items-center justify-center transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}