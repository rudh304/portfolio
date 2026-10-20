import { useLang } from '../i18n/LanguageContext'
import { links } from '../i18n/content'
import { ArrowUpRightIcon } from './Icons'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { SOCIALS, externalProps } from './SocialLinks'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden py-24 lg:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute start-1/2 top-1/3 size-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] rtl:translate-x-1/2" />
        <div className="bg-dot-grid fade-mask absolute inset-0 opacity-60" />
      </div>

      <div className="container-page">
        <SectionHeading index={5} label={c.label} title={c.heading} intro={c.text} />

        <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {SOCIALS.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 80} className="grid">
              <a
                href={links[key]}
                {...externalProps(links[key])}
                className="card group flex items-center gap-4 p-5 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-[0_20px_50px_-30px_var(--shadow-strong)]"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-fg transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-lg font-semibold text-fg">{c.channels[key].label}</span>
                  <span dir="auto" className="block truncate text-sm text-muted">
                    {c.channels[key].hint}
                  </span>
                </span>
                <ArrowUpRightIcon className="size-5 shrink-0 text-subtle transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
