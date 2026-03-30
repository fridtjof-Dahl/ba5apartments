import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { kv } from '@vercel/kv'
import {
  getClientIp,
  isRateLimited,
  isTimestampSuspicious,
  isHoneypotFilled,
  sanitize,
} from '@/lib/spam'

const TO = 'post@ba5apartments.com'
const FROM = 'BA5 Apartments <no-reply@ba5apartments.com>'

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  return new Resend(process.env.RESEND_API_KEY)
}

export async function POST(req: Request) {
  try {
    const { name, email, checkIn, checkOut, guests, apartment, _hp, _t } =
      await req.json()

    if (isHoneypotFilled(_hp) || isTimestampSuspicious(_t)) {
      return NextResponse.json({ ok: true })
    }

    const ip = getClientIp(req)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'For mange henvendelser. Prøv igjen om litt.' },
        { status: 429 },
      )
    }

    if (!name || !email || !checkIn || !checkOut) {
      return NextResponse.json({ error: 'Manglende felt' }, { status: 400 })
    }

    const nights = Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86_400_000,
    )

    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safeApartment = sanitize(apartment || 'Ikke spesifisert')

    const resend = getResend()
    const [ownerResult, guestResult] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: email,
        subject: `Ny bookingforespørsel fra ${safeName}`,
        html: `
          <h2>Ny bookingforespørsel — BA5 Apartments</h2>
          <table style="border-collapse:collapse;width:100%;max-width:480px">
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">Navn</td><td style="padding:8px">${safeName}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">E-post</td><td style="padding:8px"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">Innsjekk</td><td style="padding:8px">${sanitize(checkIn)}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">Utsjekk</td><td style="padding:8px">${sanitize(checkOut)} (${nights} natt${nights === 1 ? '' : 'er'})</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">Gjester</td><td style="padding:8px">${sanitize(String(guests))}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">Leilighet</td><td style="padding:8px">${safeApartment}</td></tr>
          </table>
          <p style="color:#6B6B6B;font-size:12px;margin-top:24px">Sendt via ba5apartments.com — svar direkte til gjestens e-post.</p>
        `,
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: 'Vi har mottatt din bookingforespørsel — BA5 Apartments',
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
            <h2 style="color:#1A1A1A;font-size:22px">Hei ${safeName} 👋</h2>
            <p style="color:#6B6B6B;line-height:1.6">
              Takk for din bookingforespørsel! Vi bekrefter din henvendelse og tar kontakt på e-post innen kort tid.
            </p>
            <div style="background:#F7F5F2;border-radius:12px;padding:16px;margin:20px 0">
              <p style="color:#4A6741;font-weight:bold;margin:0 0 12px">Din forespørsel:</p>
              <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:4px 8px;color:#6B6B6B;font-size:14px">Leilighet</td><td style="padding:4px 8px;color:#1A1A1A;font-size:14px;font-weight:500">${safeApartment}</td></tr>
                <tr><td style="padding:4px 8px;color:#6B6B6B;font-size:14px">Innsjekk</td><td style="padding:4px 8px;color:#1A1A1A;font-size:14px;font-weight:500">${checkIn}</td></tr>
                <tr><td style="padding:4px 8px;color:#6B6B6B;font-size:14px">Utsjekk</td><td style="padding:4px 8px;color:#1A1A1A;font-size:14px;font-weight:500">${checkOut} (${nights} natt${nights === 1 ? '' : 'er'})</td></tr>
                <tr><td style="padding:4px 8px;color:#6B6B6B;font-size:14px">Gjester</td><td style="padding:4px 8px;color:#1A1A1A;font-size:14px;font-weight:500">${guests}</td></tr>
              </table>
            </div>
            <p style="color:#6B6B6B;line-height:1.6">
              Vi gleder oss til å ønske deg velkommen til Oslo!
              Kontakt oss på <a href="mailto:post@ba5apartments.com" style="color:#4A6741">post@ba5apartments.com</a>
              eller <a href="tel:+4790979722" style="color:#4A6741">+47 909 79 722</a> om du har spørsmål.
            </p>
            <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0" />
            <p style="color:#A3A3A3;font-size:12px">BA5 Apartments · Oslo, Norge · ba5apartments.com</p>
          </div>
        `,
      }),
    ])

    if (ownerResult.error) {
      console.error('[booking] Resend error:', ownerResult.error)
      return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
    }
    if (guestResult.error) {
      console.warn('[booking] Confirmation email failed:', guestResult.error)
    }

    try {
      await kv.lpush('submissions', JSON.stringify({
        type: 'booking', name: safeName, email: safeEmail,
        apartment: safeApartment, checkIn, checkOut, guests, nights,
        createdAt: new Date().toISOString(),
      }))
    } catch { /* KV not configured — non-fatal */ }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[booking] Unexpected error:', err)
    return NextResponse.json({ error: 'Serverfeil' }, { status: 500 })
  }
}
