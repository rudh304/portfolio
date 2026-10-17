import { useCallback, useEffect, useRef, useState } from 'react'

export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false)
  const timer = useRef()

  const copy = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        // Fallback for browsers/contexts without the async clipboard API
        const el = document.createElement('textarea')
        el.value = text
        el.setAttribute('readonly', '')
        el.style.position = 'fixed'
        el.style.opacity = '0'
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        el.remove()
      }
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), timeout)
    },
    [timeout],
  )

  useEffect(() => () => clearTimeout(timer.current), [])

  return [copied, copy]
}
