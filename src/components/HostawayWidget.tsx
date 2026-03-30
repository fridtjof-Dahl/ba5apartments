'use client'

import { useEffect, useRef } from 'react'

interface Props {
  listingId?: number
}

export default function HostawayWidget({ listingId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const loaded = useRef(false)

  useEffect(() => {
    if (!listingId || loaded.current) return
    loaded.current = true

    const script = document.createElement('script')
    script.src = 'https://d2q3n06xhbi0am.cloudfront.net/calendar.js'
    script.async = true
    script.onload = () => {
      if (typeof (window as any).hostawayCalendarWidget === 'function') {
        ;(window as any).hostawayCalendarWidget({
          baseUrl: window.location.origin,
          listingId,
          numberOfMonths: 2,
          openInNewTab: false,
          font: 'Inter',
          rounded: true,
          button: {
            action: 'checkout',
            text: 'Book nå',
          },
          clearButtonText: 'Tøm datoer',
          color: {
            mainColor: '#0C1B2A',
          },
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      try {
        document.body.removeChild(script)
      } catch {}
    }
  }, [listingId])

  if (!listingId) return null

  return (
    <div ref={containerRef} className="mt-6">
      <div id="hostaway-calendar-widget" />
    </div>
  )
}
