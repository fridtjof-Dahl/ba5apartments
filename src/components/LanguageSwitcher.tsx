'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Globe } from 'lucide-react'

interface Props {
  scrolled?: boolean
}

export default function LanguageSwitcher({ scrolled = false }: Props) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const otherLocale = locale === 'en' ? 'no' : 'en'
  const label = otherLocale.toUpperCase()

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale })
  }

  return (
    <button
      onClick={switchLocale}
      className={`flex items-center gap-1.5 text-[12px] font-semibold px-3 py-1.5 rounded-full border transition-all ${
        scrolled
          ? 'border-gray-200 text-ink-light hover:text-ink hover:border-gray-400'
          : 'border-white/20 text-white/70 hover:text-white hover:border-white/50'
      }`}
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Norwegian'}`}
    >
      <Globe size={13} />
      {label}
    </button>
  )
}
