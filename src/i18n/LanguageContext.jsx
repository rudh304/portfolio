import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { content } from './content'

const LanguageContext = createContext(null)

// index.html sets <html lang> before first paint (saved choice, then browser language)
const initialLang = () => (document.documentElement.lang === 'en' ? 'en' : 'ar')

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)
  const [switching, setSwitching] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = content[lang].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', content[lang].meta.description)
    try {
      localStorage.setItem('lang', lang)
    } catch {
      // storage unavailable (private mode): the choice just won't persist
    }
  }, [lang])

  const toggle = useCallback(() => {
    const next = lang === 'ar' ? 'en' : 'ar'
    if (prefersReducedMotion()) {
      setLang(next)
      return
    }
    // Quick crossfade: fade out, swap language + direction, fade back in
    setSwitching(true)
    window.setTimeout(() => {
      setLang(next)
      requestAnimationFrame(() => setSwitching(false))
    }, 180)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, t: content[lang], toggle, switching }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
