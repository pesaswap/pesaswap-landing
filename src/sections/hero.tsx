'use client'

import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const settings = {
  headline: 'The Rail Powering Cross-Border Commerce into Africa.',
  subheadline: 'Payment orchestration infrastructure for East Africa. Smart routing, real-time FX settlement, and 3-way automated reconciliation across 15+ direct integrations. One API, four markets, zero lock-in.',
  mainCTA: {
    content: 'Talk to our team',
    href: '#'
  },
  secondaryCTA: {
    content: 'View documentation',
    href: '#'
  },
  proofPoints: [
    { value: 'USD 120Mn+', label: 'Processed' },
    { value: '4 Markets', label: 'Licensed' },
    { value: '15+', label: 'Direct Integrations' },
  ]
}

export default function Hero() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20 z-50 relative">
      <Navbar />

      <section className="flex flex-col gap-8 lg:gap-10 items-center text-center">
        {/* Headline */}
        <h1 className="text-ink text-4xl md:text-6xl lg:text-hero font-bold tracking-tight leading-[1.05] xl:max-w-4/5 font-[family-name:var(--font-display)]">
          <TextBlurEffect className='text-ink'>{settings.headline}</TextBlurEffect>
        </h1>

        {/* Sub-headline */}
        <SlideEffect
          delay={0}
          className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto max-w-[65ch]"
        >
          {settings.subheadline}
        </SlideEffect>

        {/* CTA */}
        <SlideEffect
          className="flex flex-col gap-8 md:gap-5 items-center justify-center w-full md:w-fit"
        >
          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4 mt-1">
            <Link href={settings.mainCTA.href} className="w-full md:w-auto">
              <Button size='lg' className="w-full md:w-auto">
                {settings.mainCTA.content}
                <ArrowRight />
              </Button>
            </Link>

            <Link href={settings.secondaryCTA.href} className="w-full md:w-auto">
              <Button size='lg' className="w-full md:w-auto" variant='secondary'>
                {settings.secondaryCTA.content}
              </Button>
            </Link>
          </div>

          {/* Proof Points */}
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {settings.proofPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full">
                <span className="font-[family-name:var(--font-display)] font-bold text-sm md:text-base text-ink">{point.value}</span>
                <span className="text-xs md:text-sm text-foreground">{point.label}</span>
              </div>
            ))}
          </div>
        </SlideEffect>

        {/* Partner logos */}
        <SlideEffect className="w-full pt-8 md:pt-12" isSpring={false} duration={1.3}>
          <p className="text-xs uppercase tracking-[0.08em] text-foreground/60 mb-6 font-medium">Trusted by leading platforms</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {['Zotapay', 'LemFi', 'Nala', 'Seven By Far', 'Co-op Bank'].map((name) => (
              <span key={name} className="text-ink font-[family-name:var(--font-display)] font-semibold text-lg md:text-xl">{name}</span>
            ))}
          </div>
        </SlideEffect>
      </section>
    </div>
  )
}
