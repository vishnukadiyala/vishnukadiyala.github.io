import projects from '../data/projects.js'
import useRole from '../useRole.js'

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
          <div key={i} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub &rarr;
                </a>
              )}
              {project.paper && (
                <a href={project.paper} target="_blank" rel="noopener noreferrer">
                  Paper &rarr;
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
