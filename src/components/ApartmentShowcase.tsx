'use client'

import { useRef, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Award, Home, DoorOpen, MapPin } from 'lucide-react'
import { apartments } from '@/data/apartments'
import type { ApartmentType } from '@/data/apartments'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <span className={`absolute top-3 left-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md ${className}`}>
      {children}
    </span>
  )
}

function Card({ apt, i, viewLabel, t }: { apt: (typeof apartments)[0]; i: number; viewLabel: string; t: (key: string) => string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: i * 0.05 }}
      layout
    >
      <Link
        href={`/apartments/${apt.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-sage/8 transition-all duration-300 hover:-translate-y-1"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${apt.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {apt.type === 'entire' ? (
            <Badge className="bg-sage/90 text-white">
              <span className="flex items-center gap-1"><Home size={10} />{t('badgeEntire')}</span>
            </Badge>
          ) : (
            <Badge className="bg-dark/70 text-white">
              <span className="flex items-center gap-1"><DoorOpen size={10} />{t('badgeRoom')}</span>
            </Badge>
          )}
          {apt.superhost && (
            <span className="absolute top-3 right-3 z-10 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sage/90 text-white backdrop-blur-md flex items-center gap-1 shadow-md shadow-sage/20">
              <Award size={10} />Superhost
            </span>
          )}
          {apt.reviews && apt.reviews > 10 && (
            <span className="absolute bottom-3 left-3 z-10 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/95 text-ink backdrop-blur-md flex items-center gap-1 shadow-sm">
              <Star size={10} className="text-amber-500 fill-amber-500" />
              {apt.reviews} {t('badgeReviews')}
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display text-lg text-ink">{apt.name}</h3>
          </div>
          <p className="text-sage text-xs font-medium mb-3 flex items-center gap-1.5">
            <MapPin size={11} className="flex-shrink-0" />
            {apt.location} · {apt.size} · {apt.guests} {t('badgeGuests')}
          </p>
          <p className="text-ink-light text-sm leading-relaxed mb-4 line-clamp-2">
            {apt.description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sage text-sm font-medium group-hover:gap-2.5 transition-all">
            {viewLabel}
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ApartmentShowcase() {
  const t = useTranslations('ApartmentShowcase')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [typeFilter, setTypeFilter] = useState<'all' | ApartmentType>('all')
  const [areaFilter, setAreaFilter] = useState<string>('all')

  const areas = useMemo(() => {
    const unique = [...new Set(apartments.map(a => a.area))]
    return unique.sort()
  }, [])

  const filtered = useMemo(() => {
    return apartments.filter(a => {
      if (typeFilter !== 'all' && a.type !== typeFilter) return false
      if (areaFilter !== 'all' && a.area !== areaFilter) return false
      return true
    })
  }, [typeFilter, areaFilter])

  const typeFilters: { key: 'all' | ApartmentType; label: string }[] = [
    { key: 'all', label: t('filterAll') },
    { key: 'entire', label: t('filterEntire') },
    { key: 'room', label: t('filterRoom') },
  ]

  return (
    <section id="apartments" className="py-20 md:py-32 px-4 sm:px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink mb-4">
            {t('heading')}
          </h2>
          <p className="text-ink-light max-w-lg mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10 w-full"
        >
          <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-white rounded-full p-1 shadow-sm border border-gray-100 self-center sm:self-auto">
            {typeFilters.map(f => (
              <button
                key={f.key}
                type="button"
                onClick={() => setTypeFilter(f.key)}
                className={`text-xs font-medium px-4 py-2.5 sm:py-2 min-h-[44px] sm:min-h-0 rounded-full transition-all ${
                  typeFilter === f.key
                    ? 'bg-dark text-white shadow-sm'
                    : 'text-ink-light hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 bg-white rounded-full p-1 shadow-sm border border-gray-100 w-full sm:w-auto overflow-x-auto scrollbar-hide justify-start sm:justify-center flex-nowrap">
            <button
              type="button"
              onClick={() => setAreaFilter('all')}
              className={`text-xs font-medium px-4 py-2.5 sm:py-2 shrink-0 rounded-full transition-all ${
                areaFilter === 'all'
                  ? 'bg-dark text-white shadow-sm'
                  : 'text-ink-light hover:text-ink'
              }`}
            >
              {t('filterAllAreas')}
            </button>
            {areas.map(area => (
              <button
                key={area}
                type="button"
                onClick={() => setAreaFilter(area)}
                className={`text-xs font-medium px-4 py-2.5 sm:py-2 shrink-0 rounded-full transition-all whitespace-nowrap ${
                  areaFilter === area
                    ? 'bg-dark text-white shadow-sm'
                    : 'text-ink-light hover:text-ink'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="text-center text-xs text-ink-faint mb-6">
          {t('showing', { count: filtered.length })}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((apt, i) => (
              <Card key={apt.id} apt={apt} i={i} viewLabel={t('viewAvailability')} t={t} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-light py-12">{t('noResults')}</p>
        )}
      </div>
    </section>
  )
}
