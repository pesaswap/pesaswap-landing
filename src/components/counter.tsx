'use client'

import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

export default function Counter({ value, suffix = '', prefix = '' }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 1500
    const steps = 40
    const stepDuration = duration / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      // Ease-out curve
      const progress = 1 - Math.pow(1 - step / steps, 3)
      current = Math.round(value * progress)
      setCount(current)

      if (step >= steps) {
        setCount(value)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}
