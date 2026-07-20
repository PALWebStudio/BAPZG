import type { LucideIcon } from "lucide-react";
import StatCard from "./StatCard";

export type StatDatum = {
  icon: LucideIcon;
  target: number;
  suffix?: string;
  label: string;
};

export default function StatsGrid({ stats }: { stats: StatDatum[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map(({ icon: Icon, target, suffix, label }) => (
        <StatCard key={label} icon={<Icon size={30} strokeWidth={1.6} />} target={target} suffix={suffix} label={label} />
      ))}
    </div>
  );
}
