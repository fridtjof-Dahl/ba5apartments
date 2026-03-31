'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function CookieConsent() {
  const t = useTranslations('CookieConsent')
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('ba5-cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1800)
      return () => clearTimeout(timer)
    }
  }, [])

  function accept() {
    localStorage.setItem('ba5-cookie-consent', 'accepted')
    setShow(false)
  }

  function decline() {
    localStorage.setItem('ba5-cookie-consent', 'declined')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[90] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 p-5"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-sand flex items-center justify-center flex-shrink-0">
              <Cookie size={18} className="text-sage" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink mb-1">{t('title')}</p>
              <p className="text-xs text-ink-light leading-relaxed">
                {t('text')}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 bg-dark text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-dark/90 transition-colors"
            >
              {t('accept')}
            </button>
            <button
              onClick={decline}
              className="flex-1 bg-sand text-ink text-xs font-semibold py-2.5 rounded-xl hover:bg-sand-dark transition-colors"
            >
              {t('decline')}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
