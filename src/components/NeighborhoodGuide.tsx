'use client'

import { MapPin, Coffee, ShoppingBag, Train, TreePine, UtensilsCrossed, Landmark } from 'lucide-react'
import type { Apartment } from '@/data/apartments'
import { useTranslations } from 'next-intl'

const typeIcons: Record<string, any> = {
  Restaurant: UtensilsCrossed,
  Café: Coffee,
  Bakery: Coffee,
  Shopping: ShoppingBag,
  'Shopping & Food': ShoppingBag,
  Transport: Train,
  Park: TreePine,
  Beach: TreePine,
  Museum: Landmark,
  Neighborhood: MapPin,
  'Food Hall': UtensilsCrossed,
  'Bar & Restaurant': UtensilsCrossed,
}

interface Props {
  neighborhood: Apartment['neighborhood']
  location: string
}

export default function NeighborhoodGuide({ neighborhood, location }: Props) {
  const t = useTranslations('NeighborhoodGuide')

  return (
    <div className="mt-12 pt-10 border-t border-gray-100">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="font-display text-xl text-ink mb-1">
            {t('heading', { location })}
          </h2>
          <p className="text-ink-light text-sm">{neighborhood.vibe}</p>
        </div>
        <div className="bg-sage/10 text-sage text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0">
          {t('walkScore', { score: neighborhood.walkScore })}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {neighborhood.highlights.map(h => (
          <span
            key={h}
            className="bg-sand text-ink text-xs font-medium px-3.5 py-1.5 rounded-full"
          >
            {h}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {neighborhood.nearbySpots.map(spot => {
          const Icon = typeIcons[spot.type] ?? MapPin
          return (
            <div
              key={spot.name}
              className="flex items-center gap-3 bg-sand/60 rounded-xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <Icon size={15} className="text-sage" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink truncate">
                  {spot.name}
                </p>
                <p className="text-xs text-ink-faint">{spot.type}</p>
              </div>
              <span className="text-xs text-ink-faint flex-shrink-0">
                {spot.distance}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
