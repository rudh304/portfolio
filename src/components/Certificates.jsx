import { useLang } from '../i18n/LanguageContext'
import { certificateList } from '../i18n/content'
import { ArrowUpRightIcon, AwardIcon, BookIcon, ChartIcon, LanguagesIcon, MonitorIcon, SparkIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ICONS = { spark: SparkIcon, monitor: MonitorIcon, language: LanguagesIcon, chart: ChartIcon, book: BookIcon }

export default function Certificates() {
  const { t } = useLang()
  const c = t.certificates

  return (
    <section id="certificates" className="scroll-mt-16 border-y border-line/60 bg-surface/40 py-24 lg:py-36">
      <div className="container-page">
        <SectionHeading index={4} label={c.label} title={c.heading} intro={c.intro} />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {certificateList.map((cert, i) => {
            const text = c.items[cert.id]
            const Icon = ICONS[cert.icon] ?? AwardIcon
            return (
              <Reveal
                key={cert.id}
                delay={i * 80}
                className="card group relative flex flex-col overflow-hidden p-6 transition-colors duration-300 hover:border-accent/40"
              >
                <div className="absolute -top-16 -end-16 size-40 rounded-full bg-accent/0 blur-3xl transition-colors duration-500 group-hover:bg-accent/15" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent/10 text-accent-fg">
                    <Icon className="size-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                    <AwardIcon className="size-3.5 text-accent-fg" />
                    <span dir="auto">{text.date}</span>
                  </span>
                </div>

                <h3 className="relative mt-6 font-display text-xl font-semibold text-fg">{text.title}</h3>
                <p className="relative mt-1.5 text-sm text-muted">{text.issuer}</p>
                <p className="relative mt-5 border-t border-line pt-4 text-sm text-fg/80">{text.detail}</p>

                {cert.file && (
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    className="relative mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent-fg underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {c.view}
                    <ArrowUpRightIcon className="size-3.5 rtl:-scale-x-100" />
                  </a>
                )}
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
