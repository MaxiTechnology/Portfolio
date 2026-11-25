import { Link } from 'react-router-dom'
import HighlightCard from '../components/HighlightCard.jsx'
import '../styles/home.css'

const interests = [
  'Technology Entrepreneurship',
  'Artificial Intelligence',
  'Financial Technology',
  'Decision Support Systems',
  'Data & Business Analytics',
  'Web Development',
  'Business Intelligence',
  'Digital Business Transformation',
]

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="intro-title">
        <div>
          <p className="greeting">Hello, I'm</p>
          <h1 id="intro-title">Maxwell Tawiah</h1>
          <p className="headline">Technopreneur</p>
          <p className="specialties">IT Innovations in Business | Data &amp; Business Analytics | Accounting, Finance &amp; Technology</p>
          <p>I hold a bachelor's degree in accounting and am pursuing a master's in IT Innovations in Business at Ural Federal University. My experience in financial reporting and field data collection shapes the questions I bring to software development.</p>
          <p>I lead MAXI TECHNOLOGY. My goal is to build tools that help people make everyday decisions, from comparing suppliers to deciding which requests need attention first.</p>
          <div className="actions">
            <Link className="button primary" to="/projects">View My Projects</Link>
            <Link className="button secondary" to="/contact">Contact Me</Link>
          </div>
        </div>
        <div className="portrait">
          <img
            src={`${import.meta.env.BASE_URL}Maxi.jpeg`}
            alt="Portrait of Maxwell Tawiah"
          />
        </div>
      </section>

      <section className="highlights section" aria-labelledby="highlights-title">
        <h2 id="highlights-title">Professional Highlights</h2>
        <div className="highlight-grid">
          <HighlightCard title="Business, Accounting & Finance"
            description="I have worked on payroll, account reconciliation and financial reports at the Ghana Statistical Service.">
            <svg viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M3 12q9 5 18 0M12 12v3" /></svg>
          </HighlightCard>
          <HighlightCard title="Data & Business Analytics"
            description="I use Excel, SQL, Power BI and Python to explore data and explain what the results mean.">
            <svg viewBox="0 0 24 24"><path d="M3 3v18h18M8 16v-4m5 4V8m5 8V4" /></svg>
          </HighlightCard>
          <HighlightCard title="Information Technology"
            description="My work in IT support covered troubleshooting, system maintenance and helping staff use digital tools.">
            <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8m-4-3v3m-3-13-3 3 3 3m6-6 3 3-3 3" /></svg>
          </HighlightCard>
          <HighlightCard title="Technology Entrepreneurship"
            description="At MAXI TECHNOLOGY, I manage day-to-day operations, work with customers and plan IT services.">
            <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V5l9-2v18m0-12h5v12M8 8h3m-3 4h3m-3 4h3" /></svg>
          </HighlightCard>
        </div>
      </section>

      <section className="interests section" aria-labelledby="interests-title">
        <div>
          <h2 id="interests-title">Areas of Interest</h2>
          <p>I am especially interested in how financial technology and decision support systems can make business data easier to use.</p>
        </div>
        <ul className="interest-list">
          {interests.map(interest => <li key={interest}>{interest}</li>)}
        </ul>
      </section>

      <section className="connect section" aria-labelledby="connect-title">
        <h2 id="connect-title">Let's Work Together</h2>
        <p>Read more about my background or get in touch if you have a project in mind.</p>
        <div className="actions">
          <Link className="button primary" to="/about">More About Me</Link>
          <Link className="button secondary" to="/contact">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
