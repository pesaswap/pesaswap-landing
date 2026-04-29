'use client'

import Badge from "@/components/badge"
import Card from "@/components/card"
import SlideEffect from "@/components/slide-effect"

const settings = {
  badge: {
    number: 2,
    text: 'THE NETWORK',
  },
  title: 'Four Markets. One Integration.',
  description: 'Licensed and live across East Africa. Direct switch-level integrations, not API wrappers. The depth of these integrations across 15+ rails and 4 markets is years of compliance and engineering work that cannot be replicated quickly.',
  markets: [
    {
      country: 'Tanzania',
      regulator: 'Bank of Tanzania (BoT)',
      status: 'Licensed',
      details: ['5-year PSP licence secured', 'E-commerce collections authorised', 'Digital wallet issuance approved', 'Aggregator functions permitted'],
    },
    {
      country: 'Uganda',
      regulator: 'Bank of Uganda (BoU)',
      status: 'Licensed',
      details: ['5-year operational consent secured', 'Mobile money and bank rails active', 'Live processing across all MNO rails', 'Expansion ready under passporting'],
    },
    {
      country: 'Kenya',
      regulator: 'Central Bank of Kenya (CBK)',
      status: 'Final Stage',
      details: ['All CBK requirements met', 'Final stage approval pending', 'Operating under supervised protocol', 'Passporting to Rwanda on approval'],
    },
    {
      country: 'Rwanda',
      regulator: 'National Bank of Rwanda (NBR)',
      status: 'Advanced',
      details: ['Category A licence (Merchant Aggregation)', 'KIFC framework: 0% tax', '3-4 month licensing process', 'Gateway to Africa positioning'],
    },
  ]
}

export default function Features2() {
  return (
    <div id="network" className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
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

      {/* Market Cards - 2x2 grid with varied styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settings.markets.map((market, index) => (
          <SlideEffect key={market.country} direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1} className="h-full" isSpring={false}>
            <Card variant={index === 0 ? 'elevated' : 'default'}>
              <div className="flex items-start justify-between w-full">
                <div>
                  <h3 className={`text-xl md:text-title font-semibold font-[family-name:var(--font-display)] ${index === 0 ? 'text-on-primary' : 'text-ink'}`}>{market.country}</h3>
                  <p className={`text-sm mt-1 ${index === 0 ? 'text-on-primary/70' : 'text-foreground/70'}`}>{market.regulator}</p>
                </div>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  market.status === 'Licensed'
                    ? 'bg-accent text-ink'
                    : index === 0 ? 'bg-on-primary/10 text-on-primary' : 'bg-primary/10 text-primary'
                }`}>
                  {market.status}
                </span>
              </div>
              <ul className={`text-sm text-start space-y-2 mt-2 ${index === 0 ? 'text-on-primary/80' : 'text-foreground'}`}>
                {market.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={`inline-block w-1 h-1 rounded-full mt-2 shrink-0 ${index === 0 ? 'bg-accent' : 'bg-primary'}`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          </SlideEffect>
        ))}
      </div>
    </div>
  )
}
