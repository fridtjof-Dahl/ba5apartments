'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Leiligheter', href: '#apartments' },
  { label: 'Om oss', href: '#about' },
  { label: 'Anmeldelser', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontakt', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-18">
          <a href="#" className="font-display text-xl tracking-wide">
            <span className={scrolled ? 'text-ink' : 'text-white'}>
              BA<span className="text-sage">5</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-ink-light hover:text-ink'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#booking"
              className={`inline-flex items-center gap-2 text-[13px] font-semibold px-6 py-2.5 rounded-full transition-all ${
                scrolled
                  ? 'bg-dark text-white hover:bg-dark/80'
                  : 'bg-white text-ink hover:bg-white/90'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
              Book ditt opphold
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-6 text-white"
            >
              <X size={24} />
            </button>

            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-display text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 bg-white text-ink px-8 py-3 rounded-full text-sm font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ink/40" />
              Book ditt opphold
              <span className="w-1.5 h-1.5 rounded-full bg-ink/40" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
