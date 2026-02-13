export default function Contact() {
  return (
    <section id="contact" className="section fade-in">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content">
        <p>
          If you're interested in collaboration on multi-agent RL, implicit coordination,
          or spatio-temporal modeling, feel free to reach out.
        </p>
        <a href="mailto:vishnu@kadiyala.net" className="contact-email">
          Say Hello &rarr;
        </a>
        <div className="social-links">
          <a href="https://github.com/vishnukadiyala" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vishnu-kadiyala/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="contact-location">Norman, OK</p>
      </div>
    </section>
  )
}
