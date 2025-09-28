"use client";

import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import Image from "next/image";

interface SpecificationItem {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}

interface ProductSpecificationsProps {
  title?: string;
  subtitle?: string;
  productImage?: {
    src: string;
    alt: string;
  };
  specifications: SpecificationSection[];
  className?: string;
}

export default function ProductSpecifications({
  title = "Product Details",
  subtitle = "Behind every field is smart engineering—dive into the full list of features that power your experience.",
  productImage,
  specifications,
  className,
}: ProductSpecificationsProps) {
  return (
    <section className={cn("py-8 md:py-20 px-4 sm:px-6 md:px-8 mt-8 md:mt-18 text-[#252525] dark:text-white", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="flex items-center gap-2 sm:gap-3 text-[#252525] dark:text-white/80 w-fit border-[0.5px] border-[#25252518] dark:border-[#fafafa10] rounded-full px-3 sm:px-4 py-2 sm:py-3">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="text-base sm:text-lg">Specifications</span>
          </div>

          {/* Mobile Title and Subtitle */}
          <div className="lg:hidden space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#252525] dark:text-white">
              {title}
            </h2>
            <p className="text-lg sm:text-xl text-[#252525] dark:text-[#fafafa] leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left Side - Title and Product Image (Desktop Only Title) */}
            <div className="w-full lg:w-[55%]">
              {/* Desktop Title */}
              <div className="hidden lg:block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] mb-6 sm:mb-8 md:mb-10 lg:mb-14 font-medium text-[#252525] dark:text-white">
                  {title}
                </h2>
              </div>

              {productImage && (
                <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={productImage.src}
                    alt={productImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right Side - Subtitle and Specifications */}
            <div className="w-full lg:w-[45%] space-y-6 sm:space-y-8">
              {/* Desktop Subtitle */}
              <div className="hidden lg:block">
                <p className="text-lg sm:text-xl lg:text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed lg:text-right">
                  {subtitle}
                </p>
              </div>

              {/* Specifications Sections */}
              <div className="space-y-8 sm:space-y-12 lg:space-y-16">
                {specifications.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4 sm:space-y-6 dark:bg-[#2a2a2a] bg-[#fafafa] rounded-xl sm:rounded-2xl">
                    {/* Section Title */}
                    <h3 className="text-xl font-semibold text-[#252525] dark:text-white bg-[#ecedef] dark:bg-[#2e3138] rounded-lg px-4 sm:px-6 md:px-7 py-2 sm:py-3">
                      {section.title}
                    </h3>

                    {/* Specification Items */}
                    <div className="space-y-3 sm:space-y-4 pb-4 sm:pb-6 md:pb-8">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex flex-col sm:flex-row sm:items-center text-[20px] px-4 sm:px-6 md:px-7 py-2 border-b dark:border-gray-700/50 border-[#ecedef] gap-3"
                        >
                          {/* Label with Icon */}
                          <div className="flex items-center gap-3 flex-1">
                            {item.icon && (
                              <span className="w-5 h-5 sm:w-6 sm:h-6 text-[#252525] dark:text-[#fafafa] flex-shrink-0">
                                {item.icon}
                              </span>
                            )}
                            <span className="text-[#252525] dark:text-[#fafafa]">{item.label}</span>
                          </div>

                          {/* Value */}
                          <span className="text-[#252525] dark:text-white sm:text-right font-medium sm:font-normal ml-0">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
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
