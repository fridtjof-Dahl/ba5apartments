'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

interface Props {
  scrolled?: boolean
}

export default function LanguageSwitcher({ scrolled = false }: Props) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function switchTo(target: string) {
    if (target === locale) return
    router.replace(pathname, { locale: target })
  }

  const borderClass = scrolled
    ? 'border-gray-200'
    : 'border-white/20'

  const activeClass = scrolled
    ? 'bg-dark text-white'
    : 'bg-white text-ink'

  const inactiveClass = scrolled
    ? 'text-ink-light hover:text-ink'
    : 'text-white/50 hover:text-white'

  return (
    <div className={`flex items-center rounded-full border ${borderClass} overflow-hidden transition-all`}>
      <button
        onClick={() => switchTo('en')}
        className={`text-[11px] font-semibold px-2.5 py-1 transition-all ${
          locale === 'en' ? activeClass : inactiveClass
        }`}
      >
        EN
      </button>
      <div className={`w-px h-3.5 ${scrolled ? 'bg-gray-200' : 'bg-white/20'}`} />
      <button
        onClick={() => switchTo('no')}
        className={`text-[11px] font-semibold px-2.5 py-1 transition-all ${
          locale === 'no' ? activeClass : inactiveClass
        }`}
      >
        NO
      </button>
    </div>
  )
}
