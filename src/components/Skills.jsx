import { useLang } from '../i18n/LanguageContext'
import { SparkIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="scroll-mt-16 border-y border-line/60 bg-surface/40 py-24 lg:py-36">
      <div className="container-page">
        <SectionHeading index={2} label={s.label} title={s.heading} intro={s.intro} />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.groups.map((g, i) => (
            <Reveal
              key={g.title}
              delay={(i % 3) * 80}
              className="card group relative overflow-hidden p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="absolute -top-16 -end-16 size-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/15" />
              <div className="relative flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-fg">{g.title}</h3>
                <span dir="ltr" className="font-mono text-xs text-subtle">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li key={item} className="chip transition-colors group-hover:border-line group-hover:text-fg/90">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="me-2 text-sm text-subtle">{s.softTitle}</span>
            {s.soft.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-sm text-accent-fg">
              <SparkIcon className="size-4" />
              {s.learningTitle}:
            </span>
            {s.learning.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
