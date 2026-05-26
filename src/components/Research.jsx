import useRole from '../useRole.js'

const INTERESTS = [
  'Multi-Agent RL under partial observability (Dec-POMDPs), latent belief and state tracking',
  'Implicit coordination via learned belief representations; decentralized policies without explicit communication',
  'Learning dynamics and stability in cooperative MARL — optimization pathologies, non-stationary targets, gradient interference',
  'Multi-agent decision-making for autonomous driving: motion prediction, cooperative perception, V2X',
  'Learned communication in bandwidth-constrained multi-agent settings',
  'ML systems: reproducible experimentation, scalable training, simulation-to-real',
]

const THRUSTS = [
  {
    title: 'Implicit Coordination via Latent Belief Representations',
    description:
      "Cooperative multi-agent systems often can't rely on explicit communication — bandwidth is limited, channels are noisy, and at execution time agents typically can't share weights. I work on learning compact latent belief representations that let agents coordinate anyway, using attention-based belief updates over local observation histories and decentralized policies that condition on those beliefs. The goal is coordination that survives the gap between training and deployment.",
  },
  {
    title: 'Learning Dynamics in Cooperative MARL',
    description:
      "Methods that look principled on paper can still fail to train. My NeurIPS 2026 submission characterizes one such failure mode: auxiliary losses with non-stationary targets inject directional gradient noise into the shared trunk, destabilizing training across both MARL and supervised settings. I'm interested in the broader question — which architectural and optimization choices make cooperative MARL train stably at scale, and which silently break it.",
  },
  {
    title: 'Multi-Agent Decision-Making for Autonomous Driving',
    description:
      "Self-driving fleets are Dec-POMDPs in the wild: every vehicle has a partial view, agents can't share weights at execution time, and miscoordination has real-world cost. I'm extending the belief-representation and learning-dynamics work to multi-agent driving prediction (Waymax, Waymo Open Motion Dataset) and bandwidth-constrained V2X communication. The question is whether methods that work in MPE and SMAX hold up behind the wheel.",
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
