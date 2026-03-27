'use client'

import { Shield, Sparkles, Key, Wifi } from 'lucide-react'

const items = [
  { icon: Shield, text: 'Verifisert & trygt' },
  { icon: Sparkles, text: 'Profesjonelt rengjort' },
  { icon: Key, text: 'Selvinnsjekking' },
  { icon: Wifi, text: 'Gratis WiFi' },
]

export default function Features() {
  return (
    <div className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-8 md:gap-14">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2.5 text-ink-light">
            <Icon size={18} strokeWidth={1.5} className="text-sage" />
            <span className="text-sm font-medium">{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
