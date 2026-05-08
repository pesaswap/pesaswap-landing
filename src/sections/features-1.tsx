'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"
import { ArrowRight, Zap, Shield, RefreshCw } from "lucide-react"

const settings = {
  badge: {
    number: 1,
    text: 'THE INFRASTRUCTURE',
  },
  title: 'Beyond Payment Processing.',
  description: 'Pesaswap enables platforms to operate across local payment networks with optimized routing, instant FX settlement, and centralized reconciliation — all through a single API integration.',
}

export default function Features1() {
  return (
    <div id='features' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
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

      {/* Cards - asymmetric layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Large featured card */}
        <SlideEffect direction="right" className="col-span-1 lg:col-span-5 h-full" isSpring={false}>
          <Card variant="elevated">
            <div className="p-2">
              <Zap size={28} className="text-accent mb-4" />
              <h3 className="text-xl md:text-title text-on-primary font-semibold font-[family-name:var(--font-display)]">Smart Routing</h3>
              <p className="mt-3 text-on-primary/80 leading-relaxed">Intelligent transaction routing across 15+ direct MNO and bank integrations. Automated failover and success rate optimisation across every corridor.</p>
            </div>
          </Card>
        </SlideEffect>

        {/* Two stacked cards */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
          <SlideEffect direction="left" duration={1} className="h-full" isSpring={false}>
            <Card>
              <div className="flex items-start gap-4 p-2">
                <RefreshCw size={24} className="text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl md:text-title text-ink font-semibold font-[family-name:var(--font-display)]">Real-Time FX Settlement</h3>
                  <p className="mt-2 leading-relaxed">Cross-border FX in minutes, not days. UK/US/EU to East Africa wallet or bank account. FX spread is the most profitable revenue rail.</p>
                </div>
              </div>
            </Card>
          </SlideEffect>

          <SlideEffect direction="left" duration={1.2} className="h-full" isSpring={false}>
            <Card>
              <div className="flex items-start gap-4 p-2">
                <Shield size={24} className="text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl md:text-title text-ink font-semibold font-[family-name:var(--font-display)]">3-Way Reconciliation</h3>
                  <p className="mt-2 leading-relaxed">Automated reconciliation across bank ledger, MNO transaction log, and merchant statement. Zero manual settlement work. Full audit trail.</p>
                </div>
              </div>
            </Card>
          </SlideEffect>
        </div>
      </div>

      {/* Open PSP highlight */}
      <SlideEffect isSpring={false}>
        <div className="flex items-center justify-center gap-3 text-sm text-primary font-medium mt-4">
          <span>One API. Any MNO, any bank, any PSP. No lock-in.</span>
          <ArrowRight size={16} />
        </div>
      </SlideEffect>
    </div>
  )
}
