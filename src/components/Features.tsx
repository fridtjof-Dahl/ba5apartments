'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Sofa, CalendarDays, Wifi, Shield, Compass } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Strategically situated in central Oslo with easy access to key attractions, business districts, and public transportation.',
  },
  {
    icon: Sofa,
    title: 'Fully Furnished',
    description: 'Tastefully furnished with all essentials — from cozy bedrooms to well-appointed kitchens, designed for comfort.',
  },
  {
    icon: CalendarDays,
    title: 'Flexible Stays',
    description: 'Short vacation or extended business trip — choose the duration that suits you best with our flexible options.',
  },
  {
    icon: Wifi,
    title: 'Modern Amenities',
    description: 'High-speed WiFi, flat-screen TVs, fully equipped kitchens, and everything you need for a seamless experience.',
  },
  {
    icon: Shield,
    title: 'Security & Privacy',
    description: 'Secure building access and a dedicated management team ensuring your safety and peace of mind.',
  },
  {
    icon: Compass,
    title: 'Local Expertise',
    description: 'Personalized recommendations from our staff — discover hidden gems, eateries, and cultural attractions.',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="section-padding bg-grain relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">
            Living, <span className="italic text-gradient-gold font-medium">Redefined</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            We go beyond accommodation. Every detail is curated to make your Oslo experience exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-gold/20 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                <feature.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
