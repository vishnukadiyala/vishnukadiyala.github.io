/**
 * Role-based content variants.
 *
 * Usage: append ?role=<key> to your URL.
 * Example: kadiyala.net/?role=autonomy
 *
 * Each role can override:
 *   - tagline: hero tagline text
 *   - description: hero description paragraph
 *   - highlightProjects: array of project indices (0-based) to show first
 *   - highlightInterests: array of research interest indices to emphasize
 *   - featuredThrusts: array of thrust indices to feature (others still shown)
 */

const roles = {
  autonomy: {
    label: 'Autonomous Systems / World Models',
    tagline: 'Multi-Agent RL + V2X for safe, coordinated autonomy.',
    description:
      "I'm a PhD candidate at the University of Oklahoma building decision-making systems for autonomous vehicles. My work focuses on multi-agent coordination under partial observability, communication-aware policies for V2X, and latent belief modeling — with an emphasis on sensor fusion, uncertainty estimation, and simulation-to-real transfer.",
    highlightProjects: [0, 1, 2],
    highlightInterests: [0, 1, 2, 3],
    featuredThrusts: [0, 1],
  },
  envai: {
    label: 'AI for Environmental Sciences',
    tagline: 'Learning systems for weather + environmental data: irregular data, real constraints.',
    description:
      "I'm a PhD candidate at the University of Oklahoma working on AI for environmental science. I develop spatio-temporal models for irregularly sampled data — station measurements, radar, and satellite retrievals — with a focus on attention-based architectures, spatial embeddings, and methods that work without forcing data onto rigid grids.",
    highlightProjects: [1, 2],
    highlightInterests: [4, 5],
    featuredThrusts: [2],
  },
  ml: {
    label: 'Machine Learning Research',
    tagline: 'Probabilistic modeling, reinforcement learning, and deep architectures for real-world systems.',
    description:
      "I'm a PhD candidate at the University of Oklahoma focused on machine learning methods that operate under uncertainty. My research spans latent-state modeling, multi-agent reinforcement learning, and transformer architectures for irregular data — with applications in autonomous systems and environmental science.",
    highlightProjects: [0, 1, 2],
    highlightInterests: [0, 3, 4, 5],
    featuredThrusts: [0, 1, 2],
  },
}

export default roles
