import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../data/portfolioData'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand" aria-label="Go to home page">
          <span className="brand-mark">sayda007</span>
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <div className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
            {navItems.map((item) => (
              <a key={item.href} href={item.href === '#contact' ? '/#contact' : `/${item.href}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Navbar
