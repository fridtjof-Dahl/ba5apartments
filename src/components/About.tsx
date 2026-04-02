'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-sage tracking-wide mb-4">
              {t('label')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] mb-6">
              {t('heading')}
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              {t('text1')}
            </p>
            <p className="text-ink-light leading-relaxed mb-8">
              {t('text2')}
            </p>
            <a
              href="#apartments"
              className="btn-premium inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-sage/25 hover:shadow-xl hover:shadow-sage/35 transition-shadow"
            >
              {t('cta')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/images/apartments/frogner-studio-1.jpg"
                    alt={t('imgAlt1')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src="/images/apartments/bygdoy-apartment-2.jpg"
                    alt={t('imgAlt2')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
