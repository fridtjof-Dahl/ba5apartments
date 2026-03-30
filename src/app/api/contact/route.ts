import { NextResponse } from 'next/server'
import { Resend } from 'resend'
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

    const { error } = await resend.emails.send({
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
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Serverfeil' }, { status: 500 })
  }
}
