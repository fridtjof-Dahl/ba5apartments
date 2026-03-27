'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { neighborhoods } from '@/data/apartments'

export default function Neighborhoods() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="neighborhoods" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Nabolag
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-stone leading-tight">
            Bo i Oslos beste strøk
          </h2>
          <p className="mt-5 text-text-muted max-w-lg mx-auto leading-relaxed">
            Fra elegante Frogner til livlige Majorstuen — vi har leiligheter
            i nabolagene du vil elske.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {neighborhoods.map((n, i) => (
            <motion.div
              key={n.name}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 border border-warm-border bg-warm-white hover:border-brass/30 transition-all duration-300 group"
            >
              <h3 className="font-display text-lg font-medium text-stone mb-2 group-hover:text-brass transition-colors">
                {n.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{n.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
