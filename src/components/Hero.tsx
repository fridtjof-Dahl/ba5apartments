'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, Users, Search, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ScrollIndicator from './ScrollIndicator'

export default function Hero() {
  const t = useTranslations('Hero')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')

  const today = new Date().toISOString().split('T')[0]

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    window.dispatchEvent(
      new CustomEvent('hero-search', {
        detail: { checkIn, checkOut, guests },
      }),
    )
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  const trustBadges = [t('trust1'), t('trust2'), t('trust3')]

  const fieldShell =
    'flex items-center gap-2.5 sm:gap-3 min-h-[52px] md:min-h-0 rounded-xl md:rounded-none border border-white/[0.1] bg-white/[0.06] md:border-0 md:bg-transparent px-3 sm:px-4 md:px-5 py-2.5 md:py-2.5 group'

  const inputCls =
    'w-full min-h-[44px] md:min-h-0 bg-transparent text-white text-base md:text-sm outline-none cursor-pointer [color-scheme:dark]'

  return (
    <section className="relative min-h-[100dvh] min-h-screen bg-gradient-to-b from-dark via-dark/95 to-sand overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero2.avif')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] min-h-screen px-4 sm:px-6 pt-[calc(3.5rem+env(safe-area-inset-top)+1.25rem)] pb-[max(2rem,env(safe-area-inset-bottom))] md:pt-[calc(4.5rem+env(safe-area-inset-top)+1rem)] md:pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-[1.85rem] leading-[1.12] sm:text-4xl md:text-6xl lg:text-7xl text-white max-w-[20ch] sm:max-w-3xl"
        >
          {t('headline1')}
          <br />
          <span className="italic">{t('headline2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-4 sm:mt-6 text-white/60 max-w-lg text-sm sm:text-[15px] md:text-base leading-relaxed px-1"
        >
          {t('subtitle')}
        </motion.p>

        {/* ── Booking bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 sm:mt-10 md:mt-14 w-full max-w-3xl"
        >
          <form onSubmit={handleSearch}>
            <div className="bg-white/[0.08] backdrop-blur-2xl rounded-2xl md:rounded-full p-3 sm:p-3.5 md:p-2 border border-white/[0.14] shadow-2xl shadow-black/25">
              <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:items-stretch">
                {/* Dates: side-by-side on mobile, row on desktop */}
                <div className="grid grid-cols-2 gap-2 md:contents">
                  {/* Check-in */}
                  <div className={`${fieldShell} min-w-0`}>
                    <CalendarDays size={18} className="text-white/35 group-focus-within:text-sage transition-colors flex-shrink-0 hidden min-[380px]:block" />
                    <div className="flex-1 min-w-0 text-left">
                      <label className="block text-[10px] font-semibold text-white/45 uppercase tracking-widest mb-0.5">
                        {t('bookCheckIn')}
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={e => setCheckIn(e.target.value)}
                        min={today}
                        required
                        className={`hero-date-input ${inputCls}`}
                      />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className={`${fieldShell} min-w-0`}>
                    <CalendarDays size={18} className="text-white/35 group-focus-within:text-sage transition-colors flex-shrink-0 hidden min-[380px]:block" />
                    <div className="flex-1 min-w-0 text-left">
                      <label className="block text-[10px] font-semibold text-white/45 uppercase tracking-widest mb-0.5">
                        {t('bookCheckOut')}
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={e => setCheckOut(e.target.value)}
                        min={checkIn || today}
                        required
                        className={`hero-date-input ${inputCls}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-px self-stretch my-2 bg-white/10 flex-shrink-0" />

                {/* Guests */}
                <div className={`${fieldShell} md:flex-1 text-left`}>
                  <Users size={18} className="text-white/35 group-focus-within:text-sage transition-colors flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-white/45 uppercase tracking-widest mb-0.5">
                      {t('bookGuests')}
                    </label>
                    <select
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className={`${inputCls} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='white' fill-opacity='0.5' d='M1 1.5L6 6l5-4.5'/%3E%3C/svg%3E")] bg-[length:12px] bg-[right_0.15rem_center] bg-no-repeat pr-6`}
                    >
                      {[1, 2, 3, 4].map(n => (
                        <option key={n} value={n} className="bg-dark text-white">
                          {t('bookGuest', { count: n })}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search CTA */}
                <button
                  type="submit"
                  className="w-full md:w-auto md:self-center shrink-0 bg-sage hover:bg-sage-light active:scale-[0.98] text-white px-6 md:px-8 min-h-[48px] md:min-h-0 py-3.5 md:py-3 rounded-xl md:rounded-full text-[15px] md:text-sm font-semibold transition-all flex items-center justify-center gap-2 md:mx-1 shadow-lg shadow-sage/25"
                >
                  <Search size={17} className="md:w-[15px] md:h-[15px]" />
                  {t('bookSearch')}
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* ── Trust badges ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 max-w-md"
        >
          {trustBadges.map(badge => (
            <div
              key={badge}
              className="flex items-center gap-1.5 text-white/40 text-[11px] sm:text-xs"
            >
              <Check size={12} className="text-sage/80 flex-shrink-0" />
              <span className="text-left leading-snug">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
