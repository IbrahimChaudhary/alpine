"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, DollarSign } from "lucide-react";
import { DiscountCta } from "@/components/sections/discount-cta";
import { AnimatedButton } from "@/components/ui/animated-button";
import { products } from "@/data/products";
import { AlpineV0Menu } from "@/components/AlpineV0Menu";

export default function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const centerCardIndex = 1;

  const getCardBackground = (index: number, isMobile: boolean = false) => {
    // On mobile, all cards have full background
    if (isMobile) {
      return 'h-full';
    }

    if (hoveredCard === null) {
      // Initial state: center card full, others half
      return index === centerCardIndex ? 'h-full' : 'h-[320px]';
    } else {
      // Hover state: hovered card full, center card (if not hovered) half, others half
      if (hoveredCard === index) {
        return 'h-full';
      } else if (index === centerCardIndex) {
        return 'h-[320px]';
      } else {
        return 'h-[320px]';
      }
    }
  };

  return (
    <div className="min-h-screen ">
      {/* V0 Menu Button */}
      <AlpineV0Menu page="pricing" />

      {/* Header Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-26 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-2 sm:gap-3 text-[#252525] dark:text-white/80 w-fit border-[0.5px] border-[#25252518] dark:border-[#fafafa10] rounded-full px-3 sm:px-4 py-2 sm:py-3 mb-6 sm:mb-8">
            <span className="text-lg flex items-center gap-2">
              <DollarSign className="w-4 h-4 sm:w-[20px] sm:h-[20px] opacity-75" /> Pricing
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
            {/* Left - Heading */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#252525] dark:text-white leading-tight">
                Simple Pricing,
                <br className="hidden md:block"/>
                Exceptional Value
              </h1>
            </div>

            {/* Right - Description */}
            <div>
              <p className="text-[20px] text-[#252525] lg:text-right dark:text-[#fafafa] leading-relaxed">
                We believe great sound shouldn&apos;t come with hidden costs or confusing plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-18">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Product Card Container */}
                <div className="relative h-[450px] sm:h-[480px] md:h-[500px] flex flex-col">

                  {/* Dynamic Background - Full on mobile, dynamic on desktop */}
                  <div
                    className={`absolute top-0 left-0 right-0 bg-[#fafafa] dark:bg-[#2a2a2a] rounded-xl sm:rounded-2xl transition-all duration-700 ease-out
                      ${isMobile ? 'h-full' : getCardBackground(index)}`}
                  />

                  {/* Card Content */}
                  <div className="relative z-10 px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 h-full flex flex-col">

                    {/* Product Image */}
                    <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className={`w-full pb-6 sm:pb-8 md:pb-9 h-full object-cover transition-transform duration-500 ease-in-out ${
                          hoveredCard === index ? 'scale-110' : 'scale-100'
                        }`}
                      />

                      {/* Buy Now Button Overlay - Only on desktop */}
                      {!isMobile && ((hoveredCard === null && index === centerCardIndex) || hoveredCard === index) && (
                        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 animate-fadeIn">
                          <AnimatedButton
                            className="w-full bg-[#252525] dark:bg-[#fafafa] text-[#fafafa] dark:text-[#252525] py-3 sm:py-4 px-4 sm:px-6 md:px-8 rounded-full font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2 group text-sm sm:text-base"
                            containerClassName="w-full"
                          >
                            Buy now
                            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </AnimatedButton>
                        </div>
                      )}
                    </div>

                    {/* Product Info - Smooth sliding animation disabled on mobile */}
                    <div className={`flex-1 transition-all duration-700 ease-out transform ${
                      isMobile ? 'translate-x-0' :
                        hoveredCard === index
                          ? 'translate-x-4'
                          : hoveredCard !== null && index === centerCardIndex
                            ? '-translate-x-4'
                            : 'translate-x-0'
                    }`}>
                      {/* Pricing */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <span className="text-[16px] text-[#252525] dark:text-[#fafafa] font-medium">
                          {product.price}
                        </span>
                        <span className="text-[16px] text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-[24px] font-semibold text-[#252525] dark:text-[#fafafa] mb-1">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[#252525] text-sm sm:text-[15px] md:text-[16px] dark:text-[#fafafa] opacity-80 mb-4 md:mb-0">
                        {product.description}
                      </p>

                      {/* Mobile Buy Button - Below description */}
                      {isMobile && (
                        <div className="my-4 ">
                          <AnimatedButton
                            className="w-full bg-[#252525] dark:bg-[#fafafa] text-[#fafafa] dark:text-[#252525] py-3 px-4 rounded-full font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2 group text-sm"
                            containerClassName="w-full"
                          >
                            Buy now
                            <ChevronRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-1" />
                          </AnimatedButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiscountCta/>
    </div>
  );
}