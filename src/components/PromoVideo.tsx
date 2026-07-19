import { useRef, useState } from 'react'

const VIDEO_ID = 'KScS4v06xl0'
const THUMBNAIL_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`

export default function PromoVideo() {
  // 파사드 → iframe 재생 상태
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // 클릭 시 자동재생 iframe으로 교체. origin은 유튜브 IFrame API 검증용
  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
    `?autoplay=1&playsinline=1&rel=0&hl=ko&cc_load_policy=0&enablejsapi=1&origin=` +
    encodeURIComponent(window.location.origin)

  // iframe 로드 완료 후 자막 모듈을 명시적으로 내려 기본값을 "꺼짐"으로 강제
  const handleIframeLoad = () => {
    const win = iframeRef.current?.contentWindow
    if (!win) return

    // 일부 브라우저는 명령 수신 전 listening 핸드셰이크가 필요
    win.postMessage(JSON.stringify({ event: 'listening' }), '*')

    // 신형 플레이어는 'captions', 구형 플레이어는 'cc' 모듈명을 사용
    const disableCaptions = () => {
      win.postMessage(
        JSON.stringify({ event: 'command', func: 'unloadModule', args: ['captions'] }),
        '*',
      )
      win.postMessage(
        JSON.stringify({ event: 'command', func: 'unloadModule', args: ['cc'] }),
        '*',
      )
    }

    // 플레이어 준비 타이밍 편차를 고려해 즉시 + 지연 재전송
    disableCaptions()
    window.setTimeout(disableCaptions, 800)
  }

  return (
    <section id="video" className="scroll-mt-24 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="fade-up">
          <p className="text-sm font-medium tracking-widest text-amber-300/90">
            홍보영상
          </p>
          <h2 className="mt-4 font-serif-title text-3xl leading-tight tracking-tight text-white md:text-5xl">
            영상으로 먼저 만나는
            <br />
            2026 여름의 여정
          </h2>
        </div>

        {/* 유튜브 임베드: 16:9 비율 유지, 데스크톱에서 최대 폭 제한 후 중앙 정렬 */}
        <div className="fade-up mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
          <div className="aspect-video">
            {isPlaying ? (
              <iframe
                ref={iframeRef}
                src={embedSrc}
                title="2026 혜림교회 아동부 여름성경학교 홍보영상 01"
                onLoad={handleIframeLoad}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : (
              // 파사드: 썸네일 + 커스텀 재생 버튼. 클릭 시 iframe으로 교체
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label="홍보영상 재생"
                className="group relative block h-full w-full cursor-pointer"
              >
                <img
                  src={THUMBNAIL_URL}
                  alt="2026 혜림교회 아동부 여름성경학교 홍보영상 미리보기"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {/* 가독성을 위한 어두운 오버레이 (hover 시 살짝 밝아짐) */}
                <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/20" />
                {/* 커스텀 재생 버튼: 원형 + 삼각형 아이콘 */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/50 bg-amber-300/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-amber-300/80 group-hover:bg-amber-300/30 md:h-24 md:w-24">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-1 h-8 w-8 fill-amber-100 md:h-10 md:w-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
