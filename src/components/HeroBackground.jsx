import { useEffect, useRef } from 'react'

// Slowly drifting nodes + connecting lines: "connected systems, flowing data".
function NetworkCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const LINK_DIST = 140
    let nodes = []
    let width = 0
    let height = 0
    let frame = 0
    let running = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(width < 768 ? 22 : 56, Math.round((width * height) / 22000))
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        accent: i % 9 === 0,
      }))
      draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK_DIST) {
            ctx.strokeStyle = `rgba(161,161,170,${(1 - d / LINK_DIST) * 0.14})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = n.accent ? 'rgba(160,140,255,0.7)' : 'rgba(237,237,239,0.22)'
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.accent ? 1.8 : 1.2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const step = () => {
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < -20) n.x = width + 20
        if (n.x > width + 20) n.x = -20
        if (n.y < -20) n.y = height + 20
        if (n.y > height + 20) n.y = -20
      }
      draw()
      frame = requestAnimationFrame(step)
    }

    const start = () => {
      if (running || reduceMotion) return
      running = true
      frame = requestAnimationFrame(step)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(frame)
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Pause when the hero is off-screen or the tab is hidden
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    io.observe(canvas)
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="fade-mask absolute inset-0 size-full" />
}

export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* 1. Glows */}
      <div className="absolute -top-64 -end-40 size-[720px] rounded-full bg-accent/25 blur-[140px]" />
      <div className="absolute -bottom-48 -start-40 size-[560px] rounded-full bg-cyan/10 blur-[140px]" />

      {/* 2. Dot grid */}
      <div className="bg-dot-grid fade-mask absolute inset-0" />

      {/* 3. Data network */}
      <NetworkCanvas />

      {/* 4. Cursor spotlight (position set by Hero via CSS variables) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'radial-gradient(420px circle at var(--spot-x, 70%) var(--spot-y, 35%), rgb(124 92 255 / 0.10), transparent 70%)',
        }}
      />

      {/* 5. Grain */}
      <div className="bg-grain absolute inset-0 opacity-[0.035]" />

      {/* Blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-base" />
    </div>
  )
}
