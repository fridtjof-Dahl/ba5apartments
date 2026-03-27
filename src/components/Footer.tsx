export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-display text-lg">BA<span className="text-sage">5</span></span>
          <span className="text-ink-faint text-xs ml-2">Apartments</span>
        </div>
        <div className="flex gap-6 text-xs text-ink-light">
          <a href="#apartments" className="hover:text-ink transition-colors">Leiligheter</a>
          <a href="#about" className="hover:text-ink transition-colors">Om oss</a>
          <a href="#booking" className="hover:text-ink transition-colors">Book</a>
          <a href="#contact" className="hover:text-ink transition-colors">Kontakt</a>
        </div>
        <p className="text-ink-faint text-xs">
          &copy; {new Date().getFullYear()} BA5 Apartments
        </p>
      </div>
    </footer>
  )
}
