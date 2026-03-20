'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: 'Flexible Periods',
    description: 'We manage rental contracts for both short and long terms, maximizing your property\'s potential.',
  },
  {
    icon: TrendingUp,
    title: 'Maximize Returns',
    description: 'Generate income while waiting for the right moment. We handle everything from listing to guest management.',
  },
  {
    icon: ShieldCheck,
    title: 'Complete Safety',
    description: 'Rigorous tenant screening, comprehensive security measures, and full insurance coverage for your property.',
  },
]

export default function RentOut() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="rent-out" className="relative overflow-hidden">
      <div className="bg-cream-dark text-midnight section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-gold-dark text-sm tracking-[0.25em] uppercase font-medium">
              For Property Owners
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight text-midnight">
              Rent Out <span className="italic text-gold-dark font-medium">Your Place</span>
            </h2>
            <p className="mt-6 text-midnight/50 max-w-2xl mx-auto text-lg leading-relaxed">
              Rent out your home effortlessly and securely. We handle every aspect from tenant screening
              to rent collection, maximizing your returns while safeguarding your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold-dark/10 flex items-center justify-center mx-auto mb-6">
                  <reason.icon size={28} className="text-gold-dark" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-midnight">{reason.title}</h3>
                <p className="text-midnight/50 leading-relaxed text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <a
              href="#contact"
              className="btn-dark group"
            >
              Get Started Today
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
