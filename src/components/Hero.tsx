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

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-dark via-dark/95 to-sand overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero.avif')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl"
        >
          {t('headline1')}
          <br />
          <span className="italic">{t('headline2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-white/60 max-w-lg text-[15px] md:text-base leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        {/* ── Booking bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 md:mt-14 w-full max-w-3xl"
        >
          <form onSubmit={handleSearch}>
            <div className="bg-white/[0.07] backdrop-blur-2xl rounded-2xl md:rounded-full p-1.5 md:p-2 border border-white/[0.12] shadow-2xl shadow-black/20">
              <div className="flex flex-col md:flex-row items-stretch md:items-center">

                {/* Check-in */}
                <div className="flex-1 flex items-center gap-3 px-4 md:px-5 py-3 md:py-2.5 group">
                  <CalendarDays size={16} className="text-white/30 group-focus-within:text-sage transition-colors flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-0.5">
                      {t('bookCheckIn')}
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={e => setCheckIn(e.target.value)}
                      min={today}
                      required
                      className="w-full bg-transparent text-white text-sm outline-none cursor-pointer [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-white/10 flex-shrink-0" />
                <hr className="md:hidden border-white/[0.06] mx-4" />

                {/* Check-out */}
                <div className="flex-1 flex items-center gap-3 px-4 md:px-5 py-3 md:py-2.5 group">
                  <CalendarDays size={16} className="text-white/30 group-focus-within:text-sage transition-colors flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-0.5">
                      {t('bookCheckOut')}
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={e => setCheckOut(e.target.value)}
                      min={checkIn || today}
                      required
                      className="w-full bg-transparent text-white text-sm outline-none cursor-pointer [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="hidden md:block w-px h-10 bg-white/10 flex-shrink-0" />
                <hr className="md:hidden border-white/[0.06] mx-4" />

                {/* Guests */}
                <div className="flex-1 flex items-center gap-3 px-4 md:px-5 py-3 md:py-2.5 group">
                  <Users size={16} className="text-white/30 group-focus-within:text-sage transition-colors flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-white/35 uppercase tracking-widest mb-0.5">
                      {t('bookGuests')}
                    </label>
                    <select
                      value={guests}
                      onChange={e => setGuests(e.target.value)}
                      className="w-full bg-transparent text-white text-sm outline-none appearance-none cursor-pointer [color-scheme:dark]"
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
                  className="bg-sage hover:bg-sage-light active:scale-[0.98] text-white px-6 md:px-8 py-3.5 md:py-3 rounded-xl md:rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 m-1 flex-shrink-0 shadow-lg shadow-sage/20"
                >
                  <Search size={15} />
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
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {trustBadges.map(badge => (
            <div key={badge} className="flex items-center gap-1.5 text-white/35 text-xs">
              <Check size={12} className="text-sage/70" />
              {badge}
            </div>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
