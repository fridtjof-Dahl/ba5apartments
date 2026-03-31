'use client'

import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { apartments } from '@/data/apartments'

interface GalleryImage {
  key: string
  src: string
  tagKey: string
  aptId: string
  aptName: string
  location: string
  span: 'tall' | 'wide' | 'normal'
}

const SPANS: Array<'tall' | 'wide' | 'normal'> = [
  'wide', 'normal', 'tall', 'normal', 'wide', 'normal',
  'tall', 'normal', 'wide', 'normal', 'tall', 'normal',
]

const TAG_ROTATION = [
  'tagLiving', 'tagBedroom', 'tagKitchen', 'tagLiving', 'tagBedroom',
  'tagLiving', 'tagKitchen', 'tagBedroom', 'tagLiving', 'tagKitchen',
  'tagLiving', 'tagBedroom',
] as const

const tagKeys = ['tagAll', 'tagLiving', 'tagBedroom', 'tagKitchen'] as const

function buildGalleryImages(): GalleryImage[] {
  return apartments.map((apt, i) => {
    const imgs = apt.images.length ? apt.images : [apt.image]
    const src = imgs[i % imgs.length]
    return {
      key: `${apt.id}-${src}`,
      src,
      tagKey: TAG_ROTATION[i % TAG_ROTATION.length],
      aptId: apt.id,
      aptName: apt.name,
      location: apt.location,
      span: SPANS[i % SPANS.length],
    }
  })
}

export default function PhotoGallery() {
  const t = useTranslations('PhotoGallery')
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [activeTagKey, setActiveTagKey] = useState<string>('tagAll')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const imageData = useMemo(() => buildGalleryImages(), [])

  const filtered = activeTagKey === 'tagAll'
    ? imageData
    : imageData.filter(img => img.tagKey === activeTagKey)

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return
      setLightbox((lightbox + dir + filtered.length) % filtered.length)
    },
    [lightbox, filtered.length],
  )

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, navigate])

  return (
    <section id="gallery" className="py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <p className="text-sm font-medium text-ink-light tracking-wide mb-3">
              {t('label')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              {t('heading')}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {tagKeys.map(key => (
              <button
                key={key}
                onClick={() => {
                  setActiveTagKey(key)
                  setLightbox(null)
                }}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  activeTagKey === key
                    ? 'bg-dark text-white border-dark'
                    : 'bg-white text-ink-light border-gray-200 hover:border-dark hover:text-ink'
                }`}
              >
                {t(key)}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => {
              const heightClass =
                img.span === 'tall'
                  ? 'aspect-[3/4]'
                  : img.span === 'wide'
                    ? 'aspect-[16/10]'
                    : 'aspect-[4/3]'

              return (
                <motion.div
                  key={img.key}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setLightbox(i)}
                >
                  <div className={`relative ${heightClass} rounded-2xl overflow-hidden`}>
                    <Image
                      src={img.src}
                      alt={t('imageAlt', { name: img.aptName, location: img.location })}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-ink text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {t(img.tagKey)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-display text-lg">{img.aptName}</p>
                      <p className="text-white/70 text-xs">{img.location}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/#apartments"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-light hover:text-ink transition-colors"
          >
            {t('viewAll')}
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            <button
              onClick={e => { e.stopPropagation(); navigate(-1) }}
              className="absolute left-4 z-10 text-white/50 hover:text-white transition-colors p-3"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={e => { e.stopPropagation(); navigate(1) }}
              className="absolute right-4 z-10 text-white/50 hover:text-white transition-colors p-3"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-6xl"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={t('imageAlt', {
                  name: filtered[lightbox].aptName,
                  location: filtered[lightbox].location,
                })}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
              <Link
                href={`/apartments/${filtered[lightbox].aptId}`}
                onClick={e => e.stopPropagation()}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors"
              >
                {filtered[lightbox].aptName} — {filtered[lightbox].location}
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-1.5">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setLightbox(i) }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    i === lightbox ? 'bg-white scale-150' : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
