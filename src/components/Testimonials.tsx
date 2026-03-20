'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '@/data/apartments'

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-midnight-light" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Guest Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">
            What Our <span className="italic text-gradient-gold font-medium">Guests Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 flex flex-col relative group hover:border-gold/20 transition-all duration-500"
            >
              <Quote size={32} className="text-gold/20 mb-6" />

              <p className="text-white/60 leading-relaxed text-sm flex-grow mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-semibold text-lg">{testimonial.author}</p>
                  <p className="text-white/40 text-sm">{testimonial.source}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
