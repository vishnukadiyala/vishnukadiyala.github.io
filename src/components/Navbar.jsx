import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scrollspy: highlight the nav item whose section is crossing the viewport
  // center. We only observe sections that have a nav entry, so the highlight
  // simply sticks while passing through sections without one (Education, etc.).
  useEffect(() => {
    const sections = NAV_ITEMS
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="navbar-logo">VK</a>
      <div className="navbar-right">
        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={activeId === href.slice(1) ? 'active' : undefined}
                aria-current={activeId === href.slice(1) ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
