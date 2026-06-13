/**
 * Central registry for the real project photos stored in the Supabase
 * "Concrete Images" storage bucket (public). Everything that used to point at
 * picsum.photos placeholders now references this file, so re-assigning which
 * photo appears where is a one-line change here.
 *
 * NOTE: these were wired up without visual inspection (the build sandbox can't
 * reach Supabase), so the service/gallery groupings below are best-effort.
 * Swap the indices once you can see the images live.
 */
import { locations } from "./locations";

const PUBLIC =
  "https://tsybcnnjylmvhsxzknug.supabase.co/storage/v1/object/public";
const ROOT = `${PUBLIC}/Concrete%20Images`;
const SUB = `${ROOT}/Concrete%20Website%20Images`;

// Filenames are "Screenshot 2026-06-12 at <time> PM.png" (URL-encoded).
const enc = (time: string) =>
  `Screenshot%202026-06-12%20at%20${time}%20PM.png`;

const rootTimes = [
  "8.04.20", "8.04.53", "8.05.57", "8.11.07", "8.11.19", "8.11.30",
  "8.11.45", "8.11.52", "8.12.04", "8.12.42", "8.13.02", "8.13.18",
  "8.13.24", "8.13.51", "8.16.01", "8.16.41", "8.17.16", "8.18.03",
  "8.18.15", "8.18.27", "8.18.59",
];

const subTimes = ["8.02.28", "8.03.47", "8.04.04", "8.04.20", "8.04.53", "8.05.57"];

/** Every image in the bucket, as fully-qualified public URLs. */
export const concreteImages: string[] = [
  ...rootTimes.map((t) => `${ROOT}/${enc(t)}`),
  ...subTimes.map((t) => `${SUB}/${enc(t)}`),
];

/** Hero background photos used on top-level pages. */
export const siteImages = {
  homeHero: concreteImages[0],
  servicesHero: concreteImages[3],
  serviceAreasHero: concreteImages[14],
  galleryHero: concreteImages[15],
  contactHero: concreteImages[16],
};

/** Image shown for each service (used as the card image and page hero). */
export const serviceImages: Record<string, string> = {
  driveways: concreteImages[1],
  patios: concreteImages[2],
  "pool-decks": concreteImages[4],
  "block-walls": concreteImages[5],
  "foundations-slabs": concreteImages[6],
  "commercial-concrete": concreteImages[7],
};

/** Hero photo for each service-area/location page, keyed by slug. */
export const locationHeroImages: Record<string, string> = Object.fromEntries(
  locations.map((l, i) => [
    l.slug,
    concreteImages[(i + 8) % concreteImages.length],
  ]),
);
