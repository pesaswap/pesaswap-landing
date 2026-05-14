export default function Logo({ className, light = false }: { className?: string, light?: boolean }) {
  return (
    <svg width="160" height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* P icon mark */}
      <rect x="0" y="2" width="28" height="28" rx="6" className="fill-primary" />
      <path d="M8 10h8a5 5 0 0 1 0 10h-4v4H8V10zm4 7h4a2 2 0 0 0 0-4h-4v4z" className="fill-on-primary" />
      {/* Pesaswap text */}
      <text x="36" y="23" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" className={light ? "fill-on-primary" : "fill-ink"} letterSpacing="-0.02em">
        Pesaswap
      </text>
    </svg>
  )
}
