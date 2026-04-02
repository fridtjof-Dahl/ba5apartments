'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Sparkles, Key, Wifi, Clock, Building2 } from 'lucide-react'
import { testimonials } from '@/data/apartments'
import { useTranslations } from 'next-intl'

const icons = [Shield, Sparkles, Key, Wifi, Clock, Building2]

export default function Features() {
  const t = useTranslations('Features')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const featured = testimonials[0]

  const amenities = icons.map((icon, i) => ({
    icon,
    title: t(`amenity${i + 1}Title`),
    desc: t(`amenity${i + 1}Desc`),
  }))

  return (
    <section className="relative py-24 md:py-32 px-6 bg-dark text-white overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-sage/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sage text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            {t('heading1')}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-5">
            {t('heading2')}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="feature-card group bg-dark-card rounded-2xl p-6 border border-white/[0.06] cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-sage/10 flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors">
                <a.icon size={20} className="text-sage" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-sm mb-1.5">{a.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-dark-card rounded-2xl p-8 md:p-10 border border-white/[0.06]"
        >
          <p className="font-display text-xl md:text-2xl italic leading-relaxed mb-6 max-w-2xl">
            &ldquo;{featured.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage font-semibold text-sm">
              {featured.author[0]}
            </div>
            <div>
              <p className="font-semibold text-sm">{featured.author}</p>
              <p className="text-white/40 text-xs">{featured.source}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
