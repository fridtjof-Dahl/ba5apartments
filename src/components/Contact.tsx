'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Takk for din henvendelse! Vi tar kontakt snart.')
  }

  const inputClass = 'w-full px-4 py-3 bg-warm-white border border-warm-border text-text text-sm focus:border-brass/50 focus:outline-none transition-colors'

  return (
    <section id="contact" className="section-padding bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brass text-sm tracking-[0.2em] uppercase font-medium mb-4">
            Kontakt oss
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-stone leading-tight">
            Vi hører gjerne fra deg
          </h2>
          <p className="mt-5 text-text-muted max-w-md mx-auto leading-relaxed">
            Har du spørsmål om booking, bedriftsavtale eller utleie?
            Send oss en melding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {[
              { icon: Mail, label: 'E-post', value: 'post@ba5apartments.com' },
              { icon: Phone, label: 'Telefon', value: '+47 909 79 722' },
              { icon: MapPin, label: 'Adresse', value: 'Oslo, Norge' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 border border-warm-border">
                <div className="w-9 h-9 rounded-full bg-stone/5 flex items-center justify-center shrink-0">
                  <item.icon size={16} className="text-brass" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium text-stone text-sm">{item.label}</p>
                  <p className="text-text-muted text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 border border-warm-border p-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-text-muted mb-1.5">Fornavn *</label>
                <input type="text" name="firstName" required value={formState.firstName} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-1.5">Etternavn</label>
                <input type="text" name="lastName" value={formState.lastName} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-text-muted mb-1.5">E-post *</label>
                <input type="email" name="email" required value={formState.email} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-1.5">Telefon</label>
                <input type="tel" name="phone" value={formState.phone} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-text-muted mb-1.5">Emne</label>
              <select name="subject" value={formState.subject} onChange={handleChange} className={`${inputClass} appearance-none`}>
                <option value="">Velg emne</option>
                <option value="booking">Booking</option>
                <option value="company">Bedriftsavtale</option>
                <option value="rent-out">Leie ut bolig</option>
                <option value="other">Annet</option>
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-sm text-text-muted mb-1.5">Melding *</label>
              <textarea name="message" required rows={4} value={formState.message} onChange={handleChange} className={`${inputClass} resize-none`} />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send melding
              <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
