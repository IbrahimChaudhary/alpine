import { FeatureItem, ServiceFeature } from '@/types';
import { Headphones, Package, Shield } from "lucide-react";

export const performanceFeatures: FeatureItem[] = [
  {
    number: "01",
    title: "Powerful Sound",
    description: "Enjoy rich bass and clear highs for a truly immersive audio experience."
  },
  {
    number: "02",
    title: "Wireless Freedom",
    description: "Instant Bluetooth connection for smooth, hassle-free playback."
  },
  {
    number: "03",
    title: "Long Battery Life",
    description: "Get up to 20 hours of nonstop playtime on a single charge."
  },
  {
    number: "04",
    title: "Compact & Portable",
    description: "Sleek, lightweight design—perfect for music on the go."
  }
];

export const serviceFeatures: ServiceFeature[] = [
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