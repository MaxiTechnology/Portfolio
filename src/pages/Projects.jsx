import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'
import '../styles/projects.css'

export default function Projects() {
  return (
    <>
      <header className="projects-intro">
        <h1>My Projects</h1>
        <p className="page-subtitle">Building Innovative Solutions Through Business and Technology</p>
        <p>Explore my academic and personal projects, which demonstrate my growing experience in web development, artificial intelligence, data analytics and intelligent decision support systems. These projects reflect my entrepreneurial mindset and commitment to applying technology to practical business and organizational challenges.</p>
      </header>
      <div className="project-grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </>
  )
}
