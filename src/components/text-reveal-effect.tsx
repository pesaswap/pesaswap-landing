'use client'

import { MotionProps } from "motion/react"
import * as motion from "motion/react-m"

export default function TextRevealEffect({ children, className }: { children: string } & React.ComponentProps<'span'> & MotionProps) {
  const tokens = children.split(/(\s+)/)
  let charIndex = 0
  return (
    <>
      {tokens.map((token, tIdx) => {
        if (token === '') return null
        if (/^\s+$/.test(token)) return token
        return (
          <span key={tIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }} className={className}>
            {[...token].map((char) => {
              const i = charIndex++
              return (
                <motion.span
                  style={{ display: 'inline-block' }}
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.015, ease: [0.16, 1, 0.3, 1], duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {char}
                </motion.span>
              )
            })}
          </span>
        )
      })}
    </>
  )
}
