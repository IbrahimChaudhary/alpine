"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Paperclip } from "lucide-react";

export function BlogSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      slug: "evolution-of-speakers",
      title: "The Evolution of Speakers",
      date: "Apr 1, 2025",
      image: "/blog-1.webp",
    },
    {
      id: 2,
      slug: "right-speaker-for-you",
      title: "Right Speaker for You",
      date: "Mar 2, 2025",
      image: "/blog-2.webp",
    },
    {
      id: 3,
      slug: "wireless-speakers",
      title: "Wireless Speakers",
      date: "Mar 1, 2025",
      image: "/blog-3.webp",
    },
  ];

  const defaultActiveCard = 1; // Second card (index 1) is active by default

  return (
    <section className=" px-8 pb-18">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className=" mb-12">
          {/* Badge */}
          <div className="flex border-[0.5px] border-[#2525252f] dark:border-[#fafafa4b] rounded-full px-4 py-2 w-fit items-center justify-center gap-2 mb-8">
            <Paperclip className="w-5 h-5 text-[#252525] dark:text-[#fafafa]" />
            <span className="text-[20px] text-[#252525] dark:text-[#fafafa]">
              Blog
            </span>
          </div>

<div className="grid grid-cols-2 justify-between items-center">
          {/* Main Title */}
          <h2 className="text-4xl md:text-[44px] text-[#252525] dark:text-[#fafafa] ">
            Sound Insights
          </h2>

          {/* Description */}
          <p className="text-[20px] text-[#252525] text-right dark:text-[#fafafa] leading-tight ">
            Stay updated with the latest trends in audio technology, speaker innovations, and expert tips to enhance your listening experience.
          </p>
        </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <article className={`transition-all duration-500 ease-out rounded-3xl overflow-hidden ${
                (hoveredCard === null && index === defaultActiveCard) || hoveredCard === index
                  ? 'bg-[#fafafa] dark:bg-[#2a2a2a]'
                  : 'bg-transparent'
              }`}>

                {/* Image */}
                <div className="relative h-[320px] overflow-hidden rounded-3xl">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={`p-6 transition-all duration-500 ease-out ${
                  hoveredCard === index
                    ? 'transform translate-x-2'
                    : hoveredCard !== null && (
                        index === hoveredCard - 1 ||
                        index === hoveredCard + 1
                      )
                      ? 'transform -translate-x-1'
                      : 'transform translate-x-0'
                }`}>

                  {/* Title */}
                  <h3 className="text-[24px] text-[#252525] dark:text-[#fafafa] mb-1 line-clamp-2">
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