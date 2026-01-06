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
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center space-x-3 group"
          aria-label="Thiagao Ai - Go to homepage"
        >
          <div className="w-8 h-8 bg-blue-500 pixel-border-blue animate-pulse group-hover:rotate-90 transition-transform" aria-hidden="true"></div>
          <span className="font-pixel text-sm md:text-lg text-white group-hover:text-blue-400 transition-colors">
            THIAGAO.AI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector(link.href)
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="font-pixel text-[10px] text-slate-400 hover:text-blue-400 hover:glow-text-blue transition-all"
              aria-label={`Navigate to ${link.name} section`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              const target = document.getElementById('contact')
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="btn-8bit !py-2 !px-4 !text-[8px]"
            aria-label="Connect with Thiagao Ai"
          >
            CONNECT
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blue-500 font-pixel text-xs px-3 py-2 border border-blue-500/30 hover:bg-blue-500/10 transition-colors"
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
          className="md:hidden bg-black/95 backdrop-blur-md border-b-4 border-blue-500 p-6 absolute w-full left-0 top-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  const target = document.querySelector(link.href)
                  if (target) {
                    setTimeout(() => {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }, 100)
                  }
                }}
                className="font-pixel text-sm text-slate-300 hover:text-blue-400 transition-colors py-2 border-b border-blue-900/20 last:border-0"
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)
                const target = document.getElementById('contact')
                if (target) {
                  setTimeout(() => {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 100)
                }
              }}
              className="btn-8bit !py-3 !px-6 !text-[10px] w-full text-center mt-4"
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
