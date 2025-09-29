"use client";

import Image from "next/image";
import { ChevronRight, AudioLines } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

export function BigSoundSection() {
  const handleBuyNowClick = () => {
    // You can add navigation logic here or keep it simple
    window.location.href = '/products';
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left side - Content */}
          <div className="space-y-2 sm:space-y-8 order-1">

            {/* Badge */}
            <div className="flex items-center gap-2 sm:gap-3">
              <AudioLines className="w-5 h-5 sm:w-6 sm:h-6 text-[#252525] dark:text-[#fafafa]" />
              <span className="text-[20px] text-[#252525] dark:text-[#fafafa]">
                Big Sound, Wherever You Are
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-[24px] lg:text-[36px] font-medium text-[#252525] dark:text-[#fafafa] leading-tight">
              Enjoy crisp highs and full-bodied audio that travels with you.
            </h2>

            {/* Description */}
            <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed">
              Crafted to deliver stunning sound quality—at home, outdoors, or anywhere in between.
            </p>

            {/* Buy now button with animation */}
            <AnimatedButton
              onClick={handleBuyNowClick}
              className="inline-flex items-center gap-2 bg-[#252525] dark:bg-[#fafafa] text-white dark:text-[#252525] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-sm sm:text-[16px] font-medium hover:opacity-90 transition-opacity"
            >
              Buy now
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </AnimatedButton>

          </div>

          {/* Right side - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[360px]  lg:h-[600px] w-full rounded-3xl overflow-hidden">
              <Image
                src="/about-3.webp"
                alt="Professional Audio Mixer"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}