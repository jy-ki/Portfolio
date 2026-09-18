"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Typography-as-graphic Hero, v2: same lilac/plum/lime palette and copy as
 * before, now spread across the full 1200px grid instead of hugging the
 * left edge. "취향을" anchors the top-left, "경험으로." lands lower and
 * to the right, and a thin curve — drawn once, then walked by a slow dot
 * — is the only thing connecting the two. No photos, no extra decoration.
 *
 * Motion note: `initial`/`animate` targets stay identical whether or not
 * reduced motion is on — only `transition.duration` drops to 0. Toggling
 * the animate target itself to `undefined` after mount (once the
 * reduced-motion preference resolves client-side) can freeze framer-
 * motion mid-flight at an intermediate, invisible frame; keeping the
 * target constant and only zeroing the duration always lands the
 * element at its real resting state.
 */

// Percentage-space (0-100 viewBox) curve from the lime panel's right edge
// down to "경험으로.". Shared by the draw-in path and the looping dot's
// <animateMotion> so both always trace the same line.
const CURVE_PATH = "M 33 24 C 54 32, 44 60, 72 79";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const d = reducedMotion ? 0 : undefined; // duration override

  const tilt = useMotionValue(-1.5);
  const springTilt = useSpring(tilt, { stiffness: 60, damping: 16 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion) return;
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    tilt.set(-1.5 + relX * 3);
  }

  function handlePointerLeave() {
    tilt.set(-1.5);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-lilac-bg px-6 pb-10 pt-28 sm:px-8 lg:pt-32"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: d ?? 0.5, delay: d === 0 ? 0 : 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] text-plum/60"
        >
          김지영 — BRAND MARKETING PORTFOLIO
        </motion.p>

        <div className="relative isolate mt-6 sm:mt-8">
          {/* Connecting curve — decorative only, sits behind both lines of
              the headline. Hidden on mobile, where the two lines stack
              close together and a diagonal reads as visual noise. */}
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full sm:block"
          >
            <motion.path
              d={CURVE_PATH}
              fill="none"
              stroke="#302238"
              strokeOpacity={0.3}
              strokeWidth={0.35}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: reducedMotion ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: d ?? 1.2,
                delay: d === 0 ? 0 : 0.6,
                ease: [0.65, 0, 0.35, 1],
              }}
            />
            {!reducedMotion && (
              <circle r="0.9" fill="#d7f568">
                <animateMotion
                  dur="6s"
                  begin="1.9s"
                  repeatCount="indefinite"
                  path={CURVE_PATH}
                  rotate="auto"
                />
              </circle>
            )}
          </svg>

          <h1 className="poster-headline flex flex-col gap-2 text-plum sm:gap-3">
            <span className="flex justify-start">
              <span className="relative isolate inline-block">
                {/* Flat lime accent panel — the Hero's one graphic element.
                    Lives outside the text's own overflow-hidden mask below,
                    so it can bleed past the text's edges instead of being
                    clipped to the line box. */}
                <motion.span
                  aria-hidden
                  className="absolute -inset-x-3 -inset-y-1 -z-10 rounded-[6px] bg-lime sm:-inset-x-4 sm:-inset-y-2"
                  style={{
                    rotate: reducedMotion ? -1.5 : springTilt,
                    transformOrigin: "left center",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: d ?? 0.5,
                    delay: d === 0 ? 0 : 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
                <span className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: d ?? 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    취향을
                  </motion.span>
                </span>
              </span>
            </span>
            <span className="flex justify-end pr-[2%] sm:pr-[6%]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: d ?? 0.45,
                    delay: d === 0 ? 0 : 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  경험으로.
                </motion.span>
              </span>
            </span>
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d ?? 0.5, delay: d === 0 ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 ml-auto w-full max-w-[320px] sm:mt-12 sm:max-w-[360px] lg:max-w-[380px]"
        >
          <p className="break-keep text-[15px] leading-relaxed text-plum/70">
            사람들의 반응에서 실마리를 찾아, 콘텐츠와 브랜드 경험으로
            구체화합니다.
          </p>

          <Link
            href="#work"
            data-cursor="link"
            className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-plum"
          >
            <span className="relative">
              프로젝트 보기
              <span
                aria-hidden
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-plum transition-[width] duration-300 ease-out group-hover:w-full"
              />
            </span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: d ?? 0.5, delay: d === 0 ? 0 : 0.8 }}
          className="mt-16 border-t border-plum/15 pt-5 sm:mt-20"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-plum/45">
            SELECTED WORK
          </p>
          <Link
            href="#hets-club"
            data-cursor="link"
            className="group mt-2 inline-flex items-baseline gap-3"
          >
            <span className="text-sm font-semibold text-plum/40">01</span>
            <span className="text-lg font-bold text-plum transition-colors group-hover:text-plum/70 sm:text-xl">
              HET&apos;S CLUB
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
