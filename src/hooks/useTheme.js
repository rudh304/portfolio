import { useCallback, useState } from 'react'

// index.html sets <html data-theme> before first paint (saved choice, then system preference)
const current = () => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

export function useTheme() {
  const [theme, setTheme] = useState(current)

  const toggle = useCallback(() => {
    const next = current() === 'light' ? 'dark' : 'light'
    const root = document.documentElement
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduceMotion) root.classList.add('theme-transition')
    root.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#FAFAF9' : '#0A0A0B')
    try {
      localStorage.setItem('theme', next)
    } catch {
      // storage unavailable: the choice just won't persist
    }
    setTheme(next)
    window.setTimeout(() => root.classList.remove('theme-transition'), 350)
  }, [])

  return [theme, toggle]
}
