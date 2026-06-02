import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import projects from '../data/projects.js'
import useRole from '../useRole.js'

function ProjectLinks({ project }) {
  const links = [
    project.paper && { href: project.paper, label: 'Paper' },
    project.preprint && { href: project.preprint, label: 'Draft' },
    project.github && { href: project.github, label: 'GitHub' },
    project.code && { href: project.code, label: 'Code' },
    project.demo && { href: project.demo, label: 'Live Demo' },
  ].filter(Boolean)

  if (links.length === 0 && !project.codeNote) return null

  return (
    <div className="project-links">
      {links.map(({ href, label }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
          {label} &rarr;
        </a>
      ))}
      {project.codeNote && <span className="project-link-note">{project.codeNote}</span>}
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  const featured = project.featured ?? Boolean(project.image || project.highlights)

  // Stretched-link pattern: a real <button> carries the semantics and keyboard
  // behaviour, while its ::after overlay makes the whole card clickable.
  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <div className="project-body">
        <div className="project-heading">
          <h3>
            <button
              type="button"
              className="project-trigger"
              onClick={onOpen}
              aria-haspopup="dialog"
            >
              {project.title}
            </button>
          </h3>
          {project.subtitle && <span className="project-subtitle">{project.subtitle}</span>}
        </div>

        {project.tagline && <p className="project-tagline">{project.tagline}</p>}

        <p className="project-blurb">{project.description}</p>

        {project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((h, i) => (
              <li key={i}>
                <span className="project-highlight-value">{h.value}</span>
                <span className="project-highlight-label">{h.label}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <span className="project-more" aria-hidden="true">
          View details
          {project.gallery ? ' & plots' : ''} &rarr;
        </span>
      </div>
    </article>
  )
}

function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        // Basic focus trap within the dialog.
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [onClose])

  const titleId = 'project-modal-title'

  // Portal to <body> so the fixed overlay escapes the transformed `.fade-in`
  // section (a CSS transform on an ancestor traps position: fixed).
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close" ref={closeRef}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-content">
          <header className="modal-header">
            {project.subtitle && <span className="modal-kicker">{project.subtitle}</span>}
            <h2 id={titleId}>{project.title}</h2>
            {project.tagline && <p className="modal-tagline">{project.tagline}</p>}
          </header>

          {project.highlights && (
            <ul className="modal-highlights">
              {project.highlights.map((h, i) => (
                <li key={i}>
                  <span className="project-highlight-value">{h.value}</span>
                  <span className="project-highlight-label">{h.label}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="modal-prose">
            <p>{project.description}</p>
            {project.details?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {project.gallery && (
            <div className="modal-gallery">
              {project.gallery.map((fig, i) => (
                <figure key={i}>
                  <img src={fig.src} alt={fig.caption || project.title} loading="lazy" decoding="async" />
                  {fig.caption && <figcaption>{fig.caption}</figcaption>}
                </figure>
              ))}
            </div>
          )}

          <div className="modal-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>
      </div>
    </div>,
    document.body
  )
}

export default function Projects() {
  const role = useRole()
  const [activeIndex, setActiveIndex] = useState(null)

  const sorted = role?.highlightProjects
    ? [
        ...role.highlightProjects.map((i) => projects[i]),
        ...projects.filter((_, i) => !role.highlightProjects.includes(i)),
      ]
    : projects

  return (
    <section id="projects" className="section fade-in">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {sorted.map((project, i) => (
          <ProjectCard key={i} project={project} onOpen={() => setActiveIndex(i)} />
        ))}
      </div>

      {activeIndex !== null && (
        <ProjectModal project={sorted[activeIndex]} onClose={() => setActiveIndex(null)} />
      )}
    </section>
  )
}
