const EDUCATION = [
  {
    school: 'University of Oklahoma',
    location: 'Norman, OK',
    degree: 'Ph.D. in Computer Science',
    date: 'Expected May 2027',
  },
  {
    school: 'University of Oklahoma',
    location: 'Norman, OK',
    degree: 'M.S. in Electrical and Computer Engineering',
    date: 'May 2022',
  },
  {
    school: 'KLE Technological University',
    location: 'India',
    degree: 'B.E. in Electronics and Communication Engineering',
    date: 'May 2019',
  },
]

export default function Education() {
  return (
    <section id="education" className="section fade-in">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="education-entry">
            <div className="education-header">
              <div>
                <h3>{edu.school}</h3>
                <p className="education-degree">{edu.degree}</p>
              </div>
              <span className="education-date">{edu.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
