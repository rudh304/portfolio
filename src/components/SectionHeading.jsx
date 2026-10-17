import Reveal from './Reveal'

export default function SectionHeading({ index, label, title, intro }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-[13px] text-accent-fg">
        <span dir="ltr">{String(index).padStart(2, '0')}</span>
        <span className="mx-2 text-subtle">/</span>
        {label}
      </p>
      <h2 className="tracking-display mt-4 font-display text-3xl leading-[1.2] font-semibold text-balance text-fg sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && <p className="text-body mt-4 text-lg text-pretty text-muted">{intro}</p>}
    </Reveal>
  )
}
