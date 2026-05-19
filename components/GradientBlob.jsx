'use client'
import { motion } from 'framer-motion'

export default function GradientBlob() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-1/2 -left-1/4 w-full h-full rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(120,66,127,0.15) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-1/2 -right-1/4 w-full h-full rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(205,165,64,0.12) 0%, transparent 70%)' }}
        animate={{ scale: [1.2, 1, 1.2], x: [50, 0, 50], y: [30, 0, 30] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
