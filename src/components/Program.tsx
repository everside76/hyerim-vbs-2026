const programs = [
  {
    tag: '매일 말씀 여정',
    title: '다윗과 함께 걷는 28일 성경읽기',
    desc: '개강부터 마침까지 28일간 매일 정해진 말씀을 함께 읽으며 다윗의 삶을 따라갑니다. 어린이도 쉽게 따라올 수 있는 하루 한 장 여정.',
  },
  {
    tag: '광야 콘셉트 카페',
    title: 'DAVID CAFE',
    desc: '다윗이 지나온 광야를 콘셉트로 한 카페. 광야의 빵과 석류 리모나나 등 특별한 메뉴로 온세대가 함께 쉼과 교제를 나눕니다.',
  },
  {
    tag: '온세대 뮤지컬',
    title: '뮤지컬 에벤',
    desc: "무기를 든 소년 '에단'의 눈으로 바라본 다윗의 이야기. 온세대가 함께 관람하며 은혜를 나누는 여름성경학교 뮤지컬.",
  },
  {
    tag: '말씀 굿즈',
    title: '말씀카드 & 굿즈',
    desc: '매일 외울 말씀카드 28종과 여름성경학교 기념 굿즈. 손에 쥐고 마음에 새기는 말씀으로 여름을 채웁니다.',
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
