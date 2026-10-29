import {
  ArrowRight,
  Briefcase,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from 'lucide-react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { toast } from 'react-toastify'
import {
  certificationData,
  educationData,
  experienceData,
  personalInfo,
  projects,
  skillGroups,
  socialLinks,
} from '../data/portfolioData'

function HomePage() {
  const handleCvDownload = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const link = document.createElement('a')
    link.href = personalInfo.cvUrl
    link.download = 'Sayda_Akter_CV.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()

    toast.info('Your CV download has started!', {
      position: 'top-right',
      autoClose: 2600,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    })
  }

  return (
    <div className="page-shell">
      <div className="space-bg" aria-hidden="true">
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="orbit orbit-1" />
        <span className="orbit orbit-2" />
        <span className="planet planet-1" />
        <span className="planet planet-2" />
        <span className="moon" />
        <span className="saturn" />
      </div>

      <Navbar />

      <main>
        <section className="hero section-wrap" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">CSE Student · Aspiring Full-Stack Web Developer</p>
              <h1>
                Hi, I’m <span className="typewriter-text" aria-label="Sayda Sheikh">Sayda Sheikh</span>
              </h1>
              <p className="hero-text">
                I’m a Computer Science and Engineering student building practical web-development skills through projects,
                problem-solving, and continuous learning. I’m preparing for a future in full-stack development, internships,
                and freelance work with a strong focus on clean code and thoughtful design.
              </p>

              <div className="hero-actions">
                <a href={personalInfo.cvUrl} onClick={handleCvDownload} className="button button--primary">
                  <Download size={18} />
                  Download CV
                </a>
                <a href="#projects" className="button button--secondary">
                  View Projects
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="hero-meta">
                <div>
                  <span className="meta-label">Based in</span>
                  <strong>Dhaka, Bangladesh</strong>
                </div>
                <div>
                  <span className="meta-label">Focus</span>
                  <strong>Frontend + full-stack learning</strong>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="photo-card">
                <img src={personalInfo.profileImage} alt="Portrait of Sayda Sheikh" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="about">
          <div className="container">
            <SectionHeader
              eyebrow="About"
              title="Building a future in web development"
              description="I’m a beginner developer who is learning by creating real projects, improving my fundamentals, and growing through practical work."
            />

            <div className="about-grid">
              <div className="about-card accent-card">
                <p>
                  I’m currently pursuing a BSc in Computer Science and Engineering while strengthening my skills in front-end
                  development, design thinking, and full-stack basics. My goal is to become a professional full-stack web
                  developer and contribute through meaningful projects, internships, and client-focused work.
                </p>
              </div>

              <div className="about-card info-card">
                <ul>
                  <li>
                    <Sparkles size={16} />
                    Interested in web development, UI/UX, and practical implementation
                  </li>
                  <li>
                    <Code2 size={16} />
                    Building projects with HTML, CSS, JavaScript, React, and TypeScript
                  </li>
                  <li>
                    <MapPin size={16} />
                    Learning through portfolio work, self-improvement, and structured practice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="skills">
          <div className="container">
            <SectionHeader
              eyebrow="Skills"
              title="Core technical foundations"
              description="My skill set is growing through project work, study, and hands-on learning. I focus on practical development foundations rather than pretending to be an expert in everything."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap" id="education">
          <div className="container">
            <SectionHeader
              eyebrow="Education"
              title="Academic background"
            />

            <div className="timeline-list">
              {educationData.map((item) => (
                <article className="timeline-item" key={`${item.title}-${item.period}`}>
                  <div className="timeline-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p>{item.institution}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap" id="experience">
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Teaching and communication experience"
              description="This is my verified experience and it is relevant as teaching and communication experience rather than software-development employment."
            />

            <div className="experience-card">
              <div className="timeline-icon">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="timeline-period">{experienceData[0].period}</p>
                <h3>{experienceData[0].role}</h3>
                <p className="experience-company">{experienceData[0].company}</p>
                <p>{experienceData[0].description}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap" id="certifications">
          <div className="container">
            <SectionHeader
              eyebrow="Certifications"
              title="Verified credentials"
            />

            <div className="cert-grid">
              {certificationData.map((item) => (
                <article className="cert-card" key={`${item.title}-${item.date}`}>
                  <div className="cert-icon">
                    <Star size={18} />
                  </div>
                  <p className="cert-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                  <span>{item.level}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap" id="projects">
          <div className="container">
            <SectionHeader
              eyebrow="Projects"
              title="Selected work"
              description="These are the verified portfolio projects I am showcasing. Each one is linked to publicly available resources and honest project information."
            />

            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="container">
            <SectionHeader
              eyebrow="Contact"
              title="Let’s build something useful together"
            />

            <div className="contact-grid">
              <div className="contact-card">
                <h3>Connect with me</h3>
                <div className="contact-list">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail size={18} />
                    {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>
                    <Phone size={18} />
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <h3>Social profiles</h3>
                <div className="social-list">
                  {socialLinks.map((link) => {
                    const Icon =
                      link.icon === 'github'
                        ? Globe
                        : link.icon === 'linkedin'
                          ? BriefcaseBusiness
                          : link.icon === 'facebook'
                            ? Sparkles
                            : link.icon === 'instagram'
                              ? Star
                              : Globe

                    return (
                      <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                        <Icon size={18} />
                        {link.label}
                        <ExternalLink size={14} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage
