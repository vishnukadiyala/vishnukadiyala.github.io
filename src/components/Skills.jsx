const SKILL_GROUPS = [
  {
    category: 'Machine Learning',
    skills: ['Deep Learning', 'Transformers', 'CNNs', 'Diffusion Models', 'Multi-Agent Reinforcement Learning'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'MATLAB'],
  },
  {
    category: 'Frameworks',
    skills: ['TensorFlow', 'Keras'],
  },
  {
    category: 'Data & Systems',
    skills: ['Pandas', 'Xarray', 'NetCDF', 'High-Performance Computing', 'SLURM'],
  },
  {
    category: 'Tools',
    skills: ['GitHub', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">Technical Expertise</h2>
      {SKILL_GROUPS.map((group) => (
        <div key={group.category} className="skills-group">
          <h3>{group.category}</h3>
          <div className="skills-list">
            {group.skills.map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
