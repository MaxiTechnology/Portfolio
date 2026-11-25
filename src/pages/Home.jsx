import { Link } from 'react-router-dom'
import HighlightCard from '../components/HighlightCard.jsx'
import '../styles/home.css'

const interests = [
  'Artificial Intelligence',
  'Decision Support Systems',
  'Data Analytics and Business Intelligence',
  'Web Development',
  'Financial Technology',
  'Digital Business Transformation',
]

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div>
          <p className="greeting">Hello, I'm</p>
          <h1 id="intro-title">Maxwell Tawiah</h1>
          <p className="headline">IT Innovations in Business | Data &amp; Business Analytics | Accounting, Finance &amp; Technology</p>
          <p>I am a master's student in IT Innovations in Business at Ural Federal University, with a background in accounting, data analytics and information technology. I am passionate about using digital technologies, data-driven solutions and business innovation to solve real-world problems and improve organizational decision-making.</p>
          <div className="actions">
            <Link className="button primary" to="/projects">View My Projects</Link>
            <Link className="button secondary" to="/contact">Contact Me</Link>
          </div>
        </div>
        {/* Replace this initials panel with a portrait from src/assets when available. */}
        <div className="portrait" aria-hidden="true">
          <span className="monogram">MT</span>
        </div>
      </section>

      <section className="highlights section" aria-labelledby="highlights-title">
        <h2 id="highlights-title">Professional Highlights</h2>
        <div className="highlight-grid">
          <HighlightCard title="Business & Accounting"
            description="A foundation in accounting, financial reporting and business operations.">
            <svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 12q9 5 18 0M12 12v3" /></svg>
          </HighlightCard>
          <HighlightCard title="Data Analytics"
            description="Transforming data into meaningful insights using Excel, SQL, Power BI and Python.">
            <svg viewBox="0 0 24 24"><path d="M3 3v18h18M8 16v-4m5 4V8m5 8V4" /></svg>
          </HighlightCard>
          <HighlightCard title="Information Technology"
            description="Exploring software development, artificial intelligence and digital business solutions.">
            <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8m-4-3v3m-3-13-3 3 3 3m6-6 3 3-3 3" /></svg>
          </HighlightCard>
        </div>
      </section>

      <section className="interests section" aria-labelledby="interests-title">
        <div>
          <h2 id="interests-title">Areas of Interest</h2>
          <p>My interests lie at the intersection of business and technology, with a particular focus on developing intelligent digital solutions that support better decision-making and business performance.</p>
        </div>
        <ul className="interest-list">
          {interests.map(interest => <li key={interest}>{interest}</li>)}
        </ul>
      </section>

      <section className="connect section" aria-labelledby="connect-title">
        <h2 id="connect-title">Let's Connect and Build Something Meaningful</h2>
        <p>Explore my professional background, discover my academic and personal projects, or get in touch to discuss technology, business innovation and potential collaboration.</p>
        <div className="actions">
          <Link className="button primary" to="/about">More About Me</Link>
          <Link className="button secondary" to="/contact">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
