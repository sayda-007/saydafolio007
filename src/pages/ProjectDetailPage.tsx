import { ArrowLeft, ArrowUpRight, ExternalLink, Link2, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/portfolioData'

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="page-shell page-shell--simple">
        <Navbar />
        <main className="container project-detail empty-state">
          <h1>Project not found</h1>
          <p>The requested project page could not be found.</p>
          <Link to="/" className="button button--primary">
            <ArrowLeft size={18} />
            Back to portfolio
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="page-shell page-shell--simple">
      <Navbar />

      <main className="container project-detail">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="project-detail__hero">
          <div className="project-detail__intro">
            <p className="section-eyebrow">Project detail</p>
            <h1>{project.title}</h1>
            <p className="project-detail__summary">{project.description}</p>
            <div className="project-card__tags project-card__tags--detail">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={`project-visual project-visual--${project.slug} project-visual--detail`} aria-hidden="true">
            <div className="project-visual__orb" />
            <div className="project-visual__ring" />
          </div>
        </div>

        <div className="project-detail__actions">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="button button--primary">
            Visit live site
            <ExternalLink size={18} />
          </a>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button button--secondary">
            Source code
            <Link2 size={18} />
          </a>
        </div>

        <div className="detail-grid">
          <div className="detail-panel">
            <SectionHeader eyebrow="Overview" title="Verified project information" />
            <ul className="detail-list">
              {project.summary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-panel">
            <SectionHeader eyebrow="Verified features" title="What is confirmed" />
            <ul className="detail-list">
              {project.verifiedDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-grid detail-grid--single">
          <div className="detail-panel">
            <SectionHeader eyebrow="Known limitations" title="Confirmed limitations" />
            <ul className="detail-list">
              {project.knownLimitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="detail-panel">
            <SectionHeader eyebrow="Suggestions" title="Possible future improvements" />
            <ul className="detail-list">
              {project.futureImprovements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-panel detail-panel--full">
          <SectionHeader eyebrow="Development notes" title="Honest project perspective" />
          <div className="notes-box">
            <Sparkles size={20} />
            <p>
              This page keeps the description grounded in verified project information. Any ideas for future improvements are
              clearly labeled as suggestions rather than confirmed achievements or personal development stories.
            </p>
          </div>
        </div>

        <div className="project-detail__footer">
          <Link to="/" className="button button--secondary">
            <ArrowUpRight size={18} />
            Back to portfolio
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ProjectDetailPage
