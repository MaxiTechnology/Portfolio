import githubMark from '../assets/github-mark.svg'

export default function ProjectCard({ project }) {
  const { title, category, status, description, technologies, githubUrl, demoUrl } = project

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
        <div className="project-actions">
          {demoUrl && (
            <a className="button secondary" href={demoUrl} aria-label={`Open project demo for ${title}`}>
              Open project demo
            </a>
          )}
          <a className="button secondary project-repository" href={githubUrl}
            target="_blank" rel="noopener noreferrer"
            aria-label={`View on GitHub: ${title} (opens in a new tab)`}>
            <img src={githubMark} width="20" height="20" alt="" />
            View on GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
