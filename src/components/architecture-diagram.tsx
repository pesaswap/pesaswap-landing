'use client'

import { useLayoutEffect, useRef, useState } from 'react'

const MERCHANTS = [
  { letter: 'E', name: 'E-commerce', subtitle: 'Online stores & checkouts' },
  { letter: 'R', name: 'Retail & F&B', subtitle: 'In-store, QR, USSD' },
  { letter: 'S', name: 'SaaS & Subscriptions', subtitle: 'Recurring billing' },
  { letter: 'M', name: 'Marketplaces', subtitle: 'Split settlements' },
  { letter: 'A', name: 'Mobile Apps', subtitle: 'Embedded SDKs' },
]

const RAILS = [
  { letter: 'M', name: 'M-Pesa', subtitle: 'Mobile Money' },
  { letter: 'A', name: 'Airtel Money', subtitle: 'Mobile Money' },
  { letter: 'MM', name: 'MTN MoMo', subtitle: 'Pan-African Wallet' },
  { letter: 'CB', name: 'Choice Bank', subtitle: 'Banking Rail' },
  { letter: 'V', name: 'Visa & Mastercard', subtitle: 'Card Networks' },
  { letter: 'PL', name: 'PesaLink & Banks', subtitle: 'Equity · KCB · NCBA' },
]

const CAPABILITIES = [
  { name: 'Smart Routing', detail: 'Region · Amount · Success rate · Cost' },
  { name: 'Auto Failover', detail: 'Sub-2s retry across PSPs, invisible' },
  { name: 'Whitelabel Layer', detail: 'Your brand, your domain, your UX' },
  { name: 'Real-time Analytics', detail: 'Volume · Success rate · Cost per provider' },
]

const STATS = [
  { value: '12+', label: 'Channels', detail: 'All connected through one API' },
  { value: '<2s', label: 'Failover Latency', detail: 'Customer never sees a failed transaction' },
  { value: '99.9%', label: 'Platform Uptime SLA', detail: 'Transaction-grade reliability' },
  { value: '~7d', label: 'Time to Integrate', detail: 'From sandbox to live' },
]

type Point = { x: number; y: number }
type Conn = { id: string; d: string; key: number; side: 'left' | 'right' }

function buildPath(start: Point, end: Point): string {
  const midX = (start.x + end.x) / 2
  return `M ${start.x},${start.y} C ${midX},${start.y} ${midX},${end.y} ${end.x},${end.y}`
}

export default function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const leftRefs = useRef<(HTMLDivElement | null)[]>([])
  const rightRefs = useRef<(HTMLDivElement | null)[]>([])

  const [size, setSize] = useState({ w: 0, h: 0 })
  const [conns, setConns] = useState<Conn[]>([])
  const [hoveredLeft, setHoveredLeft] = useState<number | null>(null)
  const [hoveredRight, setHoveredRight] = useState<number | null>(null)

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current
      const center = centerRef.current
      if (!container || !center) return
      const cbox = container.getBoundingClientRect()
      const ctr = center.getBoundingClientRect()
      const centerLeft: Point = {
        x: Math.round(ctr.left - cbox.left),
        y: Math.round(ctr.top - cbox.top + ctr.height / 2),
      }
      const centerRight: Point = {
        x: Math.round(ctr.right - cbox.left),
        y: Math.round(ctr.top - cbox.top + ctr.height / 2),
      }
      const leftPaths: Conn[] = []
      leftRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const start: Point = {
          x: Math.round(r.right - cbox.left),
          y: Math.round(r.top - cbox.top + r.height / 2),
        }
        leftPaths.push({ id: `lp-${i}`, d: buildPath(start, centerLeft), key: i, side: 'left' })
      })
      const rightPaths: Conn[] = []
      rightRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const end: Point = {
          x: Math.round(r.left - cbox.left),
          y: Math.round(r.top - cbox.top + r.height / 2),
        }
        rightPaths.push({ id: `rp-${i}`, d: buildPath(centerRight, end), key: i, side: 'right' })
      })
      setSize({ w: Math.round(cbox.width), h: Math.round(cbox.height) })
      setConns([...leftPaths, ...rightPaths])
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    // Re-measure once webfonts have loaded (changes tile heights)
    if (typeof document !== 'undefined' && 'fonts' in document) {
      document.fonts.ready.then(measure).catch(() => {})
    }
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  const isActive = (c: Conn) =>
    c.side === 'left' ? hoveredLeft === c.key : hoveredRight === c.key

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Connection curves — desktop only */}
      {size.w > 0 && (
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 hidden lg:block"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
        >
          <defs>
            <linearGradient id="archStrokeLeft" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.7" />
            </linearGradient>
            <linearGradient id="archStrokeRight" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {conns.map(c => {
            const active = isActive(c)
            const stroke = c.side === 'left' ? 'url(#archStrokeLeft)' : 'url(#archStrokeRight)'
            return (
              <g key={c.id}>
                {/* Base wire — always visible, shows the connection structure */}
                <path
                  d={c.d}
                  fill="none"
                  stroke={stroke}
                  strokeWidth={active ? 1.5 : 1}
                  strokeLinecap="round"
                  style={{
                    opacity: active ? 0.55 : 0.32,
                    transition: 'opacity 250ms, stroke-width 250ms',
                  }}
                />
                {/* Flowing current — animated dashed stroke streams toward destination.
                    11px loop (3 dash + 8 gap), 12s base / 4s on hover. */}
                <path
                  d={c.d}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth={active ? 2 : 1.4}
                  strokeLinecap="round"
                  strokeDasharray="3 8"
                  style={{
                    opacity: active ? 1 : 0.7,
                    animation: `archFlow ${active ? 4 : 12}s linear infinite`,
                    transition: 'opacity 250ms, stroke-width 250ms',
                  }}
                />
              </g>
            )
          })}
        </svg>
      )}

      {/* 3-column layout */}
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 xl:gap-16 items-center">
        {/* LEFT: Merchants */}
        <div className="space-y-3">
          <div className="text-[11px] tracking-[0.18em] text-primary font-semibold uppercase text-center lg:text-left pb-3 border-b border-primary/15">
            Your Merchants
          </div>
          {MERCHANTS.map((m, i) => (
            <div
              key={m.name}
              ref={el => {
                leftRefs.current[i] = el
              }}
              onMouseEnter={() => setHoveredLeft(i)}
              onMouseLeave={() => setHoveredLeft(null)}
              className={`flex items-center gap-3 p-3 bg-background border rounded-[12px] transition-all duration-200 cursor-default ${
                hoveredLeft === i
                  ? 'border-accent shadow-[0_4px_20px_rgba(201,168,78,0.22)] -translate-y-0.5'
                  : 'border-border'
              }`}
            >
              <div className="h-9 w-9 shrink-0 rounded-full border border-primary/30 bg-primary/5 flex items-center justify-center text-primary font-semibold text-sm">
                {m.letter}
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm font-semibold text-ink truncate">{m.name}</div>
                <div className="text-xs text-foreground/70 truncate">{m.subtitle}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER: Pesaswap orchestration card */}
        <div className="flex justify-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[32px] bg-accent/20 blur-3xl animate-[orchestrationGlow_5s_ease-in-out_infinite]"
            />
            <div
              ref={centerRef}
              className="relative w-[280px] lg:w-[300px] rounded-[20px] bg-primary-deep border border-accent/40 p-6 shadow-[0_24px_60px_-20px_rgba(20,61,50,0.55)]"
            >
              {/* P badge */}
              <div className="flex justify-center mb-3">
                <div className="h-11 w-11 rounded-[10px] bg-accent text-primary-deep font-bold text-xl flex items-center justify-center font-[family-name:var(--font-display)]">
                  P
                </div>
              </div>
              <div className="text-on-primary text-2xl font-bold text-center font-[family-name:var(--font-display)] tracking-tight">
                pesaswap
              </div>
              <div className="text-accent text-[10px] tracking-[0.22em] uppercase font-medium text-center mt-1">
                The Orchestration Switch
              </div>
              <div className="my-4 h-px bg-accent/25" />
              <div className="space-y-2">
                {CAPABILITIES.map(cap => (
                  <div
                    key={cap.name}
                    className="bg-primary/30 border border-accent/20 rounded-[10px] p-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-on-primary text-sm font-semibold">{cap.name}</span>
                    </div>
                    <div className="text-on-primary/55 text-[11px] mt-1 pl-3.5 leading-snug">
                      {cap.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: African payment rails */}
        <div className="space-y-3">
          <div className="text-[11px] tracking-[0.18em] text-primary font-semibold uppercase text-center lg:text-left pb-3 border-b border-primary/15">
            African Payment Network
          </div>
          {RAILS.map((r, i) => (
            <div
              key={r.name}
              ref={el => {
                rightRefs.current[i] = el
              }}
              onMouseEnter={() => setHoveredRight(i)}
              onMouseLeave={() => setHoveredRight(null)}
              className={`flex items-center gap-3 p-3 bg-background border rounded-[12px] transition-all duration-200 cursor-default ${
                hoveredRight === i
                  ? 'border-accent shadow-[0_4px_20px_rgba(201,168,78,0.22)] -translate-y-0.5'
                  : 'border-border'
              }`}
            >
              <div className="h-9 w-9 shrink-0 rounded-full bg-primary text-on-primary font-semibold text-[11px] flex items-center justify-center">
                {r.letter}
              </div>
              <div className="text-left min-w-0">
                <div className="text-sm font-semibold text-ink truncate">{r.name}</div>
                <div className="text-xs text-foreground/70 truncate">{r.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats footer */}
      <div className="mt-12 lg:mt-16 rounded-[16px] bg-primary-deep p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-accent/15">
          {STATS.map(s => (
            <div key={s.label} className="text-left lg:px-8 first:lg:pl-0 last:lg:pr-0">
              <div className="text-accent text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] tracking-tight">
                {s.value}
              </div>
              <div className="text-on-primary text-[11px] tracking-[0.12em] uppercase font-semibold mt-3">
                {s.label}
              </div>
              <div className="text-on-primary/60 text-xs mt-1 leading-snug">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
