"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Paperclip } from "lucide-react";
import { blogPosts } from "@/data/blog";

export function BlogSection() {
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

  // Use only the first 3 blog posts for the section
  const displayedPosts = blogPosts.slice(0, 3);

  const defaultActiveCard = 1; // Second card (index 1) is active by default

  return (
    <section className="px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-18 md:py-10 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Badge */}
          <div className="flex border-[0.5px] border-[#2525252f] dark:border-[#fafafa4b] rounded-full px-4 py-2 w-fit items-center justify-center gap-2 mb-6 sm:mb-8">
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-base sm:text-lg md:text-[20px] text-[#252525] dark:text-[#fafafa]">
              Blog
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 justify-between items-start lg:items-center">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#252525] dark:text-[#fafafa] leading-tight">
              Sound Insights
            </h2>

            {/* Description */}
            <p className="text-[20px] text-[#252525] lg:text-right dark:text-[#fafafa] leading-tight">
              Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {displayedPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <article className={`transition-all duration-500 ease-out rounded-2xl sm:rounded-3xl overflow-hidden ${
                isMobile || (hoveredCard === null && index === defaultActiveCard) || hoveredCard === index
                  ? 'bg-[#fafafa] dark:bg-[#2a2a2a]'
                  : 'bg-transparent'
              }`}>

                {/* Image */}
                <div className="relative h-[200px] sm:h-[250px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-2xl sm:rounded-3xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={`p-4 sm:p-6 transition-all duration-500 ease-out ${
                  !isMobile && hoveredCard === index
                    ? 'transform translate-x-1 sm:translate-x-2'
                    : !isMobile && hoveredCard !== null && (
                        index === hoveredCard - 1 ||
                        index === hoveredCard + 1
                      )
                      ? 'transform -translate-x-0.5 sm:-translate-x-1'
                      : 'transform translate-x-0'
                }`}>

                  {/* Title */}
                  <h3 className="text-[24px] text-[#252525] dark:text-[#fafafa] mb-1 ">
                    {post.title}
                  </h3>

                  {/* Date */}
                  <p className="text-[#252525] text-[16px] dark:text-[#fafafa] opacity-70 mb-4">
                    {post.date}
                  </p>

                </div>

              </article>
            </Link>
          ))}
        </div>

     

      </div>
    </section>
  );
}