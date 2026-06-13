"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<string>("All");

  const visible =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={cn(
              "rounded-full px-4 py-2 font-display text-sm font-medium uppercase tracking-wide transition-colors",
              active === cat
                ? "bg-accent text-white"
                : "border border-border bg-white text-primary hover:border-accent hover:text-accent",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-light shadow-md"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/70 via-dark/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="m-4 rounded-full bg-accent px-3 py-1 font-display text-xs font-medium uppercase tracking-wide text-white">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
