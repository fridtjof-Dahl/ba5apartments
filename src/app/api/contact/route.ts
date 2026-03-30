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

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'post@ba5apartments.com'
const FROM = 'BA5 Apartments <no-reply@ba5apartments.com>'

export async function POST(req: Request) {
  try {
    const { name, email, message, _hp, _t } = await req.json()

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

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Manglende felt' }, { status: 400 })
    }

    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safeMessage = sanitize(message)

    const [ownerResult, guestResult] = await Promise.all([
      resend.emails.send({
        from: FROM,
        to: TO,
        replyTo: email,
        subject: `Ny melding fra ${safeName}`,
        html: `
          <h2>Ny kontakthenvendelse — BA5 Apartments</h2>
          <table style="border-collapse:collapse;width:100%;max-width:480px">
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">Navn</td><td style="padding:8px">${safeName}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741">E-post</td><td style="padding:8px"><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#4A6741;vertical-align:top">Melding</td><td style="padding:8px;white-space:pre-wrap">${safeMessage}</td></tr>
          </table>
          <p style="color:#6B6B6B;font-size:12px;margin-top:24px">Sendt via ba5apartments.com</p>
        `,
      }),
      resend.emails.send({
        from: FROM,
        to: email,
        subject: 'Vi har mottatt din melding — BA5 Apartments',
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto">
            <h2 style="color:#1A1A1A;font-size:22px">Hei ${safeName} 👋</h2>
            <p style="color:#6B6B6B;line-height:1.6">
              Takk for at du tok kontakt med oss! Vi har mottatt meldingen din og tar kontakt med deg snart.
            </p>
            <div style="background:#F7F5F2;border-radius:12px;padding:16px;margin:20px 0">
              <p style="color:#4A6741;font-weight:bold;margin:0 0 8px">Din melding:</p>
              <p style="color:#1A1A1A;margin:0;white-space:pre-wrap">${safeMessage}</p>
            </div>
            <p style="color:#6B6B6B;line-height:1.6">
              Har du spørsmål? Kontakt oss på
              <a href="mailto:post@ba5apartments.com" style="color:#4A6741">post@ba5apartments.com</a>
              eller ring <a href="tel:+4790979722" style="color:#4A6741">+47 909 79 722</a>.
            </p>
            <hr style="border:none;border-top:1px solid #E5E7EB;margin:24px 0" />
            <p style="color:#A3A3A3;font-size:12px">BA5 Apartments · Oslo, Norge</p>
          </div>
        `,
      }),
    ])

    if (ownerResult.error) {
      console.error('[contact] Resend error:', ownerResult.error)
      return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
    }
    if (guestResult.error) {
      console.warn('[contact] Confirmation email failed:', guestResult.error)
    }

    try {
      await kv.lpush('submissions', JSON.stringify({
        type: 'contact', name: safeName, email: safeEmail,
        message: safeMessage, createdAt: new Date().toISOString(),
      }))
    } catch { /* KV not configured — non-fatal */ }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Serverfeil' }, { status: 500 })
  }
}
