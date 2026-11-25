import ContactForm from '../components/ContactForm.jsx'
import { contactEmail } from '../data/profile.js'
import '../styles/contact.css'

const collaborationInterests = [
  'Technology Entrepreneurship',
  'Business and Technology Innovation',
  'Financial Technology',
  'Data & Business Analytics',
  'Artificial Intelligence and Decision Support Systems',
  'Software and Web Development',
  'Professional Networking',
]

export default function Contact() {
  return (
    <div className="contact-layout">
      <div>
        <header>
          <h1>Contact Me</h1>
          <p className="page-subtitle">Let's Connect and Explore Opportunities</p>
          <p>I am always open to meaningful conversations, professional networking and opportunities for collaboration. Whether you are interested in technology entrepreneurship, business innovation, financial technology, data analytics or intelligent digital solutions, I would be happy to connect with you.</p>
          <p>Email me at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
        </header>
        <section className="collaboration">
          <h2>Let's Work Together</h2>
          <p>As a technology entrepreneur and Founder &amp; CEO of MAXI TECHNOLOGY, I welcome opportunities to exchange ideas, build professional relationships and collaborate on innovative business and technology solutions.</p>
          <h3>Areas of collaboration</h3>
          <ul className="interest-list">
            {collaborationInterests.map(interest => <li key={interest}>{interest}</li>)}
          </ul>
        </section>
      </div>
      <ContactForm />
    </div>
  )
}
