import { LocationTemplate, buildLocationMetadata } from "@/components/templates/LocationTemplate";

const SLUG = "mckinney";

export const metadata = buildLocationMetadata(SLUG);

export default function Page() {
  return <LocationTemplate slug={SLUG} />;
}
