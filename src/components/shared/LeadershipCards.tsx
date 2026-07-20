import LeadershipCard from "./LeadershipCard";
import type { LeadershipMember } from "@/data/leadership";

export default function LeadershipCards({ members }: { members: LeadershipMember[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {members.map((member) => (
        <LeadershipCard key={member.name + member.role} {...member} />
      ))}
    </div>
  );
}
