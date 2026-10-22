"use client";

import { memo, useState } from "react";

type NavigationItem = { label: string; href: string };

export const MobileNavigation = memo(function MobileNavigation({ items }: { items: NavigationItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="menu-button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          {items.map((item) => <a href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href="mailto:francisn.cejas@gmail.com" onClick={() => setOpen(false)}>Start a conversation</a>
        </nav>
      )}
    </>
  );
});
