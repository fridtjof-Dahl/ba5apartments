export interface HostawayReview {
  id: number
  listingMapId: number
  channelId: number
  type: string
  status: string
  rating: number | null
  publicReview: string | null
  guestName: string
  listingName: string
  arrivalDate: string
  departureDate: string
  reviewCategory: { category: string; rating: number }[]
}

export interface NormalizedReview {
  id: number
  text: string
  author: string
  rating: number
  source: 'Airbnb' | 'Booking.com' | 'Vrbo' | 'Direct' | 'Other'
  listingName: string
  date: string
}

const CHANNEL_MAP: Record<number, NormalizedReview['source']> = {
  2000: 'Airbnb',
  2002: 'Booking.com',
  2003: 'Vrbo',
  2005: 'Direct',
}

let cachedToken: { token: string; expiresAt: number } | null = null
let cachedReviews: { data: NormalizedReview[]; fetchedAt: number } | null = null
const CACHE_TTL = 60 * 60 * 1000

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.token
  }

  const clientId = process.env.HOSTAWAY_CLIENT_ID
  const clientSecret = process.env.HOSTAWAY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('Missing HOSTAWAY_CLIENT_ID or HOSTAWAY_CLIENT_SECRET')
  }

  const res = await fetch('https://api.hostaway.com/v1/accessTokens', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'general',
    }),
  })

  if (!res.ok) throw new Error(`Hostaway auth failed: ${res.status}`)
  const data = await res.json()

  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 86400) * 1000 - 60_000,
  }

  return cachedToken.token
}

export async function fetchReviews(): Promise<NormalizedReview[]> {
  if (cachedReviews && Date.now() - cachedReviews.fetchedAt < CACHE_TTL) {
    return cachedReviews.data
  }

  const token = await getAccessToken()

  const params = new URLSearchParams({
    type: 'guest-to-host',
    'statuses[]': 'published',
    sortBy: 'departureDate',
    sortOrder: 'desc',
    limit: '50',
  })

  const res = await fetch(
    `https://api.hostaway.com/v1/reviews?${params}`,
    { headers: { Authorization: `Bearer ${token}` } },
  )

  if (!res.ok) throw new Error(`Hostaway reviews failed: ${res.status}`)
  const { result } = (await res.json()) as { result: HostawayReview[] }

  const normalized: NormalizedReview[] = result
    .filter(r => r.publicReview && r.publicReview.trim().length > 20)
    .map(r => ({
      id: r.id,
      text: r.publicReview!.trim(),
      author: r.guestName?.split(' ')[0] || 'Gjest',
      rating: r.rating ?? 5,
      source: CHANNEL_MAP[r.channelId] ?? 'Other',
      listingName: r.listingName,
      date: r.departureDate?.split(' ')[0] ?? '',
    }))

  cachedReviews = { data: normalized, fetchedAt: Date.now() }
  return normalized
}

export function isHostawayConfigured(): boolean {
  return !!(process.env.HOSTAWAY_CLIENT_ID && process.env.HOSTAWAY_CLIENT_SECRET)
}
