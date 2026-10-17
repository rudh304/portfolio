import { useId } from 'react'

// Decorative mock UIs used until real screenshots are added (project.image).

function DashboardMock() {
  const id = useId()
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg border border-line bg-surface-2 p-2.5">
            <div className="h-1.5 w-8 rounded-full bg-subtle/50" />
            <div className={`mt-2 h-2.5 rounded-full ${i === 0 ? 'w-14 bg-accent-fg/80' : 'w-10 bg-fg/30'}`} />
          </div>
        ))}
      </div>
      <div className="relative flex-1 overflow-hidden rounded-lg border border-line bg-surface-2">
        <svg viewBox="0 0 200 80" preserveAspectRatio="none" className="absolute inset-0 size-full">
          <defs>
            <linearGradient id={`${id}-l`} x1="0" x2="1">
              <stop offset="0" stopColor="#a08cff" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id={`${id}-a`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#7c5cff" stopOpacity="0.25" />
              <stop offset="1" stopColor="#7c5cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 62 C20 56 30 44 50 46 S80 32 100 36 S140 16 160 22 S190 8 200 10 V80 H0Z" fill={`url(#${id}-a)`} />
          <path d="M0 62 C20 56 30 44 50 46 S80 32 100 36 S140 16 160 22 S190 8 200 10" fill="none" stroke={`url(#${id}-l)`} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  )
}

function InventoryMock() {
  const rows = [
    ['bg-success', 'w-16'],
    ['bg-warning', 'w-12'],
    ['bg-success', 'w-20'],
    ['bg-danger', 'w-10'],
    ['bg-success', 'w-14'],
  ]
  return (
    <div className="h-full overflow-hidden rounded-lg border border-line bg-surface-2">
      <div className="flex items-center gap-3 border-b border-line px-3 py-2.5">
        <div className="h-1.5 w-12 rounded-full bg-subtle/60" />
        <div className="ms-auto h-1.5 w-8 rounded-full bg-subtle/40" />
        <div className="h-1.5 w-10 rounded-full bg-subtle/40" />
      </div>
      {rows.map(([status, w], i) => (
        <div key={i} className="flex items-center gap-3 border-b border-line/60 px-3 py-2.5 last:border-0">
          <div className="size-5 rounded-md bg-line" />
          <div className={`h-2 rounded-full bg-fg/25 ${w}`} />
          <div className="ms-auto h-2 w-6 rounded-full bg-fg/15" />
          <span className={`size-2 rounded-full ${status}`} />
        </div>
      ))}
    </div>
  )
}

function ProcessMock() {
  const id = useId()
  return (
    <svg viewBox="0 0 320 180" className="size-full" aria-hidden="true">
      <defs>
        <marker id={`${id}-m`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 8 4 0 8z" fill="#63636b" />
        </marker>
      </defs>
      <g stroke="#3a3a42" strokeWidth="1.5" fill="none" markerEnd={`url(#${id}-m)`}>
        <path d="M58 90 H82" />
        <path d="M142 90 H166" />
        <path d="M218 90 H240" />
        <path d="M192 64 V36 H262 V60" />
      </g>
      <circle cx="40" cy="90" r="16" fill="#18181b" stroke="#3dd68c" strokeWidth="1.5" />
      <rect x="84" y="70" width="56" height="40" rx="8" fill="#18181b" stroke="#26262b" />
      <rect x="94" y="84" width="30" height="4" rx="2" fill="#63636b" />
      <rect x="94" y="93" width="20" height="3" rx="1.5" fill="#26262b" />
      <path d="M192 64 218 90 192 116 166 90z" fill="#18181b" stroke="#7c5cff" strokeWidth="1.5" />
      <rect x="242" y="64" width="56" height="52" rx="8" fill="#18181b" stroke="#26262b" />
      <rect x="252" y="80" width="30" height="4" rx="2" fill="#a08cff" />
      <rect x="252" y="89" width="22" height="3" rx="1.5" fill="#26262b" />
      <rect x="252" y="96" width="26" height="3" rx="1.5" fill="#26262b" />
      <circle cx="270" cy="150" r="12" fill="#18181b" stroke="#ff6369" strokeWidth="2.5" />
      <path d="M270 116 V136" stroke="#3a3a42" strokeWidth="1.5" markerEnd={`url(#${id}-m)`} />
    </svg>
  )
}

const MOCKS = { dashboard: DashboardMock, inventory: InventoryMock, process: ProcessMock }

export default function ProjectVisual({ project, alt }) {
  const Mock = MOCKS[project.visual] ?? DashboardMock
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface-2/50">
      {project.image ? (
        <img
          src={project.image}
          alt={alt}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.02]"
        />
      ) : (
        <>
          <div className="bg-dot-grid absolute inset-0 opacity-60" />
          <div className="absolute -top-20 -end-20 size-56 rounded-full bg-accent/15 blur-3xl" />
          <div
            dir="ltr"
            aria-hidden="true"
            className="absolute inset-5 rounded-xl border border-line bg-surface p-3 shadow-2xl shadow-black/40 transition-transform duration-700 ease-out-expo group-hover:scale-[1.02] sm:inset-7"
          >
            <Mock />
          </div>
        </>
      )}
    </div>
  )
}
