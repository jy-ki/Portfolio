import Link from "next/link";
import { Media } from "@/components/Media";
import { hetsClub, fandomMapper, imperialArchive } from "@/data/projects";

/**
 * Selected Work as a bento grid — an asymmetric mix of project tiles and
 * small stat widgets, like a scannable overview rather than the full
 * case-study write-up. Each project tile links to its own detail page,
 * which already carries the full 기획 질문 → 결과와 한계 narrative, so
 * nothing here is lost by keeping the tiles compact.
 */

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col justify-center rounded-3xl border border-ink/10 bg-ivory/60 p-6">
      <p className="display-heading text-3xl text-orange sm:text-4xl">{value}</p>
      <p className="mt-2 text-xs text-ink/55">{label}</p>
    </div>
  );
}

export function WorkBentoGrid() {
  return (
    <section id="work" className="paper-grid bg-ivory px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
          SELECTED WORK
        </p>
        <h2 className="display-heading mt-3 max-w-2xl text-3xl text-ink sm:text-4xl">
          관찰에서 시작해 경험으로 끝난 프로젝트 세 장면
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-flow-row-dense lg:auto-rows-[180px] lg:grid-cols-4">
          {/* HET'S CLUB — big tile */}
          <Link
            id="hets-club"
            href="/work/hets-club"
            data-cursor="link"
            className="group relative col-span-1 h-72 scroll-mt-28 overflow-hidden rounded-3xl border border-pink/40 shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 sm:h-96 lg:col-span-2 lg:row-span-2 lg:h-auto"
          >
            <Media
              asset={hetsClub.heroImage}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              priority
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                01
              </p>
              <p className="display-heading mt-1 text-2xl text-white">
                HET&rsquo;S CLUB
              </p>
              <p className="mt-1 max-w-xs text-sm text-white/80">
                {hetsClub.subtitle}
              </p>
            </div>
          </Link>

          {/* Fandom.Mapper — medium tile */}
          <Link
            href="/work/fandom-mapper"
            data-cursor="link"
            className="group relative col-span-1 h-56 overflow-hidden rounded-3xl border border-ink/10 shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 sm:h-64 lg:col-span-2 lg:h-auto"
          >
            <Media
              asset={fandomMapper.dashboardImage}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="transition-transform duration-500 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.05) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/70">
                02
              </p>
              <p className="display-heading mt-1 text-2xl text-white">
                Fandom.Mapper
              </p>
              <p className="mt-1 max-w-xs text-sm text-white/80">
                {fandomMapper.subtitle}
              </p>
            </div>
          </Link>

          <StatTile value="300개" label="3일간 특전 전량 솔드아웃" />
          <StatTile value="14,850건" label="수집·정제한 팬덤 반응 데이터" />

          {/* 2025 제국 기록부 — always-dark tile, independent of the site theme */}
          <Link
            href="/work/imperial-archive"
            data-cursor="link"
            className="group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-[#0f0e0a] p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-2"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40 transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(212,175,55,0.35) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <p className="relative text-xs font-semibold tracking-[0.2em] text-[#d4af37]/80">
              03
            </p>
            <p className="display-heading relative mt-1 text-2xl text-[#f3efe6]">
              2025 제국 기록부
            </p>
            <p className="relative mt-1 max-w-xs text-sm text-[#f3efe6]/70">
              {imperialArchive.subtitle}
            </p>
          </Link>

          <StatTile value="3단계" label="루트 분기 서사 생성 시스템" />
          <StatTile value="27명" label="매칭 대상 아티스트" />
        </div>
      </div>
    </section>
  );
}
