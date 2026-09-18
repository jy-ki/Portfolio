"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const NAV_LINKS = [
  { id: "work", label: "Work", href: "/#work" },
  { id: "about", label: "About", href: "/#about" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export function SiteNav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-8 sm:pt-6">
      <nav className="chrome-bar flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 shadow-[0_8px_32px_-16px_rgba(23,21,15,0.25)] sm:px-7">
        <div className="flex items-center gap-4">
          <span className="hidden gap-1.5 sm:flex" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#f4756b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-butter" />
            <span className="h-2.5 w-2.5 rounded-full bg-mint" />
          </span>
          <Link
            href="/"
            className="text-sm font-semibold tracking-wide text-ink"
            onClick={() => setMenuOpen(false)}
          >
            김지영
          </Link>
        </div>

        <ul className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  activeId === link.id
                    ? "text-blue"
                    : "text-ink/70 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
              <span
                aria-hidden
                className={cn(
                  "absolute -bottom-1.5 left-0 h-[3px] w-full origin-left rounded-full bg-blue transition-transform duration-300 motion-reduce:transition-none",
                  activeId === link.id ? "scale-x-100" : "scale-x-0"
                )}
              />
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav-panel"
          className="glass-surface-strong absolute inset-x-4 top-[4.5rem] flex flex-col gap-1 rounded-3xl p-4 sm:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                activeId === link.id ? "bg-blue/10 text-blue" : "text-ink/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
