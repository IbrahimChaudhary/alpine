"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Paperclip } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { AlpineV0Menu } from "@/components/AlpineV0Menu";

export default function BlogPage() {
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

  const defaultActiveCard = 1; // Second card (index 1) is active by default

  return (
    <div className="min-h-screen">
      {/* V0 Menu Button */}
      <AlpineV0Menu page="blog" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-26 pb-16 sm:pb-24 md:pb-32">

        {/* Header Section */}
        <div className="md:text-center mb-8 sm:mb-12 md:mb-16">
          {/* Badge */}
          <div className="flex border-[0.5px] border-[#2525252f] dark:border-[#fafafa4b] rounded-full px-3 sm:px-4 py-2 w-fit md:mx-auto items-center justify-center gap-2 mb-6 sm:mb-8">
            <Paperclip className="w-4 h-4 sm:w-5 sm:h-5 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-lg sm:text-[20px] text-[#252525] dark:text-[#fafafa]">
              Blog
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#252525] dark:text-[#fafafa] mb-4 sm:mb-6">
            Sound Insights
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl lg:text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed max-w-4xl mx-auto">
            Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {blogPosts.map((post, index) => (
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
                <div className="relative h-[250px] sm:h-[280px] md:h-[320px] overflow-hidden rounded-2xl sm:rounded-3xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={`p-4 sm:p-6 transition-all duration-500 ease-out ${
                  !isMobile && hoveredCard === index
                    ? 'transform translate-x-2'
                    : !isMobile && hoveredCard !== null && (
                        index === hoveredCard - 1 ||
                        index === hoveredCard + 1
                      )
                      ? 'transform -translate-x-1'
                      : 'transform translate-x-0'
                }`}>

                  {/* Title */}
                  <h2 className="text-xl sm:text-[22px] md:text-[24px] text-[#252525] dark:text-[#fafafa] mb-1 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Date */}
                  <p className="text-[#252525] text-sm sm:text-[16px] dark:text-[#fafafa] opacity-70 mb-4">
                    {post.date}
                  </p>


                </div>

              </article>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}