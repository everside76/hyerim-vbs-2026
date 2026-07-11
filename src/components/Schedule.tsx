const weeks = [
  {
    week: '1주차',
    date: '07.26',
    title: '개강 · 여정의 시작',
    desc: '여름성경학교 개강. 주제곡과 함께 28일 성경읽기의 첫 걸음을 뗍니다.',
  },
  {
    week: '2주차',
    date: '08.02',
    title: '다윗과 광야',
    desc: 'DAVID CAFE 오픈, 광야의 이야기를 따라가는 한 주. 세부 내용 추후 안내.',
  },
  {
    week: '3주차',
    date: '08.09',
    title: '말씀과 함께',
    desc: '말씀카드로 함께 외우고 나누는 한 주. 세부 내용 추후 안내.',
  },
  {
    week: '4주차',
    date: '08.23',
    title: '마침 · 승리는 여호와께',
    desc: '온세대가 함께하는 마침 예배와 나눔. 세부 내용 추후 안내.',
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

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
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
