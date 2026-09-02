"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowEffect?: boolean;
  children: React.ReactNode;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glowEffect = true, children, ...props }, ref) => (
    <div className="relative">
      {glowEffect && <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-white/35 via-[var(--yellow)]/25 to-white/35 blur-xl opacity-70" />}
      <div ref={ref} className={cn("relative rounded-2xl border border-white/50 bg-white/30 backdrop-blur-xl shadow-[0_8px_32px_rgba(37,40,43,0.18)] before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-linear-to-b before:from-white/55 before:to-transparent after:pointer-events-none after:absolute after:inset-px after:rounded-[calc(1rem-1px)] after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.55)]", className)} {...props}>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  ),
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
