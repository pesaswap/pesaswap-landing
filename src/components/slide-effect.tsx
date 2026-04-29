'use client'

import { MotionProps, HTMLMotionProps } from "motion/react";
import * as motion from "motion/react-m"

interface SlideEffectProps {
  children: React.ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  duration?: number;
  isSpring?: boolean
}

export default function SlideEffect(
  { children, direction = 'top', delay = 0.1, duration = 0.7, isSpring = true, className }:
    HTMLMotionProps<'div'> & MotionProps & SlideEffectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'top' ? 40 : direction === 'bottom' ? -40 : 0, x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay, type: isSpring ? 'spring' : '' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
