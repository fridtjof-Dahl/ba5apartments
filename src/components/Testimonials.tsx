'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials as staticReviews } from '@/data/apartments'

interface Review {
  id: number
  text: string
  author: string
  rating: number
  source: string
  listingName: string
  date: string
}

function SourceBadge({ source }: { source: string }) {
  const colors: Record<string, string> = {
    Airbnb: 'bg-[#FF5A5F]/10 text-[#FF5A5F]',
    'Booking.com': 'bg-[#003580]/10 text-[#003580]',
    Vrbo: 'bg-[#3B5998]/10 text-[#3B5998]',
  }
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
        colors[source] ?? 'bg-sage/10 text-sage'
      }`}
    >
      {source}
    </span>
  )
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm flex flex-col min-w-[320px] max-w-[400px] snap-start flex-shrink-0">
      <div className="flex items-center justify-between mb-4">
        <Stars count={review.rating} />
        <SourceBadge source={review.source} />
      </div>
      <p className="text-ink-light text-[14px] leading-relaxed mb-5 flex-1 line-clamp-5">
        &ldquo;{review.text}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-ink text-sm">{review.author}</p>
        {review.listingName && (
          <p className="text-ink-faint text-xs mt-0.5">{review.listingName}</p>
        )}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })
  const initialReviews: Review[] = staticReviews.map((t, i) => ({
    id: i + 1,
    text: t.text,
    author: t.author,
    rating: t.rating,
    source: t.source,
    listingName: '',
    date: '',
  }))
  const [reviews, setReviews] = useState<Review[]>(initialReviews)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    fetch('/api/reviews')
      .then(r => r.json())
      .then(data => {
        if (data.reviews?.length) setReviews(data.reviews)
      })
      .catch(() => {})
  }, [])

  function updateScrollState() {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
  }

  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
      : '5.0'

  const airbnbCount = reviews.filter(r => r.source === 'Airbnb').length
  const bookingCount = reviews.filter(r => r.source === 'Booking.com').length

  return (
    <section id="reviews" className="py-24 md:py-32 px-6 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <p className="text-sm font-medium text-ink-light tracking-wide mb-3">
              Gjestenes ord
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
              {reviews.length}+ verifiserte anmeldelser
            </h2>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-ink">
                  {avgRating}
                </span>
                <Stars count={5} />
              </div>
              <div className="flex gap-2">
                {airbnbCount > 0 && (
                  <span className="text-xs text-ink-light">
                    {airbnbCount} fra Airbnb
                  </span>
                )}
                {bookingCount > 0 && (
                  <span className="text-xs text-ink-light">
                    · {bookingCount} fra Booking.com
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-ink hover:bg-white transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-ink hover:bg-white transition-colors disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map(r => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-3 justify-center"
        >
          <a
            href="https://www.airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm text-ink-light hover:border-[#FF5A5F] hover:text-[#FF5A5F] transition-colors"
          >
            Se anmeldelser på Airbnb
          </a>
          <a
            href="https://www.booking.com/hotel/no/newly-renovated-studio-apartment-at-frogner.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2.5 rounded-full text-sm text-ink-light hover:border-[#003580] hover:text-[#003580] transition-colors"
          >
            Se anmeldelser på Booking.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}
