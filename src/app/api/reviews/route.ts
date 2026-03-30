import { NextResponse } from 'next/server'
import { fetchReviews, isHostawayConfigured } from '@/lib/hostaway'
import { testimonials } from '@/data/apartments'

export async function GET() {
  try {
    if (isHostawayConfigured()) {
      const reviews = await fetchReviews()
      return NextResponse.json({ reviews, source: 'hostaway' })
    }

    const fallback = testimonials.map((t, i) => ({
      id: i + 1,
      text: t.text,
      author: t.author,
      rating: t.rating,
      source: t.source,
      listingName: '',
      date: '',
    }))

    return NextResponse.json({ reviews: fallback, source: 'static' })
  } catch (err) {
    console.error('[reviews] Error:', err)
    const fallback = testimonials.map((t, i) => ({
      id: i + 1,
      text: t.text,
      author: t.author,
      rating: t.rating,
      source: t.source,
      listingName: '',
      date: '',
    }))

    return NextResponse.json({ reviews: fallback, source: 'fallback' })
  }
}
