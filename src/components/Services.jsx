function Services() {
  const services = [
    {
      title: 'AI ENGINE',
      desc: 'Architecting proprietary neural networks and LLM implementations for enterprise-grade automation.',
      icon: 'AI_CORE',
      color: 'blue'
    },
    {
      title: 'DOCK PLUS',
      desc: 'Seamlessly docking AI agents into existing business workflows and cloud infrastructures.',
      icon: 'DOCK_SYS',
      color: 'purple'
    },
    {
      title: 'BYTE BOT',
      desc: 'Custom automation bots designed to handle repetitive tasks with pixel-perfect precision.',
      icon: 'BOT_AUTO',
      color: 'cyan'
    }
  ]

  return (
    <div className="section-container relative z-10">
      <div className="text-center mb-12 md:mb-20 animate-in fade-in zoom-in duration-700">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-pixel mb-4 md:mb-6 glow-text-blue">
          CORE_MODULES
        </h2>
        <p className="font-terminal text-lg md:text-xl lg:text-2xl text-blue-300/70 tracking-widest uppercase px-4">
          [ Advanced Technical Capabilities ]
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 perspective-1000">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative preserve-3d transition-all duration-500 hover:rotate-Y-12"
          >
            {/* 3D Card Effect */}
            <div className="pixel-border-blue p-8 bg-slate-950/80 backdrop-blur-md relative z-10 hover:translate-z-10 transition-transform">
              <div className="w-16 h-16 bg-blue-500/20 pixel-border-blue mb-6 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-colors">
                <span className="font-pixel text-xl">{index + 1}</span>
              </div>

              <h3 className="text-xl font-pixel mb-4 text-white group-hover:text-blue-400">
                {service.title}
              </h3>

              <p className="font-terminal text-base md:text-lg text-slate-400 leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="font-terminal text-xs text-blue-500/50 uppercase tracking-tighter">
                &gt; Status: Operational
              </div>
            </div>

            {/* Decorative 3D back elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-blue-900/30 -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all"></div>
          </div>
        ))}
      </div>

      {/* Big Voxel Asset as Background Decoration */}
      <div className="absolute -right-20 top-0 opacity-10 pointer-events-none scale-150 rotate-12">
        <img src="/assets/voxel-icons.png" alt="Voxel Decoration" className="w-[600px]" />
      </div>
    </div>
  )
}

export default Services
