const TALKS = [
  {
    title: 'Latent Belief\u2013Driven Multi-Agent Coordination',
    venue: 'Graduate Seminar',
    date: '', // Add date when available
  },
]

export default function Talks() {
  return (
    <section id="talks" className="section fade-in">
      <h2 className="section-title">Talks</h2>
      <ul className="talks-list">
        {TALKS.map((talk, i) => (
          <li key={i} className="talk-item">
            <strong>{talk.title}</strong>
            {talk.venue && <span> — {talk.venue}</span>}
            {talk.date && <span className="talk-date"> ({talk.date})</span>}
          </li>
        ))}
      </ul>
    </section>
  )
}
