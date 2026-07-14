"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

type Props = {
  icon: ReactNode;
  target: number;
  suffix?: string;
  label: string;
};

export default function StatCard({ icon, target, suffix = "", label }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 26, stiffness: 60 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, target, motionValue]);

  useEffect(() => {
    if (reduceMotion) {
      if (ref.current) ref.current.textContent = `${target.toLocaleString("bg-BG")}${suffix}`;
      return;
    }
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${Math.floor(latest).toLocaleString("bg-BG")}${suffix}`;
      }
    });
  }, [springValue, suffix, reduceMotion, target]);

  return (
    <div className="flex items-center gap-4 rounded-[var(--radius-md)] border border-black/[0.04] bg-cream px-6 py-6 shadow-[var(--shadow-card)]">
      <span className="shrink-0 text-burgundy" aria-hidden="true">
        {icon}
      </span>
      <div>
        <strong className="font-display block text-2xl font-semibold text-ink">
          <span aria-label={`${target.toLocaleString("bg-BG")}${suffix}`}>
            <span ref={ref} aria-hidden="true">
              0{suffix}
            </span>
          </span>
        </strong>
        <span className="mt-1 block text-xs leading-5 text-muted/60">{label}</span>
      </div>
    </div>
  );
}
