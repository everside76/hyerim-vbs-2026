const overviewCards = [
  { label: '기간', value: '07.26 ~ 08.23', sub: '4주간의 여정' },
  { label: '대상', value: '아동부 · 온세대', sub: '온 가족 환영' },
  { label: '장소', value: '혜림교회', sub: '본당 및 교육관' },
  { label: '주제', value: '나의 여름', sub: '다윗과 함께하는' },
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="fade-up">
          <p className="text-sm font-medium tracking-widest text-amber-300/90">
            행사 개요
          </p>
          <h2 className="mt-4 font-serif-title text-3xl leading-tight tracking-tight text-white md:text-5xl">
            다윗과 함께 걷는
            <br />
            2026 여름의 여정
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            "여호와는 나의 목자시니 내게 부족함이 없으리로다" — 목동에서 왕이 되기까지
            하나님과 동행한 다윗처럼, 이번 여름 우리 아이들과 온세대가 함께 말씀 안에서
            자라가는 4주간의 여정을 준비했습니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overviewCards.map((card, i) => (
            <div
              key={card.label}
              className="fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-amber-300/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <p className="text-xs font-medium tracking-widest text-amber-300/80">
                {card.label}
              </p>
              <p className="mt-3 font-serif-title text-2xl text-white md:text-[1.75rem]">
                {card.value}
              </p>
              <p className="mt-2 text-sm text-white/60">{card.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
