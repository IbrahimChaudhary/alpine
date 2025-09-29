"use client"

import { ChevronRight } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

/**
 * Hero Section Component
 *
 * A prominent hero section featuring:
 * - Large attention-grabbing headline
 * - Descriptive secondary text
 * - Call-to-action button with discount offer and animated border
 * - Two-column responsive layout
 * - Dark and light theme support
 * - Professional typography and spacing
 */
export function DiscountCta() {
  const handleCTAClick = () => {
    // Add your click logic here
    console.log('CTA clicked!')
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#fafafa] dark:bg-[#2a2a2a] mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-[44px] lg:text-[60px] font-bold text-[#252525] dark:text-[#FAFAFA] leading-tight">
              Get your perfect{" "}
              <br className="hidden sm:block" />
              speaker now!
            </h1>

            {/* CTA Button with Animated Border */}
            <AnimatedButton
              onClick={handleCTAClick}
              className="bg-[#252527] dark:bg-[#FBFBFB] text-[#FAFAFA] dark:text-[#252525] hover:bg-foreground/90 rounded-full px-5 py-4 text-[16px] font-medium transition-all duration-200 group flex items-center gap-3"
            >
              Get yours - 10% off
              <div className="bg-white dark:bg-[#252525] rounded-full p-2 text-[#252525] dark:text-[#FAFAFA]">
                <ChevronRight className="w-4 h-4 text-[#252525] dark:text-[#FAFAFA] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </AnimatedButton>
          </div>

          {/* Right Column - Secondary Content */}
          <div className="space-y-6">
            {/* Secondary Heading */}
            <h2 className="text-[28px] font-bold text-[#252525] dark:text-[#FAFAFA]">
              Bring every room together
            </h2>

            {/* Description */}
            <p className="text-[20px] text-[#252525] dark:text-[#FAFAFA] leading-relaxed">
              Experience our latest portable speaker innovation, delivering exceptional sound quality,
              a comfortable design, and sleek design.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}