const ipSubmissions = new Map<string, number[]>()

const RATE_WINDOW_MS = 60_000
const MAX_PER_WINDOW = 3
const MIN_SUBMIT_TIME_MS = 3_000

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') ?? 'unknown'
}

export function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = (ipSubmissions.get(ip) ?? []).filter(
    t => now - t < RATE_WINDOW_MS,
  )
  if (timestamps.length >= MAX_PER_WINDOW) return true
  timestamps.push(now)
  ipSubmissions.set(ip, timestamps)
  return false
}

export function isTimestampSuspicious(loadedAt: unknown): boolean {
  if (typeof loadedAt !== 'number') return true
  return Date.now() - loadedAt < MIN_SUBMIT_TIME_MS
}

export function isHoneypotFilled(value: unknown): boolean {
  return typeof value === 'string' && value.length > 0
}

export function sanitize(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
