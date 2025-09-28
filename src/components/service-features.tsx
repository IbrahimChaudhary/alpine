"use client";

import { Headphones, Package, Shield } from "lucide-react";

export function ServiceFeatures() {
  const services = [
    {
      icon: Headphones,
      title: "Customer service",
      description: "It's not actually free we just price it into the products."
    },
    {
      icon: Package,
      title: "Fast Free Shipping",
      description: "Get free shipping on orders of $150 or more"
    },
    {
      icon: Shield,
      title: "Secure payment",
      description: "It's not actually free we just price it"
    }
  ];

  return (
    <section className="pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 md:px-8 md:border-t border-[#25252510] dark:border-[#fafafa18]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <service.icon className="w-6 h-6 text-[#252525] dark:text-[#fafafa]" />
              </div>

              {/* Content */}
              <div className={`space-y-2 ${
                index < services.length - 1
                  ? 'md:border-r border-[#25252510] dark:border-[#fafafa18] pr-3 sm:pr-4 md:pr-0'
                  : ''
              } md:border-r md:border-[#25252510] md:dark:border-[#fafafa18] md:pr-4 ${
                index === services.length - 1 ? 'md:border-r-0 md:pr-0' : ''
              }`}>
                <h3 className="text-[20px] font-semibold text-[#252525] dark:text-[#fafafa]">
                  {service.title}
                </h3>
                <p className="text-[16px] text-[#252525] dark:text-[#fafafa] opacity-80 leading-relaxed">
                  {service.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}