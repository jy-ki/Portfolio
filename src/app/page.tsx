import { SiteNav } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { MarqueeBand } from "@/components/MarqueeBand";
import { WorkBentoGrid } from "@/components/work/WorkBentoGrid";
import { MorePerspectives } from "@/components/MorePerspectives";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

const MARQUEE_ITEMS = [
  "브랜드 전략",
  "콘텐츠 기획",
  "데이터 분석",
  "팬덤 마케팅",
  "프론트엔드 구현",
];

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <MarqueeBand items={MARQUEE_ITEMS} />
        <WorkBentoGrid />
        <MorePerspectives />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
