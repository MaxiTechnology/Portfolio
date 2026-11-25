import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import '../styles/projects.css'

export default function Projects() {
  return (
    <>
      <header className="projects-intro">
        <h1>My Projects</h1>
        <p className="page-subtitle">Decision support and web development</p>
        <p>Two of my academic projects explore how to make a ranking understandable to the person using it. The third is the portfolio you’re reading.</p>
      </header>
      <div className="project-grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </>
  )
}
