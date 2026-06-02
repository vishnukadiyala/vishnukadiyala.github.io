import useRole from '../useRole.js'

const THRUSTS = [
  {
    title: 'Implicit Coordination via Latent Belief Representations',
    description:
      "Cooperative multi-agent systems often can't rely on explicit communication: bandwidth is limited, channels are noisy, and at execution time agents typically can't share weights. I work on learning compact latent belief representations that let agents coordinate anyway, using attention-based belief updates over local observation histories and decentralized policies that condition on those beliefs. The goal is coordination that survives the gap between training and deployment.",
  },
  {
    title: 'Learning Dynamics in Cooperative MARL',
    description:
      "Methods that look principled on paper can still fail to train. My NeurIPS 2026 submission characterizes one such failure mode: auxiliary losses with non-stationary targets inject directional gradient noise into the shared trunk, destabilizing training across both MARL and supervised settings. I'm interested in the broader question of which architectural and optimization choices make cooperative MARL train stably at scale, and which silently break it.",
  },
  {
    title: 'Multi-Agent Decision-Making for Autonomous Driving',
    description:
      "Self-driving fleets are Dec-POMDPs in the wild: every vehicle has a partial view, agents can't share weights at execution time, and miscoordination has real-world cost. I'm extending the belief-representation and learning-dynamics work to multi-agent driving prediction (Waymax, Waymo Open Motion Dataset) and bandwidth-constrained V2X communication. The question is whether methods that work in MPE and SMAX hold up behind the wheel.",
  },
]

export default function Research() {
  const role = useRole()

  // Order thrusts by role focus when a role is active; otherwise natural order.
  const featuredIndices = role?.featuredThrusts
  const ordered = featuredIndices
    ? [
        ...featuredIndices.map((i) => THRUSTS[i]).filter(Boolean),
        ...THRUSTS.filter((_, i) => !featuredIndices.includes(i)),
      ]
    : THRUSTS

  return (
    <section id="research" className="section fade-in">
      <h2 className="section-title">Research</h2>

      <p className="research-lead">
        Three threads run through my work: coordination without a shared brain,
        what makes that training stable, and whether it survives contact with the road.
      </p>

      <div className="thrusts-grid">
        {ordered.map((thrust, i) => (
          <article key={i} className="thrust-card">
            <span className="thrust-index">{String(i + 1).padStart(2, '0')}</span>
            <h4>{thrust.title}</h4>
            <p>{thrust.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
