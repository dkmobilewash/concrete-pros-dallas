"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { SITE, cn } from "@/lib/utils";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-colors duration-300",
          scrolled
            ? "border-b border-border bg-white/95 backdrop-blur"
            : "bg-white",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 font-display text-sm font-medium uppercase tracking-wide text-dark lg:flex">
            <Dropdown
              label="Services"
              href="/services"
              items={[
                { label: "Concrete Services", href: "/services" },
                ...services.map((s) => ({
                  label: s.name,
                  href: `/services/${s.slug}`,
                })),
              ]}
            />
            <Dropdown
              label="Service Areas"
              columns={2}
              items={locations.map((l) => ({
                label: l.city,
                href: `/service-areas/${l.slug}`,
              }))}
            />
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2.5 font-display text-sm font-medium text-white transition-colors hover:bg-accent-dark sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-dark hover:bg-light lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-md px-4 py-2 transition-colors hover:text-accent"
    >
      {children}
    </Link>
  );
}

function Dropdown({
  label,
  href,
  items,
  columns = 1,
}: {
  label: string;
  href?: string;
  items: { label: string; href: string }[];
  columns?: 1 | 2;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 rounded-md px-4 py-2 transition-colors hover:text-accent"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2">
          <div
            className={cn(
              "rounded-lg border border-border bg-white p-2 shadow-lg",
              columns === 2 ? "grid w-[28rem] grid-cols-2 gap-1" : "w-64",
            )}
          >
            {href && (
              <Link
                href={href}
                className="col-span-full rounded-md px-3 py-2 text-accent transition-colors hover:bg-light"
              >
                View All →
              </Link>
            )}
            {items
              .filter((i) => i.href !== href)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-mid transition-colors hover:bg-light hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
