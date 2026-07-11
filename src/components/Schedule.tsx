const weeks = [
  {
    week: '신청 기간',
    date: '7.12 ~ 7.25',
    title: '참가 신청',
    desc: '구글폼 온라인 개별 신청, 회비 20,000원.',
  },
  {
    week: '개강',
    date: '7.26 (주일)',
    title: '걷다 · 28일 성경 읽기 시작',
    desc: '여름성경학교 개강. 교재 및 굿즈 교환권 배부.',
  },
  {
    week: '전시',
    date: '8.16 (주일)',
    title: "읽다 · '다윗의 서재' 오픈",
    desc: '도서 테마 전시 시작, 굿즈 배부.',
  },
  {
    week: '공연',
    date: '8.21 (금) 저녁 8시',
    title: "보다 · 뮤지컬 '에벤 EBEN'",
    desc: '더 에벤 미니스트리 공연, 온세대가 함께 관람합니다.',
  },
  {
    week: '축제',
    date: '8.22 (토)',
    title: '놀다 · 다윗 페스티벌',
    desc: '온세대가 함께하는 체험 활동과 공동체 놀이.',
  },
  {
    week: '마침',
    date: '8.23 (주일)',
    title: '여정의 마무리',
    desc: '4주 여정을 마무리하는 주일.',
  },
]

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-24 border-t border-white/5 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-up">
          <p className="text-sm font-medium tracking-widest text-amber-300/90">
            일정
          </p>
          <h2 className="mt-4 font-serif-title text-3xl leading-tight tracking-tight text-white md:text-5xl">
            4주간의 타임라인
          </h2>
          <p className="mt-6 text-base text-white/60">07.26 개강 → 08.23 마침</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {weeks.map((w, i) => (
            <div
              key={w.week}
              className="fade-up flex flex-col bg-[#0d0906] p-8"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium tracking-widest text-amber-300/80">
                  {w.week}
                </span>
                <span className="font-serif-title text-lg text-white/80">
                  {w.date}
                </span>
              </div>
              <h3 className="mt-6 font-serif-title text-xl text-white">
                {w.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
