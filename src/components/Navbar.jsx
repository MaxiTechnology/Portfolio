import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">MT</span>
          Maxwell Tawiah
        </Link>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation"
          aria-expanded={isMenuOpen} aria-controls="main-nav"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span aria-hidden="true">{isMenuOpen ? '×' : '☰'}</span>
        </button>
        <nav id="main-nav" aria-label="Main navigation"
          className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About Me</NavLink>
          <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
