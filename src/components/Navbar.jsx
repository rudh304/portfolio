import { useEffect, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { links } from '../i18n/content'
import { CloseIcon, DownloadIcon, MenuIcon } from './Icons'

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'contact']

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return active
}

function LangToggle({ className = '' }) {
  const { t, toggle } = useLang()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t.nav.switchLabel}
      title={t.nav.switchLabel}
      className={`grid h-9 min-w-9 place-items-center rounded-lg border border-line px-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/60 hover:text-fg ${className}`}
    >
      <span lang={t.nav.switchTo === 'EN' ? 'en' : 'ar'} className={t.nav.switchTo === 'EN' ? 'font-mono text-xs' : ''}>
        {t.nav.switchTo}
      </span>
    </button>
  )
}

export default function Navbar() {
  const { t } = useLang()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          solid ? 'border-line/80 bg-base/75 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <nav aria-label={t.nav.primary} className="container-page flex h-16 items-center justify-between gap-6">
          <a href="#home" className="font-display text-lg font-semibold text-fg" onClick={() => setOpen(false)}>
            {t.nav.logo}
            <span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {t.nav.links.map((l) => {
              const isActive = active === l.id
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative block rounded-lg px-3 py-2 text-sm transition-colors ${
                      isActive ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-3 -bottom-px h-px origin-center bg-accent transition-transform duration-300 ease-out-expo ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LangToggle />
            <a href={links.resume} download className="btn btn-secondary btn-sm hidden sm:inline-flex">
              {t.nav.resume}
              <DownloadIcon className="size-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="grid size-9 place-items-center rounded-lg border border-line text-fg md:hidden"
            >
              {open ? <CloseIcon className="size-4" /> : <MenuIcon className="size-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile sheet: sibling of <header> so the header's backdrop-filter doesn't trap its fixed positioning */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 bg-base/95 backdrop-blur-xl md:hidden"
      >
        <div className="container-page flex h-full flex-col justify-between py-8">
          <ul className="space-y-1">
            {t.nav.links.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-line py-4 font-display text-3xl text-fg"
                >
                  <span dir="ltr" className="font-mono text-xs text-subtle">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={links.resume} download className="btn btn-primary w-full">
            {t.nav.resume}
            <DownloadIcon />
          </a>
        </div>
      </div>
    </>
  )
}
