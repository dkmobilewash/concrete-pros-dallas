/**
 * Lightweight className combiner. Filters out falsey values and joins
 * the rest with a space. Keeps the bundle lean (no clsx/tailwind-merge).
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const SITE = {
  name: "Concrete Pros Of Dallas",
  phone: "(214) 555-0100",
  phoneHref: "tel:+12145550100",
  email: "info@concreteprosofdalas.com",
  emailHref: "mailto:info@concreteprosofdalas.com",
  hours: "Mon–Sat 7am–6pm",
  city: "Dallas, TX",
  url: "https://concreteprosofdalas.com",
  foundedYear: 2003,
  tagline: "Dallas's Most Trusted Concrete Contractors",
} as const;
