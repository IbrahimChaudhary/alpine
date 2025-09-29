"use client";

import Image from "next/image";

export function InnovationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-[#fafafa] dark:bg-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Main Content */}
        <div className="text-center relative z-10 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#252525] dark:text-[#fafafa] leading-tight max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>Our latest innovation</span>
              {/* First floating speaker */}
              <span className="inline-block">
                <div className="flex items-center justify-center">
                  <Image
                    src="/feat-2.webp"
                    alt="Speaker"
                    width={40}
                    height={40}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
              </span>
            <span className="relative inline-block">
              in portable speakers
            </span>
          </h2>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#252525] dark:text-[#fafafa] leading-tight max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span>combines superior sound quality</span>
              {/* Second floating speaker */}
                <div className="flex items-center justify-center">
                  <Image
                    src="/feat-1.webp"
                    alt="Speaker"
                    width={40}
                    height={40}
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
          </h3>

          <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#252525] dark:text-[#fafafa] leading-relaxed max-w-5xl mx-auto">
            with unmatched durability
          </h4>
        </div>

       
      </div>
    </section>
  );
}