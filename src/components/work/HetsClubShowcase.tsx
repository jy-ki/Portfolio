import { Media } from "@/components/Media";
import { HoverSwapImage } from "@/components/HoverSwapImage";
import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { hetsClub } from "@/data/projects";

/** Campaign-magazine layout: one dominant poster, goods/on-site details around it. */
export function HetsClubShowcase() {
  return (
    <section className="bg-ivory px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <ProjectHeading number="01" project={hetsClub} />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Media
              asset={hetsClub.heroImage}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <HoverSwapImage
              primary={hetsClub.onSiteImage}
              secondary={hetsClub.conceptImage}
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="shadow-lg"
            />
            <figure className="flex items-center gap-4 rounded-2xl border border-ink/10 p-4">
              <div className="w-20 shrink-0 overflow-hidden rounded-xl">
                <Media asset={hetsClub.designProcessImage} sizes="10vw" />
              </div>
              <figcaption className="text-xs leading-relaxed text-ink/55">
                기획자가 직접 초안을 그리고 디렉션을 전달한 작업 데스크
              </figcaption>
            </figure>

            <ProjectResultsAndLink project={hetsClub} />
          </div>
        </div>
      </div>
    </section>
  );
}
