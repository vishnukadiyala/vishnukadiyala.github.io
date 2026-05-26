const projects = [
  {
    title: 'When Auxiliary Losses Fail: Non-Stationary Targets Induce Directional Gradient Noise',
    tagline: 'Multi-Agent RL + supervised learning study of gradient interference',
    subtitle: 'NeurIPS 2026 (under review)',
    featured: true,
    description:
      'A methodological study of why auxiliary losses degrade learning in non-stationary settings. We show that auxiliary heads with drifting targets inject directional gradient noise into the shared trunk, and characterize the pathology across both MARL and supervised learning (CIFAR-100). Three architectural fixes — stop-gradient on the auxiliary target, λ-annealing, and mean-pool attention — recover lost performance.',
    highlights: [
      { value: '290+', label: 'runs across 7 experiments' },
      { value: '2 domains', label: 'MARL + CIFAR-100' },
      { value: '3 fixes', label: 'validated architectural remedies' },
    ],
    tags: ['Multi-Agent RL', 'Optimization', 'Auxiliary Losses', 'NeurIPS 2026'],
    github: 'https://github.com/vishnukadiyala/vabl-multi-agent-coordination',
  },
  {
    title: 'Belief-Encoder Architectures for Multi-Agent Driving Prediction',
    subtitle: 'In progress · Waymax',
    featured: true,
    description:
      "Applying VABL's belief-encoder architecture to multi-agent prediction in the Waymo Open Motion Dataset via Waymax. Three-variant comparison — full belief encoder, ablated attention, and a baseline — designed to test whether the gradient-interference pathology characterized in the NeurIPS work generalizes from cooperative MARL benchmarks to real driving scenarios. Open question: does what fails in Overcooked also fail behind the wheel?",
    tags: ['Multi-Agent RL', 'Waymax', 'Motion Prediction', 'Belief Modeling', 'JAX'],
    codeNote: 'Code: coming as the work matures.',
  },
  {
    title: 'AwareGate: Learning When to Communicate',
    subtitle: 'In development · Targeting ICLR 2027',
    featured: true,
    description:
      "A learned communication-gating policy for cooperative multi-agent systems. Agents decide when (not just what) to communicate, using cross-attention over received messages and a recurrent belief state. The thesis: in bandwidth-constrained settings — including V2X — always-on communication isn't just wasteful, it can hurt coordination. Selective gating should outperform both silent and full-broadcast baselines.",
    tags: ['Multi-Agent RL', 'Learned Communication', 'Attention + Recurrent Belief', 'V2X'],
    code: 'https://github.com/vishnukadiyala/learn-when-to-communicate',
    codeNote: 'private — available on request',
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
    title: 'fastreading — RSVP Reader for Research Papers',
    subtitle: 'Live tool',
    description:
      'A single-page RSVP (rapid serial visual presentation) reader for research papers. Drop a PDF, focus on the red anchor, skip the bibliography. Two-column reflow via pdf.js; optional per-section AI summaries (Claude Haiku, BYOK). No backend.',
    tags: ['RSVP', 'PDF Parsing', 'Claude API', 'Web Tool'],
    demo: 'https://vishnu.kadiyala.net/fastreading/',
  },
]

export default projects
