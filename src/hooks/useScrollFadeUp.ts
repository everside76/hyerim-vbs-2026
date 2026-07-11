import { useEffect } from 'react'

/**
 * 페이지 내 `.fade-up` 요소들을 IntersectionObserver로 관찰하여
 * 뷰포트에 들어오면 `.is-visible`을 부여한다.
 * prefers-reduced-motion 사용자는 관찰 없이 즉시 표시.
 */
export function useScrollFadeUp() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('.fade-up'),
    )

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
