"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = {
  name: string;
  href: string;
  active?: boolean;
  external?: boolean;
};

const leftItems: NavItem[] = [
  { name: "Home", href: "#about", active: true },
  { name: "Experience", href: "#experience" },
  { name: "Service", href: "#tech-stack" },
];

const rightItems: NavItem[] = [
  { name: "Certificates", href: "#certifications" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const mobileItems = [...leftItems, ...rightItems];

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
        <div className="site-nav-group">
          {leftItems.map((item) => (
            <a key={item.name} href={item.href} className={item.active ? "site-nav-link is-active" : "site-nav-link"}>
              {item.name}
            </a>
          ))}
        </div>

        <a href="#about" className="site-brand" aria-label="Francis Cejas, home">
          <span>FC</span>
          <strong>FRANCIS</strong>
        </a>

        <div className="site-nav-group site-nav-group-right">
          {rightItems.map((item) => (
            <a key={item.name} href={item.href} className="site-nav-link" {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
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
          {mobileItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
