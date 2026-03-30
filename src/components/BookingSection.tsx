'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { apartments } from '@/data/apartments'

export default function BookingSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', checkIn: '', checkOut: '', guests: '2', apartment: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [loadedAt] = useState(() => Date.now())
  const [hp, setHp] = useState('')
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  const inputCls = 'w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-ink focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none transition-all'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const aptName = apartments.find(a => a.id === form.apartment)?.name || form.apartment
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, apartment: aptName, _hp: hp, _t: loadedAt }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

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
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
              <CheckCircle size={48} className="text-sage" />
              <p className="font-semibold text-ink text-lg">Forespørsel sendt!</p>
              <p className="text-sm text-ink-light max-w-xs">
                Vi har mottatt din bookingforespørsel og tar kontakt på e-post innen kort tid.
              </p>
              <button
                type="button"
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', checkIn: '', checkOut: '', guests: '2', apartment: '' }) }}
                className="mt-4 text-sm text-sage underline underline-offset-2"
              >
                Send en ny forespørsel
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" tabIndex={-1}>
                <label htmlFor="booking-website">Website</label>
                <input id="booking-website" type="text" value={hp} onChange={e => setHp(e.target.value)} autoComplete="off" tabIndex={-1} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-ink-light mb-1.5">Navn</label>
                  <input type="text" required value={form.name} onChange={e => set('name', e.target.value)} className={inputCls} placeholder="Ola Nordmann" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-light mb-1.5">E-post</label>
                  <input type="email" required value={form.email} onChange={e => set('email', e.target.value)} className={inputCls} placeholder="ola@eksempel.no" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-medium text-ink-light mb-1.5">Innsjekk</label>
                  <input type="date" required value={form.checkIn} onChange={e => set('checkIn', e.target.value)} className={inputCls} min={new Date().toISOString().split('T')[0]} />
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-light mb-1.5">Utsjekk</label>
                  <input type="date" required value={form.checkOut} onChange={e => set('checkOut', e.target.value)} className={inputCls} min={form.checkIn || new Date().toISOString().split('T')[0]} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-xs font-medium text-ink-light mb-1.5">Gjester</label>
                  <select value={form.guests} onChange={e => set('guests', e.target.value)} className={inputCls}>
                    {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n} {n === 1 ? 'gjest' : 'gjester'}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-ink-light mb-1.5">Leilighet</label>
                  <select value={form.apartment} onChange={e => set('apartment', e.target.value)} className={inputCls}>
                    <option value="">Alle / usikker</option>
                    {apartments.map(a => <option key={a.id} value={a.id}>{a.name} — {a.location}</option>)}
                  </select>
                </div>
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-500 mb-4">
                  Noe gikk galt. Prøv igjen eller kontakt oss på post@ba5apartments.com
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-sage text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-sage-light transition-colors disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <><Loader2 size={14} className="animate-spin" /> Sender forespørsel...</>
                ) : (
                  'Send bookingforespørsel'
                )}
              </button>

              <p className="text-center text-ink-faint text-xs mt-4">
                Gratis avbestilling opptil 48 timer før innsjekk
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
