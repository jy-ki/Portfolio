"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MaskReveal } from "@/components/MaskReveal";
import { Magnetic } from "@/components/Magnetic";
import { RibbonGraphic } from "@/components/RibbonGraphic";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ivory px-6 pb-16 pt-28 sm:px-12 lg:pt-36"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-8">
        <div>
          <h1 className="hero-headline display-heading break-keep text-ink">
            <MaskReveal index={0}>취향을 읽고,</MaskReveal>
            <MaskReveal index={1}>경험을 만듭니다.</MaskReveal>
          </h1>

          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-md break-keep text-[17px] leading-[1.7] text-ink/70 sm:text-[18px]"
          >
            사람들의 반응에서 실마리를 찾아,
            <br />
            콘텐츠와 브랜드 경험으로 구체화합니다.
          </motion.p>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 14 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9"
          >
            <Magnetic className="inline-block">
              <Link
                href="#work"
                data-cursor="link"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-blue"
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

        <motion.div
          initial={reducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[360px] lg:max-w-none lg:justify-self-center"
        >
          <RibbonGraphic className="aspect-square w-full" />
        </motion.div>
      </div>
    </section>
  );
}
