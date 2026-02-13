/**
 * Role-based content variants derived from tailored resumes.
 *
 * Usage: vishnu.kadiyala.net/?role=<key>
 *
 * Roles:
 *   autonomy  — Rivian/GM: RL, decentralized decision-making, autonomous driving
 *   systems   — Dropbox: ML infra, HPC pipelines, scalable compute, benchmarking
 *   analytics — Adobe/CapOne: predictive modeling, data analytics, forecasting
 *   ml        — General industry: ML engineer, MARL, autonomous systems
 */

const roles = {
  autonomy: {
    label: 'Autonomy / ML Research',
    tagline: 'Decentralized decision-making and implicit coordination under partial observability.',
    description:
      "Ph.D. candidate building learning-based decision systems under uncertainty, with emphasis on multi-agent coordination, partial observability, and transformer-based representations. Delivered end-to-end ML pipelines on real sensor modalities (satellite, radar, vision) and HPC infrastructure.",
    skills: {
      'ML / RL': ['Multi-Agent RL', 'Partial Observability', 'Decentralized Policies', 'Representation Learning', 'Transformers', 'CNNs', 'Diffusion Models'],
      'Strengths': ['Debugging', 'Experiment Design', 'Training Stability Analysis', 'Sensor Fusion Reasoning'],
    },
    expertise: [
      'Decentralized decision-making and coordination learning under partial observability',
      'Belief/representation modeling for policy learning without explicit communication',
      'Diagnosing learning behavior: reward shaping pitfalls, variance, instability, and generalization gaps',
      'Evaluation mindset: ablations, counterfactual tests, and robustness-focused benchmarking',
    ],
    experience: [
      {
        title: 'Autonomous Driving & Multi-Agent RL Research (PhD)',
        date: '2025 \u2013 Present',
        bullets: [
          'Investigating decentralized policy learning and implicit coordination for agents operating under partial observability and non-stationary interaction dynamics.',
          'Designing attention-driven latent belief updates enabling agents to infer teammate intent from observed actions (no explicit messaging).',
          'Focusing on evaluation that separates coordination from coincidence (ablations, policy shuffling/counterfactual tests, robustness checks).',
        ],
      },
    ],
    highlightProjects: [0, 1, 2, 3],
    highlightInterests: [0, 1, 3],
    featuredThrusts: [0, 1],
  },

  systems: {
    label: 'ML Systems & Infrastructure',
    tagline: 'Scalable ML pipelines, HPC infrastructure, and reproducible experimentation.',
    description:
      "Ph.D. candidate working at the intersection of machine learning and scalable data systems. Experienced building end-to-end ML pipelines on HPC infrastructure, processing large real-world datasets (satellite, radar, camera streams), and iterating with a strong emphasis on benchmarking, reproducibility, and systems tradeoffs.",
    skills: {
      'Systems': ['HPC/SLURM', 'Experiment Orchestration', 'Data Pipelines', 'Reproducible Training/Eval'],
      'ML / AI': ['Transformers', 'CNNs', 'Diffusion Models', 'Anomaly Detection', 'Representation Learning'],
      'Data': ['Pandas', 'Xarray', 'NetCDF', 'Large-Scale Preprocessing', 'Feature Generation'],
      'Engineering': ['Benchmark Design', 'Debugging', 'Profiling Mindset', 'Technical Writing'],
    },
    expertise: [
      'Designed and operated ML workflows on HPC/SLURM, balancing queueing constraints, throughput, and experiment repeatability',
      'Built data-processing pipelines for large spatio-temporal datasets with irregular sampling; optimized I/O patterns and preprocessing time',
      'Implemented evaluation harnesses with reproducible configs, controlled ablations, and performance tracking across experiments',
    ],
    highlightProjects: [1, 2, 3, 0],
    highlightInterests: [5, 4],
    featuredThrusts: [2],
  },

  analytics: {
    label: 'Applied ML & Data Analytics',
    tagline: 'Predictive modeling and scalable deep learning for real-world data analytics.',
    description:
      "Ph.D. candidate specializing in applied machine learning and predictive modeling on large-scale real-world datasets. Experienced developing scalable deep learning systems for forecasting, anomaly detection, and data-driven analytics. Strong background in transforming complex datasets into interpretable models that support decision-making.",
    skills: {
      'Machine Learning': ['Statistical Modeling', 'Predictive Modeling', 'Deep Learning', 'Transformers', 'CNNs', 'Diffusion Models'],
      'Data Analytics': ['Feature Engineering', 'Time-Series Modeling', 'Experiment Design', 'Model Evaluation'],
      'Tools': ['TensorFlow', 'Keras', 'Pandas', 'Xarray', 'NetCDF', 'HPC/SLURM'],
    },
    expertise: [
      'Predictive modeling and forecasting from large-scale datasets',
      'Time-series analysis and anomaly detection',
      'Model interpretability and evaluation metrics',
      'Experimental design and validation workflows',
    ],
    highlightProjects: [1, 2, 3, 0],
    highlightInterests: [4, 5],
    featuredThrusts: [2],
  },

  ml: {
    label: 'ML Engineer / MARL',
    tagline: 'Multi-agent reinforcement learning, transformer architectures, and autonomous systems.',
    description:
      "Machine learning researcher and Ph.D. candidate specializing in multi-agent reinforcement learning, transformer architectures, and decision-making under partial observability. Experienced building end-to-end deep learning systems on real-world datasets including satellite, radar, and vision-based sensing.",
    skills: {
      'ML / RL': ['Deep Learning', 'Transformers', 'CNNs', 'Diffusion Models', 'Multi-Agent RL'],
      'Concepts': ['Partial Observability', 'Policy Learning', 'Sensor Fusion', 'Spatio-Temporal Modeling'],
    },
    highlightProjects: [0, 1, 2, 3],
    highlightInterests: [0, 1, 2, 5],
    featuredThrusts: [0, 1, 2],
  },
}

export default roles
