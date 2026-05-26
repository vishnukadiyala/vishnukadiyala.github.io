import projects from '../data/projects.js'
import useRole from '../useRole.js'

function ProjectCard({ project }) {
  const featured = Boolean(project.image || project.highlights)

  return (
    <div className={`project-card${featured ? ' project-card--featured' : ''}`}>
      {project.image && (
        <figure className="project-figure">
          <img src={project.image} alt={project.imageCaption || project.title} loading="lazy" />
          {project.imageCaption && (
            <figcaption>{project.imageCaption}</figcaption>
          )}
        </figure>
      )}

      <div className="project-body">
        <div className="project-heading">
          <h3>{project.title}</h3>
          {project.subtitle && <span className="project-subtitle">{project.subtitle}</span>}
        </div>

        {project.tagline && <p className="project-tagline">{project.tagline}</p>}

        <p>{project.description}</p>

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

        <div className="project-links">
          {project.paper && (
            <a href={project.paper} target="_blank" rel="noopener noreferrer">
              Paper &rarr;
            </a>
          )}
          {project.preprint && (
            <a href={project.preprint} target="_blank" rel="noopener noreferrer">
              Draft &rarr;
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub &rarr;
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer">
              Code &rarr;
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Demo &rarr;
            </a>
          )}
          {project.codeNote && (
            <span className="project-link-note">{project.codeNote}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const role = useRole()

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
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  )
}
