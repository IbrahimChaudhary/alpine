"use client";

import {  useRef } from "react";
import Image from "next/image";
import { AnimatedButton } from "./animated-button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for parallax effect
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Text shrinks (goes back)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -300]); // Text moves up
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]); // Text fades out

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 400]); // Image moves down into container

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Top Text */}
      <motion.div
        style={{
          y: textY,
          opacity: textOpacity,
          scale: textScale,
          transformOrigin: "center center"
        }}
        className="text-center z-10 px-8 mt-24"
      >
        <h1 className="text-5xl md:text-[60px] font-bold text-[#252525] dark:text-[#fafafa] mb-6">
          Immersive Sound, Simplified
        </h1>
        <p className="text-xl md:text-[20px] text-[#252525] dark:text-[#fafafa] max-w-3xl mx-auto leading-relaxed mb-8">
          Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
        </p>

        {/* Buy now button */}
        <AnimatedButton
          
          className="inline-flex items-center gap-1 bg-[#252525] dark:bg-[#fafafa] text-white dark:text-[#252525] px-6 py-4 rounded-full text-lg font-medium  transition-opacity"
        >
          Buy now
          <ChevronRight className="w-6 h-6" />
        </AnimatedButton>
      </motion.div>

      {/* Speaker Image Container - this creates the container boundary */}
      <div className="relative w-full max-w-6xl z-20 overflow-hidden rounded-3xl mt-24">
        <motion.div
          style={{  y: imageY }}
          className="relative w-full h-[600px]"
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