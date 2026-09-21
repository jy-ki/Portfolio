"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

/**
 * A quiet, full-bleed color band — deliberately smaller and slower than
 * Hero, so it reads as a footnote rather than a second headline. Pauses
 * on hover/focus, freezes under reduced motion, and drops the scrolling
 * track for a plain static row on small screens.
 */
export function MarqueeBand({
  items,
  bg = "bg-orange",
  textClassName = "text-ivory",
}: {
  items: string[];
  bg?: string;
  textClassName?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const [paused, setPaused] = useState(false);
  const trackItems = reducedMotion ? items : [...items, ...items];
  const animating = !reducedMotion && !paused;

  return (
    <div
      className={cn("no-print overflow-hidden py-2.5 sm:py-3", bg)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Scrolling track — hidden on small screens in favor of a static list. */}
      <motion.div
        className="hidden w-max items-center gap-16 whitespace-nowrap sm:flex"
        animate={animating ? { x: ["0%", "-50%"] } : undefined}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      >
        {trackItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn("text-sm font-semibold tracking-wide", textClassName)}
          >
            {item}
          </span>
        ))}
      </motion.div>

      {/* Static list for small screens. */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 px-6 sm:hidden">
        {items.map((item) => (
          <span
            key={item}
            className={cn("text-sm font-semibold tracking-wide", textClassName)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
