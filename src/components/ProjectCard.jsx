export default function ProjectCard({ project }) {
  const { title, category, status, description, technologies, link } = project

  return (
    <article className="card project-card">
      <header className="project-header">
        <span className="project-category">{category}</span>
        <h2>{title}</h2>
        <span className="project-status">{status}</span>
      </header>
      <div className="project-details">
        <p>{description}</p>
        <div>
          <h3>Technologies used</h3>
          <ul className="technology-list">
            {technologies.map(technology => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        {link && (
          <a className="button secondary project-repository" href={link.url}
            aria-label={`${link.label} for ${title}`}>
            {link.label}
          </a>
        )}
      </div>
    </article>
  )
}
