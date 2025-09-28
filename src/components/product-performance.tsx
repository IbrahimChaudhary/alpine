"use client";

import Image from "next/image";
import { Volume2 } from "lucide-react";

export function ProductPerformance() {
  const features = [
    {
      number: "01",
      title: "Powerful Sound",
      description: "Enjoy rich bass and clear highs for a truly immersive audio experience."
    },
    {
      number: "02",
      title: "Wireless Freedom",
      description: "Instant Bluetooth connection for smooth, hassle-free playback."
    },
    {
      number: "03",
      title: "Long Battery Life",
      description: "Get up to 20 hours of nonstop playtime on a single charge."
    },
    {
      number: "04",
      title: "Compact & Portable",
      description: "Sleek, lightweight design—perfect for music on the go."
    }
  ];

  return (
    <section className="py-24 px-2">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Left side - Image */}
          <div className="relative">
            <div className="relative h-[400px] w-[400px] rounded-3xl overflow-hidden ">
              <Image
                src="/product-6.webp"
                alt="High-Quality Speaker"
                fill
                className="object-cover"
              />

              {/* Floating badge */}
              <div className="absolute bottom-6 left-20 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-[#252525] dark:text-[#fafafa]" />
                <span className="text-[18px] font-medium text-[#252525] dark:text-[#fafafa]">
                  High-Quality Sound
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-[44px] text-[#252525] dark:text-[#fafafa] mb-18 leading-tight">
              Designed for Pure Performance
            </h2>

            <div className="relative px-6">
              {/* Horizontal divider line */}
              <div className="absolute left-6 right-6 top-1/2 h-px bg-[#25252510] dark:bg-[#fafafa18] hidden md:block"></div>

              {/* Vertical divider line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#25252523] dark:bg-[#fafafa18] hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`space-y-2 ${
                      index < 2 ? 'pb-4' : 'pt-4'
                    } ${
                      index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'
                    }`}
                  >
                  {/* Feature number and title */}
                  <div className="flex items-center gap-4 mb-5">
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