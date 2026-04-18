"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatedThemeToggler
      onToggle={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    />
  );
}