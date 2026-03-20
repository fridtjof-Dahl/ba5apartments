'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About Us', href: '#features' },
    { label: 'Our Apartments', href: '#apartments' },
    { label: 'Neighborhoods', href: '#neighborhoods' },
    { label: 'Activities', href: '#activities' },
  ],
  services: [
    { label: 'Book a Room', href: '#booking' },
    { label: 'Company Agreements', href: '#business' },
    { label: 'Rent Out Your Place', href: '#rent-out' },
    { label: 'Contact Us', href: '#contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
    setEmail('')
  }

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display text-2xl font-semibold tracking-wide">
                BA<span className="text-gradient-gold">5</span>
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-slate-custom font-medium -mt-1">
                Apartments
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-8">
              Premium, fully furnished apartments in Oslo&apos;s most sought-after neighborhoods.
              Your home away from home, designed for comfort and convenience.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:border-gold/50 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gold text-midnight hover:bg-gold-light transition-all duration-300 shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRight size={16} />
              </button>
            </form>
            <p className="text-white/20 text-xs mt-3">Subscribe to our newsletter for exclusive offers</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm tracking-wide mb-6">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} BA5 Apartments. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Oslo, Norway
          </p>
        </div>
      </div>
    </footer>
  )
}
