'use client'

import Logo from "@/components/logo"
import Link from "next/link"

const settings = {
  links: [
    { title: 'Features', href: '#features' },
    { title: 'Network', href: '#network' },
    { title: 'Revenue Model', href: '#pricing' },
    { title: 'FAQ', href: '#faq' },
    { title: 'Contact', href: 'mailto:info@pesaswap.com' },
  ],
  locations: 'Nairobi, Kenya  ·  Dar es Salaam, Tanzania  ·  Kampala, Uganda',
  copyright: '© 2026 Pesaswap Ltd. All rights reserved.'
}

export default function Footer() {
  return (
    <footer className="w-full py-8 md:py-16 flex flex-col items-center justify-center gap-7 md:gap-10 text-sm border-t border-border">
      {/* Logo */}
      <Logo />

      {/* Nav Links */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {settings.links.map(link => (
          <Link key={link.title} href={link.href} className="text-foreground hover:text-ink transition-colors duration-200">{link.title}</Link>
        ))}
      </div>

      {/* Locations */}
      <p className="text-xs text-foreground/50 text-center">{settings.locations}</p>

      {/* Copyright */}
      <p className="text-center text-foreground/50">{settings.copyright}</p>
    </footer>
  )
}
