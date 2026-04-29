export default function Badge({ number, text }: { number: number, text: string }) {
  return (
    <div className="flex items-center h-8 text-ink text-[12px] md:text-[14px] bg-secondary border border-border w-fit rounded-full mx-auto font-[family-name:var(--font-body)]">
      <div className="h-8 w-8 flex items-center justify-center bg-primary text-on-primary rounded-full font-medium text-[14px] md:text-[16px]">{number}</div>
      <div className="uppercase tracking-[0.06em] py-2 px-4 w-fit font-medium">{text}</div>
    </div>
  )
}
