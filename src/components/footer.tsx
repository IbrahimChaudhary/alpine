"use client"

import Link from "next/link"
import { Instagram, TwitterIcon } from "lucide-react"

/**
 * Footer Component
 *
 * A comprehensive footer with ALPINE branding that includes:
 * - Company and Legal link sections
 * - Large ALPINE background text overlay
 * - Social media links
 * - Copyright information
 * - Dark and light theme support
 */
export function Footer() {
  const companyLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Contact us", href: "/contact" },
  ]

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ]

  return (
    <footer className="relative bg-[#1b1e22] dark:bg-[#DDE0E4] border-t border-border py-12 sm:py-16 md:py-20 overflow-hidden">

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">

          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-white dark:text-[#252525]">
                  ALPINE
                </span>
                <hr className="w-full border-white/10 dark:border-[#252525]/10 md:hidden" />
                <span className="text-[#24272e] dark:text-[#c2ccd8] font-light text-lg hidden sm:block">
                  |
                </span>
                <span className="text-[20px] font-medium text-white dark:text-[#252525]">
                  The Perfect Sound, Anywhere
                </span>
              </div>
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Company Links */}
            <div>
              <h3 className="text-[20px] sm:text-xl  text-white dark:text-[#252525] md:mb-4 mb-2">
                Company
              </h3>
              <ul className="md:space-y-3 space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white dark:text-[#252525] hover:opacity-80 transition-colors duration-200 text-[16px] sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-[20px] sm:text-xl  text-white dark:text-[#252525] md:mb-4 mb-2">
                Legal
              </h3>
              <ul className="md:space-y-3 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white dark:text-[#252525] hover:opacity-80 transition-colors duration-200 text-[16px] sm:text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Large Background Text */}
        <div className="flex items-center justify-center pointer-events-none mb-8 sm:mb-12">
          <div className="text-[5rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] opacity-40 sm:opacity-60 font-bold text-muted-foreground/60 dark:text-muted-foreground/75 select-none leading-none">
            ALPINE
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between md:items-center pt-6 sm:pt-8 border-t border-white/10 dark:border-[#252525]/10 gap-4 sm:gap-0">
          {/* Copyright */}
          <p className="text-white dark:text-[#252525] opacity-70 text-[20px] sm:text-base text-left">
            © 2025. All rights reserved. ALPINE
          </p>

          {/* Social Links */}
          <div className="flex flex-row items-center gap-4 sm:gap-6">
            <span className="text-white dark:text-[#252525] opacity-70 text-[16px]">
              @Shadcnblocks.com
            </span>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white dark:text-[#252525] opacity-70 hover:opacity-100 transition-opacity duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white dark:text-[#252525] opacity-70 hover:opacity-100 transition-opacity duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}