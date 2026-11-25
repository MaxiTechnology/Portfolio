import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div>
            <strong>Maxwell Tawiah</strong>
            <p>Techpreneur and business technology enthusiast exploring the intersection of business, finance, data and innovation.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
        <small>© {currentYear} Maxwell Tawiah</small>
      </div>
    </footer>
  )
}
