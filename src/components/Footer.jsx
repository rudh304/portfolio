import { useLang } from '../i18n/LanguageContext'
import { ArrowUpIcon } from './Icons'

export default function Footer() {
  const { t } = useLang()
  const f = t.footer

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © <span dir="ltr">{new Date().getFullYear()}</span> {f.name}. {f.rights}{' '}
          <span className="text-subtle">{f.built}</span>
        </p>
        <a href="#home" className="group inline-flex items-center gap-2 transition-colors hover:text-fg">
          {f.top}
          <span className="grid size-8 place-items-center rounded-lg border border-line transition-colors group-hover:border-accent/60">
            <ArrowUpIcon className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </div>
    </footer>
  )
}
