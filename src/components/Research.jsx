import useRole from '../useRole.js'

const THRUSTS = [
  {
    title: 'Measuring the need to coordinate',
    description:
      "Many quantities are used to measure coordination between agents. I test them on small games where the right answer can be derived by hand, and I separate two things that are often merged: whether my best action depends on my partner's action, and how much I gain from observing my partner.",
  },
  {
    title: 'Learning whom to attend to',
    description:
      "An agent among many cannot model everyone. I train a transformer on procedurally generated worlds to work out, from a small budget of what-if trials, which other agents its outcome depends on and what it loses by acting alone. The model is never told the other agents' options.",
  },
  {
    title: 'When predicting teammates helps',
    description:
      'Cooperative agents are often trained to predict their teammates as an auxiliary task. I show that needing information about a partner does not mean an agent benefits from being trained to predict that partner, and I identify when the training helps. The paper is under review at ICLR 2027.',
  },
  {
    title: 'Coordination in driving',
    description:
      'On NAVSIM and the Waymo Open Motion Dataset, I measure which surrounding road users change a planner\'s decision by removing each one and re-scoring the plan. I also study when a connected vehicle should send its intent over V2X and when it can leave others to predict it.',
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
        My work is organized around four questions about coordination between agents.
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
