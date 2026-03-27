'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }))

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">Ta kontakt</h2>
            <p className="text-ink-light leading-relaxed mb-10 max-w-md">
              Spørsmål om booking, bedriftsavtaler eller utleie?
              Vi svarer gjerne.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: 'post@ba5apartments.com' },
                { icon: Phone, label: '+47 909 79 722' },
                { icon: MapPin, label: 'Oslo, Norge' },
              ].map(({ icon: I, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sage/10 flex items-center justify-center">
                    <I size={16} className="text-sage" />
                  </div>
                  <span className="text-ink text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={e => { e.preventDefault(); alert('Takk! Vi tar kontakt snart.') }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs font-medium text-ink-light mb-1.5">Navn</label>
                <input type="text" required value={form.name} onChange={e => set('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink-light mb-1.5">E-post</label>
                <input type="email" required value={form.email} onChange={e => set('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-medium text-ink-light mb-1.5">Melding</label>
                <textarea required rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none transition-all resize-none" />
              </div>
            </div>

            <button type="submit"
              className="w-full flex items-center justify-center gap-2 bg-sage text-white py-3.5 rounded-xl text-sm font-semibold hover:bg-sage-light transition-colors">
              Send melding <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
