import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  function clearFeedback() {
    setError('')
    setSuccessMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    clearFeedback()
    const fields = event.currentTarget.elements

    // Stop at the first error so the visitor can correct one field at a time.
    if (!name.trim()) {
      setError('Please enter your full name.')
      fields.fullName.focus()
      return
    }
    if (!email.trim()) {
      setError('Please enter your email address.')
      fields.email.focus()
      return
    }
    if (!fields.email.validity.valid) {
      setError('Please enter a valid email address.')
      fields.email.focus()
      return
    }
    if (!message.trim()) {
      setError('Please enter your message.')
      fields.message.focus()
      return
    }

    // Validation is complete. Clear the temporary input values.
    setName('')
    setEmail('')
    setMessage('')
    setSuccessMessage('Thank you for completing the contact form. Your information has been validated successfully. This portfolio currently uses a demonstration contact form, so your message has not been sent.')
  }

  return (
    <form className="card contact-form" aria-labelledby="form-title"
      onSubmit={handleSubmit} onChange={clearFeedback} noValidate>
      <div>
        <h2 id="form-title">Send Me a Message</h2>
        <p>Fill in the form below to introduce yourself, share an idea or express your interest in collaborating.</p>
      </div>
      <div className="contact-field">
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" name="fullName" type="text" autoComplete="name" required
          placeholder="Enter your full name" value={name}
          onChange={event => setName(event.target.value)} />
      </div>
      <div className="contact-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" autoComplete="email" required
          placeholder="Enter your email address" value={email}
          onChange={event => setEmail(event.target.value)} />
      </div>
      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required
          placeholder="Write your message here..." value={message}
          onChange={event => setMessage(event.target.value)} />
      </div>
      <div>
        <p className="form-note">This contact form is a frontend demonstration. Messages are not currently delivered by email.</p>
        <button className="button primary" type="submit">Submit Message</button>
        <div role="alert">{error && <p className="form-error">{error}</p>}</div>
        <div role="status">{successMessage && <p className="form-success">{successMessage}</p>}</div>
      </div>
    </form>
  )
}
