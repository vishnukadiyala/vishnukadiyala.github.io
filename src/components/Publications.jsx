const PEER_REVIEWED = [
  {
    authors: 'M. X. Sasser, M. Wilson Reyes, V. P. Kadiyala, A. Kurbanovas, K. J. Sulia, et al.',
    title: 'Estimating Statewide Atmospheric Visibility From Camera Images',
    venue: 'Proceedings of the 105th Annual American Meteorological Society (AMS) Meeting',
    year: '2025',
  },
  {
    authors: 'E. Spicer, S. Crowell, F. Xu, V. P. Kadiyala, P. M. Klein, et al.',
    title: 'Exploring the Influence of Local Urban and Industrial Carbon-Based Pollutant Sources on Total Column Concentration Enhancements in Houston, Texas during TRACER',
    venue: 'Proceedings of the 104th AMS Annual Meeting',
    year: '2024',
  },
]

const ABSTRACTS = [
  {
    authors: 'E. Spicer, S. Crowell, F. Xu, N. Krishnakutty, V. P. Kadiyala, et al.',
    title: 'Urban and Industrial Carbon-Based Pollutant Monitoring Using EM27/SUNs in Houston, Texas During the Summer 2022 GeoCarb-TRACER Campaign',
    venue: 'American Meteorological Society Meeting Abstracts',
    year: '2023',
  },
]

const THESES = [
  {
    authors: 'V. P. Kadiyala',
    title: 'Localization of Tables and Plots in Documents Using Deep Neural Networks',
    venue: "Master\u2019s Thesis, University of Oklahoma",
    year: '2022',
  },
]

const PREPRINTS = [
  {
    authors: 'V. P. Kadiyala',
    title: 'Implicit Coordination via Attention-Based Latent Belief Updates in Decentralized Partially Observable Multi-Agent Systems',
    venue: 'In preparation for ICML submission',
  },
]

function PubItem({ pub }) {
  return (
    <li className="publication-item">
      <span className="publication-authors">{pub.authors}</span>
      <span className="publication-title"> &ldquo;{pub.title}.&rdquo; </span>
      <span className="publication-venue">{pub.venue}</span>
      {pub.year && <span className="publication-year">, {pub.year}</span>}
      <span>.</span>
    </li>
  )
}

export default function Publications() {
  return (
    <section id="publications" className="section fade-in">
      <h2 className="section-title">Publications</h2>

      <h3 className="research-subtitle">Preprints &amp; Working Papers</h3>
      <ul className="publication-list">
        {PREPRINTS.map((pub, i) => <PubItem key={i} pub={pub} />)}
      </ul>

      <h3 className="research-subtitle">Peer-Reviewed Conference Papers</h3>
      <ul className="publication-list">
        {PEER_REVIEWED.map((pub, i) => <PubItem key={i} pub={pub} />)}
      </ul>

      <h3 className="research-subtitle">Conference Abstracts</h3>
      <ul className="publication-list">
        {ABSTRACTS.map((pub, i) => <PubItem key={i} pub={pub} />)}
      </ul>

      <h3 className="research-subtitle">Theses</h3>
      <ul className="publication-list">
        {THESES.map((pub, i) => <PubItem key={i} pub={pub} />)}
      </ul>
    </section>
  )
}
