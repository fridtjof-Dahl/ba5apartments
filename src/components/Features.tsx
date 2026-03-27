'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Home, Coffee, Wifi, Clock, Heart } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Trygt & sikkert',
    description: 'Sikker adgang, forsikring og et dedikert team som sørger for din trygghet.',
  },
  {
    icon: Home,
    title: 'Fullt møblert',
    description: 'Alt du trenger for å føle deg hjemme — fra sengetøy til fullt utstyrt kjøkken.',
  },
  {
    icon: Coffee,
    title: 'Hjemmekoselig',
    description: 'Gjennomtenkte detaljer som gjør at du virkelig kan slappe av og lande.',
  },
  {
    icon: Wifi,
    title: 'Alt inkludert',
    description: 'WiFi, strøm, rengjøring og alt det praktiske er tatt hånd om for deg.',
  },
  {
    icon: Clock,
    title: 'Fleksible opphold',
    description: 'Kort ferie eller lengre opphold — vi tilpasser oss dine behov.',
  },
  {
    icon: Heart,
    title: 'Personlig service',
    description: 'Lokale tips, rask respons og en vert som genuint bryr seg om oppholdet ditt.',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="welcome" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Hvorfor BA5
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-stone leading-tight">
            Mer enn et sted å bo
          </h2>
          <p className="mt-5 text-text-muted max-w-lg mx-auto leading-relaxed">
            Vi skaper opplevelser der du føler deg like hjemme som i din egen stue —
            med tryggheten og komforten du fortjener.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-11 h-11 mx-auto rounded-full bg-stone/5 flex items-center justify-center mb-4">
                <feature.icon size={20} className="text-brass" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-medium text-stone mb-2">{feature.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
