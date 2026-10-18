import { useLang } from '../i18n/LanguageContext'
import { links } from '../i18n/content'
import { GitHubIcon, LinkedInIcon, XIcon } from './Icons'

export const SOCIALS = [
  { key: 'linkedin', Icon: LinkedInIcon },
  { key: 'x', Icon: XIcon },
  { key: 'github', Icon: GitHubIcon },
].filter((s) => links[s.key])

const iconBtn =
  'group/s relative grid size-10 place-items-center rounded-[10px] border border-line text-muted transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-accent/60 hover:text-fg'

export default function SocialLinks({ className = '' }) {
  const { t } = useLang()

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {SOCIALS.map(({ key, Icon }) => (
        <li key={key}>
          <a href={links[key]} target="_blank" rel="noreferrer" aria-label={t.social[key]} className={iconBtn}>
            <Icon />
            <span
              role="presentation"
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 translate-y-1 rounded-md border border-line bg-surface-2 px-2 py-1 text-xs whitespace-nowrap text-fg opacity-0 transition-all duration-200 group-hover/s:translate-y-0 group-hover/s:opacity-100 group-focus-visible/s:opacity-100"
            >
              {t.social[key]}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
