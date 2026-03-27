'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Heart, Clock, Building2 } from 'lucide-react'

const perks = [
  { icon: Shield, title: 'Trygt & forsikret', desc: 'Alle opphold er dekket av forsikring, med sikker innsjekking og et dedikert supportteam.' },
  { icon: Heart, title: 'Personlig vertskap', desc: 'Vi kjenner leilighetene og nabolagene — og deler gjerne våre beste tips med deg.' },
  { icon: Clock, title: 'Fleksibelt', desc: 'Kort ferie, jobb-opphold eller lengre perioder. Vi tilpasser oss dine behov.' },
  { icon: Building2, title: 'Bedriftsavtaler', desc: 'Skreddersydde løsninger for bedrifter som trenger bolig til ansatte i Oslo.' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink">Mer enn et hotell</h2>
          <p className="mt-3 text-ink-light leading-relaxed">
            BA5 Apartments er en del av BA5 Invest — et norsk eiendomsselskap som tilbyr
            premium korttidsleie i Oslo. Vi kombinerer hotellets komfort med hjemmets varme.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-sand"
            >
              <p.icon size={22} className="text-sage mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-ink text-[15px] mb-1.5">{p.title}</h3>
              <p className="text-ink-light text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
