"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { usePointerTilt } from "@/hooks/usePointerTilt";

/**
 * Single combined hero effect: an animated ShaderGradient wave background
 * (~60%) beneath a glassmorphism panel (~30%) that adds a pointer-driven
 * tilt/glow micro-interaction (~10%). All motion stops under
 * prefers-reduced-motion.
 */
export function HeroEffect({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const tiltRef = usePointerTilt(!prefersReducedMotion);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        pixelDensity={prefersReducedMotion ? 1 : 1.5}
        fov={40}
      >
        <ShaderGradient
          control="props"
          type="waterPlane"
          animate={prefersReducedMotion ? "off" : "on"}
          uSpeed={prefersReducedMotion ? 0 : 0.15}
          uStrength={2.2}
          uFrequency={5.5}
          color1="#1a1033"
          color2="#3d2a6d"
          color3="#7c5cff"
          cDistance={3.6}
          cPolarAngle={90}
          cAzimuthAngle={180}
          reflection={0.1}
          grain="off"
        />
      </ShaderGradientCanvas>

      <div
        ref={tiltRef}
        className="hero-glass-panel relative z-10 mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6"
        style={
          {
            "--tilt-x": 0,
            "--tilt-y": 0,
          } as React.CSSProperties
        }
      >
        <div className="hero-glass-card w-full rounded-3xl border border-white/15 bg-white/10 p-10 shadow-2xl backdrop-blur-xl transition-transform duration-200 ease-out sm:p-14">
          {children}
        </div>
      </div>
    </div>
  );
}
