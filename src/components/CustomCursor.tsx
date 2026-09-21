"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const INTERACTIVE_SELECTOR = 'a, button, [data-cursor="link"]';

/**
 * A trailing ring + precise dot cursor, active only on fine-pointer
 * devices with no reduced-motion preference — touch and keyboard users
 * always keep the native cursor untouched.
 */
export function CustomCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const ringY = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const active = fine && !prefersReducedMotion;
    setEnabled(active);
    document.documentElement.classList.toggle("custom-cursor-active", active);
    return () => document.documentElement.classList.remove("custom-cursor-active");
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div aria-hidden className="no-print pointer-events-none fixed inset-0 z-[100]">
      <motion.div
        className="fixed left-0 top-0 h-2 w-2 rounded-full bg-orange"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed left-0 top-0 rounded-full border border-orange mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 56 : 28,
          height: hovering ? 56 : 28,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </div>
  );
}
