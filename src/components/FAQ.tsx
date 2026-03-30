'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Hvordan fungerer innsjekking?',
    a: 'Vi bruker smart lås med digital kode som du mottar på SMS/e-post 24 timer før ankomst. Sjekk inn når det passer deg — ingen nøkkeloverlevering nødvendig. Detaljerte instruksjoner sendes automatisk.',
  },
  {
    q: 'Hva er avbestillingsreglene?',
    a: 'Gratis avbestilling opptil 48 timer før innsjekk. Ved avbestilling etter dette faktureres 50 % av totalbeløpet. Vi er fleksible — ta kontakt med oss ved spesielle omstendigheter.',
  },
  {
    q: 'Tilbyr dere bedriftsavtaler?',
    a: 'Absolutt! Vi har skreddersydde løsninger for bedrifter med faste priser, fakturering og prioritert tilgjengelighet. Kontakt oss for et tilbud tilpasset deres behov.',
  },
  {
    q: 'Er leilighetene møblerte?',
    a: 'Alle leiligheter er fullt møblerte med alt du trenger — fra sengetøy og håndklær til kjøkkenutstyr, WiFi og vaskemuligheter. Du trenger bare å ta med deg selv.',
  },
  {
    q: 'Hvor lang er minimum opphold?',
    a: 'Minimum opphold er 1 natt for de fleste leiligheter. Vi tilbyr også gunstige priser for lengre opphold (uke- og månedsopphold). Kontakt oss for tilpassede priser.',
  },
  {
    q: 'Hvordan holder dere leilighetene rene?',
    a: 'Profesjonell rengjøring mellom hvert opphold, med fokus på hygiene og kvalitet. Ekstra rengjøring kan bestilles under oppholdet. Vi følger strenge rengjøringsprotokoller.',
  },
  {
    q: 'Kan jeg ta med kjæledyr?',
    a: 'Noen av våre leiligheter er dyrevennlige — ta kontakt med oss for å finne den rette leiligheten for deg og din firbeinte venn. Et lite tillegg for ekstra rengjøring kan påløpe.',
  },
  {
    q: 'Tilbyr dere parkering?',
    a: 'Gateparkering er tilgjengelig i de fleste nabolag. Noen leiligheter har også tilgang til privat parkering mot et tillegg. Vi hjelper gjerne med å finne løsninger.',
  },
]

function FaqItem({ faq, isOpen, toggle }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-start justify-between py-5 text-left group"
      >
        <span className="font-medium text-ink text-[15px] pr-8 group-hover:text-sage transition-colors">
          {faq.q}
        </span>
        <span className="mt-0.5 text-ink-faint group-hover:text-sage transition-colors flex-shrink-0">
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-ink-light text-sm leading-relaxed pb-5 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-ink-light tracking-wide mb-3">
              Ofte stilte spørsmål
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">
              Alt du trenger å vite
            </h2>
            <p className="text-ink-light leading-relaxed mb-8 max-w-md">
              Finner du ikke svaret du leter etter? Ta gjerne kontakt med oss
              — vi svarer raskt og er alltid klare til å hjelpe.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-dark text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-dark/80 transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              Kontakt oss
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-6 md:p-8"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
