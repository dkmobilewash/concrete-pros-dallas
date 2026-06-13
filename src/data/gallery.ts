import { GalleryImage } from "@/types";
import { concreteImages } from "./images";

export const galleryCategories = [
  "All",
  "Driveways",
  "Patios",
  "Pool Decks",
  "Block Walls",
  "Foundations",
  "Commercial",
] as const;

// Real project photos from the Supabase bucket. Categories are assigned
// round-robin as a placeholder — re-categorize each image once viewable.
const filterCategories = galleryCategories.filter((c) => c !== "All");

export const galleryImages: GalleryImage[] = concreteImages.map((src, i) => ({
  src,
  alt: `Completed concrete project ${i + 1} by Concrete Pros Of Dallas in the Dallas–Fort Worth area`,
  category: filterCategories[i % filterCategories.length],
}));
