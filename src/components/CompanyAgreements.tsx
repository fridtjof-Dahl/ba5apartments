'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, CreditCard, Headphones, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Building2,
    title: 'Premium Locations',
    description: 'All apartments are in Oslo\'s most central and sought-after areas, close to business districts.',
  },
  {
    icon: CreditCard,
    title: 'All-Inclusive Pricing',
    description: 'Transparent pricing with no hidden costs. WiFi, utilities, and cleaning included.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'A personal account manager and 24/7 support for all your housing needs.',
  },
]

export default function CompanyAgreements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="business" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-light via-midnight to-midnight-light" />

      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
              For Business
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 leading-tight">
              Company <span className="italic text-gradient-gold font-medium">Agreements</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              BA5 Apartments offers exclusive, fully serviced and furnished apartments in Oslo for businesses.
              Our flexible company agreements provide hassle-free housing solutions for employees, consultants, and expats.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <benefit.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="btn-primary mt-10 group"
            >
              Get a Tailored Agreement
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  <span className="text-sm text-white/40 tracking-wide">Trusted by companies across Norway</span>
                </div>

                <div className="space-y-8">
                  <div>
                    <p className="text-5xl font-display font-semibold text-gradient-gold">50+</p>
                    <p className="text-white/40 text-sm mt-1">Corporate clients</p>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div>
                    <p className="text-5xl font-display font-semibold text-gradient-gold">7</p>
                    <p className="text-white/40 text-sm mt-1">Prime Oslo neighborhoods</p>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div>
                    <p className="text-5xl font-display font-semibold text-gradient-gold">98%</p>
                    <p className="text-white/40 text-sm mt-1">Guest satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
