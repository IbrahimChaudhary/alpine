import { AboutHero } from "@/components/about-hero";
import { ValuesSection } from "@/components/values-section";
import { MissionVision } from "@/components/mission-vision";
import { DiscountCta } from "@/components/discount-cta";

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
      description: "Thoughtful design that's better for the planet.",
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
        className="py-36 px-4 sm:px-6  relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/about-3.webp")',
          backgroundColor: "#1a1a1a",
        }}
      >
        {/* Optional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className=" gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Why Sonic?
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-2xl">
                Every Sonic speaker is engineered for real life—compact yet
                bold, tough yet refined. Whether you're deep in a busy city or
                off the grid, Sonic delivers consistent, high-quality audio in a
                sleek form you'll love to show off.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-white text-black px-8 py-5 rounded-full text-lg  hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 group">
                  Buy now
                  <svg
                    className="w-5 h-5 transition-all duration-200 group-hover:translate-x-1"
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

      {/* Discount CTA Section */}
      <DiscountCta />
    </div>
  );
}
