import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BA5 Apartments | Premium Short-Term Rentals in Oslo',
  description: 'Experience luxury living in the heart of Oslo. BA5 Apartments offers premium, fully furnished apartments for short and long-term stays in Oslo\'s most sought-after neighborhoods.',
  keywords: 'Oslo apartments, short-term rental, luxury apartments Oslo, furnished apartments, corporate housing Oslo',
  openGraph: {
    title: 'BA5 Apartments | Premium Short-Term Rentals in Oslo',
    description: 'Experience luxury living in the heart of Oslo. Premium, fully furnished apartments in Oslo\'s best neighborhoods.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BA5 Apartments',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
