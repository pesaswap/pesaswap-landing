'use client'

import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

const settings = {
  title: 'Revenue Model',
  description: 'Gross-margin positive from day one. Four compounding revenue rails that scale with volume. No consumer acquisition cost.',
  streams: [
    {
      name: 'Transaction Fees',
      subtitle: 'Volume-Based Collections',
      tag: 'Primary volume driver',
      description: 'Percentage fee on every inbound payment processed: e-commerce, QR, remittance receipts.',
      details: [
        'Transaction pricing shared on a call',
        'Scales linearly with merchant throughput',
        'Primary driver: Kenya collections volume',
        'Whitelabel-ready merchant checkout',
      ]
    },
    {
      name: 'FX & Treasury',
      subtitle: 'Cross-Border Settlement',
      tag: 'Highest-margin rail',
      description: 'Seamless cross-border settlement and treasury services from UK/US/EU into East Africa.',
      details: [
        'Revenue from FX spread per settlement',
        'Highest-margin rail at current scale',
        'Treasury services for partner platforms',
        'Corridor: EU/UK/US to KE/TZ/UG/RW',
      ]
    },
    {
      name: 'Wallet-to-Wallet',
      subtitle: 'P2P & Diaspora',
      tag: 'Fastest-growing rail',
      description: 'Fee on wallet top-ups, P2P transfers, and diaspora corridors. Low friction, high frequency.',
      details: [
        'Fee per wallet transaction',
        'Lowest network cost structure',
        'Diaspora corridor primary use case',
        'Multiplier via aggregator partnerships',
      ]
    },
    {
      name: 'Invoice & QR',
      subtitle: 'Corporate Collections',
      tag: 'Bank-distributed rail',
      description: 'Corporate invoice management and QR-driven collection, distributed through bank partnerships.',
      details: [
        'Fee on invoice settlement and QR collections',
        'Distributed via bank partner networks',
        'Corporate and SME billing use case',
        'Instant local merchant coverage',
      ]
    },
  ]
}

export default function Pricing() {
  return (
    <div id='pricing' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-ink font-[family-name:var(--font-display)] tracking-tight">{settings.title}</h2>
      </SlideEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch]">{settings.description}</SlideEffect>

      {/* Revenue Streams */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settings.streams.map((stream, index) => (
          <SlideEffect key={stream.name} isSpring={false} delay={index * 0.1} className="text-base h-full">
            <Card variant={index === 1 ? 'elevated' : 'default'} className="h-full">
              <div className="w-full">
                <div className="text-start">
                  <h3 className={`text-xl md:text-title font-semibold font-[family-name:var(--font-display)] ${index === 1 ? 'text-on-primary' : 'text-ink'}`}>{stream.name}</h3>
                  <p className={`text-sm mt-0.5 ${index === 1 ? 'text-on-primary/70' : 'text-foreground/70'}`}>{stream.subtitle}</p>
                </div>
                <div className={`text-xs font-medium px-3 py-1 rounded-full w-fit mt-3 ${
                  index === 1 ? 'bg-accent text-ink' : 'bg-primary/10 text-primary'
                }`}>
                  {stream.tag}
                </div>
              </div>
              <p className={`text-sm text-start ${index === 1 ? 'text-on-primary/80' : ''}`}>{stream.description}</p>
              <div className="text-start space-y-3 mt-auto w-full">
                {stream.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <CircleCheck className={`shrink-0 mt-0.5 ${index === 1 ? 'text-accent' : 'text-primary'}`} size={16} />
                    <span className={index === 1 ? 'text-on-primary/80' : ''}>{detail}</span>
                  </div>
                ))}
              </div>
            </Card>
          </SlideEffect>
        ))}
      </div>

      {/* Bottom CTA */}
      <SlideEffect>
        <div className="flex flex-col items-center gap-3 mt-4">
          <p className="text-sm text-foreground/70">EBITDA positive at USD 4M/month processing volume. Targeted early 2027.</p>
          <Button variant="accent">Schedule a call</Button>
        </div>
      </SlideEffect>
    </div>
  )
}
