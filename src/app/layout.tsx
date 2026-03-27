import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BA5 Apartments — Premium leiligheter i Oslo',
  description: 'Opplev Oslo fra våre håndplukkede, fullt møblerte leiligheter. Trygt, komfortabelt og hjemmekoselig.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className="antialiased">{children}</body>
    </html>
  )
}
