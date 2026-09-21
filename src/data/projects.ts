import { photo, placeholder, type ImageAsset } from "@/data/media";

export type ResultTag = "measured" | "estimated" | "target" | "expected";

export const resultTagLabel: Record<ResultTag, string> = {
  measured: "실측",
  estimated: "추정",
  target: "목표",
  expected: "기대효과",
};

export type ProjectResult = {
  tag: ResultTag;
  text: string;
};

export type ProjectBase = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  concept: string;
  role: string;
  period: string;
  results: ProjectResult[];
};

export const hetsClub: ProjectBase & {
  heroImage: ImageAsset;
  goodsImage1: ImageAsset;
  goodsImage2: ImageAsset;
} = {
  slug: "hets-club",
  eyebrow: "PROJECT 01 · 온·오프라인 팬덤 콘텐츠 기획",
  title: "HET’S CLUB",
  subtitle: "도베르만이 되고 싶은 말티즈 PT 선생님의 큐티 헬스클럽",
  concept:
    "팬덤의 취향과 아티스트의 캐릭터를 해석해 하나의 콘셉트로 만들고, SNS 티저·굿즈·현장 경험·후기 이벤트로 전개했습니다.",
  role: "콘텐츠 기획 총괄 (팀 프로젝트)",
  period: "2025.03 – 2025.12 · 운영 2025.06.13 – 06.15",
  results: [
    { tag: "measured", text: "3일간 특전 300개 전량 솔드아웃" },
    { tag: "estimated", text: "방문자 300명 이상 추정" },
    { tag: "measured", text: "마지막 날 디저트 특전 1시간 이내 완판" },
  ],
  heroImage: photo(
    "/work/hets-club/open-poster.jpg",
    "HET’S CLUB OPEN 캠페인 포스터 — “도베르만이 되고 싶은 말티즈 PT 선생님” 컨셉 캐릭터와 도베르만이 되는 법 안내",
    1422,
    2000
  ),
  goodsImage1: photo(
    "/work/hets-club/goods-guide.jpg",
    "특전 굿즈 안내 — 티셔츠, 트레카 6종, 떡메모지, 키링, 밀크글라스, 스페셜 럭키드로우 구성",
    1422,
    2000
  ),
  goodsImage2: photo(
    "/work/hets-club/goods-detail.jpg",
    "특전 상세 구성 — 기본특전(엽서·명함·스티커팩), 디저트특전(카톡테마·포토파우치), 선착특전(일자별 포토프롭·밀크글라스·티셔츠+키링)",
    1422,
    2000
  ),
};

export const fandomMapper: ProjectBase & {
  dashboardImage: ImageAsset;
  landingImage: ImageAsset;
  dataPoints: { value: string; label: string }[];
  liveUrl: string;
} = {
  slug: "fandom-mapper",
  eyebrow: "PROJECT 02 · K-POP 팬덤 × 브랜드 매칭 기획",
  title: "Fandom.Mapper",
  subtitle: "팬덤의 규모보다 소비 성향에 주목한 브랜드 매칭 기획",
  concept:
    "팬덤 반응 데이터를 분석해 8개 소비 페르소나로 분류하고, 27명 아티스트와 브랜드를 가중치 기반으로 매칭하는 대시보드를 설계했습니다.",
  role: "개인 프로젝트 · 기획·데이터·프론트엔드 단독 수행",
  period: "2026.04",
  results: [
    { tag: "measured", text: "팬덤 반응 데이터 14,850건 수집·정제" },
    { tag: "measured", text: "8개 소비 페르소나 분류 체계 설계" },
    { tag: "measured", text: "27명 아티스트 대상 매칭 대시보드 프로토타입 완성" },
  ],
  dashboardImage: photo(
    "/work/fandom-mapper/ranking-dashboard.png",
    "Fandom.Mapper 매칭 랭킹 대시보드 — 타겟 가중치 슬라이더와 매칭 랭킹 TOP 10 스코어 화면",
    1671,
    870
  ),
  landingImage: photo(
    "/work/fandom-mapper/landing.webp",
    "Fandom.Mapper 랜딩 페이지 — “Fan Data, Brand Power” 메인 화면과 8개 팬덤 페르소나 소개",
    1660,
    812
  ),
  dataPoints: [
    { value: "14,850건", label: "수집·정제한 팬덤 반응 데이터" },
    { value: "8개", label: "설계한 소비 페르소나" },
    { value: "27명", label: "매칭 대상 아티스트" },
    { value: "<100ms", label: "가중평균 랭킹 연산 목표" },
  ],
  liveUrl: "https://fandom-mapper.imweb.me/",
};

export const imperialArchive: ProjectBase & {
  heroImage: ImageAsset;
  uiImage: ImageAsset;
  accent: string;
  liveUrl: string;
} = {
  slug: "imperial-archive",
  eyebrow: "PROJECT 03 · 참여형 연말 회고 콘텐츠",
  title: "2025 제국 기록부",
  subtitle: "개인의 이야기를 소장하고 공유할 수 있는 콘텐츠로 만든 참여형 경험",
  concept:
    "연말 회고 질문에 답하면 로맨스 판타지 세계관의 개인화된 서사와 이미지로 재구성해 저장·공유할 수 있게 만들었습니다.",
  role: "개인 프로젝트 · 기획·프론트엔드·AI 프롬프트 설계 단독 수행",
  period: "2025.12",
  results: [
    { tag: "measured", text: "질문 응답 → 3단계 루트 분기 서사 생성 시스템 구현" },
    { tag: "measured", text: "결과를 고화질 이미지로 저장·공유하는 기능 구현" },
    { tag: "expected", text: "고유 번호·동적 공유 문구로 SNS 공유 유도 설계" },
  ],
  heroImage: placeholder(
    "제국 기록부 결과 화면",
    "3:4",
    "개인화된 서사 + 인장 이미지 + 고유 번호"
  ),
  uiImage: placeholder(
    "황실 기록지 컨셉 UI",
    "16:9",
    "다크 배경(#0d0907) + 금색 포인트(#D4AF37) 톤앤매너"
  ),
  accent: "#d4af37",
  liveUrl: "https://2025-imperial-archive.vercel.app/",
};

export const selectedWork: ProjectBase[] = [hetsClub, fandomMapper, imperialArchive];

export type PerspectiveProject = {
  title: string;
  englishLabel: string;
  summary: string;
  role: string;
  period: string;
  link?: { label: string; href: string; handle?: string };
};

export const morePerspectives: PerspectiveProject[] = [
  {
    title: "SUBWAY VIBE",
    englishLabel: "지하철 혼잡도 기반 음악 추천 서비스",
    summary:
      "설문 154명의 응답을 분석해 “음악 청취 시 혼잡 체감도가 낮게 나타나는 경향”을 확인하고, 이를 일상 속 서비스 아이디어로 발전시켰습니다.",
    role: "팀 프로젝트 · 설문 설계·데이터 분석(Tableau)",
    period: "2024.12",
  },
  {
    title: "Mechuragi",
    englishLabel: "AI 기반 메뉴 추천 서비스",
    summary:
      "팀장으로 기획을 주도하고, 온보딩부터 커뮤니티까지 전 페이지를 프론트엔드로 직접 구현했습니다. 2024 GURU Programming 해커톤 대상 수상.",
    role: "팀 프로젝트(팀장) · 프론트엔드 전체 구현",
    period: "2024 – 현재",
    link: { label: "GitHub", href: "https://github.com/teamMechuragi" },
  },
  {
    title: "틈;세",
    englishLabel: "중노년층 소통 플랫폼 잡지",
    summary:
      "세대 간 소통 단절을 잡지 매체로 풀어내는 콘셉트를 기획하고, 길거리·복지관 인터뷰부터 촬영·편집까지 총괄했습니다.",
    role: "PM · 디자인 · 콘텐츠 기획",
    period: "2024",
    link: {
      label: "Instagram",
      href: "https://www.instagram.com/between_2060",
      handle: "@between_2060",
    },
  },
];

export type OtherProject = {
  title: string;
  summary: string;
  role: string;
  period: string;
};

export const otherProjects: OtherProject[] = [
  {
    title: "Littergation — 서울시 가로 쓰레기통 위치 알림 앱",
    summary:
      "서울시 공공데이터 5,382건을 정제해 위치 기반으로 서비스화. Android 개발 전반(지도 연동·마커·검색·제보 기능)을 담당했습니다.",
    role: "팀 프로젝트 · Android 개발 전반",
    period: "2024",
  },
  {
    title: "멜론 TOP100 vs 유튜브 뮤직 TOP100 — 가사 감정 비교 분석",
    summary:
      "두 플랫폼 200곡의 가사를 자연어 처리로 분석해 워드클라우드로 시각화하고, 플랫폼별 광고 타겟팅 전략을 제안했습니다.",
    role: "개인 프로젝트 · 데이터 분석",
    period: "2025.06",
  },
  {
    title: "캠퍼스 방탈출 게임 — Unity 기반",
    summary: "신입생 대상 학교 탐험형 방탈출 게임. 게임 로직 구현과 위치 기반 미션을 담당했습니다.",
    role: "팀 프로젝트 · PM·프론트엔드(게임 로직)",
    period: "2024",
  },
  {
    title: "뜨개질 도우미 앱 — Java Swing",
    summary: "뜨개질 패턴 관리와 진행도 기록을 위한 데스크톱 앱을 기획부터 구현까지 단독 개발했습니다.",
    role: "개인 프로젝트 · 단독 개발",
    period: "2023",
  },
];
