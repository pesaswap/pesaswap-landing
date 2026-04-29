import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const fadeEffectVariants = cva(
  'absolute w-full h-1/3 bottom-0 left-0 from-transparent to-background z-50',
  {
    variants: {
      direction: {
        up: 'bg-gradient-to-t',
        down: 'bg-gradient-to-b',
        left: 'bg-gradient-to-l',
        right: 'bg-gradient-to-r'
      },
      color: {
        background: 'to-background',
        ink: 'to-ink',
        transparent: 'to-transparent',
        primary: 'to-primary',
        secondary: 'to-secondary'
      },
      position: {
        top: 'top-0',
        bottom: 'bottom-0',
        left: 'left-0',
        right: 'right-0'
      }
    },
    defaultVariants: {
      color: 'background',
      direction: 'down',
      position: 'bottom'
    }
  }
)

export default function FadeEffect({
  direction,
  color,
  className,
  position,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof fadeEffectVariants>) {
  return (
    <div className={cn(fadeEffectVariants({ direction, color, position, className }))} {...props} />
  )
}