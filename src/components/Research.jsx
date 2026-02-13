const INTERESTS = [
  'Multi-Agent RL under partial observability (Dec-POMDPs), latent belief/state tracking',
  'Communication-aware policies (V2V/V2X), bandwidth/latency constraints, emergent protocols',
  'Cooperative perception + negotiation for autonomy (occlusions, intersections, "phantom" agents)',
  'Spatio-temporal learning for environmental sensing (stations + radar/satellite, irregular grids)',
  'ML systems: reproducible experimentation, scalable training, simulation-to-real considerations',
]

const THRUSTS = [
  {
    title: 'Latent Belief\u2013Driven Multi-Agent Coordination (VABL)',
    description:
      'Learning compact latent beliefs that enable agents to coordinate under partial observability, improving robustness to missing/occluded information and supporting communication-limited settings.',
  },
  {
    title: 'Communication-Aware MARL for V2X Systems',
    description:
      'Training policies that jointly reason about environment actions and communication actions, respecting realistic constraints (message budgets, delays, partial observability) and enabling safer negotiation.',
  },
  {
    title: 'Irregular Spatio-Temporal Modeling for Environmental Retrievals',
    description:
      'Modeling retrievals when measurements exist at station locations but predictions are needed elsewhere\u2014without forcing everything onto a rigid grid. Focus on spatial/temporal embeddings + attention mechanisms.',
  },
]

export default function Research() {
  return (
    <section id="research" className="section fade-in">
      <h2 className="section-title">Research</h2>

      <div className="research-interests">
        <h3 className="research-subtitle">Research Interests</h3>
        <ul className="research-list">
          {INTERESTS.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="research-thrusts">
        <h3 className="research-subtitle">Research Thrusts</h3>
        <div className="thrusts-grid">
          {THRUSTS.map((thrust, i) => (
            <div key={i} className="thrust-card">
              <h4>{thrust.title}</h4>
              <p>{thrust.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
