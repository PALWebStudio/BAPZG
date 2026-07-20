import type { ReactNode } from "react";

export default function StickySidebar({ children, top = "top-28" }: { children: ReactNode; top?: string }) {
  return <div className={`h-fit ${top} lg:sticky`}>{children}</div>;
}
