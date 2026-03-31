'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Footer')
  const [email, setEmail] = useState('')

  const sitemap = [
    {
      title: t('colApartments'),
      links: [
        { label: t('apartments'), href: '#apartments' },
        { label: t('aboutUs'), href: '#about' },
        { label: t('reviews'), href: '#reviews' },
        { label: t('faq'), href: '#faq' },
        { label: t('contact'), href: '#contact' },
      ],
    },
    {
      title: t('colBooking'),
      links: [
        { label: t('bookStay'), href: '#booking' },
        { label: t('corporateDeals'), href: '#contact' },
      ],
    },
  ]

  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl tracking-wide">
              BA<span className="text-sage">5</span>
            </a>
            <p className="text-white/40 text-sm mt-4 max-w-xs leading-relaxed">
              {t('blurb')}
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
            onSubmit={e => { e.preventDefault(); setEmail('') }}
            className="flex items-center gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-dark-card border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder-white/30 focus:border-sage focus:outline-none w-full md:w-64"
            />
            <button
              type="submit"
              className="bg-white text-ink px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors flex-shrink-0"
            >
              {t('subscribe')}
            </button>
          </form>

          <p className="text-white/30 text-xs">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
