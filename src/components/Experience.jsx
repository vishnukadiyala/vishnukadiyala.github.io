import useRole from '../useRole.js'

const DEFAULT_EXPERIENCE = [
  {
    title: 'Graduate Research Assistant · Multi-Agent Learning, University of Oklahoma',
    date: 'Jan 2025 to present',
    bullets: [
      'Defined when and with whom an agent needs to coordinate, built a procedural generator of multi-agent worlds with exact ground truth, and trained a transformer that ranks the agents that matter from a small budget of what-if trials (paper in preparation for ICML 2027).',
      'Showed that an agent needing information about its partner does not imply it benefits from being trained to predict the partner, and identified when such training helps (under review at ICLR 2027).',
      'Trained multi-agent reinforcement learning policies that decide when a connected vehicle should send its intent, under bandwidth limits.',
      'Measured which surrounding road users matter to a rule-based and a learned planner on NAVSIM by removing each agent and re-scoring the plan.',
    ],
  },
  {
    title: 'Graduate Research Assistant · NSF AI2ES, University of Oklahoma',
    date: '2023 to 2025',
    bullets: [
      'Built a transformer with custom spatial and temporal embeddings that fuses ground-station, radar and satellite data sampled at irregular times; it improved precipitation estimates 13 times over the classical Marshall-Palmer relation.',
      'Developed camera-based estimation of atmospheric visibility to extend coverage statewide beyond sparse airport sensors (co-author, AMS 2025).',
      'Maintained training and evaluation pipelines for large multi-modal sensor datasets on HPC with SLURM.',
    ],
  },
  {
    title: 'Graduate Research Assistant · NASA GeoCARB, University of Oklahoma',
    date: '2021 to 2023',
    bullets: [
      'Trained U-Net segmentation models that detect methane hotspots in satellite imagery with 95% accuracy.',
      'Raised anomaly detection accuracy from 80% to 90.2% with diffusion-based generative models.',
      'Built preprocessing, augmentation and data-quality checks for satellite observations (co-author, AMS 2023 and 2024).',
    ],
  },
  {
    title: 'Test Automation Intern · Robert Bosch Engineering & Business Solutions',
    date: 'Jan 2019 to May 2019',
    bullets: [
      'Built hardware-in-the-loop test automation for engine control units with ETAS LABCAR, including digital fault injection.',
    ],
  },
]

export default function Experience() {
  const role = useRole()
  const entries = role?.experience || DEFAULT_EXPERIENCE
  const heading = role ? `${role.label} Experience` : 'Experience'

  return (
    <section id="experience" className="section fade-in">
      <h2 className="section-title">{heading}</h2>
      {entries.map((entry, i) => (
        <div key={i} className="experience-entry">
          <div className="experience-header">
            <h3>{entry.title}</h3>
            <span className="experience-date">{entry.date}</span>
          </div>
          <ul className="teaching-details">
            {entry.bullets.map((bullet, j) => (
              <li key={j}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
