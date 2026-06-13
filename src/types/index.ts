export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroSubtitle: string;
  intro: string[];
  benefits: string[];
  processSteps: ProcessStep[];
  faq: FAQ[];
  relatedServices: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
  rating: number;
}

export interface Location {
  city: string;
  slug: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string[];
  neighborhoods: string[];
  nearbyAreas: string[];
  services: string[];
  testimonial: {
    quote: string;
    name: string;
    city: string;
  };
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
