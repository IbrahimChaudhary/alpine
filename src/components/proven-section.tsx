"use client";

import Image from "next/image";
import { Package } from "lucide-react";
import { SplitText } from "./ui/split-text";

export function ProvenSection() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Content */}
        <div className="space-y-8 mb-16">
          {/* Badge */}
          <div className="flex items-center gap-3 border-[0.5px] border-[#25252510] dark:border-[#fafafa18] rounded-full px-4 py-3 w-fit">
            <Package className="w-5 h-5 opacity-80 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-[20px] text-[#252525] dark:text-[#fafafa]">
              Product
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Main heading */}
            <h2 className="text-4xl md:text-[44px] text-[#252525] dark:text-[#fafafa] leading-tight">
              Proven by People,
              <br />
              Designed to Perform
            </h2>

            {/* Right side - Description */}
            <div className="flex items-center">
              <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed text-right">
                Backed by a global community of users, our speakers combine
                cutting-edge tech with sleek design—made to stand out.
              </p>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="flex gap-8 items-center rounded-3xl overflow-hidden ">
          {/* Left - Product Image */}
          <div className="relative w-[650px] h-[470px] ">
            <Image
              src="/specifications-1.webp"
              alt="Premium Audio Device"
              fill
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Right - SONIC Text */}
          <div className="flex items-center justify-center w-[100%] rounded-3xl h-[400px] lg:h-[470px] bg-[#fafafa] dark:bg-[#2a2a2a]">
            <h3 className="  dark:text-[#fafafa] text-[#252525] leading-none tracking-tight">
              <SplitText
                text="ALPINE"
                className="text-2xl md:text-[60px] font-medium text-center max-w-2xl"
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
