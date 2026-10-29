import { Menu, X } from 'lucide-react'
import { useState, type MouseEvent } from 'react'
import { navItems } from '../data/portfolioData'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleBrandClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    if (window.location.pathname === '/') {
      window.location.assign('/')
      return
    }

    window.location.assign('/#top')
  }

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a href="/#top" className="brand" aria-label="Go to home page" onClick={handleBrandClick}>
          <span className="brand-mark">sayda007</span>
        </a>

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
