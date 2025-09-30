// "use client"

// import { Code, ExternalLink } from "lucide-react"

// interface V0ButtonProps {
//   registryName: string;
//   className?: string;
//   variant?: "default" | "outline" | "ghost" | "link";
//   size?: "default" | "sm" | "lg" | "icon";
//   showLabel?: boolean;
// }

// export function V0Button({
//   registryName,
//   className = "",
//   variant = "outline",
//   size = "sm",
//   showLabel = true
// }: V0ButtonProps) {
//   const handleClick = async () => {
//     try {
//       // Fetch the registry data through our API route
//       const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
//       const apiUrl = `${baseUrl}/api/registry/${registryName}`

//       console.log(`Fetching registry from API: ${apiUrl}`);

//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error(`Failed to fetch registry: ${response.status} ${response.statusText}`);
//       }

//       const registryData = await response.json();

//       // Create a data URL with the registry data
//       const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(registryData, null, 2))}`;

//       // Open V0 with the data URL
//       const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(dataUrl)}`;

//       console.log(`Opening V0 with data URL (${Math.round(dataUrl.length / 1024)}KB of data)`);
//       window.open(v0Url, '_blank', 'noopener,noreferrer');

//     } catch (error) {
//       console.error('Error opening V0:', error);
//       alert(`Error opening V0: ${error.message}\n\nTroubleshooting:\n1. Make sure your dev server is running\n2. Run 'npm run build:registry' to build registry files\n3. Check browser console for more details`);
//     }
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