'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Sparkles, Key, Wifi, Clock, Building2 } from 'lucide-react'
import { testimonials } from '@/data/apartments'

const amenities = [
  { icon: Shield, title: 'Trygt & forsikret', desc: 'Alle opphold er dekket av forsikring og sikker innsjekking.' },
  { icon: Sparkles, title: 'Profesjonelt rengjort', desc: 'Grundig rengjøring mellom hvert opphold — alltid ferskt.' },
  { icon: Key, title: 'Selvinnsjekking', desc: 'Fleksibel ankomst med smart lås og digital nøkkel.' },
  { icon: Wifi, title: 'Gratis WiFi', desc: 'Høyhastighets internett i alle leiligheter.' },
  { icon: Clock, title: 'Fleksible opphold', desc: 'Kort ferie, jobbreise eller lengre perioder.' },
  { icon: Building2, title: 'Bedriftsavtaler', desc: 'Skreddersydde løsninger for bedrifter i Oslo.' },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const featured = testimonials[0]

  return (
    <section className="py-24 md:py-32 px-6 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15] mb-5">
            Hver detalj er designet for
            <br className="hidden md:block" />
            å løfte opplevelsen din
          </h2>
          <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
            Fra trygg innsjekking og profesjonelt renhold til fleksible opphold
            og gjennomtenkte interiører — alt er tilrettelagt for at du skal
            føle deg hjemme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-dark-card rounded-2xl p-6"
            >
              <a.icon size={20} className="text-sage mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-sm mb-1.5">{a.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-dark-card rounded-2xl p-8 md:p-10"
        >
          <p className="font-display text-xl md:text-2xl italic leading-relaxed mb-6 max-w-2xl">
            &ldquo;{featured.text}&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center text-sage font-semibold text-sm">
              {featured.author[0]}
            </div>
            <div>
              <p className="font-semibold text-sm">{featured.author}</p>
              <p className="text-white/40 text-xs">{featured.source}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
