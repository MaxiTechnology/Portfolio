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
          <p className="page-subtitle">Have a project in mind?</p>
          <p>I welcome questions about my work and ideas for collaboration. You can reach me at <a href={`mailto:${contactEmail}`}>{contactEmail}</a> or use the form to prepare a message.</p>
        </header>
        <section className="collaboration">
          <h2>Areas of collaboration</h2>
          <ul className="interest-list">
            {collaborationInterests.map(interest => <li key={interest}>{interest}</li>)}
          </ul>
        </section>
      </div>
      <ContactForm />
    </div>
  )
}
