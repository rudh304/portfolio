import { useLang } from '../i18n/LanguageContext'
import { links } from '../i18n/content'
import { useCopy } from '../hooks/useCopy'
import { ChartIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import Toast from './Toast'

const iconBtn =
  'group/s relative grid size-10 place-items-center rounded-[10px] border border-line text-muted transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg'

function Tooltip({ children }) {
  return (
    <span
      role="presentation"
      className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 rounded-md border border-line bg-surface-2 px-2 py-1 text-xs whitespace-nowrap text-fg opacity-0 transition-all duration-200 group-hover/s:translate-y-0 group-hover/s:opacity-100 group-focus-visible/s:opacity-100"
    >
      {children}
    </span>
  )
}

export default function SocialLinks({ className = '' }) {
  const { t } = useLang()
  const s = t.social
  const [copied, copy] = useCopy()

  const items = [
    { key: 'linkedin', href: links.linkedin, label: s.linkedin, icon: <LinkedInIcon /> },
    { key: 'github', href: links.github, label: s.github, icon: <GitHubIcon /> },
    links.tableau && { key: 'tableau', href: links.tableau, label: s.tableau, icon: <ChartIcon /> },
  ].filter(Boolean)

  return (
    <>
      <ul className={`flex items-center gap-2 ${className}`}>
        {items.map((item) => (
          <li key={item.key}>
            <a href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} className={iconBtn}>
              {item.icon}
              <Tooltip>{item.label}</Tooltip>
            </a>
          </li>
        ))}
        <li>
          <button type="button" onClick={() => copy(links.email)} aria-label={s.email} className={iconBtn}>
            <MailIcon />
            <Tooltip>{s.email}</Tooltip>
          </button>
        </li>
      </ul>
      <Toast show={copied} message={s.copied} />
    </>
  )
}
