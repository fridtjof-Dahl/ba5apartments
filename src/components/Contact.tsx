'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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
    // TODO: integrate with email service / API
    alert('Thank you for your message! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="section-padding relative">
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
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 leading-tight">
            Contact <span className="italic text-gradient-gold font-medium">Us</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-xl mx-auto text-lg leading-relaxed">
            Have a question or want to discuss a company agreement?
            We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-white/40 text-sm">post@ba5apartments.com</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-white/40 text-sm">+47 XXX XX XXX</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-white/40 text-sm">Oslo, Norway</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 glass-card rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white/40 mb-2">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formState.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-2">Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-white/40 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm text-white/40 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-white/40 mb-2">Subject</label>
              <select
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors text-sm appearance-none"
              >
                <option value="" className="bg-midnight">Select a topic</option>
                <option value="booking" className="bg-midnight">Booking Inquiry</option>
                <option value="company" className="bg-midnight">Company Agreement</option>
                <option value="rent-out" className="bg-midnight">Rent Out My Property</option>
                <option value="other" className="bg-midnight">Other</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-white/40 mb-2">Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold/50 focus:outline-none transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
