'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { apartments } from '@/data/apartments'
import Link from 'next/link'

function Card({ apt, i }: { apt: (typeof apartments)[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07 }}
    >
      <Link
        href={`/apartments/${apt.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${apt.image}')` }}
          />
        </div>

        <div className="p-6">
          <h3 className="font-display text-xl text-ink mb-1">{apt.name}</h3>
          <p className="text-sage text-sm font-medium mb-3">
            {apt.location} · {apt.size}
          </p>
          <p className="text-ink-light text-sm leading-relaxed mb-4 line-clamp-2">
            {apt.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-ink text-sm font-medium group-hover:gap-2.5 transition-all">
            Se tilgjengelighet
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ApartmentShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="apartments" className="py-24 md:py-32 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink mb-4">
            Bo på din måte
          </h2>
          <p className="text-ink-light max-w-lg mx-auto">
            Enten du søker ro, sentral beliggenhet eller litt ekstra luksus —
            BA5 har den perfekte leiligheten for ditt opphold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartments.slice(0, 6).map((apt, i) => (
            <Card key={apt.id} apt={apt} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#apartments"
            className="inline-flex items-center gap-2.5 bg-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-dark/80 transition-all"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            Se alle leiligheter
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
