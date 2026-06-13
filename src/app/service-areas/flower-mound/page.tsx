import { LocationTemplate, buildLocationMetadata } from "@/components/templates/LocationTemplate";

const SLUG = "flower-mound";

export const metadata = buildLocationMetadata(SLUG);

export default function Page() {
  return <LocationTemplate slug={SLUG} />;
}
