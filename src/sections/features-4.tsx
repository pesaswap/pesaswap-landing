'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Check, X } from "lucide-react"

const settings = {
  badge: {
    number: 3,
    text: 'WHY PESASWAP',
  },
  title: 'Others Lock Merchants In. We Unlock the Network.',
  description: 'The market is full of closed PSP ecosystems. Pesaswap is the only open orchestration layer.',
  comparison: {
    closed: {
      label: 'Closed PSP Ecosystem',
      names: 'Flutterwave, Paystack, Cellulant, PesaPal',
      points: [
        'Merchant locked into ONE provider',
        'Single point of failure, no failover',
        'Country-by-country integration required',
        'Opaque FX rates, manual reconciliation',
        'Concentration risk: if provider fails, you fail',
      ]
    },
    open: {
      label: 'Open Orchestration Layer',
      names: 'Pesaswap',
      points: [
        'Merchant chooses any provider, we route optimally',
        'Automated failover across 15 direct integrations',
        'One API, every corridor across 4 markets',
        'Real-time FX settlement with automated reconciliation',
        'No concentration risk: multi-rail by design',
      ]
    }
  }
}

export default function Features4() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-ink font-[family-name:var(--font-display)] tracking-tight max-w-[22ch] mx-auto">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch]">{settings.description}</SlideEffect>

      {/* Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Closed PSP */}
        <SlideEffect direction="right" className="h-full" isSpring={false}>
          <Card>
            <p className="text-xs uppercase tracking-[0.08em] text-foreground/50 font-medium">{settings.comparison.closed.label}</p>
            <p className="text-sm text-foreground/60 -mt-2">{settings.comparison.closed.names}</p>
            <ul className="text-sm text-start space-y-3 mt-2 w-full">
              {settings.comparison.closed.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={12} className="text-red-600" />
                  </span>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </SlideEffect>

        {/* Open Orchestration */}
        <SlideEffect direction="left" className="h-full" isSpring={false}>
          <Card variant="elevated">
            <p className="text-xs uppercase tracking-[0.08em] text-on-primary/60 font-medium">{settings.comparison.open.label}</p>
            <p className="text-sm text-accent -mt-2">{settings.comparison.open.names}</p>
            <ul className="text-sm text-start space-y-3 mt-2 w-full">
              {settings.comparison.open.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check size={12} className="text-accent" />
                  </span>
                  <span className="text-on-primary/90">{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        </SlideEffect>
      </div>

      {/* Bottom quote */}
      <SlideEffect>
        <p className="text-sm text-foreground/70 italic max-w-[55ch] mx-auto">
          {'"We are not competing with PSPs; we are the infrastructure that connects and optimises them."'}
        </p>
      </SlideEffect>
    </div>
  )
}
