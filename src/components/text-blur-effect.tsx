/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { HTMLMotionProps } from "motion/react"
import * as motion from "motion/react-m"

export default function TextBlurEffect({ children, ...props }: { children: string } & HTMLMotionProps<'span'>) {
  const tokens = children.split(/(\s+)/)
  let charIndex = 0
  return (
    <>
      {tokens.map((token, tIdx) => {
        if (token === '') return null
        if (/^\s+$/.test(token)) return token
        return (
          <span key={tIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {[...token].map((char) => {
              const i = charIndex++
              return (
                // @ts-ignore
                <motion.span
                  style={{ display: 'inline-block' }}
                  key={i}
                  initial={{ opacity: 0, filter: 'Blur(32px)', scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, filter: 'Blur(0)', scale: 1, y: 0 }}
                  transition={{ delay: i * 0.025, ease: [0.16, 1, 0.3, 1], duration: 0.7 }}
                  {...props}
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
