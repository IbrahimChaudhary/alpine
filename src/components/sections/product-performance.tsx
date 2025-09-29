"use client";

import Image from "next/image";
import { AudioLines } from "lucide-react";
import { performanceFeatures } from "@/data/features";

export function ProductPerformance() {

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-2 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left side - Image */}
          <div className="relative ">
            <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src="/product-6.webp"
                alt="High-Quality Speaker"
                fill
                className="object-cover"
              />

              {/* Floating badge */}
              <div className="absolute w-[80%] md:w-fit md:justify-normal justify-center bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 bg-[#fafafa] dark:bg-[#252525] rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg flex items-center gap-2 sm:gap-3">
                <AudioLines className="w-5 h-5 text-[#252525] dark:text-[#fafafa]" />
                <span className="text-[16px] md:text-[18px] text-center md:text-left font-medium text-[#252525] dark:text-[#fafafa]">
                  High-Quality Sound
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 w-full">
            <h2 className="text-[24px] lg:text-[44px] text-[#252525] dark:text-[#fafafa] mb-8 sm:mb-12 md:mb-16 lg:mb-18 leading-tight text-left">
              Designed for Pure Performance
            </h2>

            <div className="relative px-4 sm:px-6 ">
              {/* Horizontal divider line */}
              <div className="absolute left-4 sm:left-6 right-4 sm:right-6 top-1/2 h-px bg-[#25252510] dark:bg-[#fafafa18] hidden md:block"></div>

              {/* Vertical divider line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#25252523] dark:bg-[#fafafa18] hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {performanceFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`space-y-3 ${
                      index < 2 ? 'md:pb-4' : 'md:pt-4'
                    } ${
                      index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'
                    }`}
                  >
                  {/* Feature number and title */}
                  <div className="flex items-center gap-4 lg:mb-5 mb-8">
                    <div className="text-[20px] font-medium text-[#252525] dark:text-[#fafafa]">
                      {feature.number}
                    </div>
                    <div className="text-[20px] font-medium text-[#252525] dark:text-[#fafafa]">
                      {feature.title}
                    </div>
                  </div>

                  {/* Feature description */}
                  <p className="text-[16px] text-[#252525] dark:text-[#fafafa] leading-relaxed">
                    {feature.description}
                  </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}