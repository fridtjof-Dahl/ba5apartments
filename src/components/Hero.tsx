'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero.avif')` }}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-sm tracking-widest uppercase mb-4"
          >
            Premium leiligheter i Oslo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] max-w-2xl"
          >
            Ditt hjem,
            <br />
            <span className="italic">borte fra hjemmet</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-5 text-white/50 max-w-md text-[15px] leading-relaxed"
          >
            Fullt møblerte leiligheter i Oslos fineste nabolag.
            Trygt, komfortabelt og helt som hjemme.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#booking"
              className="bg-white text-ink px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all">
              Se tilgjengelighet
            </a>
            <a href="#apartments"
              className="border border-white/30 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-all">
              Utforsk leiligheter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
