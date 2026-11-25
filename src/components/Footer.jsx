import { Link } from 'react-router-dom'
import { contactEmail } from '../data/profile.js'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-row">
          <div>
            <strong>Maxwell Tawiah</strong>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <nav className="footer-social" aria-labelledby="social-title">
            <h2 id="social-title">Connect with Me</h2>
            <div className="social-links">
              <a href="https://wa.me/message/VPO6TZCCQGORC1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp (opens in a new tab)" title="WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.6 17.4A9.1 9.1 0 1 1 8 20.2L3 21.5z" />
                  <path fill="currentColor" stroke="none" d="M8.2 6.8c.3-.1.6 0 .8.4l1 2.2c.2.4-.2.9-.8 1.5.8 1.6 2.2 3 4 3.8l1-1.2c.2-.3.5-.3.8-.2l2.2 1c.3.2.4.4.3.8-.2 1.3-1.4 2.3-2.8 2-3.7-.7-7.9-4.4-8.3-7.5-.2-1.2.5-2.5 1.8-2.8z" />
                </svg>
              </a>
              <a href="https://t.me/MaxiTechnology" target="_blank" rel="noopener noreferrer" aria-label="Telegram (opens in a new tab)" title="Telegram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" stroke="none" d="M2.8 10.1 20.5 3c.9-.3 1.5.1 1.3 1.1l-3.2 15.6c-.2 1-.9 1.2-1.7.7l-5.3-3.9-2.5 2.4.5-5.7 8.9-8-11 7.1-4.6-1.4c-.7-.2-.7-.6-.1-.8z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/maxi_de_don_?lqvp=MTh3dTdnZWRscWZuNQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in a new tab)" title="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/share/18XSFLjBVv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook (opens in a new tab)" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" stroke="none" d="M13.8 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.4c-.7-.1-1.7-.2-2.7-.2-2.8 0-4.8 1.7-4.8 4.9v2.4H7V13h3v9z" />
                </svg>
              </a>
              <a href={`mailto:${contactEmail}`} aria-label={`Email Maxwell at ${contactEmail}`} title={contactEmail}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2.5" y="5" width="19" height="14" rx="2" />
                  <path d="m3.5 6 8.5 7 8.5-7" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <small>© {currentYear} Maxwell Tawiah</small>
      </div>
    </footer>
  )
}
