'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navbar() {
  const t = useTranslations('Navbar')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const links = [
    { label: t('apartments'), href: '#apartments' },
    { label: t('about'), href: '#about' },
    { label: t('reviews'), href: '#reviews' },
    { label: t('faq'), href: '#faq' },
    { label: t('contact'), href: '#contact' },
  ]

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-sage focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 h-14 md:h-[4.5rem]">
          <a
            href="#"
            className="font-display text-xl tracking-wide"
            aria-label="BA5 Apartments — home"
          >
            <span className={scrolled ? 'text-ink' : 'text-white'}>
              BA<span className="text-sage">5</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-ink/70 hover:text-ink'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher scrolled={scrolled} />
            <a
              href="#booking"
              className="btn-premium inline-flex items-center text-[13px] font-semibold px-6 py-2 rounded-full text-white shadow-lg shadow-sage/30 hover:shadow-xl hover:shadow-sage/40 transition-shadow"
            >
              {t('bookCta')}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher scrolled={scrolled} />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className={`p-2 -mr-1 min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-lg ${scrolled ? 'text-ink' : 'text-white'}`}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-40 bg-dark flex flex-col items-center justify-center gap-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="absolute top-[max(1rem,env(safe-area-inset-top))] right-4 sm:right-6 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-white rounded-lg"
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
              className="btn-premium mt-6 inline-flex items-center gap-2 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg shadow-sage/30"
            >
              {t('bookCta')}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
