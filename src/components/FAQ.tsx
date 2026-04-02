'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useTranslations } from 'next-intl'

function FaqItem({ q, a, isOpen, toggle, id }: { q: string; a: string; isOpen: boolean; toggle: () => void; id: number }) {
  const headingId = `faq-q-${id}`
  const panelId = `faq-a-${id}`

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <h3>
        <button
          onClick={toggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          id={headingId}
          className="w-full flex items-start justify-between py-5 text-left group"
        >
          <span className="font-medium text-ink text-[15px] pr-8 group-hover:text-sage transition-colors">
            {q}
          </span>
          <span className="mt-0.5 text-ink-faint group-hover:text-sage transition-colors flex-shrink-0" aria-hidden="true">
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={headingId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-ink-light text-sm leading-relaxed pb-5 pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const t = useTranslations('FAQ')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = Array.from({ length: 8 }, (_, i) => ({
    q: t(`q${i + 1}`),
    a: t(`a${i + 1}`),
  }))

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-ink-light tracking-wide mb-3">
              {t('label')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
              {t('heading')}
            </h2>
            <p className="text-ink-light leading-relaxed mb-8 max-w-md">
              {t('subtitle')}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-dark/80 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {t('cta')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-8"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                id={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
