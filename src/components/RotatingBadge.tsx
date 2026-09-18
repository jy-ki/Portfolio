"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

/**
 * A slowly spinning circular text stamp with a fixed center icon — a
 * small, playful, continuous motion detail (unlike the entrance/scroll/
 * hover beats elsewhere, this one just idles for as long as it's on
 * screen). Freezes under reduced motion.
 */
export function RotatingBadge({
  text,
  center,
  className,
  textClassName,
}: {
  text: string;
  center?: React.ReactNode;
  className?: string;
  textClassName?: string;
}) {
  const pathId = useId();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={cn("relative", className)}>
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 16, repeat: Infinity, ease: "linear" }
        }
      >
        <defs>
          <path
            id={pathId}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          className={cn("fill-ink text-[8px] font-bold", textClassName)}
          letterSpacing="1"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </motion.svg>
      {center && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {center}
        </div>
      )}
    </div>
  );
}
