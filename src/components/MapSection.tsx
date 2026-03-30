'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { apartments } from '@/data/apartments'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function MapSection() {
  const t = useTranslations('MapSection')
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    import('leaflet').then(L => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)

      const map = L.map(mapRef.current!, {
        center: [59.9220, 10.7200],
        zoom: 13,
        scrollWheelZoom: false,
        attributionControl: false,
      })

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19 },
      ).addTo(map)

      L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(map)

      apartments.forEach(apt => {
        const icon = L.divIcon({
          className: '',
          html: `<div style="
            width:36px;height:36px;border-radius:50%;
            background:#0C1B2A;border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
            display:flex;align-items:center;justify-content:center;
            color:white;font-size:11px;font-weight:700;
            cursor:pointer;transition:transform 0.2s;
          ">BA5</div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        })

        const marker = L.marker(apt.coordinates, { icon }).addTo(map)

        marker.on('click', () => {
          setSelected(apt.id)
          map.flyTo(apt.coordinates, 15, { duration: 0.8 })
        })
      })

      mapInstance.current = map

      setTimeout(() => map.invalidateSize(), 200)
    })
  }, [])

  const selectedApt = apartments.find(a => a.id === selected)

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-ink-light tracking-wide mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
            {t('heading')}
          </h2>
          <p className="text-ink-light max-w-lg mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div
            ref={mapRef}
            className="w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-lg"
          />

          {selectedApt && (
            <motion.div
              key={selectedApt.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[360px] bg-white rounded-2xl shadow-xl p-5"
            >
              <div className="flex gap-4">
                <div
                  className="w-24 h-24 rounded-xl bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url('${selectedApt.image}')` }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-ink truncate">
                    {selectedApt.name}
                  </h3>
                  <p className="text-sage text-xs font-medium mb-1">
                    {selectedApt.location} · {selectedApt.size}
                  </p>
                  <p className="text-ink-light text-xs leading-relaxed line-clamp-2 mb-3">
                    {selectedApt.neighborhood.vibe}
                  </p>
                  <div className="flex gap-2">
                    <Link
                      href={`/apartments/${selectedApt.id}`}
                      className="bg-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-dark/80 transition-colors"
                    >
                      {t('viewApartment')}
                    </Link>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-xs text-ink-faint hover:text-ink transition-colors"
                    >
                      {t('close')}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {apartments.map(apt => (
            <button
              key={apt.id}
              onClick={() => {
                setSelected(apt.id)
                if (mapInstance.current) {
                  mapInstance.current.flyTo(apt.coordinates, 15, {
                    duration: 0.8,
                  })
                }
              }}
              className={`text-xs px-4 py-2 rounded-full border transition-all ${
                selected === apt.id
                  ? 'bg-dark text-white border-dark'
                  : 'bg-white text-ink-light border-gray-200 hover:border-dark hover:text-ink'
              }`}
            >
              {apt.location}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
