export default function Card({ children, className, variant = 'default' }: { children: React.ReactNode, className?: string, variant?: 'default' | 'elevated' }) {
  const base = "rounded-[16px] text-sm md:text-base h-full p-6 md:p-8 lg:p-10 flex flex-col items-start justify-start text-start gap-4 md:gap-5"
  const variants = {
    default: "bg-secondary text-foreground",
    elevated: "bg-primary text-on-primary",
  }
  return (
    <div className={`${base} ${variants[variant]} ${className ?? ''}`}>
      {children}
    </div>
  )
}
