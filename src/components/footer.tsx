"use client"

import Link from "next/link"
import { Twitter, Instagram, X, TwitterIcon } from "lucide-react"

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
    { name: "Blog", href: "#" },
    { name: "Contact us", href: "#" },
  ]

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ]

  return (
    <footer className="relative bg-[#1b1e22] dark:bg-[#DDE0E4] border-t border-border py-16 overflow-hidden">
     

      {/* Footer Content */}
      <div className="  max-w-7xl  px-4 sm:px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Brand Section */}
         
           
            <Link href="/" className="text-3xl flex  gap-4 font-bold text-white dark:text-[#252525] mb-4 ">
              ALPINE <span className="text-[#24272e] dark:text-[#c2ccd8] font-light text-xl mt-1"> | </span> <span className="text-[20px] font-medium mt-2"> The Perfect Sound, Anywhere </span>
            </Link>
          
          

 
        <div className="flex gap-36 w-full">
          {/* Company Links */}
          <div>
            <h3 className="text-[20px] font-semibold text-white dark:text-[#252525]  mb-3">
              Company
            </h3>
            <ul className=" space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className=" text-white dark:text-[#252525] hover:opacity-80 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Legal Links */}
          <div>
            <h3 className="text-[20px] dark:text-[#252525] font-semibold text-white mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white dark:text-[#252525] hover:opacity-80 transition-colors duration-200"
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
        <div className=" flex items-center justify-center pointer-events-none">
        <div className="text-[20rem] md:text-[20rem]  opacity-60 font-bold text-muted-foreground/60 dark:text-muted-foreground/75 select-none leading-none">
          ALPINE
        </div>
      </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 ">
          {/* Copyright */}
          <p className="text-[20px] text-white dark:text-[#252525] opacity-70 text-sm mb-4 md:mb-0">
            © 2025. All rights reserved. ALPINE
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <span className="text-[16px] text-white dark:text-[#252525] opacity-70 text-sm">
              @Shadcnblocks.com
            </span>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white dark:text-[#252525] opacity-70 hover:text-foreground transition-colors duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white dark:text-[#252525] opacity-70 hover:text-foreground transition-colors duration-200"
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