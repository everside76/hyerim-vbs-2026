/**
 * 커스텀 로고 — 물맷돌/별 모티프 (다윗의 물맷돌 + 여름의 별).
 * 흰색 stroke/fill, h-5 w-5 기본.
 */
export default function Logo({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 별 모티프 */}
      <path
        d="M12 2.5l2.35 4.76 5.25.76-3.8 3.7.9 5.23L12 14.24l-4.7 2.47.9-5.23-3.8-3.7 5.25-.76L12 2.5z"
        fill="currentColor"
      />
      {/* 물맷돌 궤적 */}
      <circle cx="12" cy="20.5" r="1.6" fill="currentColor" />
      <path
        d="M6 18.5c1.8 1.6 4 2.4 6 2.4s4.2-.8 6-2.4"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}
