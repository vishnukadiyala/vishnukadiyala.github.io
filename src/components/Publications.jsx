const PEER_REVIEWED = [
  {
    authors: 'M. X. Sasser, M. Wilson Reyes, V. P. Kadiyala, A. Kurbanovas, K. J. Sulia, et al.',
    title: 'Estimating Statewide Atmospheric Visibility From Camera Images',
    page: 'sasser2025visibility',
    venue: 'Proceedings of the 105th Annual American Meteorological Society (AMS) Meeting',
    year: '2025',
  },
  {
    authors: 'E. Spicer, S. Crowell, F. Xu, V. P. Kadiyala, P. M. Klein, et al.',
    title: 'Exploring the Influence of Local Urban and Industrial Carbon-Based Pollutant Sources on Total Column Concentration Enhancements in Houston, Texas during TRACER',
    page: 'spicer2024houston',
    venue: 'Proceedings of the 104th AMS Annual Meeting',
    year: '2024',
  },
  {
    authors: 'V. Kadiyala, V. Hulyalkar',
    title: 'Wireless Video Transmission over a Frequency of 2.4 GHz',
    page: 'kadiyala2018wireless',
    venue: 'International Conference on New Trends in Engineering & Technology (ICNTET)',
    year: '2018',
  },
  {
    authors: 'V. P. Kadiyala, et al.',
    title: 'Design and Implementation of Plant Growth Monitoring System Using Infrared Radiation',
    page: 'kadiyala2018plant',
    venue: '3rd International Conference on Electrical, Electronics, Communication, Computer Technologies and Optimization Techniques (ICEECCOT)',
    year: '2018',
  },
]

const ABSTRACTS = [
  {
    authors: 'E. Spicer, S. Crowell, F. Xu, N. Krishnakutty, V. P. Kadiyala, et al.',
    title: 'Urban and Industrial Carbon-Based Pollutant Monitoring Using EM27/SUNs in Houston, Texas During the Summer 2022 GeoCarb-TRACER Campaign',
    page: 'spicer2023em27',
    venue: 'American Meteorological Society Meeting Abstracts',
    year: '2023',
  },
]

const THESES = [
  {
    authors: 'V. P. Kadiyala',
    title: 'Localization of Tables and Plots in Documents Using Deep Neural Networks',
    page: 'kadiyala2022localization',
    venue: "Master\u2019s Thesis, University of Oklahoma",
    year: '2022',
  },
]

const PREPRINTS = [
  {
    authors: 'V. P. Kadiyala, M. Atiquzzaman',
    title: 'Needing Partner Information Is Not Benefiting from Predicting It: When Teammate-Prediction Training Helps Cooperative Agents',
    page: 'kadiyala2026teammate',
    venue: 'Under review at ICLR 2027',
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
      {pub.page && (
        <a className="publication-cite" href={`/pubs/${pub.page}.html`}>Cite</a>
      )}
    </li>
  )
}

export default function Publications() {
  return (
    <section id="publications" className="section fade-in">
      <h2 className="section-title">Publications</h2>

      <h3 className="research-subtitle">Under Review</h3>
      <ul className="publication-list">
        {PREPRINTS.map((pub, i) => <PubItem key={i} pub={pub} />)}
      </ul>

      <h3 className="research-subtitle">Conference Papers</h3>
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
