"use client";

import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Typography-as-graphic Hero: the poster headline itself is the visual,
 * with one flat lime accent panel behind "취향" as the only graphic
 * element — no separate icon/shape column. Self-contained on purpose so
 * it can be swapped out independently of the rest of the page.
 *
 * Motion note: `initial`/`animate` targets stay identical whether or not
 * reduced motion is on — only `transition.duration` drops to 0. Toggling
 * the animate target itself to `undefined` after mount (once the
 * reduced-motion preference resolves client-side) can freeze framer-
 * motion mid-flight at an intermediate, invisible frame; keeping the
 * target constant and only zeroing the duration always lands the
 * element at its real resting state.
 */
export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const d = reducedMotion ? 0 : undefined; // duration override

  const tilt = useMotionValue(-3);
  const springTilt = useSpring(tilt, { stiffness: 60, damping: 16 });

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reducedMotion) return;
    if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    tilt.set(-3 + relX * 4);
  }

  function handlePointerLeave() {
    tilt.set(-3);
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-lilac-bg px-6 pb-24 pt-32 sm:px-12 lg:pt-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: d ?? 0.5, delay: d === 0 ? 0 : 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] text-plum/60"
        >
          김지영 — BRAND MARKETING PORTFOLIO
        </motion.p>

        <h1 className="poster-headline mt-6 text-plum">
          <span className="relative isolate inline-block">
            {/* Flat lime accent panel — the Hero's one graphic element.
                Lives outside the text's own overflow-hidden mask below,
                so it can bleed past the text's edges instead of being
                clipped to the line box. */}
            <motion.span
              aria-hidden
              className="absolute -inset-x-3 -inset-y-1 -z-10 rounded-[6px] bg-lime sm:-inset-x-4 sm:-inset-y-2"
              style={{
                rotate: reducedMotion ? -3 : springTilt,
                transformOrigin: "left center",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: d ?? 0.5, delay: d === 0 ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
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
          <span className="ml-[14%] block overflow-hidden sm:ml-[17%]">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: d ?? 0.45, delay: d === 0 ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              경험으로.
            </motion.span>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: d ?? 0.5, delay: d === 0 ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-sm"
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
      </div>
    </section>
  );
}
