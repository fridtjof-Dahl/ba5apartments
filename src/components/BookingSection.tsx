'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { apartments } from '@/data/apartments'

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('2')
  const [apt, setApt] = useState('')

  const inputCls = 'w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-ink focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none transition-all'

  return (
    <section id="booking" className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink">Book ditt opphold</h2>
          <p className="mt-3 text-ink-light">
            Velg datoer og leilighet. Vi bekrefter på minutter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-sand rounded-3xl p-8 md:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-ink-light mb-1.5">Innsjekk</label>
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-light mb-1.5">Utsjekk</label>
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} className={inputCls} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-ink-light mb-1.5">Gjester</label>
              <select value={guests} onChange={e => setGuests(e.target.value)} className={inputCls}>
                {[1,2,3,4].map(n => <option key={n} value={n}>{n} {n===1?'gjest':'gjester'}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-ink-light mb-1.5">Leilighet</label>
              <select value={apt} onChange={e => setApt(e.target.value)} className={inputCls}>
                <option value="">Alle</option>
                {apartments.map(a => <option key={a.id} value={a.id}>{a.name} — {a.location}</option>)}
              </select>
            </div>
          </div>

          <button className="w-full bg-sage text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-sage-light transition-colors">
            Sjekk tilgjengelighet
          </button>

          <p className="text-center text-ink-faint text-xs mt-4">
            Gratis avbestilling opptil 48 timer før innsjekk
          </p>
        </motion.div>
      </div>
    </section>
  )
}
