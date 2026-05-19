'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ImageReveal({ src, alt, className = '', fill = false, width, height }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {fill ? (
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={src} alt={alt} fill className="object-cover" unoptimized />
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" unoptimized />
        </motion.div>
      )}
      <motion.div
        className="absolute inset-0 bg-violet-fonce"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'right' }}
      />
    </motion.div>
  )
}
