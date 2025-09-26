import { DiscountCta } from "@/components/discount-cta";
import { ValuesSection } from "@/components/values-section";
import { FAQSection } from "@/components/faq-section";
import { SpeakerFeatures } from "@/components/speaker-features";
import { InnovationSection } from "@/components/innovation-section";

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
      iconName: "Box",
      title: "Simplicity",
      description: "We believe less is more—our products are designed for intuitive use."
    },
    {
      iconName: "Shield",
      title: "Quality",
      description: "From premium components to final sound output, every detail matters."
    },
    {
      iconName: "Leaf",
      title: "Sustainability",
      description: "Thoughtful design that's better for the planet."
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              ALPINE
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of modern web development with Next.js,
            Tailwind CSS, and shadcn/ui components. Built with TypeScript
            for type safety and enhanced developer experience.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Dark Mode</h3>
              <p className="text-muted-foreground">
                Toggle between light and dark themes seamlessly with our integrated theme system.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
              <p className="text-muted-foreground">
                Fully responsive navigation and layout that works perfectly on all devices.
              </p>
            </div>

            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Modern Stack</h3>
              <p className="text-muted-foreground">
                Built with the latest technologies for optimal performance and developer experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <ValuesSection
      headerIcon="Box"
      headingTitle="What We Value"
        sectionTitle="Our Values"
        sectionSubtitle="We believe great sound should be simple, powerful and accessible. Our values are rooted in a deep respect for our community."
        values={companyValues}
      />

      {/* Speaker Features Section */}
      <SpeakerFeatures />

      {/* Innovation Section */}
      <InnovationSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Discount CTA Section */}
      <DiscountCta />

    </div>
  );
}
