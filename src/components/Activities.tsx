'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { activities } from '@/data/apartments'

export default function Activities() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="activities" className="section-padding relative bg-grain">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-gold text-sm tracking-[0.25em] uppercase font-medium">
            Explore Oslo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">
            Discover <span className="italic text-gradient-gold font-medium">Oslo</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            From world-class museums to stunning fjord views — Oslo is a city that never stops surprising.
            Here are our top picks to make your stay unforgettable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                i === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[2/1]' : 'aspect-[4/3]'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${activity.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-2">
                  {activity.category}
                </span>
                <h3 className="font-display text-xl md:text-2xl font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {activity.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  {activity.description}
                </p>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-gold group-hover:bg-gold/10">
                <ArrowUpRight size={16} className="text-gold" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
