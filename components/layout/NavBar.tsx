"use client";

import { ThemeToggle } from "@/components/layout/theme-toggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center gap-5 px-5 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center gap-3" aria-label="Francis Cejas, home">
          <span className="grid size-9 place-items-center border border-foreground font-black tracking-tighter">
            FC
          </span>
          <span className="text-xs font-black uppercase tracking-[0.18em]">
            Francis Cejas
          </span>
        </a>
        <div className="ml-auto hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-muted-foreground transition hover:text-orange"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="ml-auto lg:ml-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
