import useRole from '../useRole.js'

const ROLE_CURRENTLY = {
  autonomy:
    'A paper on when training an agent to predict its teammates helps cooperative agents is under review at ICLR 2027. I am also training a model that learns which road users matter to a driving decision, tested on Waymo and NAVSIM scenes.',
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
  industry:
    'A paper on when training an agent to predict its teammates helps cooperative agents is under review at ICLR 2027. I am also training a transformer that works out, from a small number of what-if trials, which other agents a decision depends on.',
}

const DEFAULT_CURRENTLY =
  'A paper on when training an agent to predict its teammates helps cooperative agents is under review at ICLR 2027. I am preparing a second paper for ICML 2027, on learning whom to attend to from a small number of what-if trials.'

export default function About() {
  const role = useRole()
  const currently = role ? ROLE_CURRENTLY[role.key] || DEFAULT_CURRENTLY : DEFAULT_CURRENTLY

  return (
    <section id="about" className="section fade-in">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            My research asks when an agent's best action depends on what another agent
            does, and how the agent can find that out cheaply. In traffic, most nearby
            road users do not change what a car should do. A few do, and a planner that
            cannot tell them apart will miss the one that matters.
          </p>
          <p>
            I work on this in two ways. I define the need to coordinate with quantities
            from decision theory and test them on small games where the answer can be
            derived by hand. I also train models on procedurally generated multi-agent
            worlds and check them on recorded driving scenes from the Waymo Open Motion
            Dataset and NAVSIM.
          </p>
          <p>
            <strong>Currently:</strong> {currently}
          </p>
          {!role && (
            <p>
              <em>Earlier work:</em> deep learning for environmental data with NSF AI2ES
              and NASA GeoCARB, including precipitation estimates from radar, satellite
              and ground stations, and methane hotspot detection in satellite imagery.
            </p>
          )}
        </div>
        <aside className="about-affiliations" aria-label="At a glance">
          <h3>At a glance</h3>
          <dl>
            <div>
              <dt>Position</dt>
              <dd>PhD Candidate, Computer Science, University of Oklahoma</dd>
            </div>
            <div>
              <dt>Advisor</dt>
              <dd>Dr. Mohammed Atiquzzaman</dd>
            </div>
            <div>
              <dt>Graduating</dt>
              <dd>May 2027</dd>
            </div>
            <div>
              <dt>Under review</dt>
              <dd>ICLR 2027</dd>
            </div>
            <div>
              <dt>In preparation</dt>
              <dd>ICML 2027</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
