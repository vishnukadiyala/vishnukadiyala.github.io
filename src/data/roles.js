/**
 * Role-based content variants.
 *
 * Usage: append ?role=<key> to your URL.
 * Example: vishnu.kadiyala.net/?role=autonomy
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
    tagline: 'Implicit coordination and decentralized decision-making for autonomous agents.',
    description:
      "I'm a PhD candidate at the University of Oklahoma building decision-making systems for autonomous agents. My work focuses on implicit coordination under partial observability, learned belief representations for decentralized policies, and multi-agent decision-making \u2014 with applications in autonomous driving, sensor fusion, and simulation-to-real transfer.",
    highlightProjects: [0, 2, 3],
    highlightInterests: [0, 1, 3],
    featuredThrusts: [0, 1],
  },
  envai: {
    label: 'AI for Environmental Sciences',
    tagline: 'Learning systems for environmental data: irregular observations, real constraints.',
    description:
      "I'm a PhD candidate at the University of Oklahoma working on AI for environmental science. I develop spatio-temporal models for irregularly sampled data \u2014 station measurements, radar, and satellite retrievals \u2014 with a focus on attention-based architectures, spatial embeddings, and methods that work without forcing data onto rigid grids.",
    highlightProjects: [1, 2, 3],
    highlightInterests: [4, 5],
    featuredThrusts: [2],
  },
  ml: {
    label: 'Machine Learning Research',
    tagline: 'Latent belief modeling, reinforcement learning, and deep architectures for real-world systems.',
    description:
      "I'm a PhD candidate at the University of Oklahoma focused on machine learning methods that operate under uncertainty. My research spans latent-state modeling, multi-agent reinforcement learning, and transformer architectures for irregular data \u2014 with applications in autonomous systems and environmental science.",
    highlightProjects: [0, 1, 2],
    highlightInterests: [0, 1, 2, 5],
    featuredThrusts: [0, 1, 2],
  },
}

export default roles
