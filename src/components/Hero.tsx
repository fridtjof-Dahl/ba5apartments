'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/hero.avif')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/40 to-midnight" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-2 border border-gold/30 rounded-full text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Premium Apartments in Oslo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight max-w-5xl"
        >
          Your Home
          <br />
          <span className="text-gradient-gold italic font-medium">Away From Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0, 1] }}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed font-light"
        >
          Fully furnished luxury apartments in Oslo&apos;s most sought-after neighborhoods.
          Short stays, long stays, your way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.1, 0, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <a href="#booking" className="btn-primary">
            Book Your Stay
          </a>
          <a href="#apartments" className="btn-outline">
            Explore Apartments
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#features" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
          <span className="text-[10px] tracking-[0.3em] uppercase">Discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
