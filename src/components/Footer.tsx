'use client'

import { useState } from 'react'

const sitemap = [
  {
    title: 'BA5 Apartments',
    links: [
      { label: 'Leiligheter', href: '#apartments' },
      { label: 'Om oss', href: '#about' },
      { label: 'Anmeldelser', href: '#reviews' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Kontakt', href: '#contact' },
    ],
  },
  {
    title: 'Booking',
    links: [
      { label: 'Book opphold', href: '#booking' },
      { label: 'Bedriftsavtaler', href: '#contact' },
    ],
  },
  {
    title: 'Sosiale medier',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/' },
      { label: 'Facebook', href: 'https://www.facebook.com/' },
    ],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl tracking-wide">
              BA<span className="text-sage">5</span>
            </a>
            <p className="text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              Håndplukkede, fullt møblerte leiligheter i Oslos fineste nabolag.
              Hotellets komfort med hjemmets varme.
            </p>
          </div>

          {sitemap.map(group => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <form
            onSubmit={e => {
              e.preventDefault()
              setEmail('')
            }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="Din e-post"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-dark-card border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/30 focus:border-sage focus:outline-none w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-white text-ink px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors flex-shrink-0"
            >
              Abonner
            </button>
          </form>

          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} BA5 Apartments. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}
