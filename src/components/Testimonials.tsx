'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/apartments'

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="reviews" className="py-20 md:py-28 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-ink">Gjestenes ord</h2>
          <p className="mt-3 text-ink-light max-w-md">
            Fra Airbnb og Booking.com — ekte opplevelser fra ekte gjester.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-copper fill-copper" />
                ))}
              </div>
              <p className="text-ink-light text-[15px] leading-relaxed mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-ink text-sm">{t.author}</p>
                <p className="text-ink-faint text-xs">{t.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
