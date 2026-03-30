'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '4.9', label: 'Gjennomsnittlig gjestekarakter' },
  { value: '500+', label: 'Fornøyde gjester' },
  { value: '7', label: 'Stilfullt innredede leiligheter' },
  { value: '365', label: 'Dager med personlig service' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-medium text-ink-light tracking-wide mb-4">
            Tall som snakker for seg selv
          </p>
          <h3 className="font-display text-xl md:text-2xl text-ink max-w-xl mx-auto leading-relaxed">
            Fra enestående gjestetilfredshet til gjennomtenkte leiligheter og
            service døgnet rundt.
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl text-ink mb-2">
                {s.value}
              </p>
              <p className="text-ink-light text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
