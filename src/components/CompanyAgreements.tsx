'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, CreditCard, Headphones, ArrowRight } from 'lucide-react'

const benefits = [
  { icon: Building2, title: 'Sentrale lokasjoner', text: 'Alle leiligheter ligger i Oslos mest attraktive strøk, nær forretningsområder.' },
  { icon: CreditCard, title: 'Alt inkludert', text: 'Transparent prising uten skjulte kostnader. WiFi, strøm og rengjøring inkludert.' },
  { icon: Headphones, title: 'Dedikert kontakt', text: 'Personlig kontaktperson og support for alle deres boligbehov.' },
]

export default function CompanyAgreements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="business" className="section-padding bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
              For bedrifter
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-stone leading-tight mb-5">
              Bedriftsavtaler
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              BA5 Apartments tilbyr eksklusive, fullt møblerte leiligheter for bedrifter.
              Fleksible avtaler for ansatte, konsulenter og gjester — uten stresset med
              tradisjonell utleie.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-stone/5 flex items-center justify-center shrink-0">
                    <b.icon size={18} className="text-brass" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone text-sm mb-0.5">{b.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary group">
              Ta kontakt
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-warm-border p-8 lg:p-10"
          >
            <p className="text-text-light text-xs tracking-[0.15em] uppercase font-medium mb-6">
              Tall som teller
            </p>

            <div className="space-y-8">
              <div>
                <p className="font-display text-4xl font-medium text-stone">50+</p>
                <p className="text-text-muted text-sm mt-1">Bedriftskunder</p>
              </div>
              <div className="h-px bg-warm-border" />
              <div>
                <p className="font-display text-4xl font-medium text-stone">7</p>
                <p className="text-text-muted text-sm mt-1">Nabolag i Oslo sentrum</p>
              </div>
              <div className="h-px bg-warm-border" />
              <div>
                <p className="font-display text-4xl font-medium text-stone">98%</p>
                <p className="text-text-muted text-sm mt-1">Fornøyde gjester</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
