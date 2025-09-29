// Common types used across the application

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  content?: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
}

export interface ValueItem {
  iconName: string;
  title: string;
  description: string;
}

export interface SpecificationItem {
  label: string;
  value: string;
  icon?: string;
}

export interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
}

export interface ServiceFeature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}