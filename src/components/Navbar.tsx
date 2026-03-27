'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Leiligheter', href: '#apartments' },
  { label: 'Nabolag', href: '#neighborhoods' },
  { label: 'Opplevelser', href: '#activities' },
  { label: 'For bedrifter', href: '#business' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-linen/95 backdrop-blur-lg border-b border-warm-border py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="relative z-10">
            <span className="font-display text-2xl font-semibold tracking-wide text-stone">
              BA<span className="text-brass">5</span>
            </span>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-text-muted font-medium -mt-0.5">
              Apartments
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-300 tracking-wide ${
                  scrolled ? 'text-text-muted hover:text-stone' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#booking"
            className={`hidden lg:inline-flex items-center px-5 py-2.5 text-[13px] font-medium tracking-wider uppercase transition-all duration-300 ${
              scrolled
                ? 'bg-stone text-white hover:bg-stone-light'
                : 'bg-white/15 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25'
            }`}
          >
            Book nå
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-10 p-2 ${scrolled ? 'text-stone' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-linen flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-7">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-xl font-display font-medium text-stone"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="btn-primary mt-4"
              >
                Book nå
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
