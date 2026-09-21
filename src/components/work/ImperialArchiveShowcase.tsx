import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { SitePreviewEmbed } from "@/components/SitePreviewEmbed";
import { imperialArchive } from "@/data/projects";

/** The one deliberate dark scene — same chrome/type/tag system as every
 * other section, just in 제국 기록부's own void + gold palette. No static
 * images here; the live embed below is the visual. */
export function ImperialArchiveShowcase() {
  return (
    <section className="section-dark px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <ProjectHeading number="03" project={imperialArchive} tone="dark" />

        <div className="mt-12 max-w-2xl">
          <ProjectResultsAndLink project={imperialArchive} tone="dark" />
        </div>

        <div className="mt-14">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-gold/70">
            LIVE PREVIEW
          </p>
          <SitePreviewEmbed
            href={imperialArchive.liveUrl}
            label="2025 제국 기록부"
            tone="dark"
          />
        </div>
      </div>
    </section>
  );
}
