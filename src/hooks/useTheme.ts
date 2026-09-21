"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

/**
 * Reads whatever `data-theme` the blocking inline script (see layout.tsx)
 * already set on <html> before first paint, so this never causes a
 * flash-of-wrong-theme the way a plain useEffect-after-mount would.
 */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return [theme, toggleTheme];
}

/**
 * Inlined into a beforeInteractive <Script> in layout.tsx. Defaults to
 * light regardless of the OS color-scheme preference — the palette here
 * is a deliberate brand choice, not a utility UI that should silently
 * follow the visitor's system setting. Dark is opt-in only, via the
 * toggle, and remembered from then on.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    document.documentElement.setAttribute('data-theme', stored === 'dark' ? 'dark' : 'light');
  } catch (e) {}
})();
`;
