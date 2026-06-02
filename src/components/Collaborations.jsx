const PAST = [
  {
    org: 'NSF AI2ES',
    detail: 'with Dr. Andrew Fagg',
    period: '2023–2025',
  },
  {
    org: 'NASA GeoCARB',
    detail: 'with Dr. Sean Crowell',
    period: '2021–2023',
  },
]

export default function Collaborations() {
  return (
    <section id="collaborations" className="section fade-in">
      <h2 className="section-title">Past Collaborations</h2>
      <ul className="collaborations-list">
        {PAST.map(({ org, detail, period }) => (
          <li key={org} className="collaboration-entry">
            <div className="collaboration-main">
              <h3>{org}</h3>
              <span className="collaboration-detail">{detail}</span>
            </div>
            <span className="collaboration-period">{period}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
