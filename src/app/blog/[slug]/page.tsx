
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { DiscountCta } from "@/components/sections/discount-cta";
import { blogPosts } from "@/data/blog";
import { AlpineV0Menu } from "@/components/AlpineV0Menu";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* V0 Menu Button */}
      <AlpineV0Menu page="blog" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-26 pb-16 sm:pb-24 md:pb-32">

        {/* Back Navigation */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 border-[0.5px] border-[#2525252f] dark:border-[#fafafa4b] rounded-full px-3 sm:px-4 py-2 w-fit text-[#252525] dark:text-[#fafafa] hover:opacity-80 transition-opacity mb-6 sm:mb-8"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="text-lg sm:text-[20px]">Back</span>
        </Link>

        {/* Header Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] text-[#252525] dark:text-[#fafafa] mb-4 sm:mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg sm:text-xl lg:text-[20px] text-[#252525] dark:text-[#fafafa] leading-relaxed mb-8 sm:mb-10 md:mb-12">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[660px] rounded-xl sm:rounded-2xl overflow-hidden mb-6 sm:mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Date */}
        <div className="text-sm sm:text-base md:text-[18px] text-[#252525] dark:text-[#fafafa] opacity-70 mb-8 sm:mb-10 md:mb-12">
          {post.date}
        </div>

        {/* Content */}
        <div
          className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-[#252525] dark:text-[#fafafa] blog-content
          [&>h2]:text-xl [&>h2]:sm:text-2xl [&>h2]:md:text-3xl [&>h2]:font-semibold [&>h2]:mb-4 [&>h2]:mt-8
          [&>p]:text-base [&>p]:sm:text-lg [&>p]:leading-relaxed [&>p]:mb-6
          [&>h2]:text-[#252525] [&>h2]:dark:text-[#fafafa]
          [&>p]:text-[#252525] [&>p]:dark:text-[#fafafa]"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

      </div>
      <DiscountCta />
    </div>
  );
}