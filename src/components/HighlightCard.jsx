export default function HighlightCard({ title, description, children }) {
  return (
    <article className="card highlight-card">
      <span className="card-icon" aria-hidden="true">{children}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
