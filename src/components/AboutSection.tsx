import { ScrollReveal } from "@/components/ScrollReveal";

const perspectives = [
  {
    title: "관찰하고",
    englishLabel: "Observe",
    body: "팬덤 반응 14,850건, 설문 154명 응답, 200곡의 가사 데이터처럼 사람들이 남긴 흔적을 직접 모으고 읽는 것에서 프로젝트를 시작합니다.",
    evidence: "Fandom.Mapper · SUBWAY VIBE · 멜론 vs 유튜브 뮤직 가사 분석",
  },
  {
    title: "콘셉트로 묶고",
    englishLabel: "Concept",
    body: "흩어진 관찰을 하나의 메타포나 분류 기준으로 정리합니다. 충돌하는 요소를 없애는 대신, 그 충돌 자체를 콘셉트로 만듭니다.",
    evidence: "HET’S CLUB “도베르만이 되고 싶은 말티즈” · Fandom.Mapper 8개 페르소나 · 2025 제국 기록부 세계관",
  },
  {
    title: "직접 구현하는 사람",
    englishLabel: "Build",
    body: "기획으로 끝내지 않고 디자인 디렉션, 프론트엔드 구현까지 직접 맡아 컨셉이 결과물까지 일관되게 이어지도록 합니다.",
    evidence: "HET’S CLUB 디자인 디렉션 · Fandom.Mapper·제국 기록부 프론트엔드 단독 구현",
  },
];

const toolGroups = [
  {
    label: "리서치 · 데이터",
    tools: ["Python", "설문 설계(NAVER FORM)", "Tableau", "워드클라우드/NLP 기초 분석"],
  },
  {
    label: "콘텐츠 · 기획",
    tools: ["굿즈 기획·디렉션", "SNS 콘텐츠 운영", "Photoshop", "Illustrator", "프롬프트 엔지니어링(Claude API)"],
  },
  {
    label: "구현",
    tools: ["HTML/CSS/JS", "React", "TypeScript", "Firebase", "Chart.js"],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-ivory px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
          ABOUT
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          관찰하고, 콘셉트로 묶고, 직접 구현합니다.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {perspectives.map((item) => (
            <ScrollReveal key={item.title}>
              <div className="flex h-full flex-col gap-4">
                <p className="text-xs font-semibold tracking-[0.15em] text-coral">
                  {item.englishLabel}
                </p>
                <h3 className="text-2xl font-bold text-ink">{item.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-ink/75">
                  {item.body}
                </p>
                <p className="border-t border-ink/10 pt-4 text-xs text-ink/45">
                  {item.evidence}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-ink/40">
            TOOLS
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {toolGroups.map((group) => (
              <div key={group.label}>
                <h4 className="text-sm font-semibold text-ink/60">
                  {group.label}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/70"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
