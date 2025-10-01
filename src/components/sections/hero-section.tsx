"use client";

import {  useRef, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Check if screen is mobile on mount and resize
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Transform values for parallax effect
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Text shrinks (goes back)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -300]); // Text moves up
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]); // Text fades out

  const imageY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 200 : 400]); // Image moves down - 200px on mobile, 400px on desktop

  return (
    <section
      ref={containerRef}
      className="relative md:min-h-screen flex flex-col items-center justify-center overflow-hidden mt-6"
    >
      {/* Top Text */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          scale: textScale,
          transformOrigin: "center center"
        }}
        className="text-center z-10 px-4 sm:px-8 mt-16 sm:mt-24"
      >
        <h1 className="text-[44px] lg:text-[60px] font-bold text-[#252525] dark:text-[#fafafa] mb-4 sm:mb-6 leading-tight">
          Immersive Sound, Simplified
        </h1>
        <p className="text-[20px] text-[#252525] dark:text-[#fafafa] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
          Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
        </p>

        {/* Buy now button */}
        <AnimatedButton

          className="inline-flex items-center gap-1 bg-[#252525] dark:bg-[#fafafa] text-white dark:text-[#252525] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-opacity"
        >
          Buy now
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </AnimatedButton>
      </motion.div>

      {/* Speaker Image Container - this creates the container boundary */}
      <div className="relative w-full max-w-6xl z-20 overflow-hidden rounded-2xl sm:rounded-3xl mt-8 sm:mt-24 mx-4">
        <motion.div
          style={{ y: imageY }}
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
        >
          <Image
            src="/main-hero.webp"
            alt="Premium Speaker"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

    </section>
  );
}