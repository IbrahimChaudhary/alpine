"use client"

import { useState } from "react"
import { Code, ExternalLink, ChevronDown, Home, Sparkles, Volume2, Award, Image as ImageIcon, HelpCircle, FileText, Percent, Info, Target, Mail, ClipboardList, DollarSign, Package, AudioLines, Diamond, Headphones, Paperclip, Calendar, Shield } from "lucide-react"

interface ComponentOption {
  name: string;
  registryName: string;
  description: string;
  icon: React.ReactNode;
  pages: ('home' | 'about' | 'contact' | 'specifications' | 'pricing' | 'products' | 'blog' | 'terms' | 'privacy')[];
}

interface AlpineV0MenuProps {
  page?: 'home' | 'about' | 'contact' | 'specifications' | 'pricing' | 'products' | 'blog' | 'terms' | 'privacy';
}

export function AlpineV0Menu({ page = 'home' }: AlpineV0MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const allComponentOptions: ComponentOption[] = [
    {
      name: "Hero Section",
      registryName: "hero-section",
      description: "Main hero with parallax effects",
      icon: <Home className="w-4 h-4" />,
      pages: ['home']
    },
    {
      name: "Innovation Section",
      registryName: "innovation-section",
      description: "Floating speakers animation",
      icon: <Sparkles className="w-4 h-4" />,
      pages: ['home']
    },
    {
      name: "Speaker Features",
      registryName: "speaker-features",
      description: "Feature cards with images",
      icon: <Volume2 className="w-4 h-4" />,
      pages: ['home']
    },
    {
      name: "Values Section",
      registryName: "values-section",
      description: "Company stats and values",
      icon: <Award className="w-4 h-4" />,
      pages: ['home', 'about']
    },
    {
      name: "Gallery Section",
      registryName: "gallery-section",
      description: "Product image gallery",
      icon: <ImageIcon className="w-4 h-4" />,
      pages: ['home']
    },
    {
      name: "FAQ Section",
      registryName: "faq-section",
      description: "Frequently asked questions",
      icon: <HelpCircle className="w-4 h-4" />,
      pages: ['home']
    },
    {
      name: "Blog Section",
      registryName: "blog-section",
      description: "Latest blog posts",
      icon: <FileText className="w-4 h-4" />,
      pages: ['home', 'about']
    },
    {
      name: "CTA Section",
      registryName: "discount-cta",
      description: "Call-to-action buttons",
      icon: <Percent className="w-4 h-4" />,
      pages: ['home', 'about']
    },
    {
      name: "About Hero",
      registryName: "about-hero",
      description: "About page hero section",
      icon: <Info className="w-4 h-4" />,
      pages: ['about']
    },
    {
      name: "Mission Vision",
      registryName: "mission-vision",
      description: "Company mission and vision",
      icon: <Target className="w-4 h-4" />,
      pages: ['about']
    },
    {
      name: "Contact Page",
      registryName: "contact-page",
      description: "Contact form with contact info",
      icon: <Mail className="w-4 h-4" />,
      pages: ['contact']
    },
    {
      name: "Specifications",
      registryName: "specifications-page",
      description: "Product specifications page",
      icon: <ClipboardList className="w-4 h-4" />,
      pages: ['specifications']
    },
    {
      name: "Pricing",
      registryName: "pricing-page",
      description: "Product pricing cards",
      icon: <DollarSign className="w-4 h-4" />,
      pages: ['pricing']
    },
    {
      name: "Products Hero",
      registryName: "products-hero",
      description: "Hero section for products",
      icon: <Home className="w-4 h-4" />,
      pages: ['products']
    },
    {
      name: "Proven Section",
      registryName: "proven-section",
      description: "Product showcase",
      icon: <Package className="w-4 h-4" />,
      pages: ['products']
    },
    {
      name: "Big Sound Section",
      registryName: "big-sound-section",
      description: "Audio feature showcase",
      icon: <AudioLines className="w-4 h-4" />,
      pages: ['products']
    },
    {
      name: "Testimonials",
      registryName: "testimonials-section",
      description: "Customer testimonials",
      icon: <Diamond className="w-4 h-4" />,
      pages: ['products']
    },
    {
      name: "Product Performance",
      registryName: "product-performance",
      description: "Performance features grid",
      icon: <Volume2 className="w-4 h-4" />,
      pages: ['products']
    },
    {
      name: "Service Features",
      registryName: "service-features",
      description: "Service features row",
      icon: <Headphones className="w-4 h-4" />,
      pages: ['products']
    },
    {
      name: "Blog Page",
      registryName: "blog-page",
      description: "Blog listing page",
      icon: <Paperclip className="w-4 h-4" />,
      pages: ['blog']
    },
    {
      name: "Blog Post Page",
      registryName: "blog-post-page",
      description: "Individual blog post",
      icon: <FileText className="w-4 h-4" />,
      pages: ['blog']
    },
    {
      name: "Terms of Service",
      registryName: "terms-page",
      description: "Terms and conditions page",
      icon: <Calendar className="w-4 h-4" />,
      pages: ['terms']
    },
    {
      name: "Privacy Policy",
      registryName: "privacy-page",
      description: "Privacy policy page",
      icon: <Shield className="w-4 h-4" />,
      pages: ['privacy']
    }
  ];

  // Filter components based on current page
  const componentOptions = allComponentOptions.filter(option =>
    option.pages.includes(page)
  );

  const handleComponentSelect = async (registryName: string) => {
    try {
      console.log(`Opening ${registryName} in V0...`);

      // Fetch the registry data
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
      const registryUrl = `${baseUrl}/r/${registryName}.json`

      const response = await fetch(registryUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch registry: ${response.status}`);
      }

      const registryData = await response.json();

      // Create data URL
      const dataUrl = `data:application/json,${encodeURIComponent(JSON.stringify(registryData, null, 2))}`;

      // Open V0
      const v0Url = `https://v0.dev/chat/api/open?url=${encodeURIComponent(dataUrl)}`;

      console.log(`Opening V0 with ${registryName} (${Math.round(dataUrl.length / 1024)}KB)`);
      window.open(v0Url, '_blank', 'noopener,noreferrer');

      // Close menu
      setIsOpen(false);

    } catch (error) {
      console.error('Error opening V0:', error);
      alert(`Error opening V0: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-2 min-w-[280px] max-h-[400px] overflow-y-auto">
          <div className="p-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
              Edit Alpine Components in V0
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Choose a component to customize
            </p>
          </div>

          <div className="py-2">
            {componentOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleComponentSelect(option.registryName)}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-left"
              >
                <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
                  {option.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {option.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {option.description}
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#252525] dark:bg-[#fafafa] hover:bg-[#252525]/90 dark:hover:bg-[#fafafa]/90 text-[#fafafa] dark:text-[#252525] px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-sm font-medium flex items-center gap-2"
        title="Open Alpine components in V0"
      >
        <Code className="h-4 w-4" />
        <span>Open in V0</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
}