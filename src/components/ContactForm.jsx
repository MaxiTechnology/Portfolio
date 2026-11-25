import { useState } from 'react'
import { contactEmail } from '../data/profile.js'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [draftUrl, setDraftUrl] = useState('')

  function clearFeedback() {
    setError('')
    setDraftUrl('')
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

    const subject = encodeURIComponent(`Portfolio enquiry from ${name.trim()}`)
    const body = encodeURIComponent(`${message.trim()}\r\n\r\n${name.trim()}\r\nReply to: ${email.trim()}`)
    setDraftUrl(`mailto:${contactEmail}?subject=${subject}&body=${body}`)
  }

  return (
    <form className="card contact-form" aria-labelledby="form-title"
      onSubmit={handleSubmit} onChange={clearFeedback} noValidate>
      <div>
        <h2 id="form-title">Write to Maxwell</h2>
        <p>Prepare a draft here, then open it in your email app to review and send.</p>
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
        <button className="button primary" type="submit">Prepare email draft</button>
        <div role="alert">{error && <p className="form-error">{error}</p>}</div>
        <div role="status">{draftUrl && <p className="form-success">Your draft is ready. <a href={draftUrl}>Open in email app</a></p>}</div>
      </div>
    </form>
  )
}
