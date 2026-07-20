"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

export function AceternityGridBackground({
  className,
}: {
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <motion.div
        className="absolute -inset-8 bg-[linear-gradient(to_right,rgba(234,88,12,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,88,12,0.15)_1px,transparent_1px)] [background-size:32px_32px] dark:bg-[linear-gradient(to_right,rgba(251,146,60,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(251,146,60,0.16)_1px,transparent_1px)]"
        animate={
          reduceMotion
            ? undefined
            : {
                x: [0, 6, 0],
                y: [0, -6, 0],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_92%)]" />
    </div>
  );
}
