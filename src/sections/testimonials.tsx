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
  title: 'One switch. Every kind of partner.',
  description: 'Payments infrastructure designed for platforms — simple to plug in, built to scale.',
  stats: [
    {
      value: 120,
      prefix: 'USD ',
      suffix: 'Mn+',
      label: 'Processed Volume',
      detail: 'Volume through Tier-1 partner rails',
    },
    {
      value: 3,
      prefix: '',
      suffix: '',
      label: 'Active Countries',
      detail: 'Live operations across East Africa',
    },
    {
      value: 15,
      prefix: '',
      suffix: '',
      label: 'Direct Integrations',
      detail: 'MNOs, banks, and card networks',
    },
    {
      value: 1,
      prefix: 'USD ',
      suffix: 'Bn/mo',
      label: 'Partner Network Reach',
      detail: 'LemFi global processing volume',
    },
  ],
  partners: [
    {
      name: 'Choice Bank',
      quote: "Choice Bank's international merchant flows route through Pesaswap into every East African rail. One contract. Thousands of merchants.",
      role: 'Global PSP · International merchants',
    },
    {
      name: 'LemFi',
      quote: "LemFi processes USD 1Bn/month globally. Pesaswap handles the East African leg of every transaction. Volume is theirs; infrastructure margin is ours.",
      role: 'Remittance · USD 1Bn/month',
    },
    {
      name: 'Nala',
      quote: "Nala routes consumer remittance into East Africa through Pesaswap — the settlement and reconciliation layer beneath every transfer.",
      role: 'Cross-border remittance',
    },
    {
      name: 'Co-op Bank',
      quote: "Co-op Bank distributes Pesaswap-powered QR to their merchant base. Bank distribution network equals instant local merchant coverage at zero CAC.",
      role: 'Bank · QR Distribution',
    },
  ]
}

export default function Testimonials() {
  return (
    <div id='testimonials' className="space-y-5 sm:space-y-6 md:space-y-6 lg:space-y-8 mx-auto text-center">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {settings.stats.map((stat, index) => (
            <Card key={stat.label} variant={index === 1 ? 'elevated' : 'default'} className="!text-center !items-center !p-5 md:!p-6 !gap-2">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {settings.partners.map((partner, index) => (
          <SlideEffect key={partner.name} direction="top" delay={index * 0.15} className="h-full" isSpring={false}>
            <Card className="!p-5 md:!p-6 !gap-3 hover:shadow-[0_2px_12px_rgba(26,31,30,0.06)] transition-shadow duration-300">
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
