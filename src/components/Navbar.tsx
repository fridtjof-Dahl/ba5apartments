'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Leiligheter', href: '#apartments' },
  { label: 'Om oss', href: '#about' },
  { label: 'Gjestenes ord', href: '#reviews' },
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
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : ''
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <a href="#" className="font-display text-xl tracking-wide">
            BA<span className="text-sage">5</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className={`text-[13px] font-medium transition-colors ${
                scrolled ? 'text-ink-light hover:text-ink' : 'text-white/70 hover:text-white'
              }`}>{l.label}</a>
            ))}
            <a href="#booking" className={`text-[13px] font-semibold px-5 py-2 rounded-full transition-all ${
              scrolled
                ? 'bg-sage text-white hover:bg-sage-light'
                : 'bg-white text-ink hover:bg-white/90'
            }`}>
              Book nå
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-ink' : 'text-white'}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-6"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-2xl font-display text-ink">{l.label}</a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)}
              className="mt-4 bg-sage text-white px-8 py-3 rounded-full text-sm font-semibold">
              Book nå
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
