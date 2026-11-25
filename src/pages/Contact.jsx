import ContactForm from '../components/ContactForm.jsx'
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
      <header className="contact-intro">
        <h1>Contact Me</h1>
        <p className="page-subtitle">Have a project in mind?</p>
        <p>I welcome questions about my work and ideas for collaboration. Use the form to prepare a message or connect through one of the platforms below.</p>
      </header>
      <ContactForm />
      <section className="collaboration">
        <h2>Areas of collaboration</h2>
        <ul className="interest-list">
          {collaborationInterests.map(interest => <li key={interest}>{interest}</li>)}
        </ul>
      </section>
    </div>
  )
}
