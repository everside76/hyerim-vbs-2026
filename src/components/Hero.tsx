import Logo from './Logo'

const navLinks = [
  { label: '소개', href: '#about' },
  { label: '프로그램', href: '#program' },
  { label: '일정', href: '#schedule' },
  { label: '안내', href: '#info' },
]

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* 배경: 석양 광야를 달리는 다윗 + 느린 Ken Burns 줌 */}
      <img
        src={`${import.meta.env.BASE_URL}hero.jpg`}
        alt="석양이 지는 광야를 달리는 다윗"
        className="absolute inset-0 h-full w-full object-cover object-[center_65%] animate-ken-burns"
      />
      {/* 가독성용 오버레이: 밝은 골드톤 하늘 → 상단 어둡게, 하단은 다음 섹션 배경(#0d0906)으로 연결 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-[#0d0906]" />

      {/* 네비바 */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between gap-4 px-6 pt-6 md:px-10">
        {/* 왼쪽 pill: 로고 + 브랜드 */}
        <div className="flex items-center gap-2 rounded-full bg-neutral-900/90 py-3 pl-4 pr-6 backdrop-blur">
          <Logo className="h-5 w-5 text-white" />
          <span className="text-sm tracking-tight text-white">혜림교회 아동부</span>
        </div>

        {/* 가운데 pill: 앵커 링크 (모바일 숨김) */}
        <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 오른쪽 버튼 */}
        <a
          href="#info"
          className="rounded-full bg-white px-6 py-3 text-sm text-black transition-colors hover:bg-neutral-200"
        >
          참가 안내
        </a>
      </nav>

      {/* 중앙 정렬 타이틀 블록 */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="text-glow mb-5 text-sm tracking-[0.2em] text-white/85 md:text-base">
          혜림교회 온세대가 함께하는 아동부 여름성경학교
        </p>
        <h1 className="hero-title text-glow whitespace-nowrap font-medium text-[6vw] text-white md:text-[4.5vw]">
          다윗과 함께하는 <span className="text-amber-300">2026 나의 여름</span>
        </h1>
        <div className="text-glow mt-6 rounded-full border border-white/40 px-6 py-2 text-sm tracking-widest text-white md:text-base">
          07.26 ~ 08.23
        </div>
      </div>

      {/* 하단 그라데이션 */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#0d0906]" />
    </section>
  )
}
