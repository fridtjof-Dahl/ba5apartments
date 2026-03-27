'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import { apartments } from '@/data/apartments'

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [apartment, setApartment] = useState('')

  return (
    <section id="booking" className="section-padding bg-stone">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-brass-light text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Reserver ditt opphold
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight">
            Book din leilighet
          </h2>
          <p className="mt-4 text-white/50 max-w-md mx-auto leading-relaxed">
            Velg datoer, leilighet, og bekreft reservasjonen. Enkelt og trygt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white/5 border border-white/10 p-8 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-sm text-white/40 mb-2">Innsjekk</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brass/60" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 text-white focus:border-brass/50 focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/40 mb-2">Utsjekk</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brass/60" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 text-white focus:border-brass/50 focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/40 mb-2">Gjester</label>
              <div className="relative">
                <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brass/60" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 text-white focus:border-brass/50 focus:outline-none transition-colors text-sm appearance-none"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n} className="bg-stone text-white">
                      {n} {n === 1 ? 'gjest' : 'gjester'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/40 mb-2">Leilighet</label>
              <select
                value={apartment}
                onChange={(e) => setApartment(e.target.value)}
                className="w-full px-4 py-3.5 bg-white/5 border border-white/10 text-white focus:border-brass/50 focus:outline-none transition-colors text-sm appearance-none"
              >
                <option value="" className="bg-stone">Alle leiligheter</option>
                {apartments.map((apt) => (
                  <option key={apt.id} value={apt.id} className="bg-stone">
                    {apt.name} — {apt.location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="btn-brass w-full group">
            Sjekk tilgjengelighet
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="text-center text-white/25 text-xs mt-5">
            Drevet av Hostaway · Gratis avbestilling opptil 48 timer før innsjekk
          </p>
        </motion.div>
      </div>
    </section>
  )
}
