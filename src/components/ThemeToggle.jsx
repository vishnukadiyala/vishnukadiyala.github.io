import { useEffect, useState } from 'react'

// Initial theme is set before paint by the inline script in index.html, which
// reads localStorage then falls back to prefers-color-scheme. We mirror that
// attribute into React state so the icon matches on first render (no flash).
function getInitialTheme() {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-theme') || 'light'
  }
  return 'light'
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage may be unavailable (private mode); theme still applies for the session */
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        title={isDark ? 'Light mode' : 'Dark mode'}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {isDark ? 'Dark theme enabled' : 'Light theme enabled'}
      </span>
    </>
  )
}
