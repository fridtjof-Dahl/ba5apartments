'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { Apartment } from '@/data/apartments'
import { useTranslations } from 'next-intl'

interface Props {
  apt: Apartment
}

export default function FloatingBookingBar({ apt }: Props) {
  const t = useTranslations('FloatingBookingBar')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const hasExternal = apt.bookingComUrl || apt.airbnbUrl

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-50 lg:hidden"
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-ink truncate">
                  {apt.name}
                </p>
                <p className="text-xs text-ink-light">
                  {apt.location} · {apt.size}
                </p>
              </div>

              <div className="flex gap-2">
                {hasExternal ? (
                  <>
                    {apt.bookingComUrl && (
                      <a
                        href={apt.bookingComUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#003580] text-white text-xs font-semibold px-4 py-2.5 rounded-full"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
                        Booking.com
                        <ExternalLink size={11} />
                      </a>
                    )}
                    {!apt.bookingComUrl && apt.airbnbUrl && (
                      <a
                        href={apt.airbnbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#FF5A5F] text-white text-xs font-semibold px-4 py-2.5 rounded-full"
                      >
                        Airbnb
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </>
                ) : (
                  <a
                    href="#booking-form"
                    className="bg-sage text-white text-xs font-semibold px-5 py-2.5 rounded-full"
                  >
                    {t('bookNow')}
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
