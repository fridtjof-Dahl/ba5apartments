'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface Props {
  images: string[]
  name: string
}

export default function ImageGallery({ images, name }: Props) {
  const t = useTranslations('ImageGallery')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return
      setLightboxIndex(
        (lightboxIndex + dir + images.length) % images.length,
      )
    },
    [lightboxIndex, images.length],
  )

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, navigate])

  if (images.length <= 1) return null

  return (
    <>
      <div className="grid grid-cols-4 gap-2 h-[50vh] md:h-[60vh]">
        <div
          className="col-span-4 md:col-span-2 md:row-span-2 relative cursor-pointer overflow-hidden group"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={images[0]}
            alt={t('mainImage', { name })}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {images.slice(1, 3).map((img, i) => (
          <div
            key={i}
            className="hidden md:block col-span-1 relative cursor-pointer overflow-hidden group"
            onClick={() => openLightbox(i + 1)}
          >
            <Image
              src={img}
              alt={t('imageN', { name, n: i + 2 })}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
          </div>
        ))}
        {images.length > 3 && (
          <div
            className="hidden md:block col-span-1 relative cursor-pointer overflow-hidden group"
            onClick={() => openLightbox(3)}
          >
            <Image
              src={images[3]}
              alt={t('imageN', { name, n: 4 })}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="25vw"
            />
            {images.length > 4 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {t('morePhotos', { count: images.length - 4 })}
                </span>
              </div>
            )}
          </div>
        )}

        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 bg-white/90 backdrop-blur-sm text-ink text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:bg-white transition-colors flex items-center gap-2"
        >
          <Grid3X3 size={14} />
          {t('showAll')}
        </button>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>

            <button
              onClick={e => {
                e.stopPropagation()
                navigate(-1)
              }}
              className="absolute left-4 z-10 text-white/50 hover:text-white transition-colors p-3"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={e => {
                e.stopPropagation()
                navigate(1)
              }}
              className="absolute right-4 z-10 text-white/50 hover:text-white transition-colors p-3"
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-[90vw] h-[80vh] max-w-5xl"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={images[lightboxIndex]}
                alt={t('imageN', { name, n: lightboxIndex + 1 })}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => {
                    e.stopPropagation()
                    setLightboxIndex(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === lightboxIndex
                      ? 'bg-white scale-125'
                      : 'bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
