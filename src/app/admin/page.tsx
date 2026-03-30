'use client'

import { useState } from 'react'
import { Mail, Calendar, Users, Building2, Clock, LogIn } from 'lucide-react'

interface Submission {
  type: 'contact' | 'booking'
  name: string
  email: string
  message?: string
  apartment?: string
  checkIn?: string
  checkOut?: string
  guests?: string | number
  nights?: number
  createdAt: string
}

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authed, setAuthed] = useState(false)
  const [items, setItems] = useState<Submission[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function login(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/submissions?password=${encodeURIComponent(password)}`)
      if (!res.ok) { setError('Feil passord'); setLoading(false); return }
      const data = await res.json()
      const parsed = (data.items as string[]).map(s => {
        try { return JSON.parse(s) as Submission } catch { return null }
      }).filter(Boolean) as Submission[]
      setItems(parsed)
      setAuthed(true)
    } catch {
      setError('Noe gikk galt')
    }
    setLoading(false)
  }

  if (!authed) {
    return (
      <div className="min-h-screen bg-sand flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-8 shadow-sm w-full max-w-sm">
          <h1 className="font-display text-2xl text-ink mb-6">Admin</h1>
          <form onSubmit={login} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-ink-light mb-1.5">Passord</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-sage focus:ring-1 focus:ring-sage/20 focus:outline-none"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-sage text-white py-3 rounded-xl text-sm font-semibold hover:bg-sage-light transition-colors disabled:opacity-60"
            >
              <LogIn size={15} />
              {loading ? 'Logger inn...' : 'Logg inn'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  const bookings = items.filter(i => i.type === 'booking')
  const contacts = items.filter(i => i.type === 'contact')

  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <span className="font-display text-xl">BA<span className="text-sage">5</span></span>
            <span className="text-ink-faint text-sm ml-2">Admin</span>
          </div>
          <div className="flex gap-4 text-sm text-ink-light">
            <span>{bookings.length} bookinger</span>
            <span>{contacts.length} meldinger</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {items.length === 0 ? (
          <p className="text-ink-light text-center py-20">Ingen henvendelser ennå.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      item.type === 'booking'
                        ? 'bg-sage/10 text-sage'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {item.type === 'booking' ? 'Booking' : 'Kontakt'}
                    </span>
                    <span className="font-semibold text-ink">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-ink-faint">
                    <Clock size={11} />
                    {new Date(item.createdAt).toLocaleString('nb-NO', {
                      day: '2-digit', month: '2-digit', year: 'numeric',
                      hour: '2-digit', minute: '2-digit',
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-ink-light">
                    <Mail size={14} className="text-sage flex-shrink-0" />
                    <a href={`mailto:${item.email}`} className="hover:text-ink transition-colors">
                      {item.email}
                    </a>
                  </div>

                  {item.type === 'booking' && (
                    <>
                      <div className="flex items-center gap-2 text-ink-light">
                        <Building2 size={14} className="text-sage flex-shrink-0" />
                        {item.apartment}
                      </div>
                      <div className="flex items-center gap-2 text-ink-light">
                        <Calendar size={14} className="text-sage flex-shrink-0" />
                        {item.checkIn} → {item.checkOut} ({item.nights} natt{item.nights !== 1 ? 'er' : ''})
                      </div>
                      <div className="flex items-center gap-2 text-ink-light">
                        <Users size={14} className="text-sage flex-shrink-0" />
                        {item.guests} gjest{Number(item.guests) !== 1 ? 'er' : ''}
                      </div>
                    </>
                  )}

                  {item.type === 'contact' && item.message && (
                    <div className="sm:col-span-2 mt-1">
                      <p className="text-ink-light bg-sand rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap">
                        {item.message}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={`mailto:${item.email}?subject=Re: ${item.type === 'booking' ? 'Bookingforespørsel' : 'Din melding'} — BA5 Apartments`}
                    className="text-xs font-semibold text-sage hover:underline"
                  >
                    Svar på e-post →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
