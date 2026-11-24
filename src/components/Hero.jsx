import useRole from '../useRole.js'

const DEFAULT_TAGLINE =
  'I study how agents work out when, and with whom, they need to coordinate.'
const DEFAULT_DESCRIPTION =
  "I'm a PhD candidate in Computer Science at the University of Oklahoma, advised by Dr. Mohammed Atiquzzaman. I work on multi-agent learning under partial observability, and autonomous driving is the application I test it on. I graduate in May 2027."

export default function Hero() {
  const role = useRole()

  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="hero-greeting">Computer Science · PhD Candidate</p>
          <h1 className="hero-name">Vishnu Kadiyala</h1>
          <p className="hero-tagline">
            {role?.tagline || DEFAULT_TAGLINE}
          </p>
          <ul className="hero-byline">
            <li>Multi-Agent Learning</li>
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
            <a href="https://orcid.org/0009-0004-4524-6722" className="hero-link" target="_blank" rel="noopener noreferrer">ORCID</a>
            <a href="https://github.com/vishnukadiyala" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/vishnu-kadiyala/" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <figure className="hero-photo">
          <picture>
            <source srcSet="/profile.webp" type="image/webp" />
            <img src="/profile.jpeg" alt="Vishnu Kadiyala" width="320" height="400" />
          </picture>
        </figure>
      </div>
    </section>
  )
}
