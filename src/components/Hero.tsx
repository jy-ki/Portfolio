"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MaskReveal } from "@/components/MaskReveal";
import { Magnetic } from "@/components/Magnetic";
import { WindowChrome } from "@/components/WindowChrome";
import { Tag } from "@/components/Tag";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { hetsClub } from "@/data/projects";

function Sticker({
  children,
  delay,
  reducedMotion,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  reducedMotion: boolean;
  className?: string;
}) {
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 220, damping: 16, delay }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.6,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function DoodleArrow({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 90"
      className="h-16 w-20 text-ink/70 sm:h-20 sm:w-24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M6 10C36 8 78 22 96 52C102 62 100 70 94 76"
        initial={reducedMotion ? undefined : { pathLength: 0 }}
        animate={reducedMotion ? undefined : { pathLength: 1 }}
        transition={{ duration: 1.1, delay: 0.9, ease: "easeInOut" }}
      />
      <motion.path
        d="M80 68L94 76L92 60"
        initial={reducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
        animate={reducedMotion ? undefined : { pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 1.9 }}
      />
    </svg>
  );
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="hero"
      className="paper-grid relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ivory px-6 pb-16 pt-28 sm:px-12"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <WindowChrome label="김지영 · PORTFOLIO" className="mb-8" />

          <h1 className="hero-headline display-heading text-ink">
            <MaskReveal index={0}>취향을 읽고,</MaskReveal>
            <MaskReveal index={1}>참여하고 싶은</MaskReveal>
            <MaskReveal index={2}>경험을 만듭니다.</MaskReveal>
          </h1>

          <motion.p
            initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            소비자를 관찰하고, 인사이트를 콘셉트로 묶고, 콘텐츠와 경험으로
            만들어 반응을 확인하는 과정을 프로젝트마다 거쳤습니다.
          </motion.p>

          <motion.div
            initial={reducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
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
            <Tag index={0}>브랜드 마케팅</Tag>
            <Tag index={2}>콘텐츠 기획</Tag>
          </motion.div>
        </div>

        {/* Flat graphic collage — one real campaign photo plus sticker
            tags and a hand-drawn arrow, popping in and idling gently. */}
        <div className="relative hidden aspect-square w-full lg:block">
          <Sticker
            delay={0.5}
            reducedMotion={reducedMotion}
            className="absolute right-2 top-0 w-[58%] rotate-[4deg]"
          >
            <PolaroidPhoto asset={hetsClub.heroImage} rotate={4} sizes="30vw" />
          </Sticker>

          <Sticker
            delay={0.8}
            reducedMotion={reducedMotion}
            className="absolute left-0 top-[8%] -rotate-6"
          >
            <Tag index={1} className="px-4 py-2 text-sm shadow-md">
              HET&rsquo;S CLUB
            </Tag>
          </Sticker>

          <Sticker
            delay={0.95}
            reducedMotion={reducedMotion}
            className="absolute bottom-[22%] left-[6%] rotate-3"
          >
            <Tag index={3} className="px-4 py-2 text-sm shadow-md">
              #팬덤_기획
            </Tag>
          </Sticker>

          <Sticker
            delay={1.1}
            reducedMotion={reducedMotion}
            className="absolute bottom-2 right-[16%]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue text-2xl shadow-md">
              🎯
            </div>
          </Sticker>

          <div className="absolute bottom-[10%] left-[34%]">
            <DoodleArrow reducedMotion={reducedMotion} />
          </div>
        </div>
      </div>
    </section>
  );
}
