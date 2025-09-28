"use client";

import Image from "next/image";
import { ChevronRight,AudioLines ,Smartphone   } from "lucide-react";
import { AnimatedButton } from "./animated-button";

export function SpeakerFeatures() {
  return (
    <section className="py-20 px-8 ">
      <div className="max-w-7xl mx-auto space-y-48">

        {/* First Feature Card */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-3 text-[#252525] dark:text-[#fafafa] w-fit py-3">
              <span className="text-[20px] flex items-center gap-2">  <AudioLines className="w-6 h-6" /> The Perfect Sound, Anywhere</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-[36px] font-medium text-[#252525] dark:text-[#fafafa] leading-tight">
              Experience crystal-clear audio with deep bass and immersive sound.
            </h2>

            {/* Description */}
            <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed ">
              Our smart speaker is designed to fit your space with rich, high-fidelity sound—whether you&apos;re at home or on the go.
            </p>

            {/* CTA Button */}
            <AnimatedButton
            
            className="bg-[#252525] text-[16px] dark:bg-[#fafafa] text-[#fafafa] dark:text-[#252525] px-6 py-4 rounded-full font-medium  flex items-center gap-2 group">
              Buy now
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </AnimatedButton>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className=" overflow-hidden">
              <Image
                src="/feature-1.webp"
                alt="Crystal-clear audio speaker"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Feature Card */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="relative lg:order-1">
            <div className="overflow-hidden">
              <Image
                src="/feature-2.webp"
                alt="Smart speaker with modern design"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 lg:order-2">
            {/* Badge */}
            <div className="flex items-center gap-3 text-[#252525] dark:text-[#fafafa] w-fit py-3">
              <span className="text-[20px] flex items-center gap-2"> <Smartphone  className="w-6 h-6" /> Smart, Sleek, Powerful</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-[36px] font-medium text-[#252525] dark:text-white leading-tight">
              Seamless connectivity, voice control, and a sleek, modern design make this speaker the perfect addition to any room.
            </h2>

            {/* Description */}
            <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed ">
              Designed for modern living life-upward stands premium sound with intuitive controls.
            </p>

            {/* CTA Button */}
            <AnimatedButton
            
            className="bg-[#252525] text-[16px] dark:bg-[#fafafa] text-[#fafafa] dark:text-[#252525] px-6 py-4 rounded-full font-medium  flex items-center gap-2 group">
              Buy now
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </AnimatedButton>
          </div>
        </div>

      </div>
    </section>
  );
}