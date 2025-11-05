import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Dock Plus AI', href: '#dockplus' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Contact', href: '#contact' },
  ]

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-800 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-sm' : 'bg-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              setIsMenuOpen(false)
            }}
            className="flex-shrink-0 cursor-pointer"
          >
            <div className="text-white font-semibold text-lg tracking-tight">
              THIAGAO A.I
            </div>
            <div className="text-slate-400 text-xs mt-0.5">
              Enterprise AI Solutions
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className="text-slate-300 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={handleGetStarted}
              className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 w-64 bg-slate-900 border-l border-slate-800 z-50">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-slate-800">
              <div className="text-white font-semibold text-lg tracking-tight">
                THIAGAO A.I
              </div>
              <div className="text-slate-400 text-xs mt-0.5">
                Enterprise AI Solutions
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-6">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block px-6 py-3 text-slate-300 hover:text-blue-600 hover:bg-slate-800 text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-6 pt-4">
                <button
                  onClick={handleGetStarted}
                  className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navigation

