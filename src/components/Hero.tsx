'use client'

import { motion } from 'framer-motion'
import { Search, Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ScrollIndicator from './ScrollIndicator'

export default function Hero() {
  const t = useTranslations('Hero')

  function handleSearch() {
    document.getElementById('apartments')?.scrollIntoView({ behavior: 'smooth' })
  }

  const trustBadges = [t('trust1'), t('trust2'), t('trust3')]

  return (
    <section className="relative min-h-[100dvh] min-h-screen bg-gradient-to-b from-dark via-dark/95 to-sand overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero2.avif')] bg-cover bg-center opacity-30 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[100dvh] min-h-screen px-4 sm:px-6 pt-[calc(3.5rem+env(safe-area-inset-top)+1.25rem)] pb-[max(2rem,env(safe-area-inset-bottom))] md:pt-[calc(4.5rem+env(safe-area-inset-top)+1rem)] md:pb-12 text-center select-none cursor-default">
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
          className="mt-4 sm:mt-6 text-white/80 max-w-lg text-sm sm:text-[15px] md:text-base leading-relaxed px-1"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-6 sm:mt-10 md:mt-14"
        >
          <div className="bg-white/[0.08] backdrop-blur-2xl rounded-full p-2 border border-white/[0.14] shadow-2xl shadow-black/25">
            <button
              type="button"
              onClick={handleSearch}
              className="btn-premium text-white px-8 sm:px-10 py-3.5 rounded-full text-[15px] sm:text-sm font-semibold transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-sage/30 hover:shadow-xl hover:shadow-sage/40 active:scale-[0.98]"
            >
              <Search size={17} className="sm:w-[15px] sm:h-[15px]" />
              {t('bookSearch')}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 max-w-md"
        >
          {trustBadges.map(badge => (
            <div
              key={badge}
              className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-xs"
            >
              <Check size={12} className="text-sage flex-shrink-0" aria-hidden="true" />
              <span className="text-left leading-snug">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
