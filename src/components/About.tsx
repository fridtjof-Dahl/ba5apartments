'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
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
            <p className="text-sm font-medium text-ink-light tracking-wide mb-4">
              Om BA5 Apartments
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink leading-[1.15] mb-6">
              Vi redefinerer hva det betyr å føle seg hjemme
            </h2>
            <p className="text-ink-light leading-relaxed mb-4">
              BA5 Apartments er en del av BA5 Invest — et norsk eiendomsselskap
              som kombinerer moderne design med varm gjestfrihet. Våre håndplukkede
              leiligheter i Oslos fineste nabolag gir deg rommet til å slappe av,
              jobbe og leve — med hotellets komfort og hjemmets varme.
            </p>
            <p className="text-ink-light leading-relaxed mb-8">
              Enten du er i Oslo for forretninger, en kort ferie, eller et lengre
              opphold, tilpasser vi oss dine behov. Hver leilighet er fullt møblert
              og gjennomtenkt ned til minste detalj.
            </p>
            <a
              href="#apartments"
              className="inline-flex items-center gap-2.5 bg-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-dark/80 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Utforsk leilighetene
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
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
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
                    alt="Leilighet interiør"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
                    alt="Leilighet stue"
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
