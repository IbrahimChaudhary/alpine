"use client";

import Image from "next/image";

export function InnovationSection() {
  return (
    <section className="py-20 px-8 bg-[#fafafa] dark:bg-[#2a2a2a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">

        {/* Main Content */}
        <div className="text-center  relative z-10">
          <h2 className="text-4xl flex items-center justify-center gap-4 lg:text-[44px] font-bold text-[#252525] dark:text-[#fafafa] leading-tight max-w-5xl mx-auto">
            Our latest innovation
              {/* First floating speaker */}
              <span className="">
                <div className=" flex items-center lg:w-20 lg:h-20 justify-center">
                  <Image
                    src="/feat-2.webp"
                    alt="Speaker"
                    width={40}
                    height={40}
                    className="w-8 h-8 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
              </span>
            <span className="relative inline-block">
              in portable speakers
            </span>
          </h2>

          <h3 className="text-4xl flex items-center justify-center gap-4 md:text-[44px] font-bold text-[#252525] dark:text-[#fafafa] leading-tight max-w-5xl mx-auto">
            combines superior sound quality{" "}
              {/* Second floating speaker */}
            
                <div className=" flex items-center lg:w-20 lg:h-20 justify-center">
                  <Image
                    src="/feat-1.webp"
                    alt="Speaker"
                    width={40}
                    height={40}
                    className="w-8 h-8 lg:w-20 lg:h-20 object-contain"
                  />
                </div>
           
           
          </h3>

          <h4 className="text-4xl md:text-[44px] font-bold text-[#252525] dark:text-[#fafafa] leading-relaxed max-w-5xl mx-auto">
            with unmatched durability
          </h4>
        </div>

       
      </div>
    </section>
  );
}