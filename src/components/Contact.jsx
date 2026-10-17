import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { links } from '../i18n/content'
import { useCopy } from '../hooks/useCopy'
import { ArrowIcon, CalendarIcon, CheckIcon, CopyIcon, MailIcon } from './Icons'
import Reveal from './Reveal'
import SocialLinks from './SocialLinks'

const field =
  'mt-2 w-full rounded-[10px] border border-line bg-base/60 px-4 py-3 text-[15px] text-fg placeholder:text-subtle transition-colors outline-none focus:border-accent/70 focus:ring-4 focus:ring-accent/15'

function ContactForm() {
  const { t } = useLang()
  const f = t.contact.form
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  // No backend: opens the visitor's email app with the message pre-filled.
  // To deliver messages directly instead, point this at a form service (see README).
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = `${f.subject} ${values.name}`
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="card relative space-y-5 p-6 sm:p-8">
      <h3 className="font-display text-lg font-semibold text-fg">{f.title}</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-muted">
          {f.name}
          <input name="name" required autoComplete="name" value={values.name} onChange={update} placeholder={f.namePh} className={field} />
        </label>
        <label className="block text-sm text-muted">
          {f.email}
          <input
            name="email"
            type="email"
            required
            dir="ltr"
            autoComplete="email"
            value={values.email}
            onChange={update}
            placeholder={f.emailPh}
            className={`${field} rtl:text-right`}
          />
        </label>
      </div>
      <label className="block text-sm text-muted">
        {f.message}
        <textarea
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={update}
          placeholder={f.messagePh}
          className={`${field} resize-y`}
        />
      </label>
      <button type="submit" className="btn btn-primary group w-full sm:w-auto">
        {f.submit}
        <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
          <ArrowIcon />
        </span>
      </button>
      <p role="status" aria-live="polite" className={sent ? 'flex items-start gap-2 text-sm text-success' : 'sr-only'}>
        {sent && (
          <>
            <CheckIcon className="mt-0.5 size-4 shrink-0" />
            {f.success}
          </>
        )}
      </p>
    </form>
  )
}

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [copied, copy] = useCopy()

  return (
    <section id="contact" className="relative isolate scroll-mt-16 overflow-hidden py-24 lg:py-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute start-1/2 top-1/3 size-[640px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px] rtl:translate-x-1/2" />
        <div className="bg-dot-grid fade-mask absolute inset-0 opacity-60" />
      </div>

      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-[13px] text-accent-fg">
            <span dir="ltr">04</span>
            <span className="mx-2 text-subtle">/</span>
            {c.label}
          </p>
          <h2 className="tracking-display leading-display mt-4 font-display text-4xl font-semibold text-balance text-fg sm:text-5xl lg:text-6xl">
            {c.heading}
          </h2>
          <p className="text-body mt-6 text-lg text-pretty text-muted">{c.text}</p>

          <div className="mt-8 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface/70 p-2 ps-4 backdrop-blur">
            <div className="min-w-0">
              <p className="text-xs text-subtle">{c.emailLabel}</p>
              <a href={`mailto:${links.email}`} dir="ltr" className="block truncate font-medium text-fg hover:text-accent-fg">
                {links.email}
              </a>
            </div>
            <button type="button" onClick={() => copy(links.email)} className="btn btn-secondary btn-sm shrink-0" aria-live="polite">
              {copied ? <CheckIcon className="size-3.5 text-success" /> : <CopyIcon className="size-3.5" />}
              {copied ? c.copied : c.copy}
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${links.email}`} className="btn btn-primary">
              <MailIcon />
              {c.sendEmail}
            </a>
            {links.calendly && (
              <a href={links.calendly} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <CalendarIcon />
                {c.bookCall}
              </a>
            )}
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span className="size-1.5 rounded-full bg-success" />
            {c.response}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="text-[13px] text-subtle">{t.social.findMe}</span>
            <SocialLinks />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
