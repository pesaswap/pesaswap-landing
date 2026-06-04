'use client'

import Logo from "@/components/logo"
import Link from "next/link"

const settings = {
  links: [
    { title: 'Platform', href: '#features' },
    { title: 'Developers', href: '#sdk' },
    { title: 'Revenue Model', href: '#pricing' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Docs', href: 'https://docs.pesaswap.io/introduction', external: true },
    { title: 'Contact', href: 'mailto:info@pesaswap.com' },
  ],
  locations: 'Nairobi, Kenya  ·  Dar es Salaam, Tanzania  ·  Kampala, Uganda',
  copyright: '© 2026 Pesaswap Ltd. All rights reserved.',
  licences: ['BoT Licensed (Tanzania)', 'BoU Licensed (Uganda)', 'CBK Pending (Kenya)', 'NBR Pending (Rwanda)'],
}

export default function Footer() {
  return (
    <div className="relative">
      {/* Full-bleed dark background */}
      <div className="absolute inset-0 -left-4 -right-4 xl:-left-[calc((100vw-64rem)/2)] xl:-right-[calc((100vw-64rem)/2)] bg-primary-deep" style={{ bottom: '-2rem' }} />

      <footer className="relative z-10 w-full py-12 md:py-20 flex flex-col items-center justify-center gap-8 md:gap-10 text-sm">
        {/* Logo */}
        <Logo light />

        {/* Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {settings.links.map(link => (
            <Link
              key={link.title}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-on-primary/50 hover:text-on-primary transition-colors duration-200"
            >{link.title}</Link>
          ))}
        </div>

        {/* Licence badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {settings.licences.map(licence => (
            <span key={licence} className="text-xs px-3 py-1.5 bg-on-primary/5 border border-on-primary/10 rounded-full text-on-primary/40">
              {licence}
            </span>
          ))}
        </div>

        {/* Locations */}
        <p className="text-xs text-on-primary/30 text-center">{settings.locations}</p>

        {/* Copyright */}
        <p className="text-center text-on-primary/30">{settings.copyright}</p>
      </footer>
    </div>
  )
}
