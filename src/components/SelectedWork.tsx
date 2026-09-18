import { HetsClubShowcase } from "@/components/work/HetsClubShowcase";
import { FandomMapperShowcase } from "@/components/work/FandomMapperShowcase";
import { ImperialArchiveShowcase } from "@/components/work/ImperialArchiveShowcase";

export function SelectedWork() {
  return (
    <div id="work">
      <div className="bg-ivory px-6 pt-24 sm:px-12 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
            SELECTED WORK
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            관찰에서 시작해 경험으로 끝난 프로젝트 세 장면
          </h2>
        </div>
      </div>

      <HetsClubShowcase />
      <FandomMapperShowcase />
      <ImperialArchiveShowcase />
    </div>
  );
}
