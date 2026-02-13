import useRole from '../useRole.js'

export default function Experience() {
  const role = useRole()

  if (!role?.experience) return null

  return (
    <section id="experience" className="section fade-in">
      <h2 className="section-title">{role.label} Experience</h2>
      {role.experience.map((entry, i) => (
        <div key={i} className="experience-entry">
          <div className="experience-header">
            <h3>{entry.title}</h3>
            <span className="experience-date">{entry.date}</span>
          </div>
          <ul className="teaching-details">
            {entry.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
