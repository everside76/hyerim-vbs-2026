# 2026 여름성경학교 행사 안내 웹사이트 — 구현 계획

> 계획: Claude Fable 5 / 코딩: Opus 4.8 / 테스트: Sonnet 5

## 개요
혜림교회 아동부 여름성경학교 "다윗과 함께하는 2026 나의 여름" (07.26 ~ 08.23) 행사 안내 원페이지 웹사이트.
디자인 레퍼런스: 풀스크린 히어로 + 플로팅 알약(pill) 네비바 + 초대형 스태거드 타이포그래피 (securify 스펙 구조를 그대로 차용하되 내용/색감은 포스터 무드로 현지화).

## 기술 스택
- Vite + React 18 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite` 플러그인)
- 폰트(Google Fonts): **Gowun Batang** (제목 — 포스터의 명조 느낌), **Noto Sans KR** (본문) — weights 300~700
- 빌드 산출물은 정적 사이트 (npm run build)

## 글로벌 스타일
- `html, body, #root { height: 100% }`
- body: `font-family: 'Noto Sans KR', system-ui, sans-serif;` 배경 `#0d0906`(짙은 갈흑색), 글자 `#fff`, antialiased
- `.hero-title`: `font-family: 'Gowun Batang', serif; letter-spacing: -0.02em; line-height: 0.95;`
- 팔레트: 순수 블랙/화이트 + 포스터의 골드·앰버 톤 (`amber-300/400`, `#e8c37a` 계열) + white/40·70·90 투명도. **보라/인디고 금지.**

## 히어로 섹션 (securify 스펙 구조 차용)
`<section class="relative h-screen w-full overflow-hidden bg-black">`

1. **배경**: `public/poster.jpg` (포스터 원본) — `absolute inset-0 w-full h-full object-cover`, 15초 주기의 아주 느린 Ken Burns 줌 애니메이션(scale 1 → 1.08, alternate). 동영상 대체재.
   - 가독성용 오버레이: `absolute inset-0 bg-black/25`
2. **네비바** (absolute, z-20, `px-6 md:px-10 pt-6 top-0 left-0 right-0`, `flex items-center justify-between gap-4`)
   - 왼쪽 pill: `flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3` — 커스텀 SVG 로고(물맷돌/별 모티프, h-5 w-5, 흰색) + 텍스트 "혜림교회 아동부" (`text-white text-sm tracking-tight`)
   - 가운데 pill (`hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2`): 앵커 링크 4개 — "소개" #about / "프로그램" #program / "일정" #schedule / "안내" #info — 각 `text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full`
   - 오른쪽 버튼: "참가 안내" — `bg-white text-black text-sm rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors`, #info로 스크롤
3. **초대형 스태거드 헤드라인** (각 `<h1 class="hero-title absolute text-white font-medium text-[14vw] md:text-[13vw]">`)
   - "다윗과" — `left-4 md:left-10 top-[18%]`
   - "함께하는" — `right-4 md:right-10 top-[38%]`
   - "나의 여름" — `left-[14%] md:left-[24%] top-[58%]` (골드 포인트: "여름"에 `text-amber-300` 등 부분 강조 가능)
4. **설명 문단** (absolute `left-6 md:left-10 top-[46%] max-w-[240px] text-[15px] leading-snug text-white/90`):
   "혜림교회 온세대가 함께하는 아동부 여름성경학교"
5. **스탯 블록 3개** (securify 배치 그대로):
   - 우상단 (`right-6 md:right-24 top-[14%]`): 대각선 디바이더(`hidden md:block h-px w-24 bg-white/40 rotate-[20deg]`) + "07.26" (`text-4xl md:text-5xl font-medium tracking-tight`) / 서브라벨 "~ 08.23 · 4주간" (`text-xs md:text-sm text-white/70 mt-1 text-right`)
   - 좌하단 (`left-6 md:left-20 bottom-20 md:bottom-24`): "28일" + 디바이더(rotate-[-20deg]) / "다윗과 함께 걷는 성경읽기"
   - 우하단 (`right-6 md:right-20 bottom-16 md:bottom-20`): 디바이더(rotate-[-20deg]) + "온세대" / "가족이 함께하는 여름"
6. **하단 그라데이션**: `pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0d0906]`

## 히어로 아래 안내 섹션 (동일 다크·골드 무드, max-w-6xl 컨테이너)
- **#about 행사 개요**: 주제 말씀·소개 문구 + 카드 4개(기간 07.26~08.23 / 대상 아동부·온세대 / 장소 혜림교회 / 주제 "다윗과 함께하는 나의 여름")
- **#program 프로그램**: 카드 그리드 —
  1. "다윗과 함께 걷는 28일 성경읽기" (매일 말씀 여정)
  2. "DAVID CAFE" (광야 콘셉트 카페 — 광야의 빵, 석류 리모나나)
  3. "주제곡: 승리는 여호와께" (온세대가 함께 부르는 주제곡)
  4. "말씀카드 & 굿즈" (매일 외울 말씀카드 28종 등)
- **#schedule 일정**: 4주 타임라인 (1주차 07.26 개강 → 4주차 08.23 마침). 세부 내용 미정 부분은 "추후 안내" 처리.
- **#info 참가 안내 / footer**: 문의는 혜림교회 아동부, 장소 안내, 하단 저작권 표기. (신청 링크 미정 → placeholder 버튼)
- 모든 섹션에 스크롤 시 부드러운 fade-up (IntersectionObserver, prefers-reduced-motion 존중) — 과하지 않게.

## 인터랙션 제한
- transition은 nav 링크 hover, 버튼 hover, fade-up 정도만. 앵커는 `scroll-behavior: smooth`.

## 반응형
- 모바일: nav 링크·대각선 디바이더 숨김, 타이포는 vw 단위로 자동 스케일.

## 검증 (Sonnet 5)
1. `npx tsc --noEmit` 통과
2. `npm run build` 성공
3. `npm run preview` 후 HTTP 200 + 콘솔 에러 없음 + 주요 텍스트 렌더 확인
