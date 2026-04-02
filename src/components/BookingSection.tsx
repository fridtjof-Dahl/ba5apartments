'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle, Loader2 } from 'lucide-react'
import { apartments } from '@/data/apartments'
import { useTranslations } from 'next-intl'

export default function BookingSection() {
  const t = useTranslations('BookingSection')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    apartment: '',
  })
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [loadedAt] = useState(() => Date.now())
  const [hp, setHp] = useState('')
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  useEffect(() => {
    function handleHeroSearch(e: Event) {
      const { checkIn, checkOut, guests } = (e as CustomEvent).detail
      setForm(prev => ({
        ...prev,
        ...(checkIn && { checkIn }),
        ...(checkOut && { checkOut }),
        ...(guests && { guests }),
      }))
    }
    window.addEventListener('hero-search', handleHeroSearch)
    return () => window.removeEventListener('hero-search', handleHeroSearch)
  }, [])

  const inputCls =
    'w-full px-4 py-3 rounded-xl bg-dark-card border border-white/10 text-sm text-white placeholder-white/30 focus:border-sage focus:ring-1 focus:ring-sage/30 focus:outline-none transition-all'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const aptName =
        apartments.find(a => a.id === form.apartment)?.name || form.apartment
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

  const perks = [t('perk1'), t('perk2'), t('perk3'), t('perk4')]

  return (
    <section id="booking" className="py-24 md:py-32 px-6 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              {t('heading1')}
              <br />
              <span className="italic">{t('heading2')}</span>
            </h2>
            <p className="text-white/50 leading-relaxed max-w-md mb-10">
              {t('subtitle')}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {perks.map(label => (
                <div key={label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                  <span className="text-white/60 text-sm">{label}</span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium text-white/40 tracking-wide mb-3">
                {t('bookVia')}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.booking.com/hotel/no/newly-renovated-studio-apartment-at-frogner.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm text-white hover:bg-white hover:text-ink transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-[#003580]" />
                  Booking.com
                </a>
                <a
                  href="https://www.airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm text-white hover:bg-white hover:text-ink transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF5A5F]" />
                  Airbnb
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-dark-card rounded-3xl p-8 md:p-10"
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 gap-3 text-center">
                <CheckCircle size={48} className="text-sage" />
                <p className="font-semibold text-lg">{t('successTitle')}</p>
                <p className="text-sm text-white/50 max-w-xs">
                  {t('successText')}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', email: '', checkIn: '', checkOut: '', guests: '2', apartment: '' })
                  }}
                  className="mt-4 text-sm text-sage underline underline-offset-2"
                >
                  {t('successReset')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  aria-hidden="true"
                  className="absolute opacity-0 h-0 overflow-hidden pointer-events-none"
                  tabIndex={-1}
                >
                  <label htmlFor="booking-website">Website</label>
                  <input id="booking-website" type="text" value={hp} onChange={e => setHp(e.target.value)} autoComplete="off" tabIndex={-1} />
                </div>

                <h3 className="font-display text-xl mb-6">
                  {t('formTitle')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">{t('labelName')}</label>
                    <input type="text" required value={form.name} onChange={e => set('name', e.target.value)} className={inputCls} placeholder={t('placeholderName')} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">{t('labelEmail')}</label>
                    <input type="email" required value={form.email} onChange={e => set('email', e.target.value)} className={inputCls} placeholder={t('placeholderEmail')} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">{t('labelCheckIn')}</label>
                    <input type="date" required value={form.checkIn} onChange={e => set('checkIn', e.target.value)} className={inputCls} min={new Date().toISOString().split('T')[0]} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">{t('labelCheckOut')}</label>
                    <input type="date" required value={form.checkOut} onChange={e => set('checkOut', e.target.value)} className={inputCls} min={form.checkIn || new Date().toISOString().split('T')[0]} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">{t('labelGuests')}</label>
                    <select value={form.guests} onChange={e => set('guests', e.target.value)} className={inputCls}>
                      {[1, 2, 3, 4].map(n => (
                        <option key={n} value={n}>{t('guest', { count: n })}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-1.5">{t('labelApartment')}</label>
                    <select value={form.apartment} onChange={e => set('apartment', e.target.value)} className={inputCls}>
                      <option value="">{t('allApartments')}</option>
                      {apartments.map(a => (
                        <option key={a.id} value={a.id}>{a.name} — {a.location}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400 mb-4">{t('errorText')}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-premium w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-sage/25 hover:shadow-xl hover:shadow-sage/35 transition-shadow disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <><Loader2 size={14} className="animate-spin" /> {t('submitting')}</>
                  ) : (
                    t('submit')
                  )}
                </button>

                <p className="text-center text-white/30 text-xs mt-4">
                  {t('cancellationNote')}
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
