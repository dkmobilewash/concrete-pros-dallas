import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin, ShieldCheck } from "lucide-react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";
import { JsonLd, localBusinessSchema } from "@/components/JsonLd";
import { SITE } from "@/lib/utils";
import { cityNames } from "@/data/locations";

export const metadata: Metadata = {
  title: "Contact Concrete Pros Of Dallas | Free Estimates",
  description:
    "Contact us for a free concrete estimate in Dallas, TX. Call (214) 555-0100 or fill out our online form. We serve all DFW suburbs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <HeroSection
        title="Get Your Free Concrete Estimate"
        subtitle="Call us or send a message — we respond within one business day."
        imageSrc="https://picsum.photos/seed/cpd-contact-hero/1920/700"
        imageAlt="Concrete Pros Of Dallas crew ready to start a project"
        height="sm"
      />

      <Section background="white">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-semibold text-dark">
              Request a Free Quote
            </h2>
            <p className="mt-2 text-mid">
              Tell us about your project and we&apos;ll be in touch within one
              business day.
            </p>
            <div className="mt-6 rounded-lg border border-border bg-white p-6 shadow-md sm:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Info */}
          <aside className="lg:col-span-2">
            <div className="rounded-lg bg-primary p-8 text-white">
              <h2 className="font-display text-2xl font-semibold text-white">
                Contact Information
              </h2>

              <a
                href={SITE.phoneHref}
                className="mt-6 flex items-center gap-4 rounded-lg bg-white/10 p-4 transition-colors hover:bg-white/20"
              >
                <Phone className="h-7 w-7 shrink-0 text-accent" />
                <span>
                  <span className="block text-sm text-light/70">Call us</span>
                  <span className="font-display text-xl font-semibold">
                    {SITE.phone}
                  </span>
                </span>
              </a>

              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-light/70">Email</span>
                    <a href={SITE.emailHref} className="break-all hover:text-accent">
                      {SITE.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-light/70">Business Hours</span>
                    {SITE.hours}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>
                    <span className="block text-light/70">Service Area</span>
                    {cityNames.join(", ")}, and all of DFW.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-3 rounded-lg bg-accent/20 p-4 text-sm">
                <ShieldCheck className="h-6 w-6 shrink-0 text-accent" />
                <span>We respond within 1 business day.</span>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* Map */}
      <div className="h-[400px] w-full">
        <iframe
          title="Concrete Pros Of Dallas service area map"
          src="https://www.google.com/maps?q=Dallas,TX&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </>
  );
}
