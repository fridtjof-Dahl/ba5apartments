'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, Minus } from 'lucide-react'
import { useTranslations } from 'next-intl'

type Level = 'yes' | 'no' | 'partial'

const features: { key: string; ba5: Level; hotel: Level; airbnb: Level }[] = [
  { key: 'fullKitchen',    ba5: 'yes',     hotel: 'no',      airbnb: 'partial' },
  { key: 'selfCheckIn',    ba5: 'yes',     hotel: 'partial', airbnb: 'partial' },
  { key: 'washer',         ba5: 'yes',     hotel: 'no',      airbnb: 'partial' },
  { key: 'proClean',       ba5: 'yes',     hotel: 'yes',     airbnb: 'partial' },
  { key: 'localArea',      ba5: 'yes',     hotel: 'no',      airbnb: 'yes' },
  { key: 'freeCancellation', ba5: 'yes',   hotel: 'partial', airbnb: 'partial' },
  { key: 'privateSpace',   ba5: 'yes',     hotel: 'no',      airbnb: 'yes' },
  { key: 'support247',     ba5: 'yes',     hotel: 'yes',     airbnb: 'no' },
]

function StatusIcon({ level }: { level: Level }) {
  if (level === 'yes') return <Check size={16} className="text-sage" />
  if (level === 'no') return <X size={16} className="text-red-400/70" />
  return <Minus size={16} className="text-amber-400/70" />
}

export default function WhyBA5() {
  const t = useTranslations('WhyBA5')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 px-6 bg-sand">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-sage tracking-wide mb-4">
            {t('label')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-4">
            {t('heading')}
          </h2>
          <p className="text-ink-light max-w-lg mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_80px_80px_80px] md:grid-cols-[1fr_120px_120px_120px] items-center px-5 md:px-8 py-5 bg-dark text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              {t('feature')}
            </span>
            <span className="text-center">
              <span className="text-xs font-bold tracking-wide text-sage">BA5</span>
            </span>
            <span className="text-xs font-medium text-center text-white/50">
              {t('hotel')}
            </span>
            <span className="text-xs font-medium text-center text-white/50">
              Airbnb
            </span>
          </div>

          {/* Rows */}
          {features.map((f, i) => (
            <div
              key={f.key}
              className={`grid grid-cols-[1fr_80px_80px_80px] md:grid-cols-[1fr_120px_120px_120px] items-center px-5 md:px-8 py-4 ${
                i < features.length - 1 ? 'border-b border-gray-50' : ''
              } ${i % 2 === 0 ? 'bg-white' : 'bg-sand/30'}`}
            >
              <span className="text-sm text-ink font-medium">{t(f.key)}</span>
              <span className="flex justify-center"><StatusIcon level={f.ba5} /></span>
              <span className="flex justify-center"><StatusIcon level={f.hotel} /></span>
              <span className="flex justify-center"><StatusIcon level={f.airbnb} /></span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-ink-faint mt-6"
        >
          {t('disclaimer')}
        </motion.p>
      </div>
    </section>
  )
}
