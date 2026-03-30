# BA5 Apartments — Prosjektkontekst

## Hva dette er

Nettside for BA5 Apartments, et korttidsutleieselskap i Oslo, Norge.
URL: **ba5apartments.com** | Dev: `npm run dev -- --port 4000`

## Teknisk stack

- **Framework**: Next.js 15 (App Router, React 19)
- **Språk**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animasjoner**: Framer Motion
- **E-post**: Resend (`RESEND_API_KEY`)
- **Lagring**: Vercel KV / Upstash Redis
- **Deploy**: Vercel

## Prosjektstruktur

```
src/
  app/
    page.tsx              — Hjemmeside (Hero, BookingSection, ApartmentShowcase, Contact)
    apartments/[id]/
      page.tsx            — Server component (generateStaticParams, generateMetadata)
      ApartmentPage.tsx   — Client component (hero, stats, bookingskjema)
    api/
      booking/route.ts    — POST: sender e-post + lagrer i KV
      contact/route.ts    — POST: sender e-post + lagrer i KV
      submissions/route.ts — GET: henter innlegg (admin-bruk)
    admin/page.tsx        — Passord-beskyttet admin-panel
    sitemap.ts            — Auto-generert sitemap
  components/
    BookingSection.tsx    — Bookingskjema (spam-beskyttet)
    Contact.tsx           — Kontaktskjema (spam-beskyttet)
    ApartmentShowcase.tsx — Grid med leilighetskort
    Hero.tsx, Navbar.tsx, Footer.tsx, etc.
  data/
    apartments.ts         — Array med 7 leiligheter (id, name, location, features, etc.)
  lib/
    spam.ts               — Honeypot, rate limiting (3/60s per IP), sanitize
```

## Leiligheter (7 totalt)

IDs: `oslo-vest-hostel`, `bygdoy-two-room`, `majorstuen-stylish`, `solli-studio`, `frogner-premium`, `aker-brygge-modern`, `grunerløkka-cozy`

## Miljøvariabler (`.env.local`)

```
RESEND_API_KEY=re_xxxx
ADMIN_PASSWORD=xxx
KV_REST_API_URL=https://xxx.upstash.io
KV_REST_API_TOKEN=xxx
```

## E-post

- **Fra**: `BA5 Apartments <no-reply@ba5apartments.com>`
- **Til eier**: `post@ba5apartments.com`
- **Bekreftelses-e-post til gjest**: sendes via `Promise.all`

## Spam-beskyttelse

Alle skjemaer har: honeypot-felt (`_hp`), timing-sjekk (`_t`, <3s = bot), rate limiting per IP

## Admin-panel

Tilgang: `/admin` — passord fra `ADMIN_PASSWORD` env-variabel
Data: hentes fra `/api/submissions?password=xxx` → KV `submissions` liste

## Design-system

Farger (tailwind.config): `sand` (bakgrunn), `ink` (tekst), `sage` (aksentfarge grønn), `dark`
Font: `font-display` (serif) for overskrifter

## Viktige regler

- Alltid bruk `sanitize()` fra `@/lib/spam` på bruker-input i API-ruter
- Ikke bruk `<img>` direkte — bruk Next.js `Image` eller `backgroundImage` style
- Skjemavalidering skjer server-side i route.ts, ikke bare client-side
- `generateStaticParams` må returnere alle leilighets-IDs for statisk bygg
