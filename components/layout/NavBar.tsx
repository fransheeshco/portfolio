"use client";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about", id: "about" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience & Education", href: "#experience", id: "experience" },
];
const observedSectionIds = [...navItems.map((item) => item.id), "contact"];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) setActiveSection(visible.target.id);
      },
      {
        rootMargin: "-15% 0px -75% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-4 py-3 sm:px-8">
      <nav
        className="mx-auto flex h-16 max-w-[1500px] items-center px-1 sm:px-3"
      >
        <div className="ml-auto hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-orange focus-visible:outline-2 focus-visible:outline-orange ${
                activeSection === item.id
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
              {activeSection === item.id && (
                <motion.span
                  layoutId="active-nav-dot"
                  className="absolute -bottom-0.5 left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-orange"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:ml-4">
          <a
            href="#contact"
            onClick={() => setActiveSection("contact")}
            className="flex h-10 items-center gap-2 rounded-full bg-orange px-4 text-sm font-bold text-white shadow-[0_8px_20px_rgba(234,88,12,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
          >
            <Send className="size-4" />
            <span className="hidden sm:inline">Let&apos;s talk</span>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
