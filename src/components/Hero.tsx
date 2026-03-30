'use client'

import { motion } from 'framer-motion'

const perks = [
  { img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=100&q=60', label: 'Fullt møblerte leiligheter' },
  { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&q=60', label: 'Sentral beliggenhet' },
  { img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100&q=60', label: 'Profesjonelt rengjort' },
  { img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&q=60', label: 'Designet for komfort' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-dark via-dark/95 to-sand overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero.avif')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-3xl"
        >
          Designet for komfort.
          <br />
          <span className="italic">Skreddersydd for deg.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-6 text-white/60 max-w-lg text-[15px] md:text-base leading-relaxed"
        >
          Vi tilbyr håndplukkede, fullt møblerte leiligheter for deg
          som verdsetter privatliv, komfort og nærhet til byen.
        </motion.p>

        <motion.a
          href="#apartments"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 inline-flex items-center gap-2.5 bg-white text-ink px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-all"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
          Utforsk leilighetene
          <span className="w-1.5 h-1.5 rounded-full bg-ink/30" />
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-3xl"
        >
          {perks.map(p => (
            <div
              key={p.label}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-3"
            >
              <img
                src={p.img}
                alt=""
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <span className="text-white/80 text-xs font-medium leading-tight">
                {p.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
