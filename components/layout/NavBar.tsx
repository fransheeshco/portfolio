"use client";

import { ThemeToggle } from "@/components/layout/theme-toggle";

const navItems = [
  { name: "ABOUT", href: "#" },
  { name: "PROJECTS", href: "#projects" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "CONTACT", href: "#contact" },
];

export default function NavBar() {
  return (
    <div className="fixed top-3 left-0 w-full z-50 flex justify-center px-2">
      <nav
        className="
          flex items-center
          gap-3 sm:gap-6
          px-4 sm:px-6 py-2 sm:py-3
          rounded-full
          bg-black text-white
          dark:bg-white dark:text-black
          backdrop-blur-xl shadow-lg border border-white/10
          transition-all duration-300 hover:scale-[1.01]
          max-w-[95vw]
        "
      >
        {/* Nav Items */}
        <div className="flex items-center gap-3 sm:gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                px-2 sm:px-4 py-1 sm:py-2 rounded-md
                text-[10px] sm:text-sm
                leading-none
                whitespace-nowrap
                transition-all duration-200
                hover:bg-white hover:text-black
                dark:hover:bg-black dark:hover:text-white
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Toggle */}
        <div className="flex items-center scale-90 sm:scale-100">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}