import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center px-6 text-center">
      <div className="font-display text-6xl md:text-8xl text-white/10 mb-4">404</div>
      <h1 className="font-display text-2xl md:text-3xl text-white mb-3">
        Page not found
      </h1>
      <p className="text-white/40 text-sm max-w-sm mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back to exploring our apartments.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-sage text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-sage-light transition-colors"
      >
        Back to BA5 Apartments
      </Link>
    </div>
  )
}
