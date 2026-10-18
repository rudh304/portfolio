import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { links } from '../i18n/content'
import { ChartIcon, TargetIcon, WorkflowIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PRINCIPLE_ICONS = { target: TargetIcon, chart: ChartIcon, workflow: WorkflowIcon }

function Portrait({ alt }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line bg-surface">
      {failed ? (
        // Fallback until public/raghd.jpg is added
        <div className="bg-dot-grid grid size-full place-items-center bg-linear-to-br from-accent/20 via-surface to-cyan/10">
          <span dir="ltr" className="font-display text-7xl font-semibold text-fg/90">
            RA<span className="text-accent">.</span>
          </span>
        </div>
      ) : (
        <img
          src={links.photo}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="size-full object-cover grayscale-[15%]"
        />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/5 ring-inset" />
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="scroll-mt-16 py-24 lg:py-36">
      <div className="container-page">
        <SectionHeading index={1} label={a.label} title={a.heading} />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none">
            <Portrait alt={a.photoAlt} />
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={80} className="space-y-5">
              {a.bio.map((p, i) => (
                <p key={i} className={`text-body text-pretty ${i === 0 ? 'text-xl text-fg' : 'text-lg text-muted'}`}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={140} className="mt-10 flex flex-wrap gap-4">
              {a.stats.map((s) => (
                <div key={s.label} className="card px-6 py-5">
                  <p dir="ltr" className="font-display text-3xl font-semibold text-fg rtl:text-end">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {a.principles.map((p, i) => {
            const Icon = PRINCIPLE_ICONS[p.icon]
            return (
              <Reveal
                key={p.title}
                delay={i * 80}
                className="card group p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent-fg transition-colors group-hover:bg-accent/20">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-fg">{p.title}</h3>
                <p className="text-body mt-2 text-muted">{p.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
