'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { activities } from '@/data/apartments'

export default function Activities() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="activities" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Opplevelser
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-stone leading-tight">
            Opplev Oslo
          </h2>
          <p className="mt-5 text-text-muted max-w-lg mx-auto leading-relaxed">
            Fra verdensklasse museer til spektakulære fjordturer — her er
            våre favoritter for et uforglemmelig opphold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${activity.image}')` }}
                />
              </div>
              <span className="text-brass text-xs tracking-[0.15em] uppercase font-medium">
                {activity.category}
              </span>
              <h3 className="font-display text-lg font-medium text-stone mt-1 mb-1.5">
                {activity.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
