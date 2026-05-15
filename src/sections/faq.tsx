'use client'

import SlideEffect from "@/components/slide-effect"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const settings = {
  title: 'Frequently Asked Questions',
  faqs: [
    {
      question: 'How is Pesaswap different from a PSP like Flutterwave or Paystack?',
      answer: 'We are not a PSP. Pesaswap is the orchestration layer that sits beneath PSPs, banks, and remittance platforms. We do not process payments for merchants directly. Instead, we provide smart routing, FX settlement, and reconciliation infrastructure that platforms use to reach the full East African payment stack through one integration.',
    },
    {
      question: 'What markets does Pesaswap operate in?',
      answer: 'We are licensed and operational in Tanzania (Bank of Tanzania) and Uganda (Bank of Uganda), with Kenya (Central Bank of Kenya) and Rwanda (National Bank of Rwanda) in advanced stages. The Kenya-Rwanda PSP Licence Passporting Framework, live since March 2026, allows one licence to cover two high-growth markets. West Africa expansion is on our roadmap as we scale the orchestration layer across the continent.',
    },
    {
      question: 'What payment rails are supported?',
      answer: 'We have direct switch-level integrations with M-Pesa (Kenya), Airtel Money (Kenya/Uganda/Rwanda), MTN MoMo (Uganda/Rwanda), KCB, Co-op Bank, Choice Bank, and i&M Bank. These are direct integrations, not API wrappers. The depth of these integrations across 15 rails and 4 markets represents years of compliance and engineering work.',
    },
    {
      question: 'How does the B2B2X model work?',
      answer: 'One integration with a Tier-1 aggregator is worth thousands of individual merchant relationships. When a global PSP signs with Pesaswap, their entire portfolio of international merchants instantly routes through our rails. When Co-op Bank distributes Pesaswap-powered QR, we get instant local merchant coverage at zero acquisition cost. We scale through platforms, not individual merchants.',
    },
    {
      question: 'What is the integration process?',
      answer: 'Pesaswap offers a single RESTful API that provides access to all supported payment corridors across four markets. Integration typically takes days, not months. Our documentation covers mobile money collections, bank transfers, FX settlement, QR payments, and wallet-to-wallet transfers. We provide dedicated integration support for Tier-1 partners.',
    },
    {
      question: 'How does Pesaswap handle FX settlement?',
      answer: 'Cross-border FX settlement happens in minutes, not the 3-7 days typical of traditional rails. We settle directly into East African wallets or bank accounts from UK, US, and EU sources. The FX spread on each settlement is our most profitable revenue rail, with lower network costs than card processing.',
    },
  ]
}

export default function FAQ() {
  return (
    <div id='faq' className="space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10 mx-auto text-center">
      {/* Title */}
      <SlideEffect>
        <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-ink font-[family-name:var(--font-display)] tracking-tight">{settings.title}</h2>
      </SlideEffect>

      {/* Accordion */}
      <SlideEffect>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto text-base text-ink">
          {settings.faqs.map((faq, index) => (
            <AccordionItem key={index} value={index + '-item'}>
              <AccordionTrigger className="font-[family-name:var(--font-display)] font-semibold text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-foreground leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SlideEffect>
    </div>
  )
}
