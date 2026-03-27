'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function RentOut() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="rent-out" className="section-padding border-t border-warm-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
            For eiendomseiere
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-stone leading-tight mb-5">
            Lei ut din bolig
          </h2>
          <p className="text-text-muted leading-relaxed max-w-xl mx-auto mb-8">
            Vi håndterer alt fra leietaker-screening til innkreving av husleie.
            Maksimer avkastningen din mens vi sikrer eiendommen din med full trygghet.
          </p>
          <a href="#contact" className="btn-outline group">
            Kom i gang
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
