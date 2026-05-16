'use client'

import Navbar from "@/components/navbar";
import SlideEffect from "@/components/slide-effect";
import TextBlurEffect from "@/components/text-blur-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const settings = {
  headline: 'The Rail Powering Cross-Border Commerce into Africa.',
  subheadline: 'B2B2X payment orchestration for Africa. Smart routing, instant auto-failover, and real-time FX settlement — connecting every platform to every African payment rail through a single API.',
  mainCTA: {
    content: 'Talk to our team',
    href: '#contact'
  },
  secondaryCTA: {
    content: 'View documentation',
    href: 'https://docs.pesaswap.io/introduction'
  },
  proofPoints: [
    { value: 'USD 120Mn+', label: 'Processed Volume' },
    { value: '3', label: 'Active Countries' },
    { value: '15', label: 'Direct Integrations' },
    { value: 'USD 1Bn/mo', label: 'Partner Network Reach' },
  ],
}

export default function Hero() {
  return (
    <div className="relative">
      {/* Solid hero background - breaks out of container */}
      <div
        className="absolute inset-0 -left-4 -right-4 xl:-left-[calc((100vw-64rem)/2)] xl:-right-[calc((100vw-64rem)/2)] -top-4 bg-primary"
        style={{ bottom: '-3rem' }}
      />

      <div className="relative z-10 space-y-12 md:space-y-16 lg:space-y-20">
        <Navbar />

        <section className="flex flex-col gap-8 lg:gap-10 items-center text-center pb-8 md:pb-12">
          {/* Headline */}
          <h1 className="text-on-primary text-4xl md:text-6xl lg:text-hero font-bold tracking-tight leading-[1.05] xl:max-w-4/5 font-[family-name:var(--font-display)]">
            <TextBlurEffect className='text-on-primary'>{settings.headline}</TextBlurEffect>
          </h1>

          {/* Sub-headline */}
          <SlideEffect
            delay={0}
            className="text-sm lg:text-base px-6 sm:px-10 md:px-0 md:max-w-3/4 mx-auto max-w-[65ch] text-on-primary/70 leading-relaxed"
          >
            {settings.subheadline}
          </SlideEffect>

          {/* CTA */}
          <SlideEffect className="flex flex-col gap-6 md:gap-5 items-center justify-center w-full md:w-fit">
            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center w-full justify-center gap-3 md:gap-4">
              <a
                href={settings.mainCTA.href}
                className="w-full md:w-auto"
                onClick={(e) => {
                  if (settings.mainCTA.href.startsWith('#')) {
                    e.preventDefault()
                    document.querySelector(settings.mainCTA.href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                }}
              >
                <Button size='lg' variant="accent" className="w-full md:w-auto">
                  {settings.mainCTA.content}
                  <ArrowRight />
                </Button>
              </a>

              <Link href={settings.secondaryCTA.href} className="w-full md:w-auto">
                <Button size='lg' className="w-full md:w-auto bg-on-primary/10 text-on-primary border-on-primary/20 hover:bg-on-primary/20">
                  {settings.secondaryCTA.content}
                </Button>
              </Link>
            </div>

            {/* Proof Points */}
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
              {settings.proofPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 bg-on-primary/10 border border-on-primary/15 rounded-full">
                  <span className="font-[family-name:var(--font-display)] font-bold text-sm md:text-base text-accent">{point.value}</span>
                  <span className="text-xs md:text-sm text-on-primary/60">{point.label}</span>
                </div>
              ))}
            </div>
          </SlideEffect>

        </section>
      </div>
    </div>
  )
}
