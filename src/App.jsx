import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Publications from './components/Publications'
import Projects from './components/Projects'
import Teaching from './components/Teaching'
import Service from './components/Service'
import Talks from './components/Talks'
import Contact from './components/Contact'

export default function App() {
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
      <Hero />
      <About />
      <Research />
      <Publications />
      <Projects />
      <Teaching />
      <Service />
      <Talks />
      <Contact />
      <footer className="footer">
        &copy; {new Date().getFullYear()} Vishnu Kadiyala. All rights reserved.
      </footer>
    </>
  )
}
