"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

const SHAPES = [
  "62% 38% 55% 45% / 55% 45% 55% 45%",
  "45% 55% 62% 38% / 45% 55% 45% 55%",
  "55% 45% 45% 55% / 62% 38% 62% 38%",
  "62% 38% 55% 45% / 55% 45% 55% 45%",
];

/**
 * A flat, continuously wobbling organic shape — the recurring "mascot"
 * graphic the reference sites use (in their case a chrome 3D render; here
 * a flat CSS shape, kept consistent with the rest of the site's flat
 * graphic language). Freezes on one shape under reduced motion.
 */
export function Blob({
  className,
  color = "bg-blue",
}: {
  className?: string;
  color?: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={cn(color, className)}
      style={{ borderRadius: SHAPES[0] }}
      animate={
        reducedMotion
          ? undefined
          : { borderRadius: SHAPES, rotate: [0, 10, -8, 0] }
      }
      transition={
        reducedMotion
          ? undefined
          : { duration: 9, repeat: Infinity, ease: "easeInOut" }
      }
    />
  );
}
