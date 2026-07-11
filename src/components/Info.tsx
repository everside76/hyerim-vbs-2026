import Logo from './Logo'

export default function Info() {
  return (
    <section
      id="info"
      className="scroll-mt-24 border-t border-white/5 px-6 pt-24 md:px-10 md:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="fade-up overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[0.08] to-white/[0.02] p-8 md:p-14">
          <p className="text-sm font-medium tracking-widest text-amber-300/90">
            참가 안내
          </p>
          <h2 className="mt-4 max-w-2xl font-serif-title text-3xl leading-tight tracking-tight text-white md:text-5xl">
            이번 여름, 다윗과 함께
            <br />
            걸어볼까요?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            혜림교회 아동부 여름성경학교에 온세대를 초대합니다. 참가 신청은
            2026.7.12(주일)부터 7.25(토)까지 구글폼으로 개별 신청해 주세요.
            자세한 안내는 아동부로 문의해 주세요.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://forms.gle/A4jbEx69i5YViBkH6"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-black transition-colors hover:bg-neutral-200"
            >
              참가 신청하기
            </a>
            <span className="text-sm text-white/50">
              구글 폼으로 연결됩니다.
            </span>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-300/70">
                신청 기간
              </p>
              <p className="mt-2 text-white/85">2026.7.12(주일) ~ 7.25(토)</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-300/70">
                신청 방법
              </p>
              <p className="mt-2 text-white/85">구글폼 온라인 개별 신청</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-300/70">
                회비
              </p>
              <p className="mt-2 text-white/85">20,000원</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-300/70">
                배부 안내
              </p>
              <p className="mt-2 text-white/85">
                교재·굿즈 교환권 7/26 배부 · 굿즈 8/16 배부
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-300/70">
                장소
              </p>
              <p className="mt-2 text-white/85">혜림교회 본당 및 교육관</p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-300/70">
                문의
              </p>
              <p className="mt-2 text-white/85">혜림교회 아동부</p>
            </div>
          </div>
        </div>

        <footer className="flex flex-col items-center gap-4 py-16 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2">
            <Logo className="h-5 w-5 text-white/70" />
            <span className="text-sm text-white/70">혜림교회 아동부</span>
          </div>
          <p className="text-xs text-white/40">
            © 2026 혜림교회 아동부 · 다윗과 함께하는 나의 여름
          </p>
        </footer>
      </div>
    </section>
  )
}
