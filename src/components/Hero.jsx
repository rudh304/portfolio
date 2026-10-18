import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { ArrowIcon, ChevronDownIcon } from './Icons'
import HeroBackground from './HeroBackground'
import SocialLinks from './SocialLinks'

const delay = (ms) => ({ animationDelay: `${ms}ms` })

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const sectionRef = useRef(null)
  const [introDone, setIntroDone] = useState(false)

  // After the first load sequence, switching language shouldn't replay the intro
  useEffect(() => {
    const id = setTimeout(() => setIntroDone(true), 2000)
    return () => clearTimeout(id)
  }, [])

  const onPointerMove = (e) => {
    const el = sectionRef.current
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
  }

  let wordIndex = 0

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className={`relative isolate flex min-h-[max(640px,100svh)] items-center overflow-hidden ${introDone ? 'intro-done' : ''}`}
    >
      <HeroBackground />

      <div className="container-page pt-28 pb-24">
        <div className="max-w-3xl">
          <p
            className="intro inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 py-1.5 ps-3 pe-3.5 text-[13px] text-muted backdrop-blur"
            style={delay(100)}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {h.status}
          </p>

          <p className="eyebrow intro mt-6 text-accent-fg" style={delay(200)}>
            {h.eyebrow}
          </p>

          <h1 className="mt-3">
            <span className="intro block font-display text-lg font-medium text-muted sm:text-xl" style={delay(220)}>
              {h.name}
            </span>
            <span className="tracking-display leading-display mt-2 block font-display text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold text-balance text-fg">
              {h.headline.map((part, p) =>
                part.text.split(' ').map((word, w) => {
                  const i = wordIndex++
                  return (
                    <span key={`${p}-${w}`}>
                      <span
                        className={`intro inline-block ${part.accent ? 'text-gradient' : ''}`}
                        style={delay(300 + i * 60)}
                      >
                        {word}
                      </span>{' '}
                    </span>
                  )
                }),
              )}
            </span>
          </h1>

          <p className="intro text-body mt-6 max-w-[520px] text-lg text-pretty text-muted" style={delay(600)}>
            {h.intro}
          </p>

          <div className="intro mt-10 flex flex-col gap-3 sm:flex-row" style={delay(750)}>
            <a href="#projects" className="btn btn-primary group">
              {h.primary}
              <span className="transition-transform duration-200 ease-out-expo group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                <ArrowIcon />
              </span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              {h.secondary}
            </a>
          </div>

          <div className="intro mt-8 flex items-center gap-4" style={delay(850)}>
            <span className="flex items-center gap-3 text-[13px] text-subtle">
              <span className="h-px w-6 bg-line" />
              {t.social.findMe}
            </span>
            <SocialLinks />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="intro absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-subtle transition-colors hover:text-muted md:flex [@media(max-height:760px)]:hidden"
        style={delay(1200)}
      >
        {h.scroll}
        <ChevronDownIcon className="nudge size-4" />
      </a>
    </section>
  )
}
