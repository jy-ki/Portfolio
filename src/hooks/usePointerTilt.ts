"use client";

import { useEffect, useRef } from "react";

/**
 * Tracks pointer position relative to the element's center and exposes it as
 * CSS custom properties (--tilt-x / --tilt-y) so the glass panel can react
 * with a pure-CSS transform. Disabled entirely when `enabled` is false, e.g.
 * for prefers-reduced-motion.
 */
export function usePointerTilt(enabled: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !enabled) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--tilt-x", x.toFixed(3));
      node.style.setProperty("--tilt-y", y.toFixed(3));
    };

    const handlePointerLeave = () => {
      node.style.setProperty("--tilt-x", "0");
      node.style.setProperty("--tilt-y", "0");
    };

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [enabled]);

  return ref;
}
