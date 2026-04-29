/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as motion from "motion/react-m"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-accent/50 focus-visible:ring-[3px] focus-visible:ring-offset-2 select-none cursor-pointer font-[family-name:var(--font-body)]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-on-primary shadow-xs hover:bg-primary-deep active:bg-primary-deep",
        destructive:
          "bg-red-700 text-on-primary shadow-xs hover:bg-red-800",
        outline:
          "border border-border bg-background shadow-xs hover:bg-secondary text-ink",
        secondary:
          "bg-secondary text-ink shadow-xs hover:bg-[#EDE9DF] active:bg-[#E3DED4]",
        ghost:
          "hover:bg-secondary text-ink",
        link: "text-primary underline-offset-4 hover:underline",
        accent:
          "bg-accent text-ink shadow-xs hover:bg-accent-muted active:bg-accent-muted",
      },
      size: {
        default: "px-6 py-3 has-[>svg]:px-4 text-[15px]",
        sm: "rounded-[10px] gap-1.5 px-4 py-2 has-[>svg]:px-3 text-[14px]",
        lg: "px-8 py-3.5 rounded-[10px] text-[16px] has-[>svg]:px-5",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  const Motion = motion.create(Comp as any)

  return (
    <Motion
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ ease: [0.16, 1, 0.3, 1], delay: 0, duration: 0.1 }}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
