"use client"

import Image from "next/image"

/**
 * About Hero Section Component
 *
 * A hero section for the About page featuring:
 * - Large compelling headline about sound design
 * - Descriptive text about the company's mission
 * - Product image showcase
 * - Two-column responsive layout
 * - Theme-aware styling
 */
export function AboutHero() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-28 mt-8 sm:mt-12">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 ">
            {/* Main Heading */}
            <h1 className="text-[44px] md:text-5xl lg:text-[60px] font-bold text-[#252525] dark:text-[#FAFAFA] leading-tight">
              Sound Designed{" "}
              <br className="" />
              for Life
            </h1>

            {/* Description */}
            <p className="text-xl text-[#252525] dark:text-[#FAFAFA]  leading-relaxed max-w-lg">
              At Sonic, we&apos;re redefining how you experience audio—merging premium sound quality with sleek, durable design. Built for everyday moments and extraordinary adventures, our speakers are crafted to deliver deep, immersive sound wherever life takes you.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative ">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="/about-hero-1.png"
                alt="ALPINE Premium Speaker"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}