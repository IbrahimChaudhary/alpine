"use client";

import { ProductsHeroSection } from "@/components/products-hero-section";
import { ProductPerformance } from "@/components/product-performance";
import { ServiceFeatures } from "@/components/service-features";
import { BigSoundSection } from "@/components/big-sound-section";
import { ProvenSection } from "@/components/proven-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DiscountCta } from "@/components/discount-cta";


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