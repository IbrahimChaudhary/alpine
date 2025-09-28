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
    <section className="pt-12 pb-8 px-8 border-t border-[#25252510] dark:border-[#fafafa18]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">

              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                <service.icon className="w-6 h-6 text-[#252525] dark:text-[#fafafa]" />
              </div>

              {/* Content */}
              <div className="space-y-2 border-r border-[#25252510] dark:border-[#fafafa18] pr-4">
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