"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function MagicBlurFade({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: -6, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: .4, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
