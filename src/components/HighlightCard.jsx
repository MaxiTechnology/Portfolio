export default function HighlightCard({ title, children }) {
  return (
    <li>
      <span className="expertise-icon" aria-hidden="true">{children}</span>
      {title}
    </li>
  )
}
