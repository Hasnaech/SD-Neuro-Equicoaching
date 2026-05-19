'use client'
import { useEffect, useRef } from 'react'

export default function NeuralBg({ variant = 'violet' }) {
  const svgRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let scrollY = 0
    const onScroll = () => {
      scrollY = window.scrollY
      if (svgRef.current) {
        svgRef.current.style.transform = `translateY(${scrollY * 0.12}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const strokeColor = variant === 'gold' ? '#CDA540' : '#78427F'
  const opacity = variant === 'gold' ? 0.18 : 0.12

  return (
    <div className="neural-bg-wrapper" aria-hidden="true">
      <svg
        ref={svgRef}
        className="neural-bg-svg"
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <style>{`
          .neural-path { fill: none; stroke-linecap: round; }
          .np1 { animation: neuralWave1 8s ease-in-out infinite; }
          .np2 { animation: neuralWave2 11s ease-in-out infinite; }
          .np3 { animation: neuralWave3 9s ease-in-out infinite reverse; }
          .np4 { animation: neuralWave1 13s ease-in-out infinite 2s; }
          .np5 { animation: neuralWave2 7s ease-in-out infinite 1s; }
          .dot  { animation: neuralPulse 4s ease-in-out infinite; }
          @keyframes neuralWave1 {
            0%,100% { d: path("M-50 300 C100 250 200 350 350 280 S600 200 750 280 S950 350 1100 290 S1250 220 1400 300"); }
            50%      { d: path("M-50 300 C100 320 200 260 350 310 S600 380 750 310 S950 240 1100 310 S1250 370 1400 300"); }
          }
          @keyframes neuralWave2 {
            0%,100% { d: path("M-50 200 C150 170 300 240 450 200 S700 150 850 210 S1050 270 1250 200 S1350 150 1450 200"); }
            50%      { d: path("M-50 200 C150 230 300 180 450 220 S700 270 850 200 S1050 150 1250 220 S1350 280 1450 200"); }
          }
          @keyframes neuralWave3 {
            0%,100% { d: path("M-50 420 C200 390 400 460 600 420 S800 370 1000 430 S1200 470 1450 420"); }
            50%      { d: path("M-50 420 C200 450 400 400 600 440 S800 490 1000 420 S1200 380 1450 420"); }
          }
          @keyframes neuralPulse {
            0%,100% { opacity: 0.3; r: 3; }
            50%      { opacity: 0.9; r: 5; }
          }
        `}</style>

        <path className="neural-path np1" stroke={strokeColor} strokeWidth="1.5" strokeOpacity={opacity}
          d="M-50 300 C100 250 200 350 350 280 S600 200 750 280 S950 350 1100 290 S1250 220 1400 300" />
        <path className="neural-path np2" stroke={strokeColor} strokeWidth="1" strokeOpacity={opacity * 0.8}
          d="M-50 200 C150 170 300 240 450 200 S700 150 850 210 S1050 270 1250 200 S1350 150 1450 200" />
        <path className="neural-path np3" stroke={strokeColor} strokeWidth="1.2" strokeOpacity={opacity}
          d="M-50 420 C200 390 400 460 600 420 S800 370 1000 430 S1200 470 1450 420" />
        <path className="neural-path np4" stroke={strokeColor} strokeWidth="0.8" strokeOpacity={opacity * 0.6}
          d="M-50 150 C200 120 450 180 650 150 S900 110 1100 160 S1300 200 1450 150" />
        <path className="neural-path np5" stroke={strokeColor} strokeWidth="1" strokeOpacity={opacity * 0.7}
          d="M-50 500 C250 480 500 530 750 490 S1000 450 1200 510 S1350 540 1450 500" />

        {[[100,280],[250,230],[420,300],[600,260],[780,310],[950,270],[1100,300]].map(([cx, cy], i) => (
          <circle key={i} className="dot" cx={cx} cy={cy} r="3"
            fill={strokeColor} opacity={opacity * 2}
            style={{ animationDelay: `${i * 0.6}s` }} />
        ))}
        {[[180,190],[350,210],[550,180],[750,200],[950,185],[1150,195]].map(([cx, cy], i) => (
          <circle key={`b${i}`} className="dot" cx={cx} cy={cy} r="2"
            fill={strokeColor} opacity={opacity * 1.5}
            style={{ animationDelay: `${i * 0.8 + 0.3}s` }} />
        ))}
      </svg>
    </div>
  )
}
