import type { ElementType, ReactNode } from "react";

type Props = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

/** Full-bleed page shell — see `.shell` in globals.css for the width/padding rules. */
export default function PageShell({ as: Tag = "div", children, className = "" }: Props) {
  return <Tag className={className ? `shell ${className}` : "shell"}>{children}</Tag>;
}
