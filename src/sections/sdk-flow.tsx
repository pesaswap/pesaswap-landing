'use client'

import Badge from "@/components/badge"
import BrowserFrame from "@/components/browser-frame"
import SlideEffect from "@/components/slide-effect"
import { ArrowRight, Code2, GitBranch, CheckCircle2 } from "lucide-react"

const settings = {
  badge: { number: 4, text: 'DEVELOPER EXPERIENCE' },
  title: 'Go live with a few lines of code.',
  description: 'One API call routes across every rail, fails over in under two seconds, and settles to the dashboard your team already watches. No per-provider integrations, no manual reconciliation.',
  steps: [
    {
      icon: Code2,
      title: 'Request',
      body: 'Send one POST with the amount and destination. Cards, mobile money, and bank rails share the same contract.',
    },
    {
      icon: GitBranch,
      title: 'Route & failover',
      body: 'Pesaswap picks the best corridor by success rate and cost, then retries across providers in under two seconds.',
    },
    {
      icon: CheckCircle2,
      title: 'Settle & reconcile',
      body: 'FX is applied, the transaction is 3-way reconciled, and the result lands in your dashboard in real time.',
    },
  ],
}

export default function SdkFlow() {
  return (
    <div id="sdk" className="scroll-mt-24 space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 text-center">
      {/* Header */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-ink font-[family-name:var(--font-display)] tracking-tight">
          {settings.title}
        </h2>
      </SlideEffect>
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch]">
        {settings.description}
      </SlideEffect>

      {/* Code + result */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start text-left">
        {/* Code window */}
        <SlideEffect direction="right" isSpring={false} className="h-full">
          <div className="h-full overflow-hidden rounded-[16px] border border-border-dark bg-primary-deep">
            <div className="flex items-center gap-2 border-b border-border-dark px-4 py-3">
              <span className="size-3 rounded-full bg-[#E2655B]" />
              <span className="size-3 rounded-full bg-[#E5B95C]" />
              <span className="size-3 rounded-full bg-[#5FB587]" />
              <span className="ml-3 text-[12px] font-medium tracking-wide text-on-primary/50">
                pesaswap.sh
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 text-[12.5px] md:text-[13.5px] leading-[1.7] font-mono text-on-primary/90">
<code>{`$ `}<span className="text-accent">curl</span>{` https://api.pesaswap.io/v1/payments \\
  -H `}<span className="text-on-primary/70">{`"Authorization: Bearer sk_live_..."`}</span>{` \\
  -d amount=`}<span className="text-accent">45000</span>{` \\
  -d currency=`}<span className="text-accent">USD</span>{` \\
  -d destination=`}<span className="text-accent">mpesa:254712345678</span>{` \\
  -d settlement=`}<span className="text-accent">auto</span>{`

`}<span className="text-on-primary/45">{`# 200 OK`}</span>{`
{
  `}<span className="text-on-primary/60">{`"id"`}</span>{`: `}<span className="text-on-primary/90">{`"pay_4920211"`}</span>{`,
  `}<span className="text-on-primary/60">{`"status"`}</span>{`: `}<span className="text-success font-semibold">{`"settled"`}</span>{`,
  `}<span className="text-on-primary/60">{`"route"`}</span>{`: `}<span className="text-accent">{`"USD → EUR → KES"`}</span>{`,
  `}<span className="text-on-primary/60">{`"provider"`}</span>{`: `}<span className="text-on-primary/90">{`"wise"`}</span>{`,
  `}<span className="text-on-primary/60">{`"settled_in_ms"`}</span>{`: `}<span className="text-on-primary/90">1840</span>{`
}`}</code>
            </pre>
          </div>
        </SlideEffect>

        {/* Result screenshot */}
        <SlideEffect direction="left" isSpring={false}>
          <div className="flex flex-col gap-4">
            <BrowserFrame
              src="/screens/payments-card.png"
              alt="Settled and pending transactions in the Pesaswap dashboard, reconciled in real time"
              width={2176}
              height={662}
              url="app.pesaswap.io/payments"
            />
            <p className="text-sm text-foreground/80 px-1">
              Every call lands as a reconciled transaction. Settled, pending, and failed-over states are visible to your team the moment they happen.
            </p>
          </div>
        </SlideEffect>
      </div>

      {/* 3-step flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left">
        {settings.steps.map((step, i) => (
          <SlideEffect key={step.title} delay={0.1 + i * 0.08} isSpring={false} className="h-full">
            <div className="relative h-full rounded-[16px] bg-secondary p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-on-primary text-sm font-semibold font-[family-name:var(--font-display)]">
                  {i + 1}
                </span>
                <step.icon size={20} className="text-primary" />
              </div>
              <h3 className="mt-4 text-lg md:text-xl text-ink font-semibold font-[family-name:var(--font-display)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm md:text-[15px] leading-relaxed text-foreground/90">
                {step.body}
              </p>
              {i < settings.steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-border-dark/60" size={20} />
              )}
            </div>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}
