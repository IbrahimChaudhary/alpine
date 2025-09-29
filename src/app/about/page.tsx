import { AboutHero } from "@/components/sections/about-hero";
import { ValuesSection } from "@/components/sections/values-section";
import { MissionVision } from "@/components/sections/mission-vision";
import { DiscountCta } from "@/components/sections/discount-cta";
import { BlogSection } from "@/components/sections/blog-section";

/**
 * About Page Component
 *
 * The About page showcasing:
 * - Company story and mission
 * - Product hero section
 * - Team and vision content
 * - Responsive design with theme support
 */
export default function AboutPage() {
  // Values data for the values section
  const companyValues = [
    {
      iconName: "Box",
      title: "Simplicity",
      description:
        "We believe less is more—our products are designed for intuitive use.",
    },
    {
      iconName: "Shield",
      title: "Quality",
      description:
        "From premium components to final sound output, every detail matters.",
    },
    {
      iconName: "Leaf",
      title: "Sustainability",
      description: "Thoughtful design that&apos;s better for the planet.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <AboutHero />

      {/* Mission & Vision Section */}
      <MissionVision />

      {/* Values Section */}
      <ValuesSection
        headerIcon="Box"
        headingTitle="What We Value"
        sectionTitle="Our Values"
        sectionSubtitle="We believe great sound should be simple, powerful and accessible. Our values are rooted in a deep respect for our community."
        values={companyValues}
      />

      {/* Why Sonic Section */}
      <section
        className="py-20 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6 md:px-8 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/about-3.webp")',
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* Optional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8 text-left">
              {/* Main Heading */}
              <h2 className="text-[44px] text-6xl font-bold text-[#fafafa] leading-tight">
                Why Sonic?
              </h2>

              {/* Description */}
              <p className="text-xl text-white leading-relaxed max-w-2xl mx-0">
                Every Sonic speaker is engineered for real life—compact yet
                bold, tough yet refined. Whether you&apos;re deep in a busy city or
                off the grid, Sonic delivers consistent, high-quality audio in a
                sleek form you&apos;ll love to show off.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-white text-black px-6 sm:px-8 py-4 sm:py-5 rounded-full  text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 group mx-0">
                  Buy now
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-200 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Space for background image */}
            <div className="hidden lg:block">
              {/* This space allows the background image to show through */}
            </div>
          </div>
        </div>
      </section>

      <BlogSection/>

      {/* Discount CTA Section */}
      <DiscountCta />
    </div>
  );
}
