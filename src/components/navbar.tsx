'use client'

import Logo from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"
import { AlignJustify, X } from "lucide-react"
import { AnimatePresence } from 'motion/react'
import * as motion from "motion/react-m"
import { useState } from "react"

const settings = {
  navLinks: [
    { name: 'Platform', href: '#features' },
    { name: 'Developers', href: '#sdk' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Docs', href: 'https://docs.pesaswap.io/introduction', external: true },
  ],
  cta: {
    content: 'Talk to our team',
    href: '#contact'
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full h-fit py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <Link href='/' title="Pesaswap Home" id="Logo">
        <Logo light />
      </Link>

      {/* desktop menu */}
      <div className="items-center justify-center gap-6 hidden md:flex">
        {/* Nav Links */}
        <ul className="flex items-center justify-center gap-6 text-on-primary font-medium select-none text-[15px]">
          {settings.navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.href}
                title={link.name}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="hover:opacity-70 transition-opacity duration-200"
              >{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Call To Action */}
        <Link href={settings.cta.href} title={settings.cta.content}>
          <Button variant="accent">{settings.cta.content}</Button>
        </Link>
      </div>

      {/* mobile only - burger menu icon */}
      <motion.button
        initial={{ scale: 1, y: 0 }}
        whileTap={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-transparent shadow-none flex md:hidden cursor-pointer text-on-primary"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {!isOpen && <AlignJustify size={22} />}
        {isOpen && <X size={22} />}
      </motion.button>

      {/* mobile only - menu container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 1, y: -20 }}
            animate={{ height: '100vh', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 1, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed flex flex-col md:hidden top-16 left-0 w-full bg-primary z-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <ul className="flex flex-col space-y-2 text-on-primary font-medium select-none text-base">
                {settings.navLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      title={link.name}
                      onClick={toggleMenu}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="block py-2"
                    >{link.name}</Link>
                  </li>
                ))}
              </ul>

              <Link href={settings.cta.href} title={settings.cta.content} onClick={toggleMenu}>
                <Button variant="accent" className="w-full">{settings.cta.content}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
