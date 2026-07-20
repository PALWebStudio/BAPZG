import RegionCard from "./RegionCard";
import type { Region } from "@/data/regions";

export default function RegionalCards({ regions }: { regions: Region[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {regions.map((region) => (
        <RegionCard key={region.city} {...region} />
      ))}
    </div>
  );
}
