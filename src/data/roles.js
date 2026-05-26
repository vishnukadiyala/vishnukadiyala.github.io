/**
 * Role-based content variants derived from tailored resumes.
 *
 * Usage: vishnu.kadiyala.net/?role=<key>
 *
 * Roles:
 *   autonomy   — Rivian/GM: RL, decentralized decision-making, autonomous driving
 *   systems    — Dropbox: ML infra, HPC pipelines, scalable compute, benchmarking
 *   analytics  — Adobe/CapOne: predictive modeling, data analytics, forecasting
 *   ml         — General industry: ML engineer, MARL, autonomous systems
 *   datascience — Data scientist: statistical modeling, feature engineering, insights from data
 *   advancedml  — Advanced ML research: novel architectures, representation learning, generative models
 *   cv          — CV/DL intern: computer vision, CNNs, ViTs, image/video pipelines, production ML
 *   amd         — AMD University Program: GPU computing, HPC, AI/ML training delivery, academic enablement
 *   kla         — KLA: multi-modality ML, data fusion, model evaluation, data-quality frameworks
 */

const roles = {
  autonomy: {
    label: 'Autonomy / ML Research',
    tagline: 'Learned communication and decentralized decision-making for cooperative connected automated vehicles.',
    description:
      "Ph.D. candidate building learning-based decision systems under uncertainty, with emphasis on multi-agent coordination, learned communication gating, partial observability, and transformer-based representations. Delivered end-to-end ML pipelines on real sensor modalities (satellite, radar, vision) and HPC infrastructure.",
    skills: {
      'ML / RL': ['Multi-Agent RL', 'Partial Observability', 'Decentralized Policies', 'Representation Learning', 'Transformers', 'CNNs', 'Diffusion Models'],
      'Strengths': ['Debugging', 'Experiment Design', 'Training Stability Analysis', 'Sensor Fusion Reasoning'],
    },
    expertise: [
      'Learned communication gating: deciding when (not just what) to communicate in bandwidth-constrained multi-agent settings',
      'Decentralized policy learning and implicit coordination under partial observability',
      'Belief/representation modeling for cooperative MARL (attention over messages, recurrent belief states, CTDE training)',
      'Evaluation mindset: ablations, counterfactual gate baselines, policy shuffling, and robustness-focused benchmarking',
    ],
    experience: [
      {
        title: 'Autonomous Driving & Multi-Agent RL Research (PhD)',
        date: '2025 \u2013 Present',
        bullets: [
          'Designing AwareGate, a learned when-to-communicate policy for cooperative connected automated vehicles \u2014 attention-based message fusion, GRU belief state, and a counterfactual gating baseline for principled comparison.',
          'Validating across a four-tier benchmark suite (MPE Speaker\u2013Listener, SMAX, Highway-Env, MetaDrive intersections) with a dual-track JAX + PyTorch implementation.',
          'Prior work on attention-driven latent belief updates for implicit coordination (no explicit messaging); paper under review at ICML 2026.',
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
    tagline: 'Multi-agent RL with learned communication, transformer architectures, and autonomous systems.',
    description:
      "Machine learning researcher and Ph.D. candidate specializing in multi-agent reinforcement learning, learned communication gating, transformer architectures, and decision-making under partial observability. Experienced building end-to-end deep learning systems on real-world datasets including satellite, radar, and vision-based sensing.",
    skills: {
      'ML / RL': ['Deep Learning', 'Transformers', 'CNNs', 'Diffusion Models', 'Multi-Agent RL'],
      'Concepts': ['Partial Observability', 'Policy Learning', 'Sensor Fusion', 'Spatio-Temporal Modeling'],
    },
    highlightProjects: [0, 1, 2, 3],
    highlightInterests: [0, 1, 2, 5],
    featuredThrusts: [0, 1, 2],
  },

  datascience: {
    label: 'Data Science',
    tagline: 'Turning complex, irregular data into actionable models and insights.',
    description:
      "Ph.D. candidate with deep experience in statistical modeling, feature engineering, and building predictive systems on large-scale real-world datasets. Skilled at wrangling irregular, multi-modal data (satellite, radar, ground sensors) and delivering models that generalize beyond controlled benchmarks.",
    skills: {
      'Modeling': ['Statistical Modeling', 'Predictive Modeling', 'Time-Series Analysis', 'Anomaly Detection', 'Regression', 'Classification'],
      'Data Engineering': ['Feature Engineering', 'Data Wrangling', 'ETL Pipelines', 'Large-Scale Preprocessing'],
      'Tools & Frameworks': ['Python', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Xarray', 'Scikit-learn', 'Matplotlib'],
      'Infrastructure': ['HPC/SLURM', 'NetCDF', 'Git', 'Experiment Tracking'],
    },
    expertise: [
      'Feature engineering and preprocessing for irregular spatio-temporal datasets across multiple sensor modalities',
      'Predictive modeling and forecasting with quantifiable improvements over classical baselines (13\u00d7 over Marshall\u2013Palmer)',
      'Anomaly detection and outlier analysis — improved detection rates from 80% to 90.2% using generative approaches',
      'End-to-end data science workflow: data acquisition, cleaning, modeling, evaluation, and communication of results',
    ],
    experience: [
      {
        title: 'Data Scientist / Graduate Research Assistant — NSF AI2ES',
        date: '2023 \u2013 2025',
        bullets: [
          'Engineered features from irregular spatio-temporal environmental data (satellite, radar, ground stations) for transformer-based retrieval models.',
          'Achieved 13\u00d7 improvement over classical Marshall\u2013Palmer baseline through careful feature design and model architecture selection.',
          'Built reproducible data pipelines processing multi-modal datasets on HPC infrastructure.',
        ],
      },
      {
        title: 'Data Scientist / Graduate Research Assistant — NASA GeoCARB',
        date: '2021 \u2013 2023',
        bullets: [
          'Developed anomaly detection models for methane hotspot identification from satellite observations, achieving 95% accuracy.',
          'Applied diffusion-based generative models to improve detection rates from 80% to 90.2%.',
          'Performed exploratory data analysis and statistical validation on large-scale remote sensing datasets.',
        ],
      },
    ],
    highlightProjects: [1, 2, 3, 0],
    highlightInterests: [4, 5, 3],
    featuredThrusts: [2],
  },

  advancedml: {
    label: 'Advanced ML Research',
    tagline: 'Novel architectures, representation learning, and generative models for real-world problems.',
    description:
      "Ph.D. candidate pushing the boundaries of deep learning through novel architecture design, attention mechanisms, and generative modeling. Research spans transformer-based representations for irregular data, latent belief modeling for multi-agent systems, and diffusion models for anomaly detection — with a focus on principled methods that generalize.",
    skills: {
      'Deep Learning': ['Transformers', 'Attention Mechanisms', 'CNNs', 'U-Nets', 'Diffusion Models', 'Generative Models'],
      'Research Areas': ['Representation Learning', 'Latent Variable Models', 'Multi-Agent RL', 'Partial Observability', 'Spatio-Temporal Modeling'],
      'Theory & Practice': ['Architecture Design', 'Training Dynamics', 'Ablation Studies', 'Generalization Analysis', 'Loss Design'],
      'Tools': ['PyTorch', 'TensorFlow', 'HPC/SLURM', 'Experiment Orchestration'],
    },
    expertise: [
      'Designing novel transformer architectures for irregularly sampled spatio-temporal data with custom spatial/temporal embeddings',
      'Latent belief representation learning for decentralized multi-agent coordination without explicit communication',
      'Applying diffusion-based generative models to improve anomaly detection beyond discriminative baselines',
      'Rigorous evaluation methodology: ablations, counterfactual analysis, and robustness benchmarking',
    ],
    experience: [
      {
        title: 'ML Research — Multi-Agent Reinforcement Learning (PhD)',
        date: '2025 \u2013 Present',
        bullets: [
          'Designing attention-based latent belief update mechanisms for implicit multi-agent coordination under partial observability.',
          'Investigating learning dynamics and stability in cooperative MARL with novel architecture components.',
          'Developing evaluation protocols that separate genuine coordination from coincidental alignment.',
        ],
      },
      {
        title: 'ML Research — Transformer Architectures & Generative Models',
        date: '2021 \u2013 2025',
        bullets: [
          'Built transformer-based architecture with custom spatial/temporal embeddings for irregular environmental data, achieving 13\u00d7 improvement over classical baselines.',
          'Applied diffusion-based generative models to satellite observation data, improving anomaly detection from 80% to 90.2%.',
          'Designed U-Net architectures for methane hotspot detection achieving 95% accuracy on satellite imagery.',
        ],
      },
    ],
    highlightProjects: [0, 1, 2, 3],
    highlightInterests: [0, 1, 2, 3],
    featuredThrusts: [0, 1, 2],
  },
  cv: {
    label: 'Computer Vision & Deep Learning',
    tagline: 'Deep learning and computer vision for scalable, production-focused visual recognition systems.',
    description:
      "Ph.D. candidate with hands-on experience building computer vision and deep learning models for image classification, object detection, and visual recognition. Trained and evaluated CNN- and transformer-based architectures on large-scale image and satellite datasets, with a strong foundation in data pipelines, model evaluation, and clean software engineering practices.",
    skills: {
      'Computer Vision': ['Image Classification', 'Object Detection', 'CNNs', 'U-Nets', 'Vision Transformers (ViT)', 'Image Processing', 'OpenCV'],
      'Deep Learning': ['PyTorch', 'TensorFlow', 'Keras', 'Model Training & Evaluation', 'Data Augmentation', 'Transfer Learning'],
      'Data & Tools': ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Git', 'Linux'],
      'Infrastructure': ['HPC/SLURM', 'Reproducible Pipelines', 'Experiment Tracking'],
    },
    expertise: [
      'Trained and evaluated CNN- and transformer-based models for image classification, object detection, and localization tasks on large-scale datasets',
      'Built data pipelines for image and satellite datasets including preprocessing, augmentation, labeling strategies, and feature extraction',
      'Designed U-Net architectures for pixel-level detection achieving 95% accuracy on satellite imagery; improved detection from 80% to 90.2% with generative models',
      'Applied deep learning to document analysis — localizing tables and plots in documents using deep neural networks (Master\'s thesis)',
    ],
    experience: [
      {
        title: 'Computer Vision & ML Researcher — NSF AI2ES',
        date: '2023 \u2013 2025',
        bullets: [
          'Developed a vision-based atmospheric visibility estimation system using outdoor camera imagery and deep learning for statewide inference beyond sparse sensor coverage.',
          'Built transformer-based architecture with custom spatial/temporal embeddings for multi-modal sensor data, achieving 13\u00d7 improvement over classical baselines.',
          'Designed and maintained reproducible ML training and evaluation pipelines on HPC infrastructure for large-scale image and sensor datasets.',
        ],
      },
      {
        title: 'Deep Learning Researcher — NASA GeoCARB',
        date: '2021 \u2013 2023',
        bullets: [
          'Designed U-Net (CNN) architectures for methane hotspot detection from satellite imagery, achieving 95% accuracy.',
          'Applied diffusion-based generative models to improve anomaly detection rates from 80% to 90.2% on image data.',
          'Prepared and analyzed large-scale image datasets from satellite observations, including data augmentation and quality assurance for model training.',
        ],
      },
    ],
    highlightProjects: [3, 2, 1, 0],
    highlightInterests: [4, 3, 5],
    featuredThrusts: [2],
  },
  kla: {
    label: 'Multi-Modality ML & Data Fusion',
    tagline: 'Integrating heterogeneous data sources through multi-modality machine learning and rigorous model evaluation.',
    description:
      "Ph.D. candidate specializing in multi-modality machine learning that fuses diverse, heterogeneous data sources to improve model performance. Experienced designing transformer-based architectures for irregular multi-modal data, building data-quality evaluation frameworks, and conducting structured experiments with ablation studies and error analysis. Strong track record of cross-functional collaboration with domain scientists.",
    skills: {
      'Multi-Modal ML': ['Multi-Modal Data Fusion', 'Transformers', 'Attention Mechanisms', 'CNNs', 'U-Nets', 'Diffusion Models', 'Representation Learning'],
      'Model Evaluation': ['Ablation Studies', 'Counterfactual Analysis', 'Error Analysis', 'Data-Quality Assessment', 'Experiment Design'],
      'Frameworks': ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn'],
      'Data & Infrastructure': ['Python', 'NumPy', 'Pandas', 'HPC/SLURM', 'Reproducible Pipelines', 'Large-Scale Preprocessing'],
    },
    expertise: [
      'Designed multi-modality architectures integrating three heterogeneous sensor sources (ground stations, radar, satellite) with modality-specific embeddings and attention-based fusion',
      'Built data-quality evaluation frameworks for multi-modal datasets including cross-modality consistency checks, missing-data handling, and preprocessing validation',
      'Conducted structured experiments with ablation studies isolating contributions of each modality and architectural component to guide iterative improvements',
      'Partnered with cross-functional teams (atmospheric scientists, remote sensing experts) to refine algorithmic approaches for domain-specific measurement challenges',
    ],
    experience: [
      {
        title: 'Multi-Modal ML Researcher — NSF AI2ES, University of Oklahoma',
        date: '2023 \u2013 2025',
        bullets: [
          'Designed a Transformer-based multi-modality architecture integrating three heterogeneous data sources (ground stations, radar, satellite) with custom spatial and temporal embeddings, achieving 13\u00d7 improvement over classical baselines.',
          'Built data-quality evaluation pipelines for multi-modal sensor data, including cross-modality consistency checks, missing-data handling, and preprocessing validation across HPC infrastructure.',
          'Developed a vision-based modality (outdoor camera imagery) for atmospheric visibility estimation, demonstrating integration of a new data source into an existing multi-modal framework.',
          'Conducted structured ablation studies isolating contributions of each modality and architectural component to guide iterative model improvements.',
        ],
      },
      {
        title: 'ML Researcher — NASA GeoCARB, University of Oklahoma',
        date: '2021 \u2013 2023',
        bullets: [
          'Designed U-Net architectures for methane hotspot detection from satellite imagery, achieving 95% accuracy with systematic evaluation of detection performance.',
          'Identified limitations through error analysis; introduced diffusion-based generative models to improve detection from 80% to 90.2%.',
          'Built data-quality assessment frameworks for satellite observation datasets including preprocessing validation, augmentation strategies, and quality assurance pipelines.',
          'Partnered with cross-functional team (atmospheric scientists, remote sensing experts) to refine algorithmic approaches for domain-specific measurement challenges.',
        ],
      },
    ],
    highlightProjects: [1, 2, 0, 3],
    highlightInterests: [4, 5, 3],
    featuredThrusts: [2],
  },

  amd: {
    label: 'HPC & Academic Enablement',
    tagline: 'Enabling AI and high-performance computing in academia through hands-on training and technical collaboration.',
    description:
      "Ph.D. candidate and technical educator with hands-on experience building GPU-accelerated deep learning systems on HPC infrastructure, developing training materials and labs for computer architecture and AI, and collaborating directly with faculty and students on research programs. Combines deep ML expertise (PyTorch, Transformers, CNNs) with a passion for teaching and academic engagement.",
    skills: {
      'AI / ML Frameworks': ['PyTorch', 'TensorFlow', 'Keras', 'Deep Learning', 'Transformers', 'CNNs', 'Diffusion Models'],
      'HPC & GPU Computing': ['GPU-Accelerated Training', 'HPC/SLURM', 'Distributed Workloads', 'Large-Scale Data Pipelines'],
      'Computer Architecture': ['Digital Logic', 'Assembly-Level Reasoning', 'Hardware/Software Interface', 'Computer Organization'],
      'Teaching & Communication': ['Lab Development', 'Technical Training Delivery', 'Workshop Design', 'Research Mentoring', 'Technical Writing'],
      'Programming & Tools': ['Python', 'MATLAB', 'Git', 'Linux', 'Reproducible Pipelines'],
    },
    expertise: [
      'Developed and delivered weekly hands-on labs on digital logic, assembly, and hardware/software interface fundamentals (CS 2614 Computer Organization)',
      'Built GPU-accelerated deep learning pipelines on HPC/SLURM infrastructure processing large-scale satellite, radar, and image datasets',
      'Created lab documentation, troubleshooting guides, and training workflows for students at varying skill levels',
      'Collaborated directly with faculty (Dr. McGovern, Dr. Crowell, Dr. Fagg) on research and teaching programs spanning NSF and NASA projects',
      'Mentored undergraduate students through the Engineering Pathways program, providing research guidance and technical training',
    ],
    experience: [
      {
        title: 'Teaching Assistant — CS 2614 Computer Organization, University of Oklahoma',
        date: '2024 – Present',
        bullets: [
          'Led weekly hands-on labs covering digital logic, assembly-level programming, and hardware/software interface fundamentals.',
          'Developed lab documentation, debugging workflows, and troubleshooting guides for students learning computer architecture concepts.',
          'Provided one-on-one technical support and mentoring, adapting explanations to varying skill levels.',
        ],
      },
      {
        title: 'Graduate Research Assistant — NSF AI2ES, University of Oklahoma',
        date: '2023 – 2025',
        bullets: [
          'Built GPU-accelerated transformer-based models on HPC/SLURM infrastructure for large-scale environmental data retrieval, achieving 13× improvement over classical baselines.',
          'Developed reproducible ML training and evaluation pipelines processing multi-modal datasets (satellite, radar, ground stations).',
          'Collaborated with faculty (Dr. Andrew Fagg, Dr. Amy McGovern) on research programs bridging AI and environmental science.',
        ],
      },
      {
        title: 'Graduate Research Assistant — NASA GeoCARB, University of Oklahoma',
        date: '2021 – 2023',
        bullets: [
          'Designed and trained deep learning models (U-Net, diffusion models) on GPU clusters for methane hotspot detection from satellite imagery, achieving 95% accuracy.',
          'Collaborated with Dr. Sean Crowell on satellite observation analysis and atmospheric science applications.',
          'Presented research findings and demonstrated technical workflows to academic collaborators.',
        ],
      },
    ],
    highlightProjects: [1, 2, 3, 0],
    highlightInterests: [5, 4, 3],
    featuredThrusts: [2],
  },
}

export default roles
