import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { apartments } from '@/data/apartments'
import { routing } from '@/i18n/routing'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import ApartmentPage from './ApartmentPage'

interface Props {
  params: Promise<{ id: string; locale: string }>
}

export function generateStaticParams() {
  return routing.locales.flatMap(locale =>
    apartments.map(a => ({ locale, id: a.id }))
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params
  const apt = apartments.find(a => a.id === id)
  if (!apt) return {}

  const t = await getTranslations({ locale, namespace: 'ApartmentPage' })
  const inLabel = locale === 'no' ? 'i' : 'in'

  return {
    title: `${apt.name} ${inLabel} ${apt.location} — BA5 Apartments`,
    description: `${apt.description.slice(0, 155)}…`,
    openGraph: {
      title: `${apt.name} ${inLabel} ${apt.location}`,
      description: apt.description.slice(0, 155),
      images: [{ url: apt.image, width: 1200, height: 900, alt: apt.name }],
      type: 'website',
    },
  }
}

export default async function Page({ params }: Props) {
  const { id, locale } = await params
  setRequestLocale(locale)

  const apt = apartments.find(a => a.id === id)
  if (!apt) notFound()

  const others = apartments.filter(a => a.id !== id).slice(0, 3)
  return <ApartmentPage apt={apt} others={others} />
}
