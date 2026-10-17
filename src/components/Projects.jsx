import { useLang } from '../i18n/LanguageContext'
import { links, projectList } from '../i18n/content'
import { ArrowIcon, ArrowUpRightIcon, BookIcon, CodeIcon, FileIcon, GitHubIcon } from './Icons'
import ProjectVisual from './ProjectVisual'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ACTION_ICONS = { live: ArrowUpRightIcon, code: CodeIcon, report: FileIcon, case: BookIcon }

function ProjectCard({ project, featured }) {
  const { t } = useLang()
  const p = t.projects
  const text = p.items[project.id]

  return (
    <article
      className={`card group relative flex flex-col gap-6 p-4 transition-all duration-500 ease-out-expo hover:border-accent/40 hover:shadow-[0_30px_80px_-40px_rgb(124_92_255/0.45)] sm:p-5 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10' : ''
      }`}
    >
      <ProjectVisual project={project} alt={text.title} />

      <div className="flex flex-1 flex-col px-1 pb-1 lg:px-2">
        <div className="flex items-center gap-3">
          <span dir="ltr" className="font-mono text-xs text-subtle">
            {String(projectList.indexOf(project) + 1).padStart(2, '0')}
          </span>
          {featured && <span className="tag">{p.featured}</span>}
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-fg">{text.title}</h3>
        <p className="text-body mt-2 text-muted">{text.summary}</p>

        <dl className="mt-5 space-y-3 text-sm">
          <div>
            <dt className="text-subtle">{p.labels.challenge}</dt>
            <dd className="text-body mt-0.5 text-fg/85">{text.challenge}</dd>
          </div>
          <div>
            <dt className="text-subtle">{p.labels.solution}</dt>
            <dd className="text-body mt-0.5 text-fg/85">{text.solution}</dd>
          </div>
          <div className="rounded-lg border border-success/20 bg-success/5 px-3 py-2.5">
            <dt className="text-success/90">{p.labels.result}</dt>
            <dd className="mt-0.5 font-medium text-fg">{text.result}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.links.map((l, i) => {
              const Icon = ACTION_ICONS[l.type]
              return (
                <a
                  key={l.type}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {Icon && <Icon className="size-3.5" />}
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
            <Reveal key={project.id} delay={i === 0 ? 0 : ((i - 1) % 2) * 100} className={`grid ${i === 0 ? 'lg:col-span-2' : ''}`}>
              <ProjectCard project={project} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <span className="text-muted">{p.more}</span>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-medium text-fg underline decoration-line decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent"
          >
            <GitHubIcon className="size-4" />
            {p.moreLink}
            <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
              <ArrowIcon />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
