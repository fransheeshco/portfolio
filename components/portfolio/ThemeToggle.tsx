"use client";

type Theme = "dark" | "light";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme: Theme = document.documentElement.dataset.theme === "light" ? "light" : "dark";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
      onClick={toggleTheme}
    >
      <span className="theme-toggle-icon theme-toggle-sun" aria-hidden="true">☼</span>
      <span className="theme-toggle-icon theme-toggle-moon" aria-hidden="true">☾</span>
      <span className="theme-toggle-label"><span className="theme-label-light">Light</span><span className="theme-label-dark">Dark</span></span>
    </button>
  );
}
