import Link from "next/link";
import { GradientWaveBackground } from "@/components/GradientWaveBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-ivory px-6 pt-24 pb-16 sm:min-h-[92vh] sm:px-12"
    >
      <GradientWaveBackground />

      {/* Soft light wash behind the headline to keep contrast on the moving gradient. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[90vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory/55 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <p className="mb-6 text-sm font-semibold tracking-[0.25em] text-ink/60">
          MARKETER · 김지영
        </p>
        <h1 className="max-w-3xl text-[2.6rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
          취향을 읽고,
          <br />
          참여하고 싶은 경험을 만듭니다.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
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
    </section>
  );
}
