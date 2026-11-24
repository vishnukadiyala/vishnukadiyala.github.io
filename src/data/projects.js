const projects = [
  {
    title: 'Learning Whom to Attend To, and How to Act Without Coordination',
    subtitle: 'In progress · Targeting ICML 2027',
    featured: true,
    description:
      'An agent among many cannot ask everyone everything. Given a small budget of "what if" questions about a situation it has not seen, it has to work out which other agents its outcome depends on, what it loses by acting alone, and how the situation would change under a different choice. One transformer is trained on procedurally generated worlds to answer all three from the trial results, then fine-tuned on recorded Waymo driving scenes where two vehicles must decide without talking.',
    tags: ['Multi-Agent Coordination', 'Transformers', 'Waymo Open Motion', 'Waymax', 'Decision Theory'],
    walkthrough: '/walkthrough/coordination.html',
    codeNote: 'Animated 15-scene walkthrough; code and paper to follow.',
  },
  {
    title: 'When Teammate-Prediction Training Helps Cooperative Agents',
    subtitle: 'Under review · ICLR 2027',
    featured: true,
    description:
      'Cooperative agents are often trained to predict their teammates as an auxiliary task, on the reasoning that an agent which needs information about its partner should learn to predict it. This paper shows that the reasoning does not hold in general: needing partner information does not imply benefiting from being trained to predict the partner. It then identifies when such training helps.',
    tags: ['Multi-Agent RL', 'Cooperative Agents', 'Auxiliary Objectives', 'Partial Observability'],
    codeNote: 'Under double-blind review; code will be linked after the decision.',
  },
  {
    title: 'Learning When a Vehicle Should Communicate',
    subtitle: 'In progress',
    featured: true,
    description:
      'Multi-agent reinforcement learning policies that decide when a connected vehicle should send its intent over V2X and when it can leave others to predict it, under a bandwidth limit. Evaluated in Highway-Env with up to 20 vehicles against no-communication and full-communication baselines.',
    tags: ['Multi-Agent RL', 'Learned Communication', 'V2X', 'Highway-Env'],
    code: 'https://github.com/vishnukadiyala/learn-when-to-communicate',
    codeNote: 'private, available on request',
    gallery: [
      {
        src: '/projects/awaregate-reward-vs-comm.webp',
        caption:
          'Cumulative reward against communication rate in cooperative driving scenarios (intersection and highway, up to 20 agents) for no communication, full communication and the learned gate.',
      },
      {
        src: '/projects/awaregate-pareto.webp',
        caption:
          'Final reward and realized gate rate against the target communication rate on the Sparse Speaker-Listener task.',
      },
    ],
  },
  {
    title: 'Precipitation Estimates from Irregularly Sampled Sensors',
    description:
      'A CNN that estimates rain rate from radar reflectivity and ground-station data, with 13 times lower RMSE than the classical Marshall-Palmer relation. A transformer that fuses station, radar and satellite data sampled at irregular times is in progress.',
    tags: ['CNN', 'Transformers', 'Spatio-Temporal', 'Environmental AI', 'AI2ES'],
    github: 'https://github.com/ai2es/ZR-relationship',
  },
  {
    title: 'Methane Hotspot Detection from Satellite Observations',
    description:
      'U-Net segmentation models that detect methane hotspots in satellite imagery with 95% accuracy. Diffusion-based generative models raised anomaly detection accuracy from 80% to 90.2%.',
    tags: ['U-Net', 'Diffusion Models', 'Remote Sensing', 'GeoCARB'],
    github: 'https://github.com/GeoCarb-OU/methane_hotspot_detection',
  },
  {
    title: 'Atmospheric Visibility from Camera Images',
    description:
      'Camera-based estimation of atmospheric visibility, which extends coverage statewide beyond the sparse sensors at airports. Published at the AMS Annual Meeting in 2025.',
    tags: ['Computer Vision', 'Environmental AI', 'AI2ES'],
    github: 'https://github.com/vishnukadiyala',
  },
  {
    title: 'fastreading: RSVP Reader for Research Papers',
    subtitle: 'Live tool',
    description:
      'A single-page reader that shows a research paper one word at a time (rapid serial visual presentation). It reflows two-column PDFs with pdf.js and can summarize each section through the Claude API with your own key. It runs entirely in the browser.',
    tags: ['RSVP', 'PDF Parsing', 'Claude API', 'Web Tool'],
    demo: 'https://vishnu.kadiyala.net/fastreading/',
  },
]

export default projects
