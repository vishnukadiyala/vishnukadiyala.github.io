import { useEffect } from 'react'
import useRole from './useRole.js'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Research from './components/Research'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Teaching from './components/Teaching'
import Service from './components/Service'
import Talks from './components/Talks'
import Contact from './components/Contact'

export default function App() {
  const role = useRole()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      {role && (
        <div className="role-banner">
          Viewing: <strong>{role.label}</strong> profile
          {' \u2014 '}
          <a href="/">View full portfolio</a>
        </div>
      )}
      <Hero />
      <About />
      <Education />
      <Research />
      <Publications />
      <Projects />
      <Skills />
      {!role && (
        <>
          <Teaching />
          <Service />
          <Talks />
        </>
      )}
      <Contact />
      <footer className="footer">
        &copy; {new Date().getFullYear()} Vishnu Kadiyala. All rights reserved.
      </footer>
    </>
  )
}
