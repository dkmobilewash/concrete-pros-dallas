import { LocationTemplate, buildLocationMetadata } from "@/components/templates/LocationTemplate";

const SLUG = "southlake";

export const metadata = buildLocationMetadata(SLUG);

export default function Page() {
  return <LocationTemplate slug={SLUG} />;
}
