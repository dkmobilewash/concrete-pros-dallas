import {
  Car,
  Sun,
  Waves,
  Building2,
  Layers,
  BrickWall,
  LucideIcon,
} from "lucide-react";

/** Maps a service slug to its Lucide icon. */
export const serviceIcons: Record<string, LucideIcon> = {
  driveways: Car,
  patios: Sun,
  "pool-decks": Waves,
  "block-walls": BrickWall,
  "foundations-slabs": Layers,
  "commercial-concrete": Building2,
};
