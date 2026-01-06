import Terminal from './Terminal'

function Hero() {
  const photoUrl = '/assets/thiago-hero.jpg'

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content - Retro Terminal Style */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-1000">
            <div className="inline-block p-2 bg-blue-900/30 border-l-4 border-blue-500 text-blue-400 font-terminal text-xl tracking-widest">
              SYSTEM_STATUS: ONLINE
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-pixel leading-tight glow-text-blue">
              THIAGAO <br />
              <span className="text-blue-500">AI</span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="h-[2px] w-12 bg-blue-500/50"></div>
              <div className="font-terminal text-2xl text-blue-300 tracking-[0.2em]">
                LEAD_DEVELOPER_A.I
              </div>
            </div>

            <p className="font-terminal text-xl md:text-2xl text-slate-400 max-w-xl leading-relaxed">
              &gt; INITIALIZING CORE PROTOCOLS...<br />
              &gt; ARCHITECTING SCALABLE AI SOLUTIONS.<br />
              &gt; TRANSFORMING RAW DATA INTO INTELLIGENCE.
            </p>

            <div className="pt-8">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-8bit"
              >
                INITIATE_CONTACT
              </button>
            </div>
          </div>

          {/* Right Side - 3D Floating Avatar */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>

            <div className="relative preserve-3d float-3d">
              {/* Main Image Frame */}
              <div className="pixel-border-blue glow-blue overflow-hidden relative group">
                <img
                  src={photoUrl}
                  alt="Thiago Pixel Art"
                  className="w-full h-auto max-w-md object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none"></div>

                {/* Decorative bits */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-blue-500 animate-ping"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-blue-500"></div>
              </div>

              {/* Back shadows/decoration for depth */}
              <div className="absolute -inset-4 border border-blue-500/20 translate-z-[-20px] pointer-events-none"></div>
              <div className="absolute -inset-8 border border-blue-500/10 translate-z-[-40px] pointer-events-none"></div>
            </div>

            {/* Terminal at bottom right of image */}
            <div className="absolute -bottom-10 -right-4 w-full scale-90 opacity-80 hidden lg:block">
              <Terminal />
            </div>
          </div>

        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-blue-900/20 rotate-45 animate-spin duration-[10s]"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 border-r border-b border-blue-900/20 rounded-full animate-pulse"></div>
    </section>
  )
}

export default Hero
