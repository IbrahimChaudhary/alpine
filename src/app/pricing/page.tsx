"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, DollarSign } from "lucide-react";
import { DiscountCta } from "@/components/discount-cta";
import { AnimatedButton } from "@/components/animated-button"; // Adjust import path as needed

export default function ProductsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const products = [
    {
      id: 0,
      name: "Sonic Light",
      description: "Premium Smart Soundbar",
      price: "$599",
      originalPrice: "$699",
      image: "/product-1.webp",
    },
    {
      id: 1,
      name: "Sonic Light",
      description: "Premium Smart Soundbar",
      price: "$599",
      originalPrice: "$699",
      image: "/product-2.webp",
    },
    {
      id: 2,
      name: "Sonic Light",
      description: "Premium Smart Soundbar",
      price: "$599",
      originalPrice: "$699",
      image: "/product-3.webp",
    }
  ];

  const centerCardIndex = 1;

  const getCardBackground = (index: number) => {
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
      {/* Header Section */}
      <section className="pt-26 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-3 text-[#252525] dark:text-white/80 w-fit border-[0.5px] border-[#25252518] dark:border-[#fafafa10] rounded-full px-4 py-3 mb-8">
            <span className="text-lg flex items-center gap-2">
              <DollarSign className="w-[20px] h-[20px] opacity-75" /> Pricing
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Heading */}
            <div>
              <h1 className="text-4xl md:text-[44px] text-[#252525] dark:text-white leading-tight">
                Simple Pricing,
                <br />
                Exceptional Value
              </h1>
            </div>

            {/* Right - Description */}
            <div>
              <p className="text-[20px] text-[#252525] text-right dark:text-[#fafafa] leading-relaxed">
                We believe great sound shouldn&apos;t come with hidden costs or confusing plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-8 pb-18">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Product Card Container */}
                <div className="relative h-[500px] flex flex-col">
                  
                  {/* Dynamic Background */}
                  <div 
                    className={`absolute top-0 left-0 right-0 bg-[#fafafa] dark:bg-[#2a2a2a] rounded-2xl transition-all duration-700 ease-out ${getCardBackground(index)}`}
                  />
                  
                  {/* Card Content */}
                  <div className="relative z-10 px-8 pt-8 h-full flex flex-col">
                    
                    {/* Product Image with Overlay Button */}
                    <div className="relative overflow-hidden rounded-xl mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className={`w-full pb-9 h-full object-cover transition-transform duration-500 ease-in-out ${
                          hoveredCard === index ? 'scale-110' : 'scale-100'
                        }`}
                      />

                      {/* Buy Now Button Overlay with Animation */}
                      {((hoveredCard === null && index === centerCardIndex) || hoveredCard === index) && (
                        <div className="absolute bottom-4 left-4 right-4 animate-fadeIn">
                          <AnimatedButton
                            
                            className="w-full bg-[#252525] dark:bg-[#fafafa] text-[#fafafa] dark:text-[#252525] py-4 px-8 rounded-full font-medium transition-all duration-300 ease-in-out flex items-center justify-center gap-2 group"
                            containerClassName="w-full"
                          >
                            Buy now
                            <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </AnimatedButton>
                        </div>
                      )}
                    </div>

                    {/* Product Info - Smooth sliding animation */}
                    <div className={`flex-1 transition-all duration-700 ease-out transform ${
                      hoveredCard === index
                        ? 'translate-x-4'
                        : hoveredCard !== null && index === centerCardIndex
                          ? '-translate-x-4'
                          : 'translate-x-0'
                    }`}>
                      {/* Pricing */}
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[16px] text-[#252525] dark:text-[#fafafa]">
                          {product.price}
                        </span>
                        <span className="text-[16px] text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="text-[24px] font-semibold text-[#252525] dark:text-[#fafafa]">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-[#252525] text-[16px] dark:text-[#fafafa] opacity-80">
                        {product.description}
                      </p>
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