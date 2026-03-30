'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  const perks = [
    { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=60', label: t('perk1') },
    { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&q=60', label: t('perk2') },
    { img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100&q=60', label: t('perk3') },
    { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&q=60', label: t('perk4') },
  ]

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

        <motion.a
          href="#apartments"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 inline-flex items-center gap-2.5 bg-white text-ink px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
          {t('cta')}
          <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {perks.map(p => (
            <div
              key={p.label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-3"
            >
              <img
                src={p.img}
                alt=""
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <span className="text-white/80 text-xs font-medium leading-tight">
                {p.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
