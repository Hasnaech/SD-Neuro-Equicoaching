'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Instagram, Linkedin } from 'lucide-react'

const CALENDLY_URL = 'https://calendly.com/sara-dabancens/seance-decouverte'

const nav = [
  {
    label: 'Offres',
    children: [
      { label: 'Formation Leadership', href: '/formation-leadership' },
      { label: 'Teambuilding Équicoaching', href: '/teambuilding-equicoaching' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-violet/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="SD Équicoaching" className="h-12 w-auto transition-transform group-hover:scale-105" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button className={`flex items-center gap-1 font-inter font-medium text-sm transition-colors duration-300 ${scrolled ? 'text-gris-fonce hover:text-violet' : 'text-white/90 hover:text-white'}`}>
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {dropOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-3 bg-white rounded-xl shadow-xl shadow-violet/10 border border-gris-clair p-2 min-w-[220px]"
                    >
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-3 rounded-lg text-gris-fonce hover:bg-violet-pale hover:text-violet font-inter text-sm transition-colors"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`font-inter font-medium text-sm transition-colors duration-300 ${scrolled ? 'text-gris-fonce hover:text-violet' : 'text-white/90 hover:text-white'}`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://www.instagram.com/sarahdabancens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram SD Équicoaching" className={`transition-colors duration-300 ${scrolled ? 'text-gris-moyen hover:text-or' : 'text-white/50 hover:text-or'}`}>
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/sarah-dabancens/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Sarah Dabancens" className={`transition-colors duration-300 ${scrolled ? 'text-gris-moyen hover:text-or' : 'text-white/50 hover:text-or'}`}>
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-or text-white font-inter font-semibold text-sm rounded-full transition-all duration-300 hover:bg-or-fonce hover:shadow-lg hover:shadow-or/30 hover:scale-105 active:scale-95">
            Réserver 30 min
          </a>
        </div>

        <button className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-violet-fonce' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gris-clair overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-2">
              {nav.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <p className="px-4 py-2 font-inter font-semibold text-xs text-gris-moyen uppercase tracking-wider">{item.label}</p>
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href} className="block px-6 py-2 text-gris-fonce hover:text-violet font-inter text-sm" onClick={() => setMenuOpen(false)}>{c.label}</Link>
                    ))}
                  </div>
                ) : (
                  <Link key={item.href} href={item.href} className="px-4 py-2 text-gris-fonce hover:text-violet font-inter font-medium" onClick={() => setMenuOpen(false)}>{item.label}</Link>
                )
              )}
              <div className="mt-4 px-4">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center text-center block" onClick={() => setMenuOpen(false)}>Réserver 30 min</a>
              </div>
              <div className="mt-4 px-4 flex items-center gap-4">
                <a href="https://www.instagram.com/sarahdabancens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram SD Équicoaching" className="text-gris-moyen hover:text-or transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/sarah-dabancens/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Sarah Dabancens" className="text-gris-moyen hover:text-or transition-colors"><Linkedin className="w-5 h-5" /></a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
