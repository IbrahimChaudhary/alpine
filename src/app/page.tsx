import { HeroSection } from "@/components/sections/hero-section";
import { DiscountCta } from "@/components/sections/discount-cta";
import { ValuesSection } from "@/components/sections/values-section";
import { FAQSection } from "@/components/sections/faq-section";
import { SpeakerFeatures } from "@/components/sections/speaker-features";
import { InnovationSection } from "@/components/sections/innovation-section";
import { BlogSection } from "@/components/sections/blog-section";
import { GallerySection } from "@/components/sections/gallery-section";

/**
 * Home Page Component
 *
 * The main landing page for the ALPINE application featuring:
 * - Welcome section
 * - Values section showcasing company principles
 * - Call-to-action section
 */
export default function Home() {
  // Values data for the values section
  const companyValues = [
    {
      iconName: "ShoppingCart",
      title: "60K+ Units Sold",
      description: "Our speakers have reached over 60,000 satisfied customers."
    },
    {
      iconName: "Star",
      title: "4.9/5 Average Rating",
      description: "Thousands of reviews praise our unmatched sound quality."
    },
    {
      iconName: "Flag",
      title: "100+ Countries",
      description: "Our products are loved and shipped across more than 100 countries."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      
      {/* Innovation Section */}
      <InnovationSection />

            {/* Speaker Features Section */}
            <SpeakerFeatures />

      {/* Values Section */}
      <ValuesSection
      headerIcon="Diamond"
      headingTitle="Trusted by Thousands, Engineered for Excellence"
        sectionTitle="Why us?"
        sectionSubtitle="Our commitment to innovation and quality has earned the trust of customers worldwide. Sleek design, our products are built to impress."
        values={companyValues}
      />


      {/* Gallery Section */}
      <GallerySection />


      {/* FAQ Section */}
      <FAQSection />


      {/* Blog Section */}
      <BlogSection />

      {/* Discount CTA Section */}
      <DiscountCta />

    </div>
  );
}
