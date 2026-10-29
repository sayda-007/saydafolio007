import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/portfolioData'

type ProjectCardProps = {
  project: Project
}

const projectImageMap: Record<string, string> = {
  bazardor: '/assets/BazarDor.JPG',
  fitlog: '/assets/FitLogPage.JPG',
  devstack: '/assets/DevStack.JPG',
  'cultural-day': '/assets/CulturalInvitation.JPG',
  devconf: '/assets/DevConf.JPG',
}

function ProjectCard({ project }: ProjectCardProps) {
  const projectImage = projectImageMap[project.slug]

  return (
    <article className="project-card reveal-animate">
      <div className={`project-visual project-visual--${project.slug}`}>
        <img className="project-visual__image" src={projectImage} alt={`${project.title} screenshot`} />
      </div>

      <div className="project-card__body">
        <p className="project-card__label">Portfolio project</p>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        <div className="project-card__tags" aria-label={`${project.title} technologies`}>
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-card__actions">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            View Project
            <ExternalLink size={16} />
          </a>
          <Link to={`/projects/${project.slug}`}>
            View Details
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
