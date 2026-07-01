import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, TRUST } from "@/lib/utils";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo light />
            <p className="mt-4 font-display text-sm font-medium uppercase tracking-wide text-accent">
              {SITE.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-light/70">
              Licensed and fully insured concrete contractors serving the Dallas–Fort
              Worth metroplex since {SITE.foundedYear}. Free estimates on every project.
            </p>
            {/* Trust specifics — render only the fields that have been filled in
                (see TRUST in src/lib/utils.ts). Hidden until real values are set. */}
            {(TRUST.warranty ||
              TRUST.financingPartner ||
              TRUST.licenseId ||
              TRUST.insuranceId) && (
              <ul className="mt-4 space-y-1 text-sm text-light/70">
                {TRUST.warranty && <li>{TRUST.warranty}</li>}
                {TRUST.financingPartner && <li>{TRUST.financingPartner}</li>}
                {TRUST.licenseId && <li>{TRUST.licenseId}</li>}
                {TRUST.insuranceId && <li>{TRUST.insuranceId}</li>}
              </ul>
            )}
            <div className="mt-5 flex gap-3">
              <SocialIcon
                href="https://facebook.com"
                label="Concrete Pros Of Dallas on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon
                href="https://instagram.com"
                label="Concrete Pros Of Dallas on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon
                href="https://google.com"
                label="Concrete Pros Of Dallas on Google"
              >
                <MapPin className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-light/70 transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Service Areas
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/service-areas/${l.slug}`}
                    className="text-light/70 transition-colors hover:text-accent"
                  >
                    {l.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-light/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Serving all of {SITE.city} &amp; DFW</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={SITE.phoneHref} className="hover:text-accent">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <a href={SITE.emailHref} className="break-all hover:text-accent">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center text-xs text-light/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-of-service" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
    >
      {children}
    </a>
  );
}
