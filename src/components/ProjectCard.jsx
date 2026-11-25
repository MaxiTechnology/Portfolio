import githubMark from '../assets/github-mark.svg'

function TechnologyList({ heading, items }) {
  if (items.length === 0) return null

  return (
    <div>
      <h3>{heading}</h3>
      <ul className="technology-list">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function ProjectCard({ project }) {
  return (
    <article className="card project-card">
      <header className="project-header">
        <span className="project-category">{project.category}</span>
        <h2>{project.title}</h2>
        <span className="project-status">{project.status}</span>
      </header>
      <div className="project-details">
        <p>{project.description}</p>
        {project.githubUrl ? (
          <a className="button secondary project-repository"
            href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            aria-label={`View on GitHub: ${project.title} (opens in a new tab)`}>
            <img src={githubMark} width="20" height="20" alt="" />
            View on GitHub
          </a>
        ) : (
          <span>Repository link coming soon.</span>
        )}
        <div>
          <h3>{project.featureHeading}</h3>
          <ul className="feature-list">
            {project.features.map(feature => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
        <TechnologyList heading="Technologies used" items={project.technologies} />
        <TechnologyList heading="Planned technologies and methods" items={project.plannedTechnologies} />
      </div>
    </article>
  )
}
