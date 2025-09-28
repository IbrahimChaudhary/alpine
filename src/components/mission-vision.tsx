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
    <section className="py-20 px-4 sm:px-6  ">
      <div className="max-w-7xl">
        <div className="flex gap-18 items-start">
          {/* Left Column - Team Image */}
          <div className="relative w-full">
            {/* Optional: Add your actual team image here */}

            <Image
              src="/about-hero-2.webp"
              alt="ALPINE Team"
              width={800}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12 w-[70%] mt-6">
            {/* Section Header */}
            <div className="">
              {/* Badge */}
              <div className="flex gap-6  space-x-2">
                <div className="w-6 h-6 ">
                  <AudioLines className="w-8 h-8 text-[#252525] dark:text-[#FAFAFA]" />
                </div>
                <span className="text-[#252525] dark:text-[#FAFAFA] font-medium text-xl">
                  Who We Are
                </span>
              </div>
            </div>

            {/* Mission Section */}
            <div className="space-y-6">
              <h2 className="text-[36px] md:text-4xl lg:text-5xl font-semibold text-[#252525] dark:text-[#FAFAFA] leading-tight">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-[#252525] dark:text-[#FAFAFA] leading-[2.2rem]">
                To craft beautifully designed speakers that deliver powerful,
                crystal-clear sound—whether you&apos;re relaxing at home, exploring
                the outdoors, or hosting a party. Sound that moves with you,
                wherever life takes you.
              </p>
            </div>

            {/* Vision Section */}
            <div className="space-y-6">
              <h2 className="text-[36px] md:text-4xl lg:text-5xl font-semibold text-[#252525] dark:text-[#FAFAFA] leading-tight">
                Our Vision
              </h2>
              <p className="text-lg md:text-xl text-[#252525] dark:text-[#FAFAFA] leading-[2.2rem]">
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
