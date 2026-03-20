'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { neighborhoods } from '@/data/apartments'

export default function Neighborhoods() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="neighborhoods" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-light to-midnight" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Explore Oslo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">
            Live in the <span className="italic text-gradient-gold font-medium">Best Areas</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            From the elegant streets of Frogner to the vibrant energy of Majorstuen —
            discover Oslo&apos;s most coveted neighborhoods.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {neighborhoods.map((hood, i) => (
            <motion.div
              key={hood.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass-card rounded-2xl p-6 hover:border-gold/20 transition-all duration-500 group cursor-pointer ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-gold transition-colors duration-300">
                    {hood.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{hood.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
