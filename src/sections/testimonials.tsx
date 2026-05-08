'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import Counter from "@/components/counter"
import SlideEffect from "@/components/slide-effect"
import TextRevealEffect from "@/components/text-reveal-effect"

const settings = {
  badge: {
    number: 4,
    text: 'TRACTION',
  },
  title: 'Network Orchestration Volume, Not Merchant Count',
  description: 'We scale through platforms. One Tier-1 integration is worth thousands of individual merchant relationships.',
  stats: [
    {
      value: 120,
      prefix: 'USD ',
      suffix: 'Mn+',
      label: 'Network Orchestration Volume',
      detail: 'Processed through Tier-1 partner rails: Zotapay, LemFi, Nala',
    },
    {
      value: 1,
      prefix: 'USD ',
      suffix: 'Bn/mo',
      label: 'Tier-1 Partner Network Reach',
      detail: 'LemFi alone processes USD 1Bn/month. Pesaswap is their East African infrastructure.',
    },
    {
      value: 4,
      prefix: '',
      suffix: ' Markets',
      label: 'Live & Licensed Infrastructure',
      detail: 'Tanzania (BoT), Uganda (BoU), Kenya (CBK pending), Rwanda (NBR pending)',
    },
  ],
  partners: [
    {
      name: 'Zotapay',
      quote: "Zotapay's entire portfolio of international merchants instantly routes through Pesaswap rails. One contract. Thousands of merchants.",
      role: 'Global PSP, International merchants',
    },
    {
      name: 'LemFi',
      quote: "LemFi processes USD 1Bn/month globally. Pesaswap handles the East African leg of every transaction. Volume is theirs; infrastructure margin is ours.",
      role: 'Remittance, USD 1Bn/month',
    },
    {
      name: 'Co-op Bank',
      quote: "Co-op Bank distributes Pesaswap-powered QR to their merchant base. Bank distribution network equals instant local merchant coverage at zero CAC.",
      role: 'Bank, QR Distribution',
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Badge */}
      <SlideEffect>
        <Badge number={settings.badge.number} text={settings.badge.text} />
      </SlideEffect>

      {/* Title */}
      <TextRevealEffect className="text-2xl md:text-4xl lg:text-header text-ink font-semibold leading-[1.1] font-[family-name:var(--font-display)] tracking-tight">{settings.title}</TextRevealEffect>

      {/* Description */}
      <SlideEffect className="px-2 sm:px-10 md:px-0 w-full md:max-w-3/4 mx-auto text-sm lg:text-base max-w-[65ch]">{settings.description}</SlideEffect>

      {/* Stats row */}
      <SlideEffect isSpring={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {settings.stats.map((stat, index) => (
            <Card key={stat.label} variant={index === 1 ? 'elevated' : 'default'} className="!text-center !items-center">
              <p className={`text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] ${index === 1 ? 'text-accent' : 'text-primary'}`}>
                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className={`font-semibold text-sm ${index === 1 ? 'text-on-primary' : 'text-ink'}`}>{stat.label}</p>
              <p className={`text-xs ${index === 1 ? 'text-on-primary/60' : 'text-foreground/60'}`}>{stat.detail}</p>
            </Card>
          ))}
        </div>
      </SlideEffect>

      {/* Partner quotes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
        {settings.partners.map((partner, index) => (
          <SlideEffect key={partner.name} direction="top" delay={index * 0.15} className="h-full" isSpring={false}>
            <Card className="hover:shadow-[0_2px_12px_rgba(26,31,30,0.06)] transition-shadow duration-300">
              <div className="flex items-center gap-2">
                <span className="font-semibold font-[family-name:var(--font-display)] text-ink text-lg">{partner.name}</span>
                <span className="text-xs text-foreground/50 bg-secondary border border-border px-2 py-0.5 rounded-full">{partner.role}</span>
              </div>
              <p className="text-sm leading-relaxed text-start">{partner.quote}</p>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}
