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
    <section className={cn("py-16 px-8 mt-18 text-[#252525] dark:text-white", className)}>
      <div className="max-w-7xl mx-auto">
        {/* Left Side - Product Image and Title */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-[#252525] dark:text-white/80 w-fit border-[0.5px] border-[#25252518] dark:border-[#fafafa10] rounded-full px-4 py-3">
            <FileText className="w-6 h-6" />
            <span className="text-lg">Specifications</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 items-start">
            <div className="w-[55%]">
              <h2 className="text-4xl md:text-[44px] mb-14 font-medium text-[#252525] dark:text-white">
                {title}
              </h2>

              {productImage && (
                <div className="relative w-full rounded-2xl overflow-hidden">
                  <Image
                    src={productImage.src}
                    alt={productImage.alt}
                    width={800}
                    height={600}
                    className="w-[100%] h-full object-cover"
                  />
                </div>
              )}
            </div>
          

          {/* Right Side - Specifications */}
          <div className="space-y-8 w-[100%] px-6">
            <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed mb-10 text-right ">{subtitle}</p>

            <div className="space-y-24">
              {specifications.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-6  dark:bg-[#2a2a2a] bg-[#fafafa] rounded-2xl ">
                  <h3 className="text-xl font-semibold text-[#252525] dark:text-white bg-[#ecedef] dark:bg-[#2e3138] rounded-lg px-7 py-3">
                    {section.title}
                  </h3>

                  <div className="space-y-4 pb-8">
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center text-[20px] px-7 justify-between py-2 border-b  dark:border-gray-700/50 border-[#ecedef]"
                      >
                        <div className="flex items-center  gap-3 ">
                          {item.icon && (
                            <span className="w-[24px] h-[24px] text-[#252525] dark:text-[#fafafa] ">
                              {item.icon}
                            </span>
                          )}
                          <span className="">{item.label}</span>
                        </div>
                        <span className="text-[#252525] dark:text-white  text-right">
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
