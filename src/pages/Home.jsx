import { Link } from 'react-router-dom'
import HighlightCard from '../components/HighlightCard.jsx'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div>
          <p className="greeting">Hello, I'm</p>
          <h1 id="intro-title">Maxwell Tawiah</h1>
          <p className="headline">Technopreneur</p>
          <p className="hero-description">
            Bridging business, technology and innovation to develop practical solutions for real-world challenges.
          </p>
          <div className="actions">
            <Link className="button primary" to="/projects">
              View My Projects <span aria-hidden="true">→</span>
            </Link>
            <Link className="button secondary" to="/contact">Contact Me</Link>
          </div>
        </div>

        {/* The original dimensions keep space for the portrait while it loads. */}
        <img className="portrait" src={`${import.meta.env.BASE_URL}Maxi.jpeg`}
          width="796" height="1080" alt="Portrait of Maxwell Tawiah" />
      </section>

      <section className="expertise" aria-labelledby="expertise-title">
        <h2 id="expertise-title">Areas of expertise</h2>
        <ul className="expertise-list">
          <HighlightCard title="Business & Finance">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="7" width="18" height="14" rx="2" />
              <path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 12q9 5 18 0M12 12v3" />
            </svg>
          </HighlightCard>
          <HighlightCard title="Information Technology">
            <svg viewBox="0 0 24 24">
              <rect x="2.5" y="4" width="19" height="13" rx="2" />
              <path d="M8 21h8m-4-4v4m-2-14-2.5 2.5L10 12m4-5 2.5 2.5L14 12" />
            </svg>
          </HighlightCard>
          <HighlightCard title="Digital Innovation">
            <svg viewBox="0 0 24 24">
              <path d="M9 17c0-3-3.5-3.6-3.5-8a6.5 6.5 0 0 1 13 0c0 4.4-3.5 5-3.5 8zM9.5 20h5M11 22h2" />
            </svg>
          </HighlightCard>
        </ul>
      </section>
    </>
  )
}
