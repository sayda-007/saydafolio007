import { Mail, Phone } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiFacebook, SiGithub, SiInstagram, SiX } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { socialLinks } from '../data/portfolioData'

const year = new Date().getFullYear()

const socialIconMap = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  facebook: SiFacebook,
  instagram: SiInstagram,
  x: SiX,
} as const

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-brand-block">
          <Link to="/" className="brand-mark footer-brand-link" aria-label="Go to home page">
            sayda007
          </Link>
          <p className="footer-copy">Building practical web experiences with curiosity and consistency.</p>
        </div>

        <div className="footer-socials" aria-label="Social links">
          {socialLinks.map(({ label, url, icon }) => {
            const Icon = socialIconMap[icon]

            return (
              <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={18} />
              </a>
            )
          })}

          <a href="mailto:saydaa.akter01@gmail.com" aria-label="Email contact link">
            <Mail size={18} />
          </a>
          <a href="tel:+8801610679330" aria-label="Phone contact link">
            <Phone size={18} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} sayda007. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
