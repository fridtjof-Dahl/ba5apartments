import { NextResponse } from 'next/server'
import { kv } from '@vercel/kv'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const password = searchParams.get('password')

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const items = await kv.lrange('submissions', 0, 99)
    return NextResponse.json({ items })
  } catch {
    return NextResponse.json({ items: [] })
  }
}
