import type { MetadataRoute } from 'next'
import { apartments } from '@/data/apartments'

const BASE = 'https://ba5apartments.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const apartmentRoutes = apartments.map(apt => ({
    url: `${BASE}/apartments/${apt.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...apartmentRoutes,
  ]
}
