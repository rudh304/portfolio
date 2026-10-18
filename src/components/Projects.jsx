import { useLang } from '../i18n/LanguageContext'
import { projectList } from '../i18n/content'
import { ArrowUpRightIcon, BookIcon, CheckIcon, CodeIcon, FileIcon } from './Icons'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ACTION_ICONS = { live: ArrowUpRightIcon, code: CodeIcon, report: FileIcon, case: BookIcon }

function ProjectCard({ project, index, featured }) {
  const { t } = useLang()
  const p = t.projects
  const text = p.items[project.id]

  return (
    <article
      className={`card group relative flex flex-col gap-6 p-4 transition-all duration-500 ease-out-expo hover:border-accent/40 hover:shadow-[0_30px_80px_-40px_rgb(124_92_255/0.45)] sm:p-5 ${
        featured ? 'lg:grid lg:grid-cols-2 lg:items-start lg:gap-10' : ''
      }`}
    >
      <div className={featured ? 'lg:sticky lg:top-24' : ''}>
        <ProjectVisual project={project} alt={text.title} />
        {text.highlights && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {text.highlights.map((h) => (
              <li key={h} className="chip gap-1.5">
                <CheckIcon className="size-3.5 text-success" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 lg:px-2 lg:py-2">
        <div className="flex flex-wrap items-center gap-3">
          <span dir="ltr" className="font-mono text-xs text-subtle">
            {String(index + 1).padStart(2, '0')}
          </span>
          {featured && <span className="tag">{p.featured}</span>}
        </div>
        {text.meta && <p className="mt-3 text-xs text-subtle">{text.meta}</p>}
        <h3 className="mt-2 font-display text-2xl font-semibold text-fg sm:text-3xl">{text.title}</h3>
        <p className="text-body mt-3 text-muted">{text.summary}</p>

        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-subtle">{p.labels.challenge}</dt>
            <dd className="text-body mt-0.5 text-fg/85">{text.challenge}</dd>
          </div>
          <div>
            <dt className="text-subtle">{p.labels.solution}</dt>
            <dd className="text-body mt-0.5 text-fg/85">{text.solution}</dd>
          </div>
          <div className="rounded-lg border border-success/25 bg-success/5 px-3 py-2.5">
            <dt className="text-success">{p.labels.result}</dt>
            <dd className="text-body mt-0.5 font-medium text-fg">{text.result}</dd>
          </div>
        </dl>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-7">
            {project.links.map((l, i) => {
              const Icon = ACTION_ICONS[l.type]
              return (
                <a
                  key={l.type}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary btn-sm'}`}
                >
                  {Icon && <Icon className="size-4" />}
                  {p.actions[l.type]}
                </a>
              )
            })}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useLang()
  const p = t.projects

  return (
    <section id="projects" className="scroll-mt-16 py-24 lg:py-36">
      <div className="container-page">
        <SectionHeading index={3} label={p.label} title={p.heading} intro={p.intro} />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projectList.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i === 0 ? 0 : ((i - 1) % 2) * 100}
              className={`grid ${i === 0 ? 'lg:col-span-2' : ''}`}
            >
              <ProjectCard project={project} index={i} featured={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
