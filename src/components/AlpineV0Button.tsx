// "use client"

// import { Code, ExternalLink } from "lucide-react"

// interface AlpineV0ButtonProps {
//   registryName?: string;
//   className?: string;
//   variant?: "default" | "outline" | "ghost";
//   size?: "default" | "sm" | "lg";
//   showLabel?: boolean;
// }

// export function AlpineV0Button({
//   registryName = "alpine-home-page",
//   className = "",
//   variant = "outline",
//   size = "sm",
//   showLabel = true
// }: AlpineV0ButtonProps) {
//   const handleClick = async () => {
//     try {
//       // Fetch the registry data from your actual built registry files
//       const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
//       const registryUrl = `${baseUrl}/r/${registryName}.json`

//       console.log(`Fetching registry from: ${registryUrl}`);

//       const response = await fetch(registryUrl);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch registry: ${response.status}`);
//       }

//       const registryData = await response.json();

//       // Create data URL with the actual registry data
//       const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(registryData, null, 2))}`;

//       // Open V0 with your actual components
//       const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(dataUrl)}`;

//       console.log(`Opening V0 with ${registryName} registry (${Math.round(dataUrl.length / 1024)}KB)`);
//       window.open(v0Url, '_blank', 'noopener,noreferrer');

//     } catch (error) {
//       console.error('Error opening V0:', error);
//       alert(`Error opening V0: ${error.message}\\n\\nMake sure the registry is built with: npm run build:registry`);
//     }
//   };

//   const getVariantStyles = () => {
//     switch (variant) {
//       case "default":
//         return "bg-gray-900 text-white hover:bg-gray-800 border border-gray-900";
//       case "ghost":
//         return "bg-transparent hover:bg-gray-100 text-gray-700 hover:text-gray-900";
//       default: // outline
//         return "bg-white text-gray-700 hover:text-gray-900 border border-gray-200 hover:bg-gray-50";
//     }
//   };

//   const getSizeStyles = () => {
//     switch (size) {
//       case "lg":
//         return "px-6 py-3 text-base";
//       default: // sm and default
//         return "px-4 py-2 text-sm";
//     }
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       <button
//         onClick={handleClick}
//         className={`inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg ${getVariantStyles()} ${getSizeStyles()} ${className}`}
//         aria-label={`Open ${registryName} in v0`}
//         title={`Open ${registryName} in v0 for AI-powered editing`}
//       >
//         <Code className="h-4 w-4" />
//         {showLabel && <span className="hidden sm:inline">Open in v0</span>}
//         <ExternalLink className="h-3 w-3" />
//       </button>
//     </div>
//   );
// }