'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, Maximize, ArrowRight } from 'lucide-react'
import { apartments } from '@/data/apartments'

function ApartmentCard({ apartment, index }: { apartment: typeof apartments[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-15%' })
  const isEven = index % 2 === 0

  return (
    <motion.div ref={ref} className="py-16 md:py-24">
      <div className={`max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
        isEven ? '' : 'lg:[direction:rtl]'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden group lg:[direction:ltr]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url('${apartment.image}')` }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />

          <div className="absolute bottom-5 left-5 flex gap-3 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <Maximize size={13} />
              {apartment.size}
            </span>
            <span className="flex items-center gap-1.5">
              <Users size={13} />
              {apartment.guests}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:[direction:ltr]"
        >
          <div className="flex items-center gap-2 text-brass text-sm tracking-[0.15em] uppercase font-medium mb-3">
            <MapPin size={14} />
            {apartment.location}
          </div>

          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-stone leading-tight mb-5">
            {apartment.name}
          </h3>

          <p className="text-text-muted leading-relaxed mb-7">
            {apartment.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {apartment.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="px-3 py-1.5 border border-warm-border text-text-muted text-xs tracking-wide"
              >
                {feature}
              </span>
            ))}
          </div>

          <a href="#booking" className="btn-primary group">
            Book denne leiligheten
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ApartmentShowcase() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="apartments" className="bg-warm-white">
      <div className="section-padding pb-0">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Våre leiligheter
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-stone leading-tight">
            Håndplukkede hjem i Oslo
          </h2>
          <p className="mt-5 text-text-muted max-w-lg mx-auto leading-relaxed">
            Hver leilighet er nøye utvalgt og innredet for å gi deg en
            komfortabel og hjemmekoselig opplevelse.
          </p>
        </motion.div>
      </div>

      <div className="divide-y divide-warm-border">
        {apartments.map((apartment, index) => (
          <ApartmentCard key={apartment.id} apartment={apartment} index={index} />
        ))}
      </div>
    </section>
  )
}
