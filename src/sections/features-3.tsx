'use client'

import ArchitectureDiagram from "@/components/architecture-diagram"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 2,
    text: 'THE ARCHITECTURE',
  },
  title: (
    <>
      Pesaswap sits in the <span className="text-accent">middle</span>.
    </>
  ),
  description:
    'One unified API. Smart routing across mobile money, cards, and bank rails. Whitelabel, secure, sub-2s failover.',
  closer:
    'Every merchant above uses Pesaswap to reach every rail below, through one integration, one contract, one reconciliation file.',
}

export default function Features3() {
  return (
    <div className="relative">
      {/* Full-bleed cream background */}
      <div
        className="absolute inset-0 -left-4 -right-4 xl:-left-[calc((100vw-64rem)/2)] xl:-right-[calc((100vw-64rem)/2)] bg-secondary"
        style={{ top: '-4rem', bottom: '-4rem' }}
      />
      {/* Top + bottom hairline accents like the reference illustration */}
      <div
        className="absolute -left-4 -right-4 xl:-left-[calc((100vw-64rem)/2)] xl:-right-[calc((100vw-64rem)/2)] h-px bg-accent/60"
        style={{ top: '-4rem' }}
      />
      <div
        className="absolute -left-4 -right-4 xl:-left-[calc((100vw-64rem)/2)] xl:-right-[calc((100vw-64rem)/2)] h-px bg-accent/60"
        style={{ bottom: '-4rem' }}
      />

      <div className="relative z-10 py-16 md:py-24 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto">
        {/* Badge */}
        <SlideEffect>
          <div className="flex items-center h-8 text-ink text-[12px] md:text-[14px] bg-primary/10 border border-primary/20 w-fit rounded-full mx-auto font-[family-name:var(--font-body)]">
            <div className="h-8 w-8 flex items-center justify-center bg-primary text-on-primary rounded-full font-medium text-[14px] md:text-[16px]">
              {settings.badge.number}
            </div>
            <div className="uppercase tracking-[0.06em] py-2 px-4 w-fit font-medium">{settings.badge.text}</div>
          </div>
        </SlideEffect>

        {/* Title */}
        <SlideEffect>
          <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-ink font-[family-name:var(--font-display)] tracking-tight text-center max-w-[18ch] md:max-w-none mx-auto">
            {settings.title}
          </h2>
        </SlideEffect>

        {/* Description */}
        <SlideEffect className="text-center px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch] text-foreground/80">
          {settings.description}
        </SlideEffect>

        {/* Diagram */}
        <SlideEffect isSpring={false} duration={1}>
          <div className="pt-6 md:pt-10">
            <ArchitectureDiagram />
          </div>
        </SlideEffect>

        {/* Closer */}
        <SlideEffect>
          <p className="text-sm text-foreground/60 italic max-w-[60ch] mx-auto text-center pt-2">
            {settings.closer}
          </p>
        </SlideEffect>
      </div>
    </div>
  )
}
