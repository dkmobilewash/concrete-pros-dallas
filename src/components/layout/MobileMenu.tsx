"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Phone, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, cn } from "@/lib/utils";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Lock body scroll + close on Escape while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggle = (key: string) =>
    setOpenSection((cur) => (cur === key ? null : key));

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <div
        className="absolute inset-0 bg-dark/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 flex h-full w-full max-w-sm animate-slide-in flex-col overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <Logo />
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-dark hover:bg-light"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 bg-accent px-5 py-4 font-display text-lg font-medium text-white"
        >
          <Phone className="h-5 w-5" />
          {SITE.phone}
        </a>

        <nav className="flex-1 px-5 py-2 font-display">
          {/* Services accordion */}
          <MobileAccordion
            label="Services"
            isOpen={openSection === "services"}
            onToggle={() => toggle("services")}
          >
            <Link
              href="/services"
              onClick={onClose}
              className="block py-2 text-mid hover:text-accent"
            >
              All Concrete Services
            </Link>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={onClose}
                className="block py-2 text-mid hover:text-accent"
              >
                {s.name}
              </Link>
            ))}
          </MobileAccordion>

          {/* Service Areas accordion */}
          <MobileAccordion
            label="Service Areas"
            isOpen={openSection === "areas"}
            onToggle={() => toggle("areas")}
          >
            {locations.map((l) => (
              <Link
                key={l.slug}
                href={`/service-areas/${l.slug}`}
                onClick={onClose}
                className="block py-2 text-mid hover:text-accent"
              >
                {l.city}
              </Link>
            ))}
          </MobileAccordion>

          <Link
            href="/gallery"
            onClick={onClose}
            className="block border-b border-border py-4 text-lg font-medium text-dark hover:text-accent"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="block border-b border-border py-4 text-lg font-medium text-dark hover:text-accent"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-4 text-lg font-medium text-dark"
      >
        {label}
        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>
      {isOpen && <div className="pb-3 pl-3">{children}</div>}
    </div>
  );
}
