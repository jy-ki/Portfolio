"use client";

import { useRef, useState, type PointerEvent } from "react";
import { useInView, motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

/**
 * The Hero's one graphic: a wide cobalt ribbon bent into a loop, floating
 * directly on the cream background (no card, no border). Satin shading
 * comes from a diagonal gradient plus a soft highlight stroke, not a real
 * 3D render. Idles (slow rotation + a subtle scale "breath") only while
 * in view, tilts a few degrees toward the cursor on fine-pointer devices,
 * and freezes under reduced motion.
 */
export function RibbonGraphic({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(wrapRef, { margin: "-10% 0px -10% 0px" });
  const reducedMotion = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 55, damping: 14 });
  const springY = useSpring(tiltY, { stiffness: 55, damping: 14 });

  const idling = inView && !reducedMotion;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    if (!finePointer) setFinePointer(true);
    if (reducedMotion) return;
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const relY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    tiltY.set(relX * 7);
    tiltX.set(-relY * 7);
  }

  function handlePointerLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <div
      ref={wrapRef}
      className={cn("relative", className)}
      style={{ perspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        className="h-full w-full"
        style={{
          rotateX: reducedMotion ? 0 : springX,
          rotateY: reducedMotion ? 0 : springY,
        }}
      >
        <motion.svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          style={{ filter: "drop-shadow(0 28px 36px rgba(49,85,217,0.28))" }}
          animate={
            idling
              ? { rotate: 360, scale: [1, 1.02, 1, 0.985, 1] }
              : undefined
          }
          transition={{
            rotate: { duration: 14, repeat: Infinity, ease: "linear" },
            scale: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <defs>
            <linearGradient
              id="ribbonBody"
              x1="90"
              y1="70"
              x2="330"
              y2="340"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#16234f" />
              <stop offset="24%" stopColor="#2444b8" />
              <stop offset="46%" stopColor="#3155d9" />
              <stop offset="56%" stopColor="#8296f0" />
              <stop offset="72%" stopColor="#3155d9" />
              <stop offset="100%" stopColor="#182a70" />
            </linearGradient>
          </defs>

          <path
            d="M 296,120 A 125,125 0 1 1 179,78"
            fill="none"
            stroke="url(#ribbonBody)"
            strokeWidth={70}
            strokeLinecap="round"
          />
          <path
            d="M 150,92 A 125,125 0 0 1 258,74"
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.3}
            strokeWidth={12}
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
