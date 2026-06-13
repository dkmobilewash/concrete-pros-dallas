import { GalleryImage } from "@/types";

/**
 * Gallery uses seeded picsum placeholders during development. Replace the
 * `src` values with real project photos in /public/images/gallery for launch.
 * Categories align with the gallery filter tabs.
 */
export const galleryCategories = [
  "All",
  "Driveways",
  "Patios",
  "Pool Decks",
  "Block Walls",
  "Foundations",
  "Commercial",
] as const;

export const galleryImages: GalleryImage[] = [
  { src: "https://picsum.photos/seed/cpd-g1/800/600", alt: "Stamped concrete driveway in Plano", category: "Driveways" },
  { src: "https://picsum.photos/seed/cpd-g2/800/600", alt: "Exposed aggregate driveway in Richardson", category: "Driveways" },
  { src: "https://picsum.photos/seed/cpd-g3/800/600", alt: "Broom finish driveway in Allen", category: "Driveways" },
  { src: "https://picsum.photos/seed/cpd-g4/800/600", alt: "Stamped stone-look patio in Coppell", category: "Patios" },
  { src: "https://picsum.photos/seed/cpd-g5/800/600", alt: "Stained concrete patio in Flower Mound", category: "Patios" },
  { src: "https://picsum.photos/seed/cpd-g6/800/600", alt: "Covered patio with outdoor kitchen in Frisco", category: "Patios" },
  { src: "https://picsum.photos/seed/cpd-g7/800/600", alt: "Cool deck pool surround in Garland", category: "Pool Decks" },
  { src: "https://picsum.photos/seed/cpd-g8/800/600", alt: "Resurfaced pool deck in Arlington", category: "Pool Decks" },
  { src: "https://picsum.photos/seed/cpd-g9/800/600", alt: "Textured pool deck in Carrollton", category: "Pool Decks" },
  { src: "https://picsum.photos/seed/cpd-g10/800/600", alt: "CMU retaining wall with stone veneer in Lewisville", category: "Block Walls" },
  { src: "https://picsum.photos/seed/cpd-g11/800/600", alt: "Block privacy wall in Addison", category: "Block Walls" },
  { src: "https://picsum.photos/seed/cpd-g12/800/600", alt: "Garden border retaining wall in University Park", category: "Block Walls" },
  { src: "https://picsum.photos/seed/cpd-g13/800/600", alt: "Post-tension home foundation pour in Dallas", category: "Foundations" },
  { src: "https://picsum.photos/seed/cpd-g14/800/600", alt: "Garage slab and grade beams in Plano", category: "Foundations" },
  { src: "https://picsum.photos/seed/cpd-g15/800/600", alt: "Commercial parking lot pour in Richardson", category: "Commercial" },
  { src: "https://picsum.photos/seed/cpd-g16/800/600", alt: "ADA-compliant sidewalk and ramp in Dallas", category: "Commercial" },
];
