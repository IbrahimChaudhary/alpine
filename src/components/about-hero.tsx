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
    <section className="py-20 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 mt-12">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#252525] dark:text-[#FAFAFA] leading-tight">
              Sound Designed{" "}
              <br className="hidden sm:block" />
              for Life
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#252525] dark:text-[#FAFAFA] font-medium leading-relaxed max-w-lg">
              At Sonic, we're redefining how you experience audio—merging premium sound quality with sleek, durable design. Built for everyday moments and extraordinary adventures, our speakers are crafted to deliver deep, immersive sound wherever life takes you.
            </p>
          </div>

          {/* Right Column - Image */}
          <div>
            {/* Optional: Add your actual image here */}
            <Image
              src="/about-hero-1.png"
              alt="ALPINE Premium Speaker"
              width={100}
              height={400}
              className="w-[90%] h-[90%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}