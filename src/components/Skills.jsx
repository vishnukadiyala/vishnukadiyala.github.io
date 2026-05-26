import useRole from '../useRole.js'

const DEFAULT_GROUPS = [
  {
    category: 'Machine Learning',
    skills: ['Multi-Agent Reinforcement Learning', 'Deep Learning', 'Transformers', 'Attention Mechanisms', 'CNNs', 'Diffusion Models'],
  },
  {
    category: 'Frameworks',
    skills: ['PyTorch', 'JAX / Flax', 'TensorFlow', 'Keras'],
  },
  {
    category: 'Simulation Environments',
    skills: ['Highway-Env', 'MetaDrive', 'MPE (Speaker–Listener)', 'SMAX', 'Overcooked'],
  },
  {
    category: 'Programming',
    skills: ['Python'],
  },
  {
    category: 'Data & Compute',
    skills: ['Pandas', 'Xarray', 'NetCDF', 'HPC / SLURM', 'CUDA', 'Multi-Machine Orchestration (Tailscale + SSH)'],
  },
  {
    category: 'Tools',
    skills: ['Git / GitHub', 'Linux'],
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
