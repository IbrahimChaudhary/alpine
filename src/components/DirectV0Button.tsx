// "use client"

// import { Code, ExternalLink } from "lucide-react"

// interface DirectV0ButtonProps {
//   registryName: string;
//   className?: string;
//   variant?: "default" | "outline" | "ghost" | "link";
//   size?: "default" | "sm" | "lg" | "icon";
//   showLabel?: boolean;
// }

// export function DirectV0Button({
//   registryName,
//   className = "",
//   variant = "outline",
//   size = "sm",
//   showLabel = true
// }: DirectV0ButtonProps) {
//   const handleClick = () => {
//     // Get registry data directly based on registryName
//     const registryData = getRegistryData(registryName);

//     if (!registryData) {
//       alert(`Registry "${registryName}" not found. Available registries: home-page, hero-section, values-section, speaker-features, innovation-section, gallery-section, faq-section, blog-section`);
//       return;
//     }

//     // Create a data URL with the registry data
//     const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(registryData, null, 2))}`;

//     // Open V0 with the data URL
//     const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(dataUrl)}`;

//     console.log(`Opening V0 with ${registryName} (${Math.round(dataUrl.length / 1024)}KB)`);
//     window.open(v0Url, '_blank', 'noopener,noreferrer');
//   }

//   // Define button styles based on variant and size
//   const getVariantStyles = () => {
//     switch (variant) {
//       case "default":
//         return "bg-gray-900 text-white hover:bg-gray-800 border border-gray-900";
//       case "ghost":
//         return "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900";
//       case "link":
//         return "bg-transparent text-blue-600 hover:text-blue-800 underline";
//       default: // outline
//         return "bg-white text-gray-700 hover:text-gray-900 border border-gray-200 hover:bg-gray-50";
//     }
//   };

//   const getSizeStyles = () => {
//     switch (size) {
//       case "lg":
//         return "px-6 py-3 text-base";
//       case "icon":
//         return "p-2";
//       default: // sm and default
//         return "px-4 py-2 text-sm";
//     }
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg ${getVariantStyles()} ${getSizeStyles()} ${className}`}
//       aria-label="Open in v0"
//       title="Open this component in v0 for AI-powered editing"
//     >
//       <Code className="h-4 w-4" />
//       {showLabel && size !== "icon" && <span className="hidden sm:inline">Open in v0</span>}
//       <ExternalLink className="h-3 w-3" />
//     </button>
//   )
// }

// // Registry data - embedded directly to avoid fetching issues
// function getRegistryData(registryName: string) {
//   const registries: Record<string, any> = {
//     "home-page": {
//       "$schema": "https://ui.shadcn.com/schema/registry-item.json",
//       "name": "home-page",
//       "type": "registry:block",
//       "title": "Home Page",
//       "description": "Complete home page with hero, innovation, speaker features, values, gallery, FAQ, blog, and CTA sections",
//       "dependencies": ["react", "next", "lucide-react", "framer-motion"],
//       "devDependencies": [],
//       "registryDependencies": ["button", "card", "accordion"],
//       "files": [{
//         "path": "app/page.tsx",
//         "content": `import React from 'react';
// import { ChevronRight, Diamond, Star, ShoppingCart, Flag, Headphones, Volume2, Battery, Bluetooth, Award } from 'lucide-react';

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
//         <div className="text-center z-10 px-4 sm:px-8 mt-16 sm:mt-24">
//           <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
//             Immersive Sound, Simplified
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
//             Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-full text-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
//             Buy now <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//         <div className="relative w-full max-w-6xl z-20 overflow-hidden rounded-3xl mt-24 mx-4">
//           <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center">
//             <div className="flex flex-col items-center gap-4 text-gray-500 dark:text-gray-400">
//               <Headphones className="w-16 h-16" />
//               <span className="text-lg font-medium">Premium Speaker</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Innovation Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Innovation at Its Core</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">Cutting-edge technology meets timeless design.</p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
//               <Volume2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Crystal Clear Audio</h3>
//               <p className="text-gray-600 dark:text-gray-300">Advanced drivers deliver pristine sound quality</p>
//             </div>
//             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
//               <Battery className="w-12 h-12 text-green-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Long Battery Life</h3>
//               <p className="text-gray-600 dark:text-gray-300">Up to 24 hours of continuous playback</p>
//             </div>
//             <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
//               <Bluetooth className="w-12 h-12 text-purple-600 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Wireless Freedom</h3>
//               <p className="text-gray-600 dark:text-gray-300">Latest Bluetooth 5.0 technology</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           <div className="mb-16 text-center">
//             <div className="inline-flex items-center border border-gray-200 dark:border-gray-700 rounded-full px-4 py-3 gap-3 mb-8">
//               <Diamond className="w-6 h-6 text-gray-900 dark:text-white" />
//               <span className="text-gray-900 dark:text-white text-xl font-medium">Why us?</span>
//             </div>
//             <h2 className="text-5xl text-gray-900 dark:text-white leading-tight mb-4">
//               Trusted by Thousands, Engineered for Excellence
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Our commitment to innovation and quality has earned the trust of customers worldwide.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
//               <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center mb-6">
//                 <ShoppingCart className="w-6 h-6 text-gray-900 dark:text-white" />
//               </div>
//               <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">60K+ Units Sold</h3>
//               <p className="text-gray-600 dark:text-gray-300">Our speakers have reached over 60,000 satisfied customers.</p>
//             </div>
//             <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
//               <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center mb-6">
//                 <Star className="w-6 h-6 text-gray-900 dark:text-white" />
//               </div>
//               <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">4.9/5 Average Rating</h3>
//               <p className="text-gray-600 dark:text-gray-300">Thousands of reviews praise our unmatched sound quality.</p>
//             </div>
//             <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
//               <div className="w-14 h-14 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center mb-6">
//                 <Flag className="w-6 h-6 text-gray-900 dark:text-white" />
//               </div>
//               <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">100+ Countries</h3>
//               <p className="text-gray-600 dark:text-gray-300">Our products are loved worldwide.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-800">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-bold text-white mb-6">Ready to Experience Superior Sound?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who have elevated their audio experience.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100">
//               Shop Now
//             </button>
//             <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }`,
//         "type": "registry:component",
//         "target": "app/page.tsx"
//       }],
//       "tailwind": {
//         "config": {
//           "theme": {
//             "extend": {}
//           }
//         }
//       },
//       "meta": {
//         "description": "Complete home page with hero, innovation, speaker features, values, gallery, FAQ, blog, and CTA sections"
//       }
//     },
//     "hero-section": {
//       "$schema": "https://ui.shadcn.com/schema/registry-item.json",
//       "name": "hero-section",
//       "type": "registry:block",
//       "title": "Hero Section",
//       "description": "Main hero section with heading, description, and CTA button",
//       "dependencies": ["react", "lucide-react", "framer-motion"],
//       "devDependencies": [],
//       "registryDependencies": ["button"],
//       "files": [{
//         "path": "components/hero-section.tsx",
//         "content": `"use client";

// import { useRef, useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ChevronRight } from "lucide-react";

// export function HeroSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   // Check if screen is mobile on mount and resize
//   useEffect(() => {
//     const checkIsMobile = () => {
//       setIsMobile(window.innerWidth < 768); // md breakpoint
//     };

//     checkIsMobile();
//     window.addEventListener('resize', checkIsMobile);

//     return () => window.removeEventListener('resize', checkIsMobile);
//   }, []);

//   // Transform values for parallax effect
//   const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
//   const textY = useTransform(scrollYProgress, [0, 1], [0, -300]);
//   const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
//   const imageY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 200 : 400]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative md:min-h-screen flex flex-col items-center justify-center overflow-hidden"
//     >
//       {/* Hero Content */}
//       <motion.div
//         style={{
//           y: textY,
//           opacity: textOpacity,
//           scale: textScale,
//           transformOrigin: "center center"
//         }}
//         className="text-center z-10 px-4 sm:px-8 mt-16 sm:mt-24"
//       >
//         <h1 className="text-[44px] lg:text-[60px] font-bold text-[#252525] dark:text-[#fafafa] mb-4 sm:mb-6 leading-tight">
//           Immersive Sound, Simplified
//         </h1>
//         <p className="text-[20px] text-[#252525] dark:text-[#fafafa] max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
//           Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
//         </p>

//         {/* Buy now button */}
//         <button className="inline-flex items-center gap-1 bg-[#252525] dark:bg-[#fafafa] text-white dark:text-[#252525] px-4 sm:px-6 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-opacity">
//           Buy now
//           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//         </button>
//       </motion.div>

//       {/* Hero Image */}
//       <div className="relative w-full max-w-6xl z-20 overflow-hidden rounded-2xl sm:rounded-3xl mt-8 sm:mt-24 mx-4">
//         <motion.div
//           style={{ y: imageY }}
//           className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
//         >
//           <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
//             <div className="text-gray-400 text-lg">Hero Image Placeholder</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }`,
//         "type": "registry:component",
//         "target": "components/hero-section.tsx"
//       }],
//       "tailwind": {
//         "config": {
//           "theme": {
//             "extend": {}
//           }
//         }
//       },
//       "meta": {
//         "description": "Main hero section with heading, description, and CTA button"
//       }
//     }
//   };

//   return registries[registryName] || null;
// }