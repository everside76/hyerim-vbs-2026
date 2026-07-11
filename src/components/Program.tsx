const programs = [
  {
    tag: '다윗과 함께, 걷다 · 7.26~',
    title: '28일 성경 읽기',
    desc: "매일 말씀을 읽으며 다윗의 삶을 따라 걷는 28일 여정. 말씀암송 '말씀카드'와 묵상을 돕는 추천 도서 큐레이션, 학부모 참여로 가정의 신앙 문화를 세워갑니다.",
  },
  {
    tag: '다윗과 함께, 읽다 · 8.16~',
    title: "도서 테마 전시 '다윗의 서재'",
    desc: '다윗의 생애를 주제별·테마별로 따라가며 자연스럽게 책을 만나는 전시. 성경과 역사, 문화가 연결되는 콘텐츠와 연령별 추천 도서 큐레이션.',
  },
  {
    tag: '다윗과 함께, 보다 · 8.21(금) 저녁 8시',
    title: "한 여름밤의 뮤지컬 '에벤 EBEN'",
    desc: "무기를 든 소년 '에단'의 눈으로 바라본 다윗의 이야기. 더 에벤 미니스트리 공연으로 온세대가 함께 관람합니다.",
  },
  {
    tag: '다윗과 함께, 놀다 · 8.22(토)',
    title: '다윗 페스티벌',
    desc: '읽은 성경을 체험으로! 다양한 놀이와 공동체 활동으로 함께 배우고 함께 즐기는 참여형 프로그램.',
  },
]

export default function Program() {
  return (
    <section
      id="program"
      className="scroll-mt-24 border-t border-white/5 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-up">
          <p className="text-sm font-medium tracking-widest text-amber-300/90">
            프로그램
          </p>
          <h2 className="mt-4 font-serif-title text-3xl leading-tight tracking-tight text-white md:text-5xl">
            여름을 채우는
            <br />
            네 가지 이야기
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="fade-up group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 transition-colors hover:border-amber-300/30 md:p-10"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="w-fit rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-xs font-medium tracking-wide text-amber-200">
                {p.tag}
              </span>
              <h3 className="mt-5 font-serif-title text-2xl text-white md:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
