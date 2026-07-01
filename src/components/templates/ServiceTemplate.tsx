import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronDown, Phone, ArrowRight } from "lucide-react";
import { getService } from "@/data/services";
import { HeroSection } from "@/components/sections/HeroSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "@/components/JsonLd";
import { SITE } from "@/lib/utils";

export function buildServiceMetadata(slug: string): Metadata {
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage],
    },
  };
}

export function ServiceTemplate({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedServices
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.name, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: service.name,
          slug: service.slug,
          description: service.metaDescription,
          image: service.heroImage,
        })}
      />
      {service.faq.length > 0 && <JsonLd data={faqPageSchema(service.faq)} />}

      <HeroSection
        title={service.name}
        subtitle={service.heroSubtitle}
        imageSrc={service.heroImage}
        imageAlt={`${service.name} project by Concrete Pros Of Dallas`}
        height="md"
        primaryCta={{ text: "Get a Free Estimate", href: "/contact" }}
      />

      {/* Intro + sidebar CTA */}
      <Section background="white">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              as="h2"
              align="left"
              eyebrow="Overview"
              title={`${service.name} in the Dallas Area`}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-mid">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-border bg-light p-6 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-dark">
                Get a Free Quote
              </h3>
              <p className="mt-2 text-sm text-mid">
                Tell us about your project and we&apos;ll get back to you within one
                business day — no obligation.
              </p>
              <div className="mt-5 space-y-3">
                <Button href="/contact" variant="primary" fullWidth>
                  Request a Quote
                </Button>
                <a
                  href={SITE.phoneHref}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-display text-sm font-medium uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="light">
        <SectionHeading
          eyebrow="Why It Matters"
          title={`Benefits of Our ${service.name}`}
        />
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                <Check className="h-4 w-4 text-accent" aria-hidden="true" />
              </span>
              <span className="text-mid">{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section background="white">
        <SectionHeading
          eyebrow="How We Work"
          title="Our Process"
          subtitle="A real sequence, done in order — every step matters to the finished result."
        />
        <ol className="mx-auto mt-10 max-w-3xl space-y-6">
          {service.processSteps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-dark">
                  {step.title}
                </h3>
                <p className="mt-1 text-mid">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section background="light">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {service.faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-border bg-white p-5 shadow-sm [&_svg]:open:rotate-180"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-dark">
                {item.question}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-accent transition-transform"
                  aria-hidden="true"
                />
              </summary>
              <p className="accordion-content mt-3 text-mid">{item.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Related services */}
      {related.length > 0 && (
        <Section background="white">
          <SectionHeading eyebrow="Explore More" title="Related Services" />
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="group flex overflow-hidden rounded-lg border border-border bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-auto w-32 shrink-0 overflow-hidden">
                  <Image
                    src={r.heroImage}
                    alt={`${r.name} in Dallas`}
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-4">
                  <h3 className="font-display text-lg font-semibold text-dark">
                    {r.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 font-display text-sm font-medium uppercase tracking-wide text-accent">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}
