import type { MetadataRoute } from 'next'
import { apartments } from '@/data/apartments'

const BASE = 'https://ba5apartments.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'no']

  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`

    entries.push({
      url: `${BASE}${prefix}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    })

    for (const apt of apartments) {
      entries.push({
        url: `${BASE}${prefix}/apartments/${apt.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return entries
}
