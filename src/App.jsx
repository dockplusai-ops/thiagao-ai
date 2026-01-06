import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#050508] text-[#e0e0e0] relative min-h-screen selection:bg-blue-500 selection:text-black">
      {/* Design Layers */}
      <div className="crt-overlay" />
      <div id="grid-bg" />

      <Navigation />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="py-32">
          <About />
        </section>

        <section id="services" className="py-32">
          <Services />
        </section>

        <section id="portfolio" className="py-32">
          <Portfolio />
        </section>

        <section id="contact" className="py-40">
          <Contact />
        </section>
      </main>

      <footer className="border-t-4 border-blue-900/40 py-16 bg-black relative overflow-hidden mt-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="font-terminal text-slate-500 text-sm order-2 md:order-1">
            [ CPU_LOAD: 0.12 ] [ MEM_STATE: STABLE ]<br />
            &copy; 2024 THIAGAO_A.I // CAPE_COD_MA
          </div>

          <div className="flex flex-col items-center order-1 md:order-2">
            <div className="w-12 h-1 px-4 bg-blue-500 mb-4 animate-pulse"></div>
            <div className="font-pixel text-[10px] text-blue-500">
              8_BIT_DEVELOPER_EDITION
            </div>
          </div>

          <div className="font-terminal text-slate-500 text-sm text-center md:text-right order-3">
            UPLOADING_PROTOCOLS... [OK]<br />
            SYSTEM_STABILITY: 100%
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 shadow-[0_0_15px_rgba(0,242,255,1)]"></div>
      </footer>

      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[1px] h-[1px] bg-white shadow-[0_0_100px_50px_rgba(0,100,255,0.05)]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[1px] h-[1px] bg-white shadow-[0_0_100px_50px_rgba(0,50,255,0.05)]"></div>
      </div>
    </div>
  )
}

export default App
