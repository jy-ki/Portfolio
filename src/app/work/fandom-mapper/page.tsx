import type { Metadata } from "next";
import { DetailPageShell } from "@/components/detail/DetailPageShell";
import { DetailHeader } from "@/components/detail/DetailHeader";
import { DetailSection, TeamRoleNote } from "@/components/detail/DetailSection";
import { Media } from "@/components/Media";
import { SitePreviewEmbed } from "@/components/SitePreviewEmbed";
import { fandomMapper } from "@/data/projects";

export const metadata: Metadata = {
  title: "Fandom.Mapper — 김지영 포트폴리오",
  description: fandomMapper.concept,
};

export default function FandomMapperPage() {
  return (
    <DetailPageShell>
      <DetailHeader project={fandomMapper} />

      <div className="mx-auto max-w-3xl px-6 pb-4 sm:px-8">
        <Media
          asset={fandomMapper.landingImage}
          sizes="(min-width: 768px) 60vw, 100vw"
          className="rounded-2xl"
        />
      </div>

      <DetailSection step="01" title="기획 질문">
        <p>
          브랜드가 “왜 이 아티스트인가”를 데이터로 설명하지 못한 채 팔로워 수,
          음반 판매량 같은 양적 지표로만 앰버서더를 정하는 구조를, 어떻게
          바꿀 수 있을까?
        </p>
      </DetailSection>

      <DetailSection step="02" title="발견한 인사이트">
        <p>
          현재 매칭 의사결정에서 구조적 비효율 3단계를 발견했습니다.
        </p>
        <ol className="list-decimal pl-5">
          <li>팬덤의 ‘수’ 기준 선정 — 팔로워·판매량·인기 순위로 결정</li>
          <li>팬사인회 응모형 매출 — 단기 매출은 폭발하지만 본 상품 사용 의향은 낮음</li>
          <li>중고 시장에 헐값 재유통 — 미개봉 제품이 정가 절반 이하로 풀리며 브랜드 자산이 동반 하락</li>
        </ol>
        <p>
          반대로 장원영×미우미우, 제니×샤넬, BTS 진×라네즈처럼 매칭이 잘된
          사례를 대조 분석한 결과, 공통점은 단기 매출이 아닌 “브랜드 자산
          누적”이었고 핵심은 페르소나 일치였습니다.
        </p>
      </DetailSection>

      <DetailSection step="03" title="선택한 전략과 이유">
        <p className="font-semibold text-ink">분류 기준</p>
        <p>
          YouTube 팬덤 반응·댓글에서 “오픈런”, “직캠”, “비건”처럼 구체적
          소비 행동이 담긴 키워드만 유효 신호로 처리하는 Rule-based 태깅을
          설계했습니다. 감탄사·일반 응원은 제외해 신호의 일관성을
          확보했습니다.
        </p>
        <p>
          페르소나는 8개로 설계했습니다. 7개 이하는 클린뷰티·명품·글로벌 같은
          주요 산업군을 커버하지 못했고, 9개 이상은 유사 페르소나 간 경계가
          모호해져 변별력이 떨어졌습니다.
        </p>
        <p className="mt-4 font-semibold text-ink">매칭 방식</p>
        <p>
          광고주가 페르소나별 가중치를 입력하면 27명 전원에 대해 실시간
          랭킹을 산출하는 가중평균 공식을 설계했습니다.
        </p>
        <pre className="overflow-x-auto rounded-xl bg-ink/5 px-4 py-3 text-sm text-ink/80">
          score(m) = Σ dist(m, p) × w(p) / Σ w(p)
        </pre>
        <p>
          ML 기반 추천 대신 Rule-based + 가중평균을 택한 이유는
          “설명 가능성(Explainability)”입니다. 마케팅 의사결정은 결국 팀 내
          설득과 보고가 필요한데, “AI가 추천했다”는 블랙박스보다 “이 팬덤의
          성향이 브랜드와 이렇게 일치하기 때문”이라는 근거가 실무에서 더
          강하다고 판단했습니다.
        </p>
        <p className="mt-4 font-semibold text-ink">대시보드</p>
        <p>
          B2B 광고주용 가중치 조정 대시보드와 B2C 페르소나 테스트를 함께
          설계해, B2C 참여 데이터가 다시 B2B 매칭 정확도를 높이는 양면시장
          구조를 기획했습니다.
        </p>
        <Media
          asset={fandomMapper.dashboardImage}
          sizes="(min-width: 768px) 60vw, 100vw"
          className="rounded-2xl"
        />
      </DetailSection>

      <DetailSection step="04" title="내가 맡은 실행">
        <TeamRoleNote>
          개인 프로젝트로 문제 정의·데이터 수집·분류 기준 설계·매칭 엔진
          설계·프론트엔드 구현까지 전 과정을 단독으로 수행했습니다.
        </TeamRoleNote>
        <ul className="mt-4 list-disc pl-5">
          <li>
            YouTube 팬덤 반응·댓글 14,850건 직접 수집·정제 (2025.09~2026.02,
            에스파·아이브·뉴진스·투어스·라이즈 관련)
          </li>
          <li>Rule-based 키워드 사전 정의 및 8개 소비 페르소나 분류 체계 설계</li>
          <li>27명 아티스트 대상 가중평균 매칭 공식 설계, 100ms 이내 연산되는 경량 구조 구현</li>
          <li>Chart.js 기반 실시간 가중치 시각화, B2B 대시보드·B2C 테스트 프론트엔드 구현</li>
          <li>Make.com 연동으로 B2C 응답이 자동으로 데이터셋에 누적되는 파이프라인 구성</li>
        </ul>
      </DetailSection>

      <DetailSection step="05" title="결과와 한계">
        <p className="font-semibold text-ink">확인 가능한 결과</p>
        <ul className="list-disc pl-5">
          <li>팬덤 반응 데이터 14,850건 수집·정제 완료</li>
          <li>8개 소비 페르소나 분류 체계 설계 완료</li>
          <li>27명 아티스트 대상 매칭 대시보드 프로토타입 구현 완료</li>
        </ul>
        <p className="mt-4 font-semibold text-ink">가상 시뮬레이션과 실제 성과의 구분</p>
        <p>
          가중치를 “클린뷰티 40% · 젠지 라이프스타일러 30% · 글로벌 커넥터
          30%”로 설정한 가상 브랜드 ‘BLOOM’ 시나리오로 매칭 로직이 의도대로
          작동하는지 검증했습니다. BLOOM은 실제 계약 브랜드가 아닌 가상
          시뮬레이션이며, 매칭 점수 역시 검증된 정확도가 아니라 설계한
          가중평균 공식에 따른 산출값입니다. 실제 광고주를 대상으로 한 캠페인
          성과 검증은 아직 진행하지 않았고, 파일럿 광고주 유치는 다음 단계
          (Phase 2)의 목표로 남아 있습니다.
        </p>
      </DetailSection>

      <div className="mx-auto max-w-3xl px-6 pb-4 sm:px-8">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-ink/40">
          LIVE PREVIEW
        </p>
        <SitePreviewEmbed href={fandomMapper.liveUrl} label="Fandom.Mapper" />
      </div>
    </DetailPageShell>
  );
}
