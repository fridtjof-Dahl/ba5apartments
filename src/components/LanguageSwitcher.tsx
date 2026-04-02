'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { Globe } from 'lucide-react'

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

  const activeClass = scrolled ? 'text-ink' : 'text-white'
  const inactiveClass = scrolled
    ? 'text-ink-light/50 hover:text-ink'
    : 'text-white/35 hover:text-white'
  const iconClass = scrolled ? 'text-ink-light' : 'text-white/50'

  return (
    <div className="flex items-center gap-1.5">
      <Globe size={14} className={`${iconClass} flex-shrink-0`} strokeWidth={1.5} />
      <button
        type="button"
        onClick={() => switchTo('en')}
        className={`text-[11px] font-medium tracking-wide px-0.5 py-1 min-h-[40px] sm:min-h-0 transition-colors ${
          locale === 'en' ? activeClass : inactiveClass
        }`}
      >
        EN
      </button>
      <span className={`text-[10px] ${scrolled ? 'text-ink-faint/40' : 'text-white/20'}`}>/</span>
      <button
        type="button"
        onClick={() => switchTo('no')}
        className={`text-[11px] font-medium tracking-wide px-0.5 py-1 min-h-[40px] sm:min-h-0 transition-colors ${
          locale === 'no' ? activeClass : inactiveClass
        }`}
      >
        NO
      </button>
    </div>
  )
}
