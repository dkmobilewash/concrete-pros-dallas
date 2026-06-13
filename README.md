# Concrete Pros Of Dallas

Production website for **Concrete Pros Of Dallas**, a concrete contractor serving the
Dallas–Fort Worth metroplex. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS v3 (custom navy / construction-orange design system)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Fonts:** Oswald (display) + Inter (body) via `next/font/google`
- **SEO:** Next.js Metadata API, JSON-LD (LocalBusiness, Service, BreadcrumbList), `next-sitemap`
- **Deploy target:** Vercel

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script          | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Start the dev server                                |
| `npm run build` | Production build (runs `next-sitemap` on postbuild) |
| `npm run start` | Serve the production build                          |
| `npm run lint`  | Run ESLint                                           |

## Project Structure

```
src/
├── app/                # Routes (home, services, service-areas, gallery, contact, legal)
│   └── api/contact/    # Contact form POST handler
├── components/
│   ├── layout/         # Header, Footer, MobileMenu, Logo
│   ├── ui/             # Button, SectionHeading, Badge, Section
│   ├── sections/       # Hero, ServicesGrid, WhyChooseUs, Testimonials, CTA, Gallery…
│   ├── forms/          # ContactForm (RHF + Zod)
│   └── templates/      # ServiceTemplate, LocationTemplate (reusable page templates)
├── data/               # services, locations, testimonials, gallery content
├── lib/                # utils + service icon map
└── types/              # shared TypeScript types
```

Service pages (`/services/*`) and location pages (`/service-areas/*`) are thin route files
that render shared templates driven by `src/data/services.ts` and `src/data/locations.ts`.

## Content & Images

Gallery and hero images use seeded [picsum.photos](https://picsum.photos) placeholders during
development. Replace the `src` values (and `next.config.js` `remotePatterns`) with real project
photos before launch. Add an `og-image.jpg` to `public/` for social sharing.

## Contact Form

`POST /api/contact` currently logs submissions to the server console and returns
`{ success: true }`. Wire it to an email service (Resend, SendGrid) for production.
