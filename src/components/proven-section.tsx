"use client";

import Image from "next/image";
import { Package } from "lucide-react";
import { SplitText } from "./ui/split-text";

export function ProvenSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12 md:mb-16">
          {/* Badge */}
          <div className="flex items-center gap-2 sm:gap-3 border-[0.5px] border-[#25252510] dark:border-[#fafafa18] rounded-full px-3 sm:px-4 py-2 sm:py-3 w-fit">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-lg sm:text-[20px] text-[#252525] dark:text-[#fafafa]">
              Product
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-12 lg:gap-16 items-start lg:items-center">
            {/* Main heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#252525] dark:text-[#fafafa] leading-tight">
              Proven by People,
              <br className="hidden md:block"/>
              Designed to Perform
            </h2>

            {/* Right side - Description */}
            <div className="flex items-start lg:items-center">
              <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed lg:text-right">
                Backed by a global community of users, our speakers combine
                cutting-edge tech with sleek design—made to stand out.
              </p>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Left - Product Image */}
          <div className="relative w-full h-[350px] md:h-[400px] lg:h-[470px]">
            <Image
              src="/specifications-1.webp"
              alt="Premium Audio Device"
              fill
              className="object-cover rounded-2xl sm:rounded-3xl"
            />
          </div>

          {/* Right - ALPINE Text */}
          <div className="flex items-center justify-center w-full rounded-3xl h-[350px] lg:h-[470px] bg-[#fafafa] dark:bg-[#2a2a2a]">
            <h3 className="dark:text-[#fafafa] text-[#252525] leading-none tracking-widest">
              <SplitText
                text="ALPINE"
                className="text-[60px] font-medium text-center max-w-2xl"
                delay={30}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0, 30px, 0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
                easing={undefined}
                threshold={0.3}
                rootMargin="-100px"
              />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
