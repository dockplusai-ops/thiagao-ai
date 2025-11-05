import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import DockPlus from './components/DockPlus'
import Portfolio from './components/Portfolio'
import Ventures from './components/Ventures'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="services" className="py-20 bg-slate-900">
          <Services />
        </section>
        
        <section id="dockplus" className="py-20">
          <DockPlus />
        </section>
        
        <section id="portfolio" className="py-20 bg-slate-900">
          <Portfolio />
        </section>
        
        <section id="ventures" className="py-20">
          <Ventures />
        </section>
        
        <section id="contact" className="py-20 bg-slate-900">
          <Contact />
        </section>
      </main>
      
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2024 Thiagao A.I - All rights reserved</p>
          <p className="text-slate-500 text-sm mt-2">Cape Cod, Massachusetts</p>
        </div>
      </footer>
    </div>
  )
}

export default App

