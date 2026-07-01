import { SITE } from "@/lib/utils";
import { cityNames } from "@/data/locations";

/** Renders a JSON-LD script tag from an arbitrary schema object. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: `${SITE.url}/og-image.jpg`,
  "@id": SITE.url,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  areaServed: ["Dallas", ...cityNames],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
};

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

/**
 * FAQPage schema built from visible on-page FAQ content. Each entry becomes a
 * Question with an acceptedAnswer, per Google's Rich Results structure.
 */
export function faqPageSchema(
  faqs: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Service schema for an individual service page (domain-correct @id/url). */
export function serviceSchema(service: {
  name: string;
  slug: string;
  description: string;
  image?: string;
}): Record<string, unknown> {
  const url = `${SITE.url}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url,
    url,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    ...(service.image ? { image: service.image } : {}),
    provider: {
      "@type": "LocalBusiness",
      "@id": SITE.url,
      name: SITE.name,
      telephone: SITE.phone,
    },
    areaServed: "Dallas–Fort Worth metroplex, TX",
  };
}

/**
 * ProfessionalService schema for a city/service-area page, with areaServed
 * scoped to that specific city (not a generic DFW value).
 */
export function cityServiceSchema(city: {
  city: string;
  slug: string;
  description: string;
}): Record<string, unknown> {
  const url = `${SITE.url}/service-areas/${city.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": url,
    url,
    name: `${SITE.name} — ${city.city}, TX`,
    description: city.description,
    image: `${SITE.url}/og-image.jpg`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$",
    provider: {
      "@type": "LocalBusiness",
      "@id": SITE.url,
      name: SITE.name,
    },
    areaServed: {
      "@type": "City",
      name: `${city.city}, TX`,
    },
  };
}
