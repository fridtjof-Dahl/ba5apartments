'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Users, Maximize, ArrowLeft, Check, Loader2, CheckCircle, ExternalLink, Star } from 'lucide-react'
import type { Apartment } from '@/data/apartments'
import HostawayWidget from '@/components/HostawayWidget'
import ImageGallery from '@/components/ImageGallery'
import NeighborhoodGuide from '@/components/NeighborhoodGuide'
import FloatingBookingBar from '@/components/FloatingBookingBar'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

interface Props {
  apt: Apartment
  others: Apartment[]
}

export default function ApartmentPage({ apt, others }: Props) {
  const t = useTranslations('ApartmentPage')
  const [loadedAt] = useState(() => Date.now())
  const [hp, setHp] = useState('')
  const [form, setForm] = useState({ name: '', email: '', checkIn: '', checkOut: '', guests: '2' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))
  const inputCls = 'w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-sm text-ink focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none transition-all'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, apartment: apt.name, _hp: hp, _t: loadedAt }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const hasExternalBooking = apt.bookingComUrl || apt.airbnbUrl
  const hasGallery = apt.images && apt.images.length > 1

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-wide">
            BA<span className="text-sage">5</span>
          </Link>
          <Link href="/#apartments" className="flex items-center gap-1.5 text-sm text-ink-light hover:text-ink transition-colors">
            <ArrowLeft size={15} />
            {t('allApartments')}
          </Link>
        </div>
      </header>

      {hasGallery ? (
        <div className="relative">
          <ImageGallery images={apt.images} name={apt.name} />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent h-32 pointer-events-none" />
          <div className="absolute bottom-6 left-0 right-0 px-6 z-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-1.5 text-white/80 text-sm mb-2">
                <MapPin size={13} />
                {apt.location}
              </div>
              <h1 className="font-display text-3xl md:text-5xl text-white">{apt.name}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
          <Image src={apt.image} alt={apt.name} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-1.5 text-white/80 text-sm mb-2">
                <MapPin size={13} />
                {apt.location}
              </div>
              <h1 className="font-display text-3xl md:text-5xl text-white">{apt.name}</h1>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-6 pb-8 border-b border-gray-100 mb-8">
              {[
                { icon: Maximize, label: apt.size },
                { icon: Users, label: t('guests', { count: apt.guests }) },
                { icon: MapPin, label: apt.area },
                { icon: Star, label: t('rating') },
              ].map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-2 text-ink-light text-sm">
                  <I size={16} className="text-sage" />
                  {label}
                </div>
              ))}
            </div>

            <h2 className="font-display text-xl text-ink mb-3">{t('aboutHeading')}</h2>
            <p className="text-ink-light leading-relaxed mb-10">{apt.description}</p>

            <h2 className="font-display text-xl text-ink mb-4">{t('amenitiesHeading')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
              {apt.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-ink-light">
                  <Check size={14} className="text-sage flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            <HostawayWidget listingId={apt.hostawayListingId} />

            <NeighborhoodGuide
              neighborhood={apt.neighborhood}
              location={apt.location}
            />
          </div>

          <div className="lg:col-span-1">
            <div id="booking-form" className="sticky top-20 space-y-4">
              {hasExternalBooking && (
                <div className="bg-sand rounded-3xl p-6 md:p-8">
                  <h3 className="font-display text-xl text-ink mb-2">{t('bookDirect')}</h3>
                  <p className="text-sm text-ink-light mb-5">
                    {t('bookDirectDesc')}
                  </p>
                  <div className="space-y-3">
                    {apt.bookingComUrl && (
                      <a
                        href={apt.bookingComUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-white border border-gray-200 px-5 py-3.5 rounded-xl text-sm font-medium text-ink hover:border-[#003580] hover:shadow-sm transition-all group"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#003580]" />
                          {t('bookOnBooking')}
                        </span>
                        <ExternalLink size={14} className="text-ink-faint group-hover:text-[#003580] transition-colors" />
                      </a>
                    )}
                    {apt.airbnbUrl && (
                      <a
                        href={apt.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between bg-white border border-gray-200 px-5 py-3.5 rounded-xl text-sm font-medium text-ink hover:border-[#FF5A5F] hover:shadow-sm transition-all group"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A5F]" />
                          {t('bookOnAirbnb')}
                        </span>
                        <ExternalLink size={14} className="text-ink-faint group-hover:text-[#FF5A5F] transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="bg-sand rounded-3xl p-6 md:p-8">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-8 gap-3 text-center">
                    <CheckCircle size={40} className="text-sage" />
                    <p className="font-semibold text-ink">{t('successTitle')}</p>
                    <p className="text-sm text-ink-light">{t('successText')}</p>
                    <button onClick={() => setStatus('idle')} className="mt-3 text-sm text-sage underline">
                      {t('successReset')}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display text-xl text-ink mb-1">
                      {hasExternalBooking ? t('formTitleExternal') : t('formTitleDirect', { name: apt.name })}
                    </h3>
                    {hasExternalBooking && (
                      <p className="text-xs text-ink-light mb-4">
                        {t('formSubtitle')}
                      </p>
                    )}
                    <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" tabIndex={-1}>
                      <input type="text" value={hp} onChange={e => setHp(e.target.value)} autoComplete="off" tabIndex={-1} />
                    </div>

                    <div className="space-y-3 mb-5">
                      <div>
                        <label className="block text-xs font-medium text-ink-light mb-1.5">{t('labelName')}</label>
                        <input type="text" required value={form.name} onChange={e => set('name', e.target.value)} className={inputCls} placeholder={t('placeholderName')} />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-light mb-1.5">{t('labelEmail')}</label>
                        <input type="email" required value={form.email} onChange={e => set('email', e.target.value)} className={inputCls} placeholder={t('placeholderEmail')} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-ink-light mb-1.5">{t('labelCheckIn')}</label>
                          <input type="date" required value={form.checkIn} onChange={e => set('checkIn', e.target.value)} className={inputCls} min={new Date().toISOString().split('T')[0]} />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-ink-light mb-1.5">{t('labelCheckOut')}</label>
                          <input type="date" required value={form.checkOut} onChange={e => set('checkOut', e.target.value)} className={inputCls} min={form.checkIn || new Date().toISOString().split('T')[0]} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-ink-light mb-1.5">{t('labelGuests')}</label>
                        <select value={form.guests} onChange={e => set('guests', e.target.value)} className={inputCls}>
                          {[1, 2, 3, 4].map(n => <option key={n} value={n}>{t('guest', { count: n })}</option>)}
                        </select>
                      </div>
                    </div>

                    {status === 'error' && (
                      <p className="text-xs text-red-500 mb-3">{t('errorText')}</p>
                    )}

                    <button type="submit" disabled={status === 'loading'}
                      className="btn-premium w-full flex items-center justify-center gap-2 text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-sage/25 hover:shadow-xl hover:shadow-sage/35 transition-shadow disabled:opacity-60">
                      {status === 'loading' ? <><Loader2 size={14} className="animate-spin" />{t('submitting')}</> : t('submit')}
                    </button>
                    <p className="text-center text-ink-faint text-xs mt-3">{t('cancellationNote')}</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="font-display text-2xl text-ink mb-8">{t('otherApartments')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map(o => (
                <Link key={o.id} href={`/apartments/${o.id}`} className="group block">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
                    <Image
                      src={o.image}
                      alt={o.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-1 text-sage text-xs font-medium mb-1">
                    <MapPin size={11} />{o.location}
                  </div>
                  <p className="font-display text-ink">{o.name}</p>
                  <p className="text-xs text-ink-light mt-0.5">{o.size} · {t('guests', { count: o.guests })}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <FloatingBookingBar apt={apt} />
    </div>
  )
}
