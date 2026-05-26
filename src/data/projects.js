const projects = [
  {
    title: 'AwareGate: Learning When to Communicate',
    subtitle: 'ICLR 2027 (target) · arXiv preprint coming',
    description:
      'A learned communication-gating policy for cooperative multi-agent systems. Agents decide when (not just what) to communicate using cross-attention over received messages, a GRU-based belief state, and a counterfactual gating baseline. Across rate sweeps, selective communication beats always-on — peak reward sits at ~50% gate rate, not 100%.',
    image: '/projects/awaregate-pareto.png',
    imageCaption:
      'Pareto rate–reward curve on Sparse Speaker–Listener. Selective communication outperforms both silent and full-broadcast baselines.',
    highlights: [
      { value: '~50%', label: 'optimal gate rate' },
      { value: '4 tiers', label: 'MPE / SMAX / Highway / MetaDrive' },
      { value: 'JAX + PyTorch', label: 'dual-track impl.' },
    ],
    tags: ['Multi-Agent RL', 'Learned Communication', 'Attention + GRU', 'ICLR 2027'],
    code: 'https://github.com/vishnukadiyala/learn-when-to-communicate',
    codeNote: 'private — available on request',
  },
  {
    title: 'Implicit Coordination via Attention-Based Latent Belief Updates',
    description:
      'A MARL framework for decentralized partially observable multi-agent systems that learns implicit belief representations for coordination without explicit communication. Under review at ICML 2026.',
    tags: ['Multi-Agent RL', 'Dec-POMDP', 'Latent Beliefs', 'ICML 2026'],
    github: 'https://github.com/vishnukadiyala/vabl-multi-agent-coordination',
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
]

export default projects
