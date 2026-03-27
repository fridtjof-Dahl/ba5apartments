'use client'

const footerLinks = {
  selskap: [
    { label: 'Om oss', href: '#welcome' },
    { label: 'Leiligheter', href: '#apartments' },
    { label: 'Nabolag', href: '#neighborhoods' },
    { label: 'Opplevelser', href: '#activities' },
  ],
  tjenester: [
    { label: 'Book leilighet', href: '#booking' },
    { label: 'Bedriftsavtaler', href: '#business' },
    { label: 'Lei ut bolig', href: '#rent-out' },
    { label: 'Kontakt', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-stone text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <span className="font-display text-xl font-semibold tracking-wide">
              BA<span className="text-brass-light">5</span>
            </span>
            <span className="block text-[9px] tracking-[0.3em] uppercase text-white/40 font-medium -mt-0.5 mb-4">
              Apartments
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium møblerte leiligheter i Oslos fineste nabolag.
              Ditt hjem borte fra hjemmet.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide mb-5 text-white/60 uppercase text-[13px]">Selskap</h3>
            <ul className="space-y-3">
              {footerLinks.selskap.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wide mb-5 text-white/60 uppercase text-[13px]">Tjenester</h3>
            <ul className="space-y-3">
              {footerLinks.tjenester.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} BA5 Apartments. Alle rettigheter reservert.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">Personvern</a>
            <a href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
