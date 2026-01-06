function About() {
  const stats = [
    { label: 'EXP', value: '20+' },
    { label: 'INTEL', value: 'AI/ML' },
    { label: 'SPEED', value: '99%' },
    { label: 'LUCK', value: 'MAX' }
  ]

  return (
    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Profile Stats Column */}
        <div className="order-2 lg:order-1">
          <div className="pixel-border bg-black/40 p-8 space-y-8">
            <h2 className="text-2xl font-pixel text-blue-500 mb-8">FILE: THIAGAO_AI.DAT</h2>

            <div className="space-y-6">
              <p className="font-terminal text-2xl text-slate-300 leading-relaxed">
                A veteran entrepreneur and technical architect with over two decades of experience in the digital frontier.
                Based in Cape Cod, I specialize in bridging the gap between legacy systems and the autonomous future.
                I am happily married to Bruna Cruz, and we are the proud parents of Noah, Nathan, and Ethan.
                Our family is completed by our two loyal companions, Luke and Lucy.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                {stats.map(stat => (
                  <div key={stat.label} className="border border-blue-900/40 p-4">
                    <div className="text-[10px] font-pixel text-blue-500/60 mb-2">{stat.label}</div>
                    <div className="text-2xl font-pixel text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-blue-900/40">
              <div className="font-terminal text-slate-500 mb-4 uppercase tracking-[0.3em]">&gt; SKILL_MATRIX</div>
              <div className="flex flex-wrap gap-3">
                {['REACT', 'VITE', 'TAILWIND', 'PYTHON', 'DOCKER', 'GEMINI_AI'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-900/20 border border-blue-500/30 font-terminal text-sm text-blue-400">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Column */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center space-y-8">
          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="pixel-border-blue p-2 bg-slate-900 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                src="/assets/thiagao-about.webp"
                alt="Thiagao Ai Portrait"
                className="w-full max-w-sm grayscale contrast-125 group-hover:grayscale-0 transition-all"
              />
            </div>

            {/* Tech Overlay */}
            <div className="absolute top-4 right-4 font-pixel text-[8px] text-blue-500 bg-black/80 p-2 border border-blue-500/50">
              ID_019283
            </div>
          </div>

          <div className="text-center font-terminal text-slate-500 uppercase tracking-widest text-sm translate-y-4">
             // [ SCANNING_IDENTITY_PROTECTOR ]
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
