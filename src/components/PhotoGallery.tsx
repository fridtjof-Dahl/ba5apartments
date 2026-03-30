'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface GalleryImage {
  src: string
  alt: string
  tag: string
  aptId: string
  aptName: string
  location: string
  span: 'tall' | 'wide' | 'normal'
}

const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80',
    alt: 'Lys og luftig stue med klassisk interiør',
    tag: 'Stue',
    aptId: 'oslo-vest-hostel',
    aptName: 'Oslo Vest Hostel',
    location: 'Solli Plass',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Moderne fasade med grønne omgivelser',
    tag: 'Eksteriør',
    aptId: 'bygdoy-two-room',
    aptName: 'Two Room Apartment',
    location: 'Bygdøy',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1630699144867-37acec97df5a?w=800&q=80',
    alt: 'Stilrent soverom med dobbeltseng',
    tag: 'Soverom',
    aptId: 'solli-studio',
    aptName: 'Studio Apartment',
    location: 'Solli',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    alt: 'Moderne åpen stue med sofa',
    tag: 'Stue',
    aptId: 'majorstuen-stylish',
    aptName: 'Stylish Apartment',
    location: 'Majorstuen',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    alt: 'Minimalistisk stue med naturlig lys',
    tag: 'Stue',
    aptId: 'bygdoy-two-room',
    aptName: 'Two Room Apartment',
    location: 'Bygdøy',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    alt: 'Luksuriøst bad med moderne detaljer',
    tag: 'Bad',
    aptId: 'frogner-studio',
    aptName: 'Studio Apartment',
    location: 'Frogner',
    span: 'wide',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    alt: 'Koselig stue med terrasse-tilgang',
    tag: 'Stue',
    aptId: 'bislett-two-room',
    aptName: 'Two Room Apartment',
    location: 'Bislett',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80',
    alt: 'Kompakt og stilfullt kjøkken',
    tag: 'Kjøkken',
    aptId: 'frogner-studio',
    aptName: 'Studio Apartment',
    location: 'Frogner',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
    alt: 'Lyst soverom med utsikt',
    tag: 'Soverom',
    aptId: 'solli-studio',
    aptName: 'Studio Apartment',
    location: 'Solli',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&q=80',
    alt: 'Romslig stue med spiseplass',
    tag: 'Stue',
    aptId: 'kiellands-two-room',
    aptName: 'Two Room Apartment',
    location: 'Kiellands Plass',
    span: 'normal',
  },
]

const tags = ['Alle', 'Stue', 'Soverom', 'Kjøkken', 'Bad', 'Eksteriør']

export default function PhotoGallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const [activeTag, setActiveTag] = useState('Alle')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeTag === 'Alle'
    ? images
    : images.filter(img => img.tag === activeTag)

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
              Galleri
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Opplev våre rom
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setActiveTag(tag)
                  setLightbox(null)
                }}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  activeTag === tag
                    ? 'bg-dark text-white border-dark'
                    : 'bg-white text-ink-light border-gray-200 hover:border-dark hover:text-ink'
                }`}
              >
                {tag}
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
                  key={img.src}
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
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-ink text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {img.tag}
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
            Se alle leiligheter
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
                alt={filtered[lightbox].alt}
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
