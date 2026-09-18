"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

/**
 * A full-bleed solid-color band with an endlessly scrolling row of
 * keywords — the one bold color moment breaking up the cream/paper
 * rhythm, echoing the references' solid-color sections. Static (no
 * duplicated loop, no scroll) under reduced motion.
 */
export function MarqueeBand({
  items,
  bg = "bg-blue",
  textClassName = "text-ivory",
}: {
  items: string[];
  bg?: string;
  textClassName?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const trackItems = reducedMotion ? items : [...items, ...items];

  return (
    <div className={cn("no-print overflow-hidden py-5", bg)}>
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 22, repeat: Infinity, ease: "linear" }
        }
      >
        {trackItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className={cn("display-heading text-2xl sm:text-3xl", textClassName)}
          >
            {item} <span aria-hidden>✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
