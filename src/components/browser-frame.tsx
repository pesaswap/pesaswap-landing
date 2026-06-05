import Image from "next/image"
import { cn } from "@/lib/utils"

type BrowserFrameProps = {
  src: string
  alt: string
  /** Intrinsic width of the source image */
  width: number
  /** Intrinsic height of the source image */
  height: number
  /** Label shown in the faux address bar */
  url?: string
  className?: string
  imageClassName?: string
  priority?: boolean
  /** Responsive sizes hint so the browser fetches a right-sized image */
  sizes?: string
}

/**
 * A lightweight, on-brand browser chrome wrapping a product screenshot.
 * Flat by default (per design system), tonal separation via border + cream titlebar.
 */
export default function BrowserFrame({
  src,
  alt,
  width,
  height,
  url = "app.pesaswap.io",
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 512px",
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[16px] border border-border bg-background shadow-[0_24px_60px_-20px_rgba(20,61,50,0.45)]",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-3">
        <span className="size-3 rounded-full bg-[#E2655B]" />
        <span className="size-3 rounded-full bg-[#E5B95C]" />
        <span className="size-3 rounded-full bg-[#5FB587]" />
        <div className="ml-3 hidden flex-1 items-center justify-center sm:flex">
          <span className="rounded-full bg-background px-4 py-1 text-[12px] font-medium tracking-wide text-foreground/70 border border-border">
            {url}
          </span>
        </div>
      </div>

      {/* Screenshot */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={cn("w-full h-auto block", imageClassName)}
      />
    </div>
  )
}
