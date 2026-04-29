'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 3,
    text: 'THE ARCHITECTURE',
  },
  title: 'Pesaswap Sits in the Middle',
  description: 'Platforms on top. Local rails below. We connect and optimise the flow between them.',
  layers: {
    platforms: ['Zotapay', 'LemFi', 'Nala', 'Seven By Far', 'International PSPs', 'Remittance Platforms'],
    capabilities: ['Smart Routing & Failover', 'Real-Time FX Settlement', '3-Way Auto Reconciliation', 'Success Rate Optimisation', 'OPEN PSP API Layer'],
    rails: ['M-Pesa', 'Airtel Money', 'MTN MoMo', 'KCB', 'Co-op Bank', 'Choice Bank'],
  }
}

export default function Features3() {
  return (
    <div className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-ink font-[family-name:var(--font-display)] tracking-tight">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch]">{settings.description}</SlideEffect>

      {/* Architecture diagram */}
      <SlideEffect isSpring={false} duration={1}>
        <div className="space-y-4">
          {/* Layer 1: Merchant & Platform Layer */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.08em] text-foreground/50 font-medium">Layer 1: Merchant &amp; Platform Layer</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {settings.layers.platforms.map((name) => (
                <div key={name} className="px-4 py-2.5 bg-secondary border border-border rounded-[10px] text-sm font-medium text-ink">
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center py-2">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Layer 2: Pesaswap Orchestration */}
          <Card variant="elevated" className="!text-center !items-center">
            <p className="text-xs uppercase tracking-[0.08em] text-on-primary/60 font-medium">Pesaswap: Orchestration Infrastructure Layer</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-2">
              {settings.layers.capabilities.map((cap) => (
                <div key={cap} className="px-3 py-2 bg-on-primary/10 border border-on-primary/20 rounded-[8px] text-sm text-on-primary font-medium">
                  {cap}
                </div>
              ))}
            </div>
          </Card>

          {/* Arrow down */}
          <div className="flex justify-center py-2">
            <div className="w-px h-8 bg-border" />
          </div>

          {/* Layer 3: Local Payment Rails */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.08em] text-foreground/50 font-medium">Layer 3: Local Payment Rails</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {settings.layers.rails.map((name) => (
                <div key={name} className="px-4 py-2.5 bg-secondary border border-border rounded-[10px] text-sm font-medium text-ink">
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SlideEffect>

      {/* Bottom statement */}
      <SlideEffect>
        <p className="text-sm text-foreground/70 italic max-w-[55ch] mx-auto">
          Every platform above uses Pesaswap to reach every rail below: through one integration, one contract, one reconciliation file.
        </p>
      </SlideEffect>
    </div>
  )
}
