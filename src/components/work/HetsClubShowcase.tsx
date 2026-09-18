"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { Media } from "@/components/Media";
import { HoverSwapImage } from "@/components/HoverSwapImage";
import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { hetsClub } from "@/data/projects";

/**
 * Campaign-magazine layout on the project's own dark plum scene. As this
 * section scrolls into view, its background eases from the Hero's void
 * black into plum — the "scroll = scene changes" beat of the site's one
 * signature motion. Photo layout is unchanged from before; only the
 * surrounding color/type system moves to match the new direction.
 */
export function HetsClubShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 55%"],
  });
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#0b0b10", "#241019"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ background: reducedMotion ? "#241019" : background }}
      className="motion-scene px-6 py-24 text-bone sm:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <ProjectHeading number="01" project={hetsClub} tone="dark" />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Media
              asset={hetsClub.heroImage}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <HoverSwapImage
              primary={hetsClub.onSiteImage}
              secondary={hetsClub.conceptImage}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="shadow-lg"
            />
            <ScrollReveal>
              <figure className="flex items-center gap-4 rounded-2xl border border-bone/15 p-4">
                <div className="w-20 shrink-0 overflow-hidden rounded-xl">
                  <Media asset={hetsClub.designProcessImage} sizes="10vw" />
                </div>
                <figcaption className="text-xs leading-relaxed text-bone/55">
                  기획자가 직접 초안을 그리고 디렉션을 전달한 작업 데스크
                </figcaption>
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <ProjectResultsAndLink project={hetsClub} tone="dark" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
