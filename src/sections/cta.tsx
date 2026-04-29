'use client'

import SlideEffect from "@/components/slide-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const settings = {
  title: 'Partner with Us to Power the Future of African Commerce.',
  description: 'We have the infrastructure. We have the licences. We have the traction. Join the platforms, banks, and aggregators building on Pesaswap.',
  CTA: {
    content: 'Talk to our team',
    href: '#'
  }
}

export default function CTA() {
  return (
    <SlideEffect isSpring={false} className="mx-auto text-center p-8 md:p-16 flex flex-col items-center justify-center gap-6 md:gap-8 rounded-[16px] bg-primary">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl lg:text-header font-semibold leading-[1.1] text-on-primary font-[family-name:var(--font-display)] tracking-tight max-w-[20ch]">{settings.title}</h2>

      {/* Description */}
      <p className="px-0 sm:px-10 md:px-0 w-full max-w-full md:max-w-3/4 mx-auto text-sm lg:text-base text-on-primary/80 max-w-[55ch] leading-relaxed">{settings.description}</p>

      {/* CTA */}
      <Link href={settings.CTA.href}>
        <Button variant="accent" size='lg'>
          {settings.CTA.content}
          <ArrowRight />
        </Button>
      </Link>

      {/* Contact info */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs text-on-primary/50">
        <span>info@pesaswap.com</span>
        <span>+254 722 102 170</span>
        <span>Nairobi, Kenya</span>
      </div>
    </SlideEffect>
  )
}
