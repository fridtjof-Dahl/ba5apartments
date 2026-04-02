'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = value / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setDisplay(value)
        clearInterval(timer)
      } else {
        setDisplay(Math.floor(start * 10) / 10)
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, value])

  const formatted = value % 1 !== 0 ? display.toFixed(1) : Math.floor(display).toString()

  return (
    <span>
      {inView ? formatted : '0'}
      {suffix}
    </span>
  )
}

function parseStatValue(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^([\d.]+)(.*)$/)
  if (!match) return { num: 0, suffix: raw }
  return { num: parseFloat(match[1]), suffix: match[2] }
}

export default function Stats() {
  const t = useTranslations('Stats')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ]

  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sand/50 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
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
          <h3 className="font-display text-xl md:text-2xl text-ink max-w-xl mx-auto leading-relaxed">
            {t('heading')}
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => {
            const { num, suffix } = parseStatValue(s.value)
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <p className="font-display text-5xl md:text-6xl text-ink mb-2">
                  <AnimatedNumber value={num} suffix={suffix} inView={inView} />
                </p>
                <div className="w-8 h-0.5 bg-sage/40 rounded-full mx-auto mb-3" />
                <p className="text-ink-light text-sm">{s.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
