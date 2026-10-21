import { useId } from 'react'

// Decorative mock UIs used until real screenshots are added (project.image).
// Colors come from theme tokens so the mocks follow light/dark mode.

function LoyaltyMock() {
  const tiers = [
    { name: 'Bronze', ring: 'border-[#c08457]', fill: 'bg-[#c08457]/20', done: true },
    { name: 'Silver', ring: 'border-[#a1a1aa]', fill: 'bg-[#a1a1aa]/25', current: true },
    { name: 'Gold', ring: 'border-[#e5b53a] border-dashed', fill: 'bg-[#e5b53a]/20' },
  ]
  return (
    <div className="flex h-full flex-col gap-2.5 text-[10px] text-muted">
      <div className="flex items-center gap-2">
        <span className="size-7 rounded-full bg-linear-to-br from-accent/60 to-cyan/50" />
        <div className="space-y-1">
          <div className="h-1.5 w-14 rounded-full bg-fg/30" />
          <div className="h-1 w-10 rounded-full bg-subtle/50" />
        </div>
        <span className="ms-auto rounded-full bg-[#8a1538] px-2 py-0.5 font-mono text-[10px] font-medium text-white">
          ★ 1,250
        </span>
      </div>

      <div className="rounded-lg border border-line bg-surface-2 p-2.5">
        <div className="flex items-start justify-between">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-1 flex-col items-center gap-1">
              <span className={`grid size-7 place-items-center rounded-full border-2 ${tier.ring} ${tier.fill}`}>
                {tier.done && <span className="text-[9px] text-fg">✓</span>}
              </span>
              <span className={tier.current ? 'font-medium text-fg' : ''}>{tier.name}</span>
              {tier.current && (
                <span className="h-1 w-10 overflow-hidden rounded-full bg-line">
                  <span className="block h-full w-3/5 rounded-full bg-[#8a1538]" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-2">
        {['%', '🚚'].map((icon, i) => (
          <div key={i} className="flex flex-col items-center justify-center gap-1.5 rounded-lg border border-line bg-surface-2 p-2">
            <span className="grid size-6 place-items-center rounded-md bg-[#8a1538]/10 text-[11px] text-[#8a1538]">{icon}</span>
            <span className="h-1.5 w-10 rounded-full bg-fg/25" />
            <span className="h-1 w-7 rounded-full bg-subtle/40" />
          </div>
        ))}
      </div>
    </div>
  )
}

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
              <stop offset="0" stopColor="var(--color-accent-fg)" />
              <stop offset="1" stopColor="var(--color-cyan)" />
            </linearGradient>
            <linearGradient id={`${id}-a`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="var(--color-accent)" stopOpacity="0.25" />
              <stop offset="1" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 62 C20 56 30 44 50 46 S80 32 100 36 S140 16 160 22 S190 8 200 10 V80 H0Z" fill={`url(#${id}-a)`} />
          <path d="M0 62 C20 56 30 44 50 46 S80 32 100 36 S140 16 160 22 S190 8 200 10" fill="none" stroke={`url(#${id}-l)`} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  )
}

function SecurityMock() {
  // Floor plan: rooms tinted by security zone (Z0 public → Z4 restricted), camera dots on top
  const zones = ['bg-success/15', 'bg-cyan/15', 'bg-accent/15', 'bg-warning/20', 'bg-danger/20']
  const rooms = [
    { z: 0, cls: 'col-span-2' },
    { z: 1, cls: '' },
    { z: 2, cls: '' },
    { z: 1, cls: '' },
    { z: 3, cls: 'col-span-2' },
    { z: 4, cls: 'row-span-2', cam: true },
    { z: 2, cls: '', cam: true },
    { z: 3, cls: '' },
    { z: 4, cls: 'col-span-2', cam: true },
  ]
  return (
    <div className="flex h-full flex-col gap-2.5 text-[10px] text-muted">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-lg bg-accent/15 text-accent-fg">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          </svg>
        </span>
        <div className="space-y-1">
          <div className="h-1.5 w-14 rounded-full bg-fg/30" />
          <div className="h-1 w-10 rounded-full bg-subtle/50" />
        </div>
        <span className="ms-auto rounded-full border border-line px-2 py-0.5 font-mono">A-102</span>
      </div>

      <div className="grid flex-1 grid-cols-4 grid-rows-3 gap-1 rounded-lg border border-line bg-surface-2 p-1.5">
        {rooms.map((r, i) => (
          <div key={i} className={`relative rounded-[5px] border border-line/80 ${zones[r.z]} ${r.cls}`}>
            <span className="absolute start-1 top-0.5 font-mono text-[8px] text-subtle">Z{r.z}</span>
            {r.cam && <span className="absolute end-1 bottom-1 size-1.5 rounded-full bg-danger" />}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between font-mono text-[9px]">
        {zones.map((z, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className={`size-2 rounded-sm ${z}`} />Z{i}
          </span>
        ))}
      </div>
    </div>
  )
}

const MOCKS = { loyalty: LoyaltyMock, dashboard: DashboardMock, security: SecurityMock }

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
            className="absolute inset-y-5 left-1/2 w-[min(78%,340px)] -translate-x-1/2 rounded-[22px] border border-line bg-surface p-3.5 shadow-[0_24px_60px_-24px_var(--shadow-strong)] transition-transform duration-700 ease-out-expo group-hover:scale-[1.02] sm:inset-y-7"
          >
            <Mock />
          </div>
        </>
      )}
    </div>
  )
}
