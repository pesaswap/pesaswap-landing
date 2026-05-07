'use client'

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
    <div className="relative">
      {/* Full-bleed teal background */}
      <div className="absolute inset-0 -left-4 -right-4 xl:-left-[calc((100vw-64rem)/2)] xl:-right-[calc((100vw-64rem)/2)] bg-primary" style={{ top: '-4rem', bottom: '-4rem' }} />

      <div className="relative z-10 py-16 md:py-24 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
        {/* Badge */}
        <SlideEffect>
          <div className="flex items-center h-8 text-on-primary text-[12px] md:text-[14px] bg-on-primary/10 border border-on-primary/15 w-fit rounded-full mx-auto font-[family-name:var(--font-body)]">
            <div className="h-8 w-8 flex items-center justify-center bg-accent text-ink rounded-full font-medium text-[14px] md:text-[16px]">{settings.badge.number}</div>
            <div className="uppercase tracking-[0.06em] py-2 px-4 w-fit font-medium">{settings.badge.text}</div>
          </div>
        </SlideEffect>

        {/* Title */}
        <SlideEffect>
          <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-on-primary font-[family-name:var(--font-display)] tracking-tight">{settings.title}</h2>
        </SlideEffect>

        {/* Description */}
        <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch] text-on-primary/70">{settings.description}</SlideEffect>

        {/* Architecture diagram */}
        <SlideEffect isSpring={false} duration={1}>
          <div className="space-y-5">
            {/* Layer 1: Merchant & Platform Layer */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.08em] text-on-primary/40 font-medium">Layer 1: Merchant &amp; Platform Layer</p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {settings.layers.platforms.map((name) => (
                  <div key={name} className="px-4 py-2.5 bg-on-primary/10 border border-on-primary/15 rounded-[10px] text-sm font-medium text-on-primary">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-1">
              <div className="w-px h-8 bg-accent/40" />
            </div>

            {/* Layer 2: Pesaswap Orchestration */}
            <div className="bg-accent/15 border border-accent/30 rounded-[16px] p-6 md:p-8 text-center">
              <p className="text-xs uppercase tracking-[0.08em] text-accent font-semibold mb-4">Pesaswap: Orchestration Infrastructure Layer</p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {settings.layers.capabilities.map((cap) => (
                  <div key={cap} className="px-3 py-2 bg-accent/20 border border-accent/30 rounded-[8px] text-sm text-on-primary font-medium">
                    {cap}
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow down */}
            <div className="flex justify-center py-1">
              <div className="w-px h-8 bg-accent/40" />
            </div>

            {/* Layer 3: Local Payment Rails */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.08em] text-on-primary/40 font-medium">Layer 3: Local Payment Rails</p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {settings.layers.rails.map((name) => (
                  <div key={name} className="px-4 py-2.5 bg-on-primary/10 border border-on-primary/15 rounded-[10px] text-sm font-medium text-on-primary">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideEffect>

        {/* Bottom statement */}
        <SlideEffect>
          <p className="text-sm text-on-primary/50 italic max-w-[55ch] mx-auto">
            Every platform above uses Pesaswap to reach every rail below: through one integration, one contract, one reconciliation file.
          </p>
        </SlideEffect>
      </div>
    </div>
  )
}
