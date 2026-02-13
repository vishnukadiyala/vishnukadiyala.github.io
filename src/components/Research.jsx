import useRole from '../useRole.js'

const INTERESTS = [
  'Multi-Agent RL under partial observability (Dec-POMDPs), latent belief/state tracking',
  'Implicit coordination via learned belief representations, decentralized policies without explicit communication',
  'Learning dynamics and stability in cooperative MARL systems',
  'Autonomous driving and multi-agent decision-making',
  'Spatio-temporal learning for environmental sensing (stations + radar/satellite, irregular grids)',
  'ML systems: reproducible experimentation, scalable training, simulation-to-real considerations',
]

const THRUSTS = [
  {
    title: 'Implicit Coordination via Latent Belief Updates',
    description:
      'Learning compact latent beliefs that enable agents to coordinate under partial observability without explicit communication. Combines attention-based belief updates with decentralized execution for robust multi-agent coordination.',
  },
  {
    title: 'Learning Dynamics in Cooperative MARL',
    description:
      'Studying stability and convergence properties of cooperative multi-agent reinforcement learning systems, with a focus on decentralized partially observable settings and scalable training.',
  },
  {
    title: 'Irregular Spatio-Temporal Modeling for Environmental Retrievals',
    description:
      'Modeling retrievals when measurements exist at station locations but predictions are needed elsewhere\u2014without forcing everything onto a rigid grid. Focus on spatial/temporal embeddings + attention mechanisms.',
  },
]

export default function Research() {
  const role = useRole()

  const sortedInterests = role?.highlightInterests
    ? [
        ...role.highlightInterests.map((i) => INTERESTS[i]),
        ...INTERESTS.filter((_, i) => !role.highlightInterests.includes(i)),
      ]
    : INTERESTS

  const featuredIndices = role?.featuredThrusts
  const featured = featuredIndices
    ? THRUSTS.filter((_, i) => featuredIndices.includes(i))
    : THRUSTS
  const other = featuredIndices
    ? THRUSTS.filter((_, i) => !featuredIndices.includes(i))
    : []

  return (
    <section id="research" className="section fade-in">
      <h2 className="section-title">Research</h2>

      <div className="research-interests">
        <h3 className="research-subtitle">Research Interests</h3>
        <ul className="research-list">
          {sortedInterests.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="research-thrusts">
        <h3 className="research-subtitle">Research Thrusts</h3>
        <div className="thrusts-grid">
          {featured.map((thrust, i) => (
            <div key={i} className="thrust-card featured">
              <h4>{thrust.title}</h4>
              <p>{thrust.description}</p>
            </div>
          ))}
          {other.map((thrust, i) => (
            <div key={`other-${i}`} className="thrust-card">
              <h4>{thrust.title}</h4>
              <p>{thrust.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
