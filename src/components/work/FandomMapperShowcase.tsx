import { Media } from "@/components/Media";
import { ProjectHeading } from "@/components/ProjectHeading";
import { ProjectResultsAndLink } from "@/components/ProjectResultsAndLink";
import { fandomMapper } from "@/data/projects";

/** Data-forward layout: a wide dashboard shot, then the scale numbers, then the simulation. */
export function FandomMapperShowcase() {
  return (
    <section className="bg-ivory px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <ProjectHeading number="02" project={fandomMapper} />

        <div className="mt-12">
          <Media
            asset={fandomMapper.dashboardImage}
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="rounded-2xl"
          />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 border-y border-ink/10 py-8 sm:grid-cols-4">
          {fandomMapper.dataPoints.map((point) => (
            <div key={point.label}>
              <p className="text-3xl font-bold text-coral sm:text-4xl">
                {point.value}
              </p>
              <p className="mt-1 text-xs text-ink/55">{point.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Media
            asset={fandomMapper.simulationImage}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="rounded-2xl"
          />
          <ProjectResultsAndLink project={fandomMapper} />
        </div>
      </div>
    </section>
  );
}
