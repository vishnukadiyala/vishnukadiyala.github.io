const PREPRINTS = [
  {
    title: 'Latent Belief\u2013Driven Multi-Agent Coordination',
    status: 'Preprint in preparation',
  },
  {
    title: 'Communication-Aware MARL for V2X Coordination Under Partial Observability',
    status: 'In progress',
  },
  {
    title: 'Irregular Spatio-Temporal Retrievals with Transformer-Based Architectures',
    status: 'In progress',
  },
]

export default function Publications() {
  return (
    <section id="publications" className="section fade-in">
      <h2 className="section-title">Publications</h2>
      <p className="publications-note">
        See my full list on{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>
        .
      </p>

      <h3 className="research-subtitle">Preprints / In Progress</h3>
      <ul className="publication-list">
        {PREPRINTS.map((pub, i) => (
          <li key={i} className="publication-item">
            <span className="publication-title">&ldquo;{pub.title}&rdquo;</span>
            <span className="publication-status"> — {pub.status}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
