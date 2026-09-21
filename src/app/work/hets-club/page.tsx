import type { Metadata } from "next";
import { DetailPageShell } from "@/components/detail/DetailPageShell";
import { DetailHeader } from "@/components/detail/DetailHeader";
import { DetailSection, TeamRoleNote } from "@/components/detail/DetailSection";
import { Media } from "@/components/Media";
import { hetsClub } from "@/data/projects";

export const metadata: Metadata = {
  title: "HET’S CLUB — 김지영 포트폴리오",
  description: hetsClub.concept,
};

export default function HetsClubPage() {
  return (
    <DetailPageShell>
      <DetailHeader project={hetsClub} />

      <DetailSection step="01" title="기획 질문">
        <p>
          기존 K-POP 팬덤 팝업 이벤트는 대부분 공식 굿즈를 판매하는 공간에
          머무릅니다. 팬들이 줄을 서는 이유가 굿즈 자체일 뿐, “그 공간에서의
          경험” 때문이 아닌 경우가 흔했습니다.
        </p>
        <p>
          팬덤이 굿즈를 사는 것을 넘어, 자발적으로 인증샷을 올리고 후기를
          공유하고 싶어지는 경험은 어떻게 만들 수 있을까?
        </p>
      </DetailSection>

      <DetailSection step="02" title="발견한 인사이트">
        <p>
          대상 아이돌의 SNS·인터뷰 콘텐츠를 분석하며 두 가지가 충돌한다는
          것을 발견했습니다.
        </p>
        <ul className="list-disc pl-5">
          <li>
            아이돌 측 추구미는 “강함·섹시함”. 본인을 “팬들의 PT 선생님”으로
            자주 표현하고, 팬들에게 “비타민 먹었냐”, “건강 챙겨라” 같은
            발언을 자주 합니다.
          </li>
          <li>
            반면 팬덤이 좋아하는 결은 “귀여움”. 아이돌이 강한 이미지를
            내세울수록 팬덤은 오히려 “갭 모에”로 소비하는 경향을 보였습니다.
          </li>
        </ul>
        <p>
          이 둘을 하나로 정리하지 않고, 충돌 자체를 콘셉트로 만들면 팬덤이
          자발적으로 확산할 콘텐츠가 될 수 있다고 판단했습니다.
        </p>
      </DetailSection>

      <DetailSection step="03" title="선택한 전략과 이유">
        <p>
          “도베르만이 되고 싶은 말티즈 PT 선생님”이라는 메타포로 캐릭터
          해석(“캐해”)을 설계했습니다. 귀여운 말티즈(팬덤이 보는 이미지) +
          도베르만이 되고 싶다(아이돌의 추구미) = 말티즈 PT 선생님이 운영하는
          헬스클럽, HET’S CLUB.
        </p>
        <p>
          전문 디자이너에게 전량을 맡기는 대신, 기획자가 직접 손으로 초안을
          그리고 팬아터·디자이너에게 디렉션을 전달하는 방식을 택했습니다.
          컨셉 의도가 비주얼까지 일관되게 이어지려면, 기획과 디자인 사이의
          번역 손실을 줄여야 한다고 판단했기 때문입니다.
        </p>
        <Media
          asset={hetsClub.heroImage}
          sizes="(min-width: 768px) 60vw, 100vw"
          className="rounded-2xl"
        />
      </DetailSection>

      <DetailSection step="04" title="내가 맡은 실행">
        <p>콘텐츠 기획 총괄로서 다음을 직접 맡았습니다.</p>
        <ul className="list-disc pl-5">
          <li>
            캐릭터 해석·컨셉 설계, 메인 포스터·커밍순 포스터 디자인 디렉션
            (메인 캐릭터 구도, 컬러, 안내문 문구까지 지정)
          </li>
          <li>
            굿즈 10여 종 기획과 디렉션 — 명함, 편지형 떡메모지(기본특전),
            아이돌 메시지형 떡메모지(디저트특전), 카톡 테마, 스티커팩, 티셔츠,
            밀크글라스, 럭키드로우 등 카테고리마다 다른 컨셉 적용
          </li>
          <li>
            X(Twitter) 계정(@cutiehealthclub) 톤앤매너 설계와 커밍순 단계
            티저 연출, #헷스클럽 해시태그 이벤트 기획
          </li>
          <li>
            팬덤 SNS 반응·구매 데이터를 분석한 굿즈 수량 예측, 선착특전 일자별
            분배 기획(포토프롭 → 밀크글라스 → 티셔츠+키링)
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <Media
            asset={hetsClub.goodsImage1}
            sizes="(min-width: 768px) 30vw, 50vw"
            className="rounded-2xl"
          />
          <Media
            asset={hetsClub.goodsImage2}
            sizes="(min-width: 768px) 30vw, 50vw"
            className="rounded-2xl"
          />
        </div>
      </DetailSection>

      <DetailSection step="05" title="결과와 한계">
        <TeamRoleNote>
          <p className="font-semibold text-ink">팀 전체 결과</p>
          <p className="mt-1">
            3일간(2025.06.13–06.15) 특전 300개 전량 솔드아웃, 방문자 300명
            이상 추정, 디저트 특전은 매일 오픈 1~2시간 내 조기 품절, 마지막
            날은 1시간 이내 완판되어 특전을 추가로 긴급 공수했습니다. 팬덤이
            SNS에 인증샷을 자발적으로 올리며 컨셉이 외부로 확산됐습니다.
          </p>
          <p className="mt-3 font-semibold text-ink">개인 기여</p>
          <p className="mt-1">
            캐릭터 해석·콘셉트 설계와 굿즈·SNS 디자인 디렉션을 담당했습니다.
            운영 현장 인력 구성·재무 등은 팀 전체의 협업 영역입니다.
          </p>
        </TeamRoleNote>
        <p className="mt-6">
          아쉬운 점도 있었습니다. 2회차 팝업의 운영 SNS 계정을 분실하면서
          해당 회차 자료가 남지 않았고, 방문자 수를 정밀하게 세는 카운팅
          체계가 없어 방문자 규모는 정확한 실측이 아닌 추정치로만 제시할 수
          있습니다.
        </p>
      </DetailSection>
    </DetailPageShell>
  );
}
