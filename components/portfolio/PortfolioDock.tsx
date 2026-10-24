"use client";

import { BriefcaseBusiness, Code2, FolderGit2, Home, Mail, Trophy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

type NavigationItem = { label: string; href: string };

const icons = [FolderGit2, BriefcaseBusiness, Code2, Trophy, Mail];

function DockItem({ mouseX, children }: { mouseX: MotionValue<number>; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return value - bounds.x - bounds.width / 2;
  });
  const size = useSpring(useTransform(distance, [-90, 0, 90], [40, 56, 40]), { mass: .1, stiffness: 150, damping: 12 });

  return <motion.div ref={ref} style={{ width: size, height: size }} className="dock-icon">{children}</motion.div>;
}

export function PortfolioDock({ items }: { items: NavigationItem[] }) {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.nav className="portfolio-dock" aria-label="Portfolio navigation" onMouseMove={(event) => mouseX.set(event.pageX)} onMouseLeave={() => mouseX.set(Infinity)}>
      <DockItem mouseX={mouseX}><a href="#top" aria-label="Home" data-tooltip="Home"><Home /></a></DockItem>
      {items.map((item, index) => {
        const Icon = icons[index] ?? Home;
        return <DockItem mouseX={mouseX} key={item.href}><a href={item.href} aria-label={item.label} data-tooltip={item.label}><Icon /></a></DockItem>;
      })}
      <i aria-hidden="true" />
      <DockItem mouseX={mouseX}><a href="https://github.com/fransheeshco" target="_blank" rel="noreferrer" aria-label="GitHub" data-tooltip="GitHub"><FaGithub /></a></DockItem>
      <DockItem mouseX={mouseX}><a href="https://www.linkedin.com/in/francis-nelson-cejas" target="_blank" rel="noreferrer" aria-label="LinkedIn" data-tooltip="LinkedIn"><FaLinkedin /></a></DockItem>
      <DockItem mouseX={mouseX}><ThemeToggle /></DockItem>
    </motion.nav>
  );
}
