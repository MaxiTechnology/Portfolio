import { Link } from 'react-router-dom'
import { education, experience, training, skills, careerInterests } from '../data/profile.js'
import '../styles/about.css'

// Education, work and training entries share the same simple card layout.
function BackgroundSection({ heading, entries }) {
  return (
    <section className="section">
      <h2>{heading}</h2>
      <div className="background-list">
        {entries.map(entry => (
          <article className="card background-card" key={entry.title}>
            <div className="entry-date">{entry.period}</div>
            <div>
              <h3>{entry.title}</h3>
              <p className="organization">{entry.organization}</p>
              {entry.result && <p className="entry-result">{entry.result}</p>}
              <p>{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h1>About Me</h1>
        <p className="page-subtitle">Bridging Business, Finance, Data, Technology and Entrepreneurship</p>
        <p>I am Maxwell Tawiah, a technology entrepreneur, Founder and CEO of MAXI TECHNOLOGY, and a master's student in IT Innovations in Business at Ural Federal University.</p>
        <p>My academic background in accounting and social change communication, combined with professional experience in financial management, data analytics, information technology and entrepreneurship, has shaped my multidisciplinary approach to solving business and organizational challenges.</p>
        <p>I am passionate about leveraging artificial intelligence, data-driven technologies, financial technology and innovative information systems to improve decision-making, enhance business efficiency and support digital transformation.</p>
        <p>My ambition is to build innovative technology-driven businesses that deliver practical solutions, create sustainable value and contribute to economic and technological development.</p>
      </section>

      <BackgroundSection heading="Education" entries={education} />

      <section className="section leadership">
        <h2>Entrepreneurship &amp; Business Leadership</h2>
        <div className="company-panel">
          <h3>MAXI TECHNOLOGY</h3>
          <p className="organization">Founder &amp; Chief Executive Officer (CEO)</p>
          <p className="entry-date">September 2017 – Present</p>
          <p>MAXI TECHNOLOGY is a technology-focused business engaged in the provision of technology products, computer hardware, electronic devices and IT-related services.</p>
          <p>As Founder and CEO, I oversee business operations, strategic development, customer relationships and technology service delivery. My entrepreneurial vision is to expand the business into innovative digital services, software solutions, business technology consulting and financial technology.</p>
          <div className="business-columns">
            <div>
              <h4>Current business activities</h4>
              <ul>
                <li>Technology products and electronic devices.</li>
                <li>Computer hardware and accessories.</li>
                <li>IT support and technical services.</li>
                <li>Computer repairs and installations.</li>
                <li>Customer relationship management.</li>
                <li>Business operations and strategic development.</li>
              </ul>
            </div>
            <div>
              <h4>Long-term strategic vision</h4>
              <ul>
                <li>Software development.</li>
                <li>Financial technology solutions.</li>
                <li>Artificial intelligence applications.</li>
                <li>Business intelligence and data analytics solutions.</li>
                <li>Intelligent decision support systems.</li>
                <li>Digital business transformation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BackgroundSection heading="Professional Experience" entries={experience} />

      <section className="section">
        <h2>My Skills</h2>
        <p>I am continuing to develop my web development and React skills.</p>
        <div className="skills-grid">
          {skills.map(group => (
            <article className="card skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map(skill => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <BackgroundSection heading="Professional Training" entries={training} />

      <section className="section career-vision">
        <h2>Professional Interests &amp; Career Vision</h2>
        <ul className="interest-list">
          {careerInterests.map(interest => <li key={interest}>{interest}</li>)}
        </ul>
        <p>My long-term vision is to grow MAXI TECHNOLOGY into an innovative technology company that delivers impactful digital solutions in financial technology, software development, business intelligence and intelligent decision support systems.</p>
        <p>By combining my background in accounting, finance, entrepreneurship and information technology, I aim to develop practical solutions that address real-world business challenges, improve organizational efficiency and create sustainable value.</p>
        <div className="actions">
          <Link className="button primary" to="/projects">View My Projects</Link>
          <Link className="button secondary" to="/contact">Contact Me</Link>
        </div>
      </section>
    </div>
  )
}
