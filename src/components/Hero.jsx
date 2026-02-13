export default function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, I'm</p>
      <h1 className="hero-name">Vishnu Kadiyala</h1>
      <p className="hero-tagline">
        PhD Student &middot; Multi-Agent RL &middot; V2X &middot; AI for Environmental Sciences
      </p>
      <p className="hero-description">
        I'm a PhD candidate in Computer Science at the University of Oklahoma. I work on
        Multi-Agent Reinforcement Learning, V2X/communication-aware coordination, and AI
        for environmental science—with a focus on systems that operate under partial
        observability, irregular sampling, and deployment constraints.
      </p>
      <div className="hero-links">
        <a href="#contact" className="hero-cta">Get in Touch</a>
        <a href="#" className="hero-link" target="_blank" rel="noopener noreferrer">CV</a>
        <a href="#" className="hero-link" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        <a href="https://github.com/vishnukadiyala" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="#" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
