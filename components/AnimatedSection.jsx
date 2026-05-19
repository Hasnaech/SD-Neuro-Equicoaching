'use client'
import { useEffect, useRef } from 'react'

export default function AnimatedSection({ children, className = '', animation = 'reveal', delay = 0, tag: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add('visible'), delay)
          } else {
            el.classList.add('visible')
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref} className={`${animation} ${className}`}>
      {children}
    </Tag>
  )
}
