import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BA5 Apartments | Hjem borte fra hjemmet',
  description:
    'Premium møblerte leiligheter i Oslos mest ettertraktede nabolag. Korttids- og langtidsleie med full komfort og trygghet.',
  keywords: ['Oslo apartments', 'short term rental Oslo', 'furnished apartments Oslo', 'BA5', 'premium accommodation Norway'],
  openGraph: {
    title: 'BA5 Apartments | Hjem borte fra hjemmet',
    description: 'Premium møblerte leiligheter i Oslo. Trygt, komfortabelt, hjemmekoselig.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="antialiased">
      <body>{children}</body>
    </html>
  )
}
