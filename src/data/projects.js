const projects = [
  {
    title: 'When Auxiliary Losses Fail: Non-Stationary Targets Induce Directional Gradient Noise',
    tagline: 'A learning-dynamics account of why auxiliary losses sometimes corrupt late training',
    subtitle: 'NeurIPS 2026 (under review)',
    featured: true,
    description:
      'Auxiliary prediction losses usually stabilize representation learning, but sometimes quietly degrade late-training performance in a way that looks like ordinary RL noise. This work identifies the mechanism: when an auxiliary target is both structured (coupled to the task state) and non-stationary (drifting as other agents learn), it injects directional gradient noise whose contribution to parameter variance dominates the vanishing policy gradient near convergence.',
    details: [
      'The effect is not magnitude imbalance, not multi-task conflict, and not capacity consumption. A target-source distinguishing test holds architecture, auxiliary capacity, and the gradient pathway fixed and varies only the target. Co-learning teammate targets are pathological (Cohen’s d = +1.40 vs. no auxiliary, with a bootstrap CI above zero), while frozen-policy and random targets are statistically indistinguishable from no auxiliary at all. An 8× auxiliary-capacity sweep has no effect, which rules out capacity-consumption explanations.',
      'A first-order model links teammate-policy drift to the covariance of auxiliary-gradient noise, yielding a drift-to-variance bound and a cosine-standard-deviation diagnostic that separates an active interference pathway from an inactive one. The predicted severity ordering (random < frozen < co-learning) holds across four cooperative MARL benchmarks, while supervised CIFAR-100 and slow-drift MPE sit at near-zero effect, exactly the stationarity boundary the theory predicts.',
      'The study is built on VABL, a minimal attention-based belief encoder (GRU belief state, multi-head attention over teammate actions, PPO policy) in which the attention, auxiliary loss, and aux-to-encoder gradient flow can each be manipulated independently. Three gradient-pathway interventions, annealing the auxiliary weight, stop-gradient on the belief, and critic-side auxiliary placement, recover the no-auxiliary regime on Overcooked. SMAX retains a residual gap with a non-monotonic response to annealing, which the paper flags as open.',
    ],
    highlights: [
      { value: 'd = +1.40', label: 'co-learning aux vs. none (CI above zero)' },
      { value: '290+', label: 'runs · 5 seeds · bootstrap CIs' },
      { value: '8×', label: 'aux-capacity sweep, no effect' },
      { value: '3 fixes', label: 'recover the no-aux regime' },
    ],
    tags: ['Multi-Agent RL', 'Learning Dynamics', 'Auxiliary Losses', 'PPO', 'NeurIPS 2026'],
    github: 'https://github.com/vishnukadiyala/vabl-multi-agent-coordination',
    gallery: [
      {
        src: '/projects/aux-variance.webp',
        caption:
          'Cross-seed standard deviation of final performance on Overcooked. The full attention-plus-auxiliary configuration is the high-variance pathology (8.5); stop-gradient on the belief and λ-annealing pull it back toward the no-auxiliary regime.',
      },
      {
        src: '/projects/aux-ablation.webp',
        caption:
          'Per-seed final performance by configuration. The full attention-plus-auxiliary setup is bimodal and high-variance, while removing either the attention or the auxiliary loss restores stable runs.',
      },
    ],
  },
  {
    title: 'Belief-Encoder Architectures for Multi-Agent Driving Prediction',
    subtitle: 'In progress · Waymax',
    featured: true,
    description:
      "Applying VABL's belief-encoder architecture to multi-agent prediction in the Waymo Open Motion Dataset via Waymax. Three-variant comparison (full belief encoder, ablated attention, and a baseline) designed to test whether the gradient-interference pathology characterized in the NeurIPS work generalizes from cooperative MARL benchmarks to real driving scenarios. Open question: does what fails in Overcooked also fail behind the wheel?",
    tags: ['Multi-Agent RL', 'Waymax', 'Motion Prediction', 'Belief Modeling', 'JAX'],
    codeNote: 'Code: coming as the work matures.',
  },
  {
    title: 'AwareGate: Learning When to Communicate',
    subtitle: 'In development · Targeting ICLR 2027',
    featured: true,
    description:
      "A learned communication-gating policy for cooperative multi-agent systems. Agents decide when (not just what) to communicate, using cross-attention over received messages and a recurrent belief state. The thesis: in bandwidth-constrained settings, including V2X, always-on communication isn't just wasteful, it can hurt coordination. Selective gating should outperform both silent and full-broadcast baselines.",
    tags: ['Multi-Agent RL', 'Learned Communication', 'Attention + Recurrent Belief', 'V2X'],
    code: 'https://github.com/vishnukadiyala/learn-when-to-communicate',
    codeNote: 'private, available on request',
    gallery: [
      {
        src: '/projects/awaregate-reward-vs-comm.webp',
        caption:
          'Cumulative reward against communication rate across cooperative driving scenarios (intersection and highway, up to 20 agents), comparing no-communication and full-communication baselines with the learned gate. The learned policy reaches strong reward at a fraction of the full-broadcast communication rate in the denser settings.',
      },
      {
        src: '/projects/awaregate-pareto.webp',
        caption:
          'Final reward and realized gate rate versus the target communication rate (Lagrangian-BCE, Sparse Speaker-Listener). Reward peaks near a 0.5 target rate, above both the silent (0.0) and always-on (1.0) extremes.',
      },
    ],
  },
  {
    title: 'Transformer-Based Irregular Spatio-Temporal Retrievals',
    description:
      'Transformer-based architecture for environmental data (stations + remote sensing), emphasizing spatial/temporal embeddings and attention-based fusion. Achieved 13× improvement over classical Marshall–Palmer baseline.',
    tags: ['Transformers', 'Spatio-Temporal', 'Environmental AI', 'AI2ES'],
    github: 'https://github.com/ai2es/ZR-relationship',
  },
  {
    title: 'Methane Hotspot Detection from Satellite Observations',
    description:
      'U-Net–based deep learning model achieving 95% accuracy for methane hotspot and leak detection. Improved anomaly detection from 80% to 90.2% using diffusion-based generative models.',
    tags: ['U-Net', 'Diffusion Models', 'Remote Sensing', 'GeoCARB'],
    github: 'https://github.com/GeoCarb-OU/methane_hotspot_detection',
  },
  {
    title: 'Vision-Based Atmospheric Visibility Estimation',
    description:
      'Developed a vision-based system using outdoor camera imagery for statewide atmospheric visibility inference beyond sparsely deployed ASOS stations.',
    tags: ['Computer Vision', 'Environmental AI', 'Sensor Fusion'],
    github: 'https://github.com/vishnukadiyala',
  },
  {
    title: 'fastreading: RSVP Reader for Research Papers',
    subtitle: 'Live tool',
    description:
      'A single-page RSVP (rapid serial visual presentation) reader for research papers. Drop a PDF, focus on the red anchor, skip the bibliography. Two-column reflow via pdf.js; optional per-section AI summaries (Claude Haiku, BYOK). No backend.',
    tags: ['RSVP', 'PDF Parsing', 'Claude API', 'Web Tool'],
    demo: 'https://vishnu.kadiyala.net/fastreading/',
  },
]

export default projects
