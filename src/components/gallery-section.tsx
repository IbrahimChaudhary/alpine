"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function GallerySection() {
  const [activeImage, setActiveImage] = useState(0);
  const [hoveredThumbnail, setHoveredThumbnail] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const handleImageChange = (newIndex: number) => {
    if (newIndex === activeImage) return;
    
    // Calculate distance between current and target image
    const distance = Math.abs(newIndex - activeImage);
    
    // Set direction: 1 for forward (down to up), -1 for backward (up to down)
    setDirection(newIndex > activeImage ? 1 : -1);
    setActiveImage(newIndex);
    
    // Return distance for dynamic duration
    return distance;
  };

  const galleryImages = [
    {
      id: 1,
      src: "/gallery-1.webp",
      alt: "Modern Black Speaker",
    },
    {
      id: 2,
      src: "/gallery-2.webp",
      alt: "Premium Audio System",
    },
    {
      id: 3,
      src: "/gallery-3.webp",
      alt: "Wireless Speaker Setup",
    },
    {
      id: 4,
      src: "/blog-1.webp",
      alt: "Studio Monitor",
    },
    {
      id: 5,
      src: "/blog-5.webp",
      alt: "Compact Speaker Design",
    },
  ];

  // Animation variants for vertical sliding
  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 1,
    }),
  };

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-12">
          {/* Badge */}
          <div className="flex border-[0.5px] border-[#2525252f] dark:border-[#fafafa4b] rounded-full px-4 py-2 w-fit items-center justify-center gap-2 mb-8">
            <MessageSquare className="w-5 h-5 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-[20px] text-[#252525] dark:text-[#fafafa]">
              In reality
            </span>
          </div>

          <div className="grid grid-cols-2 justify-between items-center">
            {/* Main Title */}
            <h2 className="text-4xl md:text-[44px] text-[#252525] dark:text-[#fafafa]">
              Timeless Elegance
            </h2>

            {/* Description */}
            <p className="text-[20px] text-[#252525] text-right dark:text-[#fafafa] leading-tight">
              Enhance your space with a perfect blend of modern design and warm ambiance. Our speaker brings style and sophistication
            </p>
          </div>
        </div>

        {/* Gallery Layout */}
        <div className="relative h-[600px]">

          {/* Main Image Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            
            {/* Animated Images */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeImage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "tween",
                  ease: [0.25, 0.1, 0.25, 1],
                  duration: 0.6
                }}
                className="absolute inset-0"
              >
                <Image
                  src={galleryImages[activeImage].src}
                  alt={galleryImages[activeImage].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail Overlay */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-20">
              
              {/* Animated Ring that follows hover */}
              <motion.div
                className="absolute ring-1 p-3 ring-white shadow-lg pointer-events-none"
                style={{
                  width: '60px',
                  height: '40px',
                  borderRadius: '50px',
                }}
                animate={{
                  y: (hoveredThumbnail !== null ? hoveredThumbnail : activeImage) * 52, // 40px height + 3px gap = 43px
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8
                }}
              />

              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative cursor-pointer overflow-hidden"
                  style={{
                    width: '60px',
                    height: '40px',
                    borderRadius: '50px',
                  }}
                  whileHover={{ 
                    scale: 1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: hoveredThumbnail === index ? 1.25 : 
                           hoveredThumbnail !== null ? 1.1 : 1.0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onClick={() => handleImageChange(index)}
                  onMouseEnter={() => setHoveredThumbnail(index)}
                  onMouseLeave={() => setHoveredThumbnail(null)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Active indicator overlay - only show on actual active image */}
                  {activeImage === index && hoveredThumbnail === null && (
                    <motion.div 
                      className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"
                      style={{ borderRadius: '50px' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
              
                </motion.div>
              ))}
            </div>

            {/* Overlay gradient for better contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 z-10" />
          </div>

        </div>

      </div>
    </section>
  );
}