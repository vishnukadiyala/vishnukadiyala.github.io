import useRole from '../useRole.js'

const DEFAULT_GROUPS = [
  {
    category: 'Machine Learning',
    skills: ['Multi-Agent Reinforcement Learning', 'Deep Learning', 'Transformers', 'Attention Mechanisms', 'CNNs', 'Diffusion Models'],
  },
  {
    category: 'Programming Languages',
    skills: ['Python', 'C', 'C++'],
  },
  {
    category: 'Frameworks',
    skills: ['PyTorch', 'JAX / Flax', 'TensorFlow'],
  },
  {
    category: 'Simulation Environments',
    skills: ['MPE', 'SMAX', 'Highway-Env', 'MetaDrive', 'Waymax'],
  },
  {
    category: 'Data & Systems',
    skills: ['Pandas', 'Xarray', 'NetCDF', 'High-Performance Computing', 'SLURM', 'Distributed Training', 'Remote Compute Orchestration'],
  },
  {
    category: 'Tools',
    skills: ['Git / GitHub', 'Linux', 'ROS'],
  },
]

export default function Skills() {
  const role = useRole()

  const groups = role?.skills
    ? Object.entries(role.skills).map(([category, skills]) => ({ category, skills }))
    : DEFAULT_GROUPS

  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">
        {role ? 'Core Skills' : 'Technical Expertise'}
      </h2>

      {role?.expertise && (
        <div className="expertise-section">
          <ul className="research-list">
            {role.expertise.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {groups.map((group) => (
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
