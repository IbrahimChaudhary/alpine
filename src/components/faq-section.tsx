"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      id: "item-1",
      question: "What makes your speakers stand out?",
      answer: "Our speakers deliver premium sound quality, sleek design, and long-lasting durability, ensuring an unmatched listening experience.",
      defaultOpen: true,
    },
    {
      id: "item-2",
      question: "Are your speakers compatible with all devices?",
      answer: "Yes, our speakers support Bluetooth 5.0, AUX input, and USB-C connectivity, making them compatible with virtually all modern devices including smartphones, tablets, laptops, and smart TVs.",
    },
    {
      id: "item-3",
      question: "How long does the battery last?",
      answer: "Our speakers provide up to 12 hours of continuous playback at 70% volume. Battery life may vary depending on volume level, audio content, and environmental conditions.",
    },
    {
      id: "item-4",
      question: "Are the speakers waterproof?",
      answer: "Our speakers feature IPX5 water resistance rating, making them splash-proof and suitable for outdoor use. They can withstand light rain and splashes but should not be fully submerged in water.",
    },
    {
      id: "item-5",
      question: "Do you offer a warranty?",
      answer: "Yes, we provide a comprehensive 2-year warranty covering manufacturing defects and hardware failures. Our warranty includes free repair or replacement and dedicated customer support.",
    },
  ];

  return (
    <section className="py-14 px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Header */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center gap-3 text-[#252525] dark:text-[#fafafa] w-fit   py-3">
              <span className="text-[28px]">Welcome to Beyond FAQ!</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-[#252525] dark:text-white leading-tight">
                Everything You Need to Know About Our <br /> Speakers
              </h2>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            <div className="min-h-[500px]">
              <Accordion type="single" collapsible={false} defaultValue="item-1" className="w-full">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border-b  border-[#ecedef] dark:border-gray-700/50"
                >
                  <AccordionTrigger className="text-left text-[28px] font-light w-full  text-[#252525] dark:text-[#fafafa] hover:text-[#252525]/80 dark:hover:text-[#fafafa]/80 py-8 [&[data-state=open]>svg]:rotate-180 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#252525] dark:text-[#fafafa] pb-6 text-[16px] leading-relaxed">
                    <div className="max-w-none">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}