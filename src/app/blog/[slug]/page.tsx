
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft} from "lucide-react";
import { DiscountCta } from "@/components/discount-cta";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
 
}

const blogPosts: BlogPost[] = [
  {
    slug: "evolution-of-speakers",
    title: "The Evolution of Speakers",
    date: "Apr 1, 2025",
    image: "/blog-1.webp",
    excerpt: "Discover how speaker technology has advanced from vintage designs to modern innovations.",
    content: `

      <h2>The Early Days of Speakers</h2>
      <p>The first speakers were developed in the late 1800s, with the invention of the telephone and phonograph. These early devices used basic electromagnetic technology to convert electrical signals into audible sound. The horn-shaped megaphones of the time were large and cumbersome, but they laid the foundation for future innovations.</p>

      <h2>The Rise of Stereo Sound</h2>
      <p>In the mid-20th century, stereo sound revolutionized the audio industry. With two or more channels of sound, listeners could experience a richer, more immersive audio experience. This era also saw the introduction of high-fidelity (Hi-Fi) systems, which aimed to reproduce sound as accurately as possible.</p>

      <h2>The Digital Revolution</h2>
      <p>The advent of digital technology in the late 20th century brought about compact disc players, MP3s, and eventually, wireless streaming. Speakers became smaller, more efficient, and capable of delivering higher-quality sound. Bluetooth and Wi-Fi connectivity allowed users to stream music directly from their smartphones, tablets, and computers.</p>

      <h2>Smart Speakers: The Future of Audio</h2>
      <p>Today, smart speakers like Amazon Echo, Google Nest, and Apple HomePod dominate the market. These devices not only play music but also act as virtual assistants, controlling smart home devices, answering questions, and even ordering groceries. With advancements in AI and machine learning, smart speakers are becoming more intuitive and sophisticated.</p>

      <h2>Conclusion</h2>
      <p>From simple horn-shaped devices to AI-powered smart speakers, the evolution of audio technology has been nothing short of remarkable. As we look to the future, it's exciting to imagine what new innovations will further enhance our listening experiences.</p>
    `
  },
  {
    slug: "right-speaker-for-you",
    title: "Right Speaker for You",
    date: "Mar 2, 2025",
    image: "/blog-2.webp",
    excerpt: "Learn how to choose the perfect speaker for your space and listening preferences.",
  
    content: `

      <h2>Consider Your Space</h2>
      <p>Room size, acoustics, and layout all play crucial roles in speaker selection. A large room requires different considerations than a small apartment or office space.</p>

      <h2>Define Your Usage</h2>
      <p>Are you primarily listening to music, watching movies, or hosting parties? Different use cases call for different speaker configurations and features.</p>

      <h2>Budget Considerations</h2>
      <p>Great sound doesn't always require breaking the bank. Understanding the price-to-performance ratio helps you make smart decisions within your budget.</p>
    `
  },
  {
    slug: "wireless-speakers",
    title: "Wireless Speakers",
    date: "Mar 1, 2025",
    image: "/blog-3.webp",
    excerpt: "Explore the benefits and innovations in wireless speaker technology.",

    content: `
     

      <h2>Connection Technologies</h2>
      <p>From Bluetooth to Wi-Fi to proprietary protocols, understanding different wireless technologies helps you choose the right solution for your needs.</p>

      <h2>Audio Quality</h2>
      <p>Modern wireless speakers can deliver audio quality that rivals wired connections, thanks to advanced codecs and improved transmission protocols.</p>

      <h2>Smart Features</h2>
      <p>Integration with voice assistants, multi-room capabilities, and app control have made wireless speakers more versatile than ever before.</p>
    `
  },
  {
    slug: "dolby-atmos-and-beyond",
    title: "Dolby Atmos and Beyond",
    date: "Feb 2, 2025",
    image: "/blog-4.webp",
    excerpt: "Experience immersive 3D audio technology that transforms your listening experience.",
 
    content: `
     

      <h2>Understanding 3D Audio</h2>
      <p>Unlike traditional surround sound that places audio in a horizontal plane, Dolby Atmos adds height, creating a sphere of sound around the listener.</p>

      <h2>Implementation in Home Audio</h2>
      <p>Modern home theater systems can create Atmos experiences through ceiling speakers, upward-firing drivers, or advanced DSP processing.</p>

      <h2>The Future of Immersive Audio</h2>
      <p>Beyond Atmos, emerging technologies promise even more realistic and immersive audio experiences for music, movies, and gaming.</p>
    `
  },
  {
    slug: "eco-friendly-audio-solutions",
    title: "Eco-Friendly Audio Solutions",
    date: "Feb 1, 2025",
    image: "/blog-5.webp",
    excerpt: "Sustainable audio products that deliver great sound while protecting the environment.",
  
    content: `
     

      <h2>Sustainable Materials</h2>
      <p>From recycled plastics to bamboo and cork, innovative materials are being used to create speakers that are both beautiful and environmentally responsible.</p>

      <h2>Energy Efficiency</h2>
      <p>Modern speakers are designed to consume less power while delivering better performance, reducing their carbon footprint over their lifetime.</p>

      <h2>Circular Design</h2>
      <p>Companies are designing products for longevity, repairability, and eventual recycling, creating a more sustainable audio ecosystem.</p>
    `
  },
  {
    slug: "why-size-and-shape-matter",
    title: "Why Size and Shape Matter",
    date: "Feb 1, 2025",
    image: "/blog-6.webp",
    excerpt: "Understanding how speaker design affects sound quality and room acoustics.",
 
    content: `
      

      <h2 >Cabinet Design</h2>
      <p>The speaker cabinet isn't just housing—it's an integral part of the acoustic system that affects frequency response, resonance, and overall sound quality.</p>

      <h2>Driver Placement</h2>
      <p>The arrangement and sizing of drivers (woofers, mid-range, tweeters) determines how sound waves interact and how the speaker performs across different frequencies.</p>

      <h2>Room Interaction</h2>
      <p>A speaker's size and shape influence how it interacts with room acoustics, affecting everything from bass response to imaging and soundstage.</p>
    `
  }
];

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-26 pb-16 sm:pb-24 md:pb-32">

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
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </div>
      <DiscountCta />
    </div>
  );
}