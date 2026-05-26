import useRole from '../useRole.js'

const ROLE_CURRENTLY = {
  autonomy:
    'Under review at NeurIPS 2026: a study of why auxiliary losses with non-stationary targets destabilize cooperative MARL, and the architectural fixes that recover it (290+ runs across MARL and CIFAR-100). In parallel, developing AwareGate — a learned communication-gating policy for cooperative connected automated vehicles — targeting ICLR 2027.',
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
  kla:
    'Designing multi-modality machine learning architectures that fuse heterogeneous data sources, with rigorous evaluation frameworks and data-quality assessment pipelines.',
  amd:
    'Building GPU-accelerated deep learning systems on HPC infrastructure while developing training materials and delivering hands-on labs for computer architecture and AI courses.',
}

const DEFAULT_CURRENTLY =
  'Under review at NeurIPS 2026: a study of why auxiliary losses with non-stationary targets destabilize cooperative MARL training, and the architectural fixes that recover it (290+ runs across MARL and CIFAR-100). In parallel, developing AwareGate — a learned communication-gating policy where agents decide when (not just what) to communicate — targeting ICLR 2027.'

export default function About() {
  const role = useRole()
  const currently = role ? ROLE_CURRENTLY[role.key] || DEFAULT_CURRENTLY : DEFAULT_CURRENTLY

  return (
    <section id="about" className="section fade-in">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I build learning systems that don't assume perfect information. My core work is on
            cooperative multi-agent RL under partial observability — implicit coordination via
            learned belief representations, decentralized policies, and the optimization
            pathologies that show up when you train them at scale. I care about methods that
            are principled, reproducible, and useful in real pipelines.
          </p>
          <p>
            The application I care most about is autonomous driving. Self-driving fleets are
            Dec-POMDPs in the wild: every car has a partial view, agents can't share weights
            at execution time, and the cost of miscoordination is real. I want the methods I
            build to hold up in that setting.
          </p>
          <p>
            <strong>Currently:</strong> {currently}
          </p>
          {!role && (
            <p>
              <em>Earlier work:</em> spatio-temporal learning for environmental
              retrievals with NSF AI2ES and NASA GeoCARB (transformer-based retrievals,
              methane hotspot detection from satellite observations).
            </p>
          )}
          <div className="about-affiliations">
            <h3>Current Affiliation</h3>
            <ul>
              <li>
                <strong>University of Oklahoma</strong> — PhD Candidate, Computer Science
              </li>
              <li>
                <strong>Advisor:</strong> Dr. Mohammed Atiquzzaman
              </li>
            </ul>
            <h3>Past Collaborations</h3>
            <ul>
              <li>
                <strong>NSF AI2ES</strong> (with Dr. Andrew Fagg) — 2023–2025
              </li>
              <li>
                <strong>NASA GeoCARB</strong> (with Dr. Sean Crowell) — 2021–2023
              </li>
            </ul>
          </div>
        </div>
        <img src="/profile.jpeg" alt="Vishnu Kadiyala" className="about-image" />
      </div>
    </section>
  )
}
