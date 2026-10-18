import { useLang } from '../i18n/LanguageContext'

const BARS = [38, 52, 44, 63, 58, 72, 66, 84, 78, 92, 88, 100]

const cardClass =
  'rounded-2xl border border-line bg-surface/80 shadow-[0_24px_60px_-24px_var(--shadow-strong)] backdrop-blur-md'

function SalesCard({ d }) {
  return (
    <div className={`${cardClass} p-5`}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-fg">{d.sales}</p>
        <span className="rounded-md bg-surface-2 px-2 py-0.5 text-xs text-muted">{d.period}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span dir="ltr" className="font-display text-3xl font-semibold text-fg">
          +24%
        </span>
        <span className="text-xs text-success">▲ {d.vsLast}</span>
      </div>
      {/* Time runs left → right in both languages */}
      <div dir="ltr" className="mt-5 flex h-24 items-end gap-1.5">
        {BARS.map((h, i) => (
          <span
            key={i}
            className={`bar flex-1 rounded-t-[3px] ${
              i === BARS.length - 1 ? 'bg-linear-to-t from-accent to-cyan' : 'bg-line'
            }`}
            style={{ height: `${h}%`, animationDelay: `${1000 + i * 45}ms` }}
          />
        ))}
      </div>
    </div>
  )
}

function ReportCard({ d }) {
  return (
    <div className={`${cardClass} p-4`}>
      <p className="text-xs text-muted">{d.report}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-fg">
        <span className="text-success">↓</span> 90%
      </p>
      <p className="mt-1 text-xs text-subtle">{d.reportSub}</p>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div className="h-full w-[10%] rounded-full bg-success" />
      </div>
    </div>
  )
}

function ErdCard({ d }) {
  return (
    <div className={`${cardClass} p-4`}>
      <p className="text-xs text-muted">{d.erd}</p>
      <svg dir="ltr" viewBox="0 0 200 72" className="mt-2 w-full" aria-hidden="true">
        <path d="M44 36 H86 M114 36 H156" className="stroke-(--mock-stroke)" strokeWidth="1.5" strokeDasharray="3 3" />
        {[
          { x: 6, label: 'Orders' },
          { x: 81, label: 'Customers' },
          { x: 156, label: 'Products' },
        ].map((n, i) => (
          <g key={n.label}>
            <rect x={n.x} y="20" width="38" height="32" rx="6" className={`fill-surface-2 ${i === 1 ? 'stroke-accent' : 'stroke-line'}`} />
            <rect x={n.x + 6} y="28" width="20" height="3" rx="1.5" className={i === 1 ? 'fill-accent-fg' : 'fill-subtle'} />
            <rect x={n.x + 6} y="36" width="26" height="2.5" rx="1.25" className="fill-line" />
            <rect x={n.x + 6} y="42" width="16" height="2.5" rx="1.25" className="fill-line" />
            <text x={n.x + 19} y="66" textAnchor="middle" fontSize="7.5" className="fill-subtle" fontFamily="Geist Mono, monospace">
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}

export default function DashboardVisual() {
  const { t } = useLang()
  const d = t.hero.dashboard

  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-md sm:h-[420px]">
      <div className="intro-pop sm:absolute sm:end-0 sm:top-2 sm:w-[80%]" style={{ animationDelay: '900ms' }}>
        <div className="float-a">
          <SalesCard d={d} />
        </div>
      </div>
      <div className="intro-pop absolute start-0 top-[200px] hidden w-[46%] sm:block" style={{ animationDelay: '1000ms' }}>
        <div className="float-b">
          <ReportCard d={d} />
        </div>
      </div>
      <div className="intro-pop absolute end-2 top-[268px] hidden w-[50%] sm:block" style={{ animationDelay: '1100ms' }}>
        <div className="float-c">
          <ErdCard d={d} />
        </div>
      </div>
    </div>
  )
}
