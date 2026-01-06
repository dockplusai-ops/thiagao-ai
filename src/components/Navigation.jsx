import { useState, useEffect, useRef, memo } from 'react'

const Navigation = memo(() => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const rafId = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        rafId.current = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'DOCKPLUS', href: '#dockplus' },
    { name: 'CORE', href: '#services' },
    { name: 'VENTURES', href: '#ventures' },
    { name: 'WORK', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 border-b-4 border-blue-500 py-2' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          className="flex items-center space-x-3 group"
          aria-label="Thiagao Ai - Go to homepage"
        >
          <div className="w-8 h-8 bg-blue-500 pixel-border-blue animate-pulse group-hover:rotate-90 transition-transform" aria-hidden="true"></div>
          <span className="font-pixel text-lg text-white group-hover:text-blue-400 transition-colors">
            THIAGAO.AI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-pixel text-[10px] text-slate-400 hover:text-blue-400 hover:glow-text-blue transition-all"
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-8bit !py-2 !px-4 !text-[8px]"
            aria-label="Connect with Thiagao Ai"
          >
            CONNECT
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blue-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-black border-b-4 border-blue-500 p-6 absolute w-full left-0 animate-in slide-in-from-top-4"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-pixel text-sm text-slate-300 hover:text-blue-400 transition-colors"
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-8bit !py-2 !px-4 !text-[8px] w-fit"
              aria-label="Connect with Thiagao Ai"
            >
              CONNECT
            </a>
          </div>
        </nav>
      )}
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation
