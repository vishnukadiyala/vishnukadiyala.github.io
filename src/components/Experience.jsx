import useRole from '../useRole.js'

const DEFAULT_EXPERIENCE = [
  {
    title: 'Graduate Research Assistant · Multi-Agent RL, University of Oklahoma',
    date: '2025 – Present',
    bullets: [
      'Design RL policies that let teams of agents coordinate under partial observability and limited communication, with applications to connected and autonomous vehicles (learned V2X messaging).',
      'Diagnosed a training instability caused by auxiliary losses with non-stationary targets and validated three architectural fixes across 290+ runs on multi-agent benchmarks and CIFAR-100 (under review at NeurIPS 2026).',
      'Built the experiment stack: parallel environments, PyTorch and JAX training loops, checkpointing, and multi-machine orchestration.',
    ],
  },
  {
    title: 'Graduate Research Assistant · NSF AI2ES, University of Oklahoma',
    date: '2023 – 2025',
    bullets: [
      'Built a transformer-based architecture for irregular spatio-temporal environmental data retrievals, achieving a 13\u00d7 improvement over the classical Marshall\u2013Palmer baseline.',
      'Developed a vision-based atmospheric visibility estimation system for statewide inference beyond sparse ASOS sensor coverage.',
      'Processed and integrated multi-modal datasets (satellite, radar, ground station) across HPC infrastructure with reproducible experiment pipelines.',
    ],
  },
  {
    title: 'Graduate Research Assistant · NASA GeoCARB, University of Oklahoma',
    date: '2021 – 2023',
    bullets: [
      'Built a U-Net deep learning model achieving 95% accuracy for methane hotspot detection from satellite observations.',
      'Improved anomaly detection from 80% to 90.2% using diffusion-based generative models.',
      'Collaborated with Dr. Sean Crowell on methane leak detection and atmospheric science applications.',
    ],
  },
  {
    title: 'Test Automation Intern · Robert Bosch Engineering & Business Solutions',
    date: 'Jan – May 2019',
    bullets: [
      'Developed hardware-in-the-loop (HIL) test automation pipelines for Engine Control Units (ECUs).',
      'Automated ECU software validation using ETAS LABCAR across hardware and digital fault layers.',
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
