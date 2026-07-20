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
      className="grid size-10 place-items-center rounded-full border border-orange/10 bg-background text-foreground shadow-sm transition hover:bg-orange/8 hover:text-orange focus-visible:outline-2 focus-visible:outline-orange [&_svg]:size-4"
      onToggle={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    />
  );
}
