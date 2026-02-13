import useRole from '../useRole.js'

const DEFAULT_TAGLINE = 'Building robust multi-agent decision-making under partial observability.'
const DEFAULT_DESCRIPTION =
  "I'm a PhD candidate in Computer Science at the University of Oklahoma. My research focuses on Multi-Agent Reinforcement Learning under partial observability, implicit coordination via learned belief representations, and decentralized policies \u2014 with applications in autonomous driving, cooperative multi-agent systems, and AI for environmental science."

export default function Hero() {
  const role = useRole()

  return (
    <section className="hero">
      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-name">Vishnu Kadiyala</h1>
      <p className="hero-tagline">
        {role?.tagline || DEFAULT_TAGLINE}
      </p>
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
      <div className="scroll-indicator">
        <span>scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
