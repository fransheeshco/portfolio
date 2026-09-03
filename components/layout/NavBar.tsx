"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#tech-stack" },
  { name: "Certificates", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about" className="site-brand" aria-label="Francis Cejas, home">
          <span>FC</span>
          <strong>FRANCIS</strong>
        </a>

        <div className="site-nav-group">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="site-nav-link">
              {item.name}
            </a>
          ))}
        </div>

        <button type="button" className="site-menu-button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div id="mobile-navigation" className="site-mobile-menu">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
