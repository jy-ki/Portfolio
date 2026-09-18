import Link from "next/link";
import { GradientWaveBackground } from "@/components/GradientWaveBackground";
import { Media } from "@/components/Media";
import { hetsClub } from "@/data/projects";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-ivory pb-16 pt-28 sm:pb-24 sm:pt-36"
    >
      {/* Large wave shape, cropped by its own rounded frame and bled off the
          top-right corner. Slow + soft — no fast motion. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[8%] -top-[16%] z-0 h-[70%] w-[46%] overflow-hidden rounded-[3rem] rotate-[-7deg] sm:rounded-[5rem]"
      >
        <div className="absolute inset-0 -rotate-[7deg] scale-125">
          <GradientWaveBackground />
        </div>
      </div>

      {/* Photo collage — floats in the empty space to the right of the
          shorter headline lines, bleeding past the section's right edge.
          Desktop only; never overlaps the longest line below it. */}
      <div className="pointer-events-none absolute -right-[4%] top-[8%] z-10 hidden h-[280px] w-[26vw] max-w-[380px] lg:block">
        <div className="absolute right-0 top-0 w-[74%] rotate-[3deg] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-ivory">
          <Media
            asset={hetsClub.heroImage}
            priority
            sizes="26vw"
            className="rounded-2xl"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[46%] -rotate-[6deg] overflow-hidden rounded-2xl shadow-xl ring-4 ring-ivory">
          <Media asset={hetsClub.onSiteImage} sizes="14vw" className="rounded-2xl" />
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-6 sm:px-12">
        <p className="mb-6 text-sm font-semibold tracking-[0.25em] text-ink/50">
          MARKETER · 김지영
        </p>
        <h1 className="hero-headline break-keep font-extrabold text-ink">
          취향을 읽고,
          <br />
          참여하고 싶은
          <br />
          경험을 만듭니다.
        </h1>
        <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">
          소비자를 관찰하고, 인사이트를 콘셉트로 묶고, 콘텐츠와 경험으로
          만들어 반응을 확인하는 과정을 프로젝트마다 거쳤습니다.
        </p>

        <Link
          href="#work"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-coral"
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
      </div>

      {/* Same collage, simplified to one image, for mobile/tablet. */}
      <div className="relative z-10 mt-12 px-6 sm:px-12 lg:hidden">
        <div className="mx-auto max-w-xs overflow-hidden rounded-2xl shadow-xl">
          <Media asset={hetsClub.heroImage} sizes="90vw" />
        </div>
      </div>
    </section>
  );
}
