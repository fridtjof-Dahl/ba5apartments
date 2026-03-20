'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar, Users, Home, ArrowRight } from 'lucide-react'
import { apartments } from '@/data/apartments'

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [selectedApartment, setSelectedApartment] = useState('')

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-light via-midnight to-midnight-light" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Reserve Your Stay
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">
            Book <span className="italic text-gradient-gold font-medium">Your Apartment</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Select your dates, choose your apartment, and confirm your reservation.
            It&apos;s that simple.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm text-white/40 mb-2 tracking-wide">Check-in</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/40 mb-2 tracking-wide">Check-out</label>
              <div className="relative">
                <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/40 mb-2 tracking-wide">Guests</label>
              <div className="relative">
                <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n} className="bg-midnight text-white">
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white/40 mb-2 tracking-wide">Apartment</label>
              <div className="relative">
                <Home size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/60" />
                <select
                  value={selectedApartment}
                  onChange={(e) => setSelectedApartment(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors appearance-none"
                >
                  <option value="" className="bg-midnight text-white">Any apartment</option>
                  {apartments.map((apt) => (
                    <option key={apt.id} value={apt.id} className="bg-midnight text-white">
                      {apt.name} — {apt.location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              className="btn-primary w-full md:w-auto group"
            >
              Check Availability
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <p className="text-white/30 text-xs">Powered by Hostaway • Instant confirmation</p>
          </div>

          {/* Hostaway Widget Container — replace ACCOUNT_ID with actual Hostaway account ID */}
          <div id="hostaway-booking-widget" className="mt-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 text-white/30 text-sm"
        >
          Free cancellation up to 48 hours before check-in • No hidden fees
        </motion.p>
      </div>
    </section>
  )
}
