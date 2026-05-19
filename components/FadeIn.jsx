'use client'
import { motion } from 'framer-motion'

const variants = {
  up:    { initial: { opacity: 0, y: 40 },  animate: { opacity: 1, y: 0 } },
  left:  { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 },  animate: { opacity: 1, x: 0 } },
  none:  { initial: { opacity: 0 },          animate: { opacity: 1 } },
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
  const v = variants[direction] || variants.up
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
