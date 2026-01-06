import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CORE', href: '#services' },
    { name: 'WORK', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 border-b-4 border-blue-500 py-2' : 'bg-transparent py-6'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 bg-blue-500 pixel-border-blue animate-pulse group-hover:rotate-90 transition-transform"></div>
          <span className="font-pixel text-lg text-white group-hover:text-blue-400 transition-colors">
            THIAGAO.AI
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-pixel text-[10px] text-slate-400 hover:text-blue-400 hover:glow-text-blue transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-8bit !py-2 !px-4 !text-[8px]"
          >
            CONNECT
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-blue-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b-4 border-blue-500 p-6 absolute w-full left-0 animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-pixel text-sm text-slate-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
