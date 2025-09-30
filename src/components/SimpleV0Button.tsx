// "use client"

// import { Code, ExternalLink } from "lucide-react"

// export function SimpleV0Button() {
//   const handleClick = () => {
//     // Simple, working component code for V0
//     const componentCode = `import { ChevronRight, Diamond, Star, ShoppingCart, Flag, Headphones } from 'lucide-react';

// export default function AlpineHomePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="min-h-screen flex flex-col items-center justify-center px-4">
//         <div className="text-center max-w-4xl mx-auto">
//           <h1 className="text-6xl font-bold text-gray-900 mb-6">
//             Immersive Sound, Simplified
//           </h1>
//           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//             Our most recent breakthrough in audio devices blends exceptional audio performance with unparalleled toughness and elegance.
//           </p>
//           <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800">
//             Buy now <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//         <div className="mt-16 w-full max-w-4xl mx-auto">
//           <div className="h-96 bg-gray-100 rounded-2xl flex items-center justify-center">
//             <div className="text-center text-gray-500">
//               <Headphones className="w-16 h-16 mx-auto mb-4" />
//               <span className="text-lg">Premium Speaker</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center border border-gray-300 rounded-full px-6 py-3 gap-3 mb-8">
//               <Diamond className="w-6 h-6" />
//               <span className="text-xl font-medium">Why us?</span>
//             </div>
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">
//               Trusted by Thousands, Engineered for Excellence
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our commitment to innovation and quality has earned the trust of customers worldwide.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-2xl text-center">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <ShoppingCart className="w-8 h-8 text-gray-700" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">60K+ Units Sold</h3>
//               <p className="text-gray-600">Our speakers have reached over 60,000 satisfied customers worldwide.</p>
//             </div>

//             <div className="bg-white p-8 rounded-2xl text-center">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Star className="w-8 h-8 text-gray-700" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">4.9/5 Average Rating</h3>
//               <p className="text-gray-600">Thousands of reviews praise our unmatched sound quality and design.</p>
//             </div>

//             <div className="bg-white p-8 rounded-2xl text-center">
//               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Flag className="w-8 h-8 text-gray-700" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">100+ Countries</h3>
//               <p className="text-gray-600">Our products are loved and shipped across more than 100 countries.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 bg-gray-900">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-5xl font-bold text-white mb-6">
//             Ready to Experience Superior Sound?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Join thousands of satisfied customers who have elevated their audio experience with our premium speakers.
//           </p>
//           <div className="flex gap-4 justify-center">
//             <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100">
//               Shop Now
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-900">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }`;

//     try {
//       // Create registry structure
//       const registryData = {
//         "$schema": "https://ui.shadcn.com/schema/registry-item.json",
//         "name": "alpine-home-page",
//         "type": "registry:block",
//         "title": "Alpine Home Page",
//         "description": "Alpine theme home page with hero, values, and CTA sections",
//         "dependencies": ["react", "lucide-react"],
//         "devDependencies": [],
//         "registryDependencies": [],
//         "files": [{
//           "path": "alpine-home-page.tsx",
//           "content": componentCode,
//           "type": "registry:component",
//           "target": "alpine-home-page.tsx"
//         }]
//       };

//       // Create data URL
//       const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(registryData, null, 2))}`;

//       // Open V0
//       const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(dataUrl)}`;

//       console.log(`Opening V0 with data (${Math.round(dataUrl.length / 1024)}KB)`);
//       window.open(v0Url, '_blank', 'noopener,noreferrer');

//     } catch (error) {
//       console.error('Error:', error);
//       // Fallback: Just open V0 directly
//       window.open('https://v0.dev/chat', '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={handleClick}
//         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm font-medium flex items-center gap-2"
//         title="Open Alpine theme in V0"
//       >
//         <Code className="h-4 w-4" />
//         <span>Open in V0</span>
//         <ExternalLink className="h-3 w-3" />
//       </button>
//     </div>
//   );
// }