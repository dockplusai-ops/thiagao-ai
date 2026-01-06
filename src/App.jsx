import React, { Suspense } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Lazy load sections for better initial FCP
const About = React.lazy(() => import('./components/About'))
const Services = React.lazy(() => import('./components/Services'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))
const Contact = React.lazy(() => import('./components/Contact'))
const PixelRun = React.lazy(() => import('./components/PixelRun'))
const DockPlus = React.lazy(() => import('./components/DockPlus'))
const Ventures = React.lazy(() => import('./components/Ventures'))

// Simple loading fallback
const SectionLoader = () => (
  <div className="py-32 flex items-center justify-center">
    <div className="w-8 h-8 bg-blue-500/20 animate-pulse border border-blue-500/30"></div>
  </div>
)

function App() {
  return (
    <div className="bg-[#050508] text-[#e0e0e0] relative min-h-screen selection:bg-blue-500 selection:text-black">
      {/* Design Layers - Optimized with contain: strict */}
      <div className="crt-overlay pointer-events-none" style={{ contain: 'strict' }} />
      <div id="grid-bg" className="pointer-events-none" style={{ contain: 'strict' }} />

      <Navigation />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-6 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-black focus:font-pixel focus:text-sm"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      <main id="main-content" className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <Suspense fallback={<SectionLoader />}>
          <section id="about" className="py-32 optimize-scroll" style={{ contain: 'layout' }}>
            <About />
          </section>

          <section id="dockplus" className="py-32 bg-slate-950/20 optimize-scroll" style={{ contain: 'layout' }}>
            <DockPlus />
          </section>

          <section id="services" className="py-32 optimize-scroll" style={{ contain: 'layout' }}>
            <Services />
          </section>

          <section id="ventures" className="py-32 bg-slate-950/20 optimize-scroll" style={{ contain: 'layout' }}>
            <Ventures />
          </section>

          <section id="portfolio" className="py-32 optimize-scroll" style={{ contain: 'layout' }}>
            <Portfolio />
          </section>

          <section id="contact" className="py-40 optimize-scroll" style={{ contain: 'layout' }}>
            <Contact />
          </section>

          <PixelRun />
        </Suspense>
      </main>

      <footer className="border-t-4 border-blue-900/40 py-16 bg-black relative overflow-hidden mt-32" style={{ contain: 'layout' }}>
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
