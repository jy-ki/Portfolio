"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hero3D } from "@/components/Hero3D";
import { MaskReveal } from "@/components/MaskReveal";
import { Magnetic } from "@/components/Magnetic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="motion-scene relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-void px-6 pb-16 pt-28 sm:px-12"
    >
      <div className="pointer-events-none absolute inset-0 opacity-90 no-print">
        <Hero3D />
      </div>

      {/* Soft dark vignette so the headline stays legible over the blob. */}
      <div
        aria-hidden
        className="no-print pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(11,11,16,0.55)_65%,rgba(11,11,16,0.9)_100%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0 }}
          animate={reducedMotion ? undefined : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm font-semibold tracking-[0.25em] text-bone/60"
        >
          MARKETER · 김지영
        </motion.p>

        <h1 className="hero-headline font-extrabold text-bone">
          <MaskReveal index={0}>취향을 읽고,</MaskReveal>
          <MaskReveal index={1}>참여하고 싶은</MaskReveal>
          <MaskReveal index={2}>경험을 만듭니다.</MaskReveal>
        </h1>

        <motion.p
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-base leading-relaxed text-bone/70 sm:text-lg"
        >
          소비자를 관찰하고, 인사이트를 콘셉트로 묶고, 콘텐츠와 경험으로
          만들어 반응을 확인하는 과정을 프로젝트마다 거쳤습니다.
        </motion.p>

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <Magnetic className="inline-block">
            <Link
              href="#work"
              data-cursor="link"
              className="group inline-flex items-center gap-3 rounded-full bg-bone px-7 py-4 text-sm font-semibold text-void transition-colors hover:bg-signal hover:text-bone"
            >
              프로젝트 보기
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-4 w-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-0 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
