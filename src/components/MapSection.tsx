'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { apartments } from '@/data/apartments'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

interface LocationGroup {
  key: string
  label: string
  coordinates: [number, number]
  aptIds: string[]
}

function buildLocationGroups(): LocationGroup[] {
  const groups = new Map<string, { coords: [number, number]; ids: string[] }>()

  for (const apt of apartments) {
    const coordKey = `${apt.coordinates[0]},${apt.coordinates[1]}`
    if (!groups.has(coordKey)) {
      groups.set(coordKey, { coords: apt.coordinates, ids: [] })
    }
    groups.get(coordKey)!.ids.push(apt.id)
  }

  const labelMap: Record<string, string> = {
    '59.9157,10.7166': 'Frognerveien',
    '59.9005,10.6904': 'Bygdøy',
    '59.9323,10.7432': 'Lovisenberggata',
  }

  return [...groups.entries()].map(([key, { coords, ids }]) => ({
    key,
    label: labelMap[key] || coords.join(', '),
    coordinates: coords,
    aptIds: ids,
  }))
}

export default function MapSection() {
  const t = useTranslations('MapSection')
  const sectionRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [selectedGroupKey, setSelectedGroupKey] = useState<string | null>(null)
  const [aptIndex, setAptIndex] = useState(0)

  const locationGroups = useMemo(() => buildLocationGroups(), [])

  const selectedGroup = locationGroups.find(g => g.key === selectedGroupKey) ?? null
  const selectedApt = selectedGroup
    ? apartments.find(a => a.id === selectedGroup.aptIds[aptIndex])
    : null

  function selectGroup(group: LocationGroup) {
    setSelectedGroupKey(group.key)
    setAptIndex(0)
    if (mapInstance.current) {
      mapInstance.current.flyTo(group.coordinates, 15, { duration: 0.8 })
    }
  }

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    import('leaflet').then(L => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)

      const map = L.map(mapRef.current!, {
        center: [59.9150, 10.7150],
        zoom: 13,
        scrollWheelZoom: false,
        attributionControl: false,
      })

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19 },
      ).addTo(map)

      L.control.attribution({ position: 'bottomleft', prefix: false }).addTo(map)

      const groups = buildLocationGroups()
      groups.forEach(group => {
        const count = group.aptIds.length
        const size = count > 1 ? 44 : 36
        const icon = L.divIcon({
          className: '',
          html: `<div style="
            width:${size}px;height:${size}px;border-radius:50%;
            background:#0C1B2A;border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
            display:flex;align-items:center;justify-content:center;
            color:white;font-size:${count > 1 ? '12px' : '11px'};font-weight:700;
            cursor:pointer;transition:transform 0.2s;
          ">${count > 1 ? count : 'BA5'}</div>`,
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        })

        const marker = L.marker(group.coordinates, { icon }).addTo(map)
        marker.on('click', () => selectGroup(group))
      })

      mapInstance.current = map
      setTimeout(() => map.invalidateSize(), 200)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

          <AnimatePresence mode="wait">
            {selectedApt && selectedGroup && (
              <motion.div
                key={selectedApt.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
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
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/apartments/${selectedApt.id}`}
                        className="bg-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full hover:bg-dark/80 transition-colors"
                      >
                        {t('viewApartment')}
                      </Link>
                      <button
                        onClick={() => setSelectedGroupKey(null)}
                        className="text-xs text-ink-faint hover:text-ink transition-colors"
                      >
                        {t('close')}
                      </button>
                    </div>
                  </div>
                </div>

                {selectedGroup.aptIds.length > 1 && (
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <button
                      onClick={() =>
                        setAptIndex((aptIndex - 1 + selectedGroup.aptIds.length) % selectedGroup.aptIds.length)
                      }
                      className="p-1 text-ink-light hover:text-ink transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-xs text-ink-light">
                      {aptIndex + 1} / {selectedGroup.aptIds.length}
                    </span>
                    <button
                      onClick={() =>
                        setAptIndex((aptIndex + 1) % selectedGroup.aptIds.length)
                      }
                      className="p-1 text-ink-light hover:text-ink transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {locationGroups.map(group => {
            const isActive = selectedGroupKey === group.key
            return (
              <button
                key={group.key}
                onClick={() => selectGroup(group)}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  isActive
                    ? 'bg-dark text-white border-dark'
                    : 'bg-white text-ink-light border-gray-200 hover:border-dark hover:text-ink'
                }`}
              >
                {group.label} · {group.aptIds.length}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
