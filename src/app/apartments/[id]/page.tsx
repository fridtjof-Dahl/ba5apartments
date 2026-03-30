import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { apartments } from '@/data/apartments'
import ApartmentPage from './ApartmentPage'

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return apartments.map(a => ({ id: a.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const apt = apartments.find(a => a.id === id)
  if (!apt) return {}

  return {
    title: `${apt.name} i ${apt.location} — BA5 Apartments`,
    description: `${apt.description.slice(0, 155)}…`,
    openGraph: {
      title: `${apt.name} i ${apt.location}`,
      description: apt.description.slice(0, 155),
      images: [{ url: apt.image, width: 1200, height: 900, alt: apt.name }],
      type: 'website',
    },
  }
}

export default async function Page({ params }: Props) {
  const { id } = await params
  const apt = apartments.find(a => a.id === id)
  if (!apt) notFound()

  const others = apartments.filter(a => a.id !== id).slice(0, 3)
  return <ApartmentPage apt={apt} others={others} />
}
