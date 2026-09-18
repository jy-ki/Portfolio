"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Slow-moving coral / peach / lilac gradient. Used only behind the Hero and
 * Contact sections (per design brief) — project body copy stays on a flat
 * background for readability. Motion stops entirely under
 * prefers-reduced-motion.
 */
export function GradientWaveBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <ShaderGradientCanvas
      className="gradient-wave-canvas"
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      pixelDensity={prefersReducedMotion ? 1 : 1.5}
      fov={40}
    >
      <ShaderGradient
        control="props"
        type="waterPlane"
        animate={prefersReducedMotion ? "off" : "on"}
        uSpeed={prefersReducedMotion ? 0 : 0.12}
        uStrength={1.8}
        uFrequency={5}
        color1="#f6c7af"
        color2="#f47555"
        color3="#c9c2ea"
        cDistance={3.8}
        cPolarAngle={90}
        cAzimuthAngle={180}
        reflection={0.05}
        grain="off"
      />
    </ShaderGradientCanvas>
  );
}
