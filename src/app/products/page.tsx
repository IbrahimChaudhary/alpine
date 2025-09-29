"use client";

import { ProductsHeroSection } from "@/components/sections/products-hero-section";
import { ProductPerformance } from "@/components/sections/product-performance";
import { ServiceFeatures } from "@/components/sections/service-features";
import { BigSoundSection } from "@/components/sections/big-sound-section";
import { ProvenSection } from "@/components/sections/proven-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { DiscountCta } from "@/components/sections/discount-cta";


export default function ProductsPage() {


  return (
    <div className="min-h-screen">

      {/* Products Hero Section */}
      <ProductsHeroSection />

      {/* Proven Section */}
      <ProvenSection />

      {/* Big Sound Section */}
      <BigSoundSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12  md:pt-20 lg:pt-26 pb-8  md:pb-12">
        <ProductPerformance />
      </div>

      
      {/* Service Features Section */}
      <ServiceFeatures />


      <DiscountCta />

    </div>
  );
}