'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, Maximize } from 'lucide-react'
import { apartments } from '@/data/apartments'

function Card({ apt, i }: { apt: typeof apartments[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.a
      ref={ref}
      href="#booking"
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className="group block"
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${apt.image}')` }}
        />
      </div>

      <div className="flex items-center gap-1.5 text-sage text-xs font-medium tracking-wide mb-1.5">
        <MapPin size={12} />
        {apt.location}
      </div>

      <h3 className="font-display text-lg text-ink mb-1">{apt.name}</h3>

      <div className="flex gap-3 text-ink-light text-xs">
        <span className="flex items-center gap-1"><Maximize size={11} />{apt.size}</span>
        <span className="flex items-center gap-1"><Users size={11} />{apt.guests} gjester</span>
      </div>
    </motion.a>
  )
}

export default function ApartmentShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="apartments" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink">Våre leiligheter</h2>
          <p className="mt-3 text-ink-light max-w-md">
            Håndplukkede hjem i Oslos beste nabolag — klare for ditt neste opphold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {apartments.map((apt, i) => (
            <Card key={apt.id} apt={apt} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
