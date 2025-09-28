"use client";

import Image from "next/image";
import { Diamond, Star, CheckCircle } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "Amazing sound—clear highs and deep bass. Feels like a concert in my living room!",
      name: "Lena M",
      avatar: "/user-1.webp",
      verified: true,
      width: "narrow" // First card is wide
    },
    {
      id: 2,
      rating: 5,
      text: "Best Bluetooth speaker I've owned. Long battery life and super reliable!",
      name: "Jordan S",
      avatar: "/user-2.webp",
      verified: true,
      width: "wide" // Second card is narrow
    },
    {
      id: 3,
      rating: 5,
      text: "Looks great, sounds better. I use it daily for both work and fun.",
      name: "Emma W",
      avatar: "/user-3.webp",
      verified: true,
      width: "wide" // Third card is narrow
    },
    {
      id: 4,
      rating: 5,
      text: "Compact but powerful. Perfect for trips and outdoor hangs.",
      name: "Amelia R",
      avatar: "/user-4.webp",
      verified: true,
      width: "narrow" // Fourth card is wide
    }
  ];

  return (
    <section className="pt-20 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <div className="flex items-center gap-3 border-[0.5px] border-[#25252510] dark:border-[#fafafa18] rounded-full px-4 py-3 w-fit mb-8">
          <Diamond className="w-5 h-5 opacity-80 text-[#252525] dark:text-[#fafafa]" />
          <span className="text-[20px] text-[#252525] dark:text-[#fafafa]">
            Testimonials
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left side - Main heading */}
          <h2 className="text-4xl md:text-[44px] text-[#252525] dark:text-[#fafafa] leading-tight">
            What Our Customers
            <br />
            Are Saying
          </h2>

          {/* Right side - Description */}
          <div className="flex items-center">
            <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed text-right">
              From music lovers to daily users, everyone&apos;s talking about Sonic. See what they have to say.
            </p>
          </div>

        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-[#fafafa] dark:bg-[#2a2a2a] rounded-3xl p-8 space-y-6 min-h-[280px] flex flex-col justify-between ${
                testimonial.width === "wide" 
                  ? "md:col-span-7" 
                  : "md:col-span-5"
              }`}
            >
              {/* Top Content */}
              <div className="space-y-6">
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-[#252525] dark:fill-[#fafafa] text-[#252525] dark:text-[#fafafa]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed">
                  {testimonial.text}
                </p>
              </div>

              {/* User Info - Always at bottom */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="">
                  <span className="text-[16px] font-medium text-[#252525] dark:text-[#fafafa]">
                    {testimonial.name}
                  </span>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-[#252525] dark:text-[#fafafa]" />
                      <span className="text-[14px] text-[#252525] dark:text-[#fafafa] font-medium">
                        Verified buyer
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}