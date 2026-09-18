import { Media } from "@/components/Media";
import { HoverSwapImage } from "@/components/HoverSwapImage";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { hetsClub } from "@/data/projects";

/** Campaign-magazine layout on the site's shared cream system, with a
 * pink accent as HET'S CLUB's own identifying color. */
export function HetsClubShowcase() {
  return (
    <section className="paper-grid bg-ivory px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <ProjectHeading number="01" project={hetsClub} />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <PolaroidPhoto
              asset={hetsClub.heroImage}
              rotate={-1.5}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="shadow-2xl"
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
              <figure className="flex items-center gap-4 rounded-2xl border border-pink bg-pink/25 p-4">
                <div className="w-20 shrink-0 overflow-hidden rounded-xl">
                  <Media asset={hetsClub.designProcessImage} sizes="10vw" />
                </div>
                <figcaption className="text-xs leading-relaxed text-ink/65">
                  기획자가 직접 초안을 그리고 디렉션을 전달한 작업 데스크
                </figcaption>
              </figure>
            </ScrollReveal>

            <ScrollReveal>
              <ProjectResultsAndLink project={hetsClub} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
