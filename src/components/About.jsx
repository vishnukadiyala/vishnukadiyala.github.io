import useRole from '../useRole.js'

const ROLE_CURRENTLY = {
  autonomy:
    'Investigating decentralized policy learning and implicit coordination for multi-agent systems operating under partial observability, with applications to autonomous driving.',
  systems:
    'Building scalable ML pipelines on HPC infrastructure for large-scale spatio-temporal data processing and reproducible experimentation.',
  analytics:
    'Developing predictive deep learning models for large-scale real-world datasets, with emphasis on forecasting and anomaly detection.',
  ml:
    'Researching multi-agent reinforcement learning with transformer architectures for decision-making under partial observability.',
  datascience:
    'Building predictive models on large-scale irregular environmental datasets, with focus on feature engineering, statistical validation, and measurable improvements over classical baselines.',
  advancedml:
    'Designing novel transformer architectures and latent belief representations for multi-agent coordination; exploring diffusion-based generative models for anomaly detection.',
  cv:
    'Training and evaluating deep learning models for computer vision tasks including detection and classification on large-scale image datasets; building reproducible ML pipelines on HPC infrastructure.',
}

const DEFAULT_CURRENTLY =
  'Developing attention-based latent belief updates for decentralized multi-agent coordination; studying learning dynamics and stability in cooperative MARL; refining irregular spatio-temporal embeddings for environmental retrievals.'

export default function About() {
  const role = useRole()
  const currently = role ? ROLE_CURRENTLY[role.key] || DEFAULT_CURRENTLY : DEFAULT_CURRENTLY

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
            <strong>Currently:</strong> {currently}
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
                <strong>Collaborations:</strong> NSF AI2ES (with Dr. Andrew Fagg), NASA GeoCARB (with Dr. Sean Crowell)
              </li>
            </ul>
          </div>
        </div>
        <div className="about-image about-initials">VK</div>
      </div>
    </section>
  )
}
