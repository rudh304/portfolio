import { useLang } from '../i18n/LanguageContext'
import { ChartIcon, TargetIcon, WorkflowIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PRINCIPLE_ICONS = { target: TargetIcon, chart: ChartIcon, workflow: WorkflowIcon }

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="scroll-mt-16 py-24 lg:py-36">
      <div className="container-page">
        <SectionHeading index={1} label={a.label} title={a.heading} />

        <div className="mt-14">
          <div className="max-w-3xl">
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
