export default function About() {
  return (
    <section id="about" className="section fade-in">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I build learning systems that don't assume perfect information. My work spans
            implicit coordination via learned belief representations, decentralized multi-agent
            policies, and spatio-temporal learning on irregularly sampled environmental data.
            I care about methods that are principled, reproducible, and useful in real pipelines.
          </p>
          <p>
            <strong>Currently:</strong> Developing attention-based latent belief updates for
            decentralized multi-agent coordination; studying learning dynamics and stability
            in cooperative MARL; refining irregular spatio-temporal embeddings for environmental
            retrievals.
          </p>
          <div className="about-affiliations">
            <h3>Current Affiliations</h3>
            <ul>
              <li>
                <strong>University of Oklahoma</strong> — PhD Candidate, Computer Science
              </li>
              <li>
                <strong>Advisor:</strong> Dr. Mohammed Atiquzzaman
              </li>
              <li>
                <strong>Collaborations:</strong> NSF AI2ES, NASA GeoCARB (with Dr. Sean Crowell)
              </li>
            </ul>
          </div>
        </div>
        <div className="about-image">Your Photo</div>
      </div>
    </section>
  )
}
