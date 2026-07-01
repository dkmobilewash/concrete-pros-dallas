/**
 * Lightweight className combiner. Filters out falsey values and joins
 * the rest with a space. Keeps the bundle lean (no clsx/tailwind-merge).
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Canonical production origin. Single source of truth for the whole site —
 * canonical tags (via metadataBase), JSON-LD (@id/url/image), breadcrumbs, and
 * the next-sitemap generator all read from this. Override per-environment with
 * NEXT_PUBLIC_SITE_URL; the fallback is the real production domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.concreteprosdallas.com";

/**
 * Trust-signal specifics (Priority 8). PLACEHOLDERS — intentionally empty.
 * Fill in with the business's REAL values and they surface automatically in the
 * footer (and can be added to the homepage). Do NOT fabricate license, warranty,
 * or insurance data; leave a field as "" to keep it hidden until it's verified.
 */
export const TRUST: {
  warranty: string;
  financingPartner: string;
  licenseId: string;
  insuranceId: string;
} = {
  warranty: "", // e.g. "5-Year Workmanship Warranty"
  financingPartner: "", // e.g. "Financing available — ask us how"
  licenseId: "", // e.g. "TX Contractor License #000000"
  insuranceId: "", // e.g. "Fully insured — Policy #000000"
};

export const SITE = {
  name: "Concrete Pros Of Dallas",
  phone: "(214) 466-2536",
  phoneHref: "tel:+12144662536",
  email: "info@concreteprosdallas.com",
  emailHref: "mailto:info@concreteprosdallas.com",
  hours: "Mon–Sat 7am–6pm",
  city: "Dallas, TX",
  url: SITE_URL,
  foundedYear: 2003,
  tagline: "Dallas's Most Trusted Concrete Contractors",
} as const;
