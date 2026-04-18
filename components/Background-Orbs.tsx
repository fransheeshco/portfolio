"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BackgroundOrbs() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-background" />

      {/* Orb 1 (cyan/blue) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(0,225,255,0.45), transparent 60%)"
            : "radial-gradient(circle, rgba(0,120,255,0.25), transparent 60%)",
        }}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -140, 90, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 (purple) */}
      <motion.div
        className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(124,58,237,0.40), transparent 60%)"
            : "radial-gradient(circle, rgba(124,58,237,0.22), transparent 60%)",
        }}
        animate={{
          x: [0, -140, 100, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 3 (extra depth layer) */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(255,255,255,0.10), transparent 65%)"
            : "radial-gradient(circle, rgba(0,0,0,0.08), transparent 65%)",
        }}
        animate={{
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}