export default function About() {
  return (
    <section id="about" className="section fade-in">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I build learning systems that don't assume perfect information. My work spans
            belief/latent-state modeling, communication and coordination, and spatio-temporal
            learning on irregularly sampled environmental data. I care about methods that are
            principled, reproducible, and useful in real pipelines.
          </p>
          <div className="about-affiliations">
            <h3>Current Affiliations</h3>
            <ul>
              <li>
                <strong>University of Oklahoma</strong> — PhD Candidate, Computer Science
              </li>
              <li>
                <strong>Advisors:</strong> Dr. Sean Crowell, Dr. Andrew Fagg
              </li>
              <li>
                <strong>Collaborations:</strong> NASA / AI2ES / GEOCARB
              </li>
            </ul>
          </div>
        </div>
        <div className="about-image">Your Photo</div>
      </div>
    </section>
  )
}
