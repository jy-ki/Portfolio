import { Media } from "@/components/Media";
import { PolaroidPhoto } from "@/components/PolaroidPhoto";
import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { ScrollReveal } from "@/components/ScrollReveal";
import { hetsClub } from "@/data/projects";

/** Campaign-magazine layout on the site's shared cream system, with a
 * pink accent as HET'S CLUB's own identifying color. The main poster is
 * a tall portrait crop, so it anchors the wide column at its own aspect
 * ratio; the two goods-guide posters sit side by side as a smaller pair
 * next to it. */
export function HetsClubShowcase() {
  return (
    <section id="hets-club" className="paper-grid bg-ivory px-6 py-24 sm:px-12">
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
            <ScrollReveal className="grid grid-cols-2 gap-4">
              <Media
                asset={hetsClub.goodsImage1}
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="rounded-2xl border-2 border-pink/40 shadow-lg"
              />
              <Media
                asset={hetsClub.goodsImage2}
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="rounded-2xl border-2 border-pink/40 shadow-lg"
              />
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
