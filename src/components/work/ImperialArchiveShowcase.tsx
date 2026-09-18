import { Media } from "@/components/Media";
import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { imperialArchive } from "@/data/projects";

/** The one deliberate dark scene — same chrome/type/tag system as every
 * other section, just in 제국 기록부's own void + gold palette. */
export function ImperialArchiveShowcase() {
  return (
    <section className="section-dark px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <ProjectHeading number="03" project={imperialArchive} tone="dark" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative rounded-2xl border border-gold/30">
            <Media
              asset={imperialArchive.heroImage}
              tone="dark"
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-8">
            <ProjectResultsAndLink project={imperialArchive} tone="dark" />
            <Media
              asset={imperialArchive.uiImage}
              tone="dark"
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
