import useRole from '../useRole.js'

const DEFAULT_TAGLINE =
  "I'm working on Multi-agent reinforcement learning for autonomous driving and cooperative systems."
const DEFAULT_DESCRIPTION =
  "I'm a PhD candidate in Computer Science at the University of Oklahoma. My research is on Multi-Agent Reinforcement Learning under partial observability: implicit coordination via learned belief representations, decentralized policies, and the learning dynamics that make cooperative MARL stable at scale. I work on these methods because I think they're the right framing for L4 autonomy and V2X: agents acting on incomplete information, with no shared brain to fall back on."

export default function Hero() {
  const role = useRole()

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-greeting">Computer Science · PhD Researcher</p>
          <h1 className="hero-name">Vishnu Kadiyala</h1>
          <p className="hero-tagline">
            {role?.tagline || DEFAULT_TAGLINE}
          </p>
          <ul className="hero-byline">
            <li>Multi-Agent Reinforcement Learning</li>
            <li>University of Oklahoma</li>
            <li>Norman, OK</li>
          </ul>
          <p className="hero-description">
            {role?.description || DEFAULT_DESCRIPTION}
          </p>
          <div className="hero-links">
            <a href="#contact" className="hero-cta">Get in Touch</a>
            <a href="/cv.pdf" className="hero-link" target="_blank" rel="noopener noreferrer">CV</a>
            <a href="https://scholar.google.com/citations?user=3Eh2neYAAAAJ" className="hero-link" target="_blank" rel="noopener noreferrer">Google Scholar</a>
            <a href="https://github.com/vishnukadiyala" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vishnu-kadiyala/" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <figure className="hero-photo">
          <img src="/profile.jpeg" alt="Vishnu Kadiyala" />
        </figure>
      </div>
    </section>
  )
}
