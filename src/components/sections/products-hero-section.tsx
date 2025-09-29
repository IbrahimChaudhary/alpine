"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProductsHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values for scroll animations
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]); // Background image zooms in
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Text moves down
  const descriptionOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]); // Description fades out

  return (
    <section
      ref={containerRef}
      className="relative h-screen mt-2 flex items-end justify-start overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        style={{
          scale: backgroundScale,
        }}
        className="absolute inset-0 w-full h-full"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/blog-5.webp')",
          }}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        style={{
          y: textY,
        }}
        className="relative z-10 px-4 sm:px-6 md:px-8 max-w-4xl pb-8 sm:pb-12 md:pb-16"
      >
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white mb-4 sm:mb-6 leading-tight">
          Redefining Portable Audio
        </h1>

        {/* Description with container for hiding */}
        <div className="overflow-hidden max-h-20 sm:max-h-24 md:max-h-32">
          <motion.p
            style={{
              opacity: descriptionOpacity,
            }}
            className="text-lg sm:text-xl md:text-[20px] text-white/90 max-w-3xl mb-1 leading-relaxed"
          >
            Engineered for those who demand more from their audio, this speaker delivers bold sound in a sleek, rugged form—ready for any setting.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}