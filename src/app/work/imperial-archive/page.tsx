import type { Metadata } from "next";
import { DetailPageShell } from "@/components/detail/DetailPageShell";
import { DetailHeader } from "@/components/detail/DetailHeader";
import { DetailSection, TeamRoleNote } from "@/components/detail/DetailSection";
import { imperialArchive } from "@/data/projects";

export const metadata: Metadata = {
  title: "2025 제국 기록부 — 김지영 포트폴리오",
  description: imperialArchive.concept,
};

export default function ImperialArchivePage() {
  return (
    <DetailPageShell tone="dark">
      <DetailHeader project={imperialArchive} tone="dark" />

      <DetailSection step="01" title="기획 질문" tone="dark">
        <p>
          누구나 하는 “연말 회고”를, 소장하고 공유하고 싶어지는 특별한
          경험으로 만들려면 어떻게 해야 할까?
        </p>
      </DetailSection>

      <DetailSection step="02" title="발견한 인사이트" tone="dark">
        <ul className="list-disc pl-5">
          <li>기존 연말 회고 서비스는 대부분 획일적인 질문·결과 형식에 머무릅니다.</li>
          <li>개인의 성취를 의미 있게 재해석해주는 서비스가 부재했습니다.</li>
          <li>결과를 소장하고 공유하고 싶은 욕구를 충족시키는 장치가 부족했습니다.</li>
        </ul>
      </DetailSection>

      <DetailSection step="03" title="선택한 전략과 이유" tone="dark">
        <p>
          답변을 로맨스 판타지 소설의 한 장면처럼 재구성하는 “제국 기록부”
          세계관을 채택했습니다. 성취도에 따라 임페리얼 황가(최고 등급) ·
          황족-가문 연합(중급) · 가문 후계자(일반) 3단계로 결과가 갈리는
          Imperial Score 알고리즘을 설계해, 같은 질문에도 유저마다 다른
          결과를 받도록 만들었습니다.
        </p>
        <p>
          긴 서사가 한 번에 나타나면 몰입감이 떨어진다고 판단해 타이핑 효과로
          글자 단위 연출을 넣었고, 결과 이미지 저장은 처음 시도한 Canvas
          방식 대신 CSS 재현에 유리한 html-to-image 방식으로 전환했습니다.
        </p>
        <p>
          공식 SNS 계정 없이 자연스러운 공유를 유도해야 했기 때문에, 루트별로
          달라지는 공유 문구와 “고유 번호” 같은 희소성 장치를 설계에
          포함시켰습니다.
        </p>
      </DetailSection>

      <DetailSection step="04" title="내가 맡은 실행" tone="dark">
        <TeamRoleNote>
          개인 프로젝트로 기획·프론트엔드·AI 프롬프트 설계를 단독으로
          수행했습니다.
        </TeamRoleNote>
        <ul className="mt-4 list-disc pl-5">
          <li>
            답변 키워드를 추출·점수화해 3단계 루트로 분기하는 Imperial Score
            알고리즘 설계
          </li>
          <li>
            Claude API 프롬프트를 수십 차례 반복 테스트해, 파편화된 답변을
            일관된 로맨스 판타지 문체로 합성
          </li>
          <li>
            React·TypeScript로 루트별 테마(배경색·직위·거주지·인장) 조건부
            렌더링 구현
          </li>
          <li>
            useEffect·setTimeout 기반 타이핑 컴포넌트 구현, html-to-image로
            고화질(pixelRatio 3) 결과 이미지 저장 기능 구현
          </li>
          <li>
            다크 배경(#0d0907)과 금색 포인트(#D4AF37)로 “황실 기록지”
            톤앤매너 디자인
          </li>
        </ul>
      </DetailSection>

      <DetailSection step="05" title="결과와 한계" tone="dark">
        <p className="font-semibold text-ivory">구현 완료</p>
        <ul className="list-disc pl-5">
          <li>질문 응답 → 3단계 루트 분기 서사 생성 시스템</li>
          <li>결과를 고화질 이미지로 저장하는 기능</li>
          <li>루트별 동적 공유 문구, 고유 번호 부여 등 공유 유도 장치</li>
        </ul>
        <p className="mt-4">
          다만 이 항목들은 기능 구현 완료 사실이며, 실제 사용자의 공유율이나
          바이럴 성과를 측정한 데이터는 아직 없습니다. “SNS 공유 유도를 위한
          설계”로 이해해 주시면 됩니다. 개선 방향으로는 AI 서사 생성 중
          로딩 시간을 줄이기 위한 스켈레톤 UI 도입, 로맨스 판타지 외 장르
          확장 검토, 실제 사용 데이터가 쌓인 뒤의 루트 분포 분석을 계획하고
          있습니다.
        </p>
      </DetailSection>
    </DetailPageShell>
  );
}
