"use client";

import Image from "next/image";
import { AudioLines } from "lucide-react";

/**
 * Mission Vision Section Component
 *
 * A section showcasing the company's mission and vision with:
 * - Team photo on the left
 * - Mission and vision content on the right
 * - "Who We Are" badge/header
 * - Two-column responsive layout
 * - Theme-aware styling
 */
export function MissionVision() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-18 items-start">
          {/* Left Column - Team Image */}
          <div className="relative w-full ">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/about-hero-2.webp"
                alt="ALPINE Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12 order-1 lg:order-2">
            {/* Section Header */}
            <div className="space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="flex items-center gap-3 sm:gap-4">
                <AudioLines className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#252525] dark:text-[#FAFAFA]" />
                <span className="text-[#252525] dark:text-[#FAFAFA] font-medium text-lg sm:text-xl">
                  Who We Are
                </span>
              </div>
            </div>

            {/* Mission Section */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252525] dark:text-[#FAFAFA] leading-tight">
                Our Mission
              </h2>
              <p className="text-xl text-[#252525] dark:text-[#FAFAFA] leading-relaxed">
                To craft beautifully designed speakers that deliver powerful,
                crystal-clear sound—whether you&apos;re relaxing at home, exploring
                the outdoors, or hosting a party. Sound that moves with you,
                wherever life takes you.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#252525] dark:text-[#FAFAFA] leading-tight">
                Our Vision
              </h2>
              <p className="text-xl text-[#252525] dark:text-[#FAFAFA] leading-relaxed">
                To become a global leader in portable audio innovation—blending
                performance, durability, and design into one seamless experience
                that connects people through the power of sound.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
