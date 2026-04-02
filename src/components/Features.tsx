'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Sparkles, Key, Wifi, Clock, Building2 } from 'lucide-react'
import { useTranslations } from 'next-intl'

const icons = [Shield, Sparkles, Key, Wifi, Clock, Building2]

export default function Features() {
  const t = useTranslations('Features')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  const amenities = icons.map((icon, i) => ({
    icon,
    title: t(`amenity${i + 1}Title`),
  }))

  return (
    <section className="py-16 md:py-20 px-6 border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6"
        >
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-11 h-11 rounded-full bg-sage/10 flex items-center justify-center">
                <a.icon size={19} className="text-sage" strokeWidth={1.5} />
              </div>
              <span className="text-ink text-xs font-medium leading-tight">{a.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
