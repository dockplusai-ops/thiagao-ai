function Ventures() {
  const ventures = [
    {
      name: 'DockPlus AI Solutions',
      tagline: 'Enterprise Automation & AI Architecture',
      industry: 'Technology',
      focus: true,
      description: 'Global reach, specialized in AI integration, custom software, and marketing automation.'
    },
    {
      name: 'Cape Codder Home Improvement',
      tagline: 'Premium Residential Remodeling',
      industry: 'Construction',
      focus: false,
      description: 'The standard for high-end home improvement in Cape Cod.'
    },
    {
      name: 'Roberts Landscape Construction',
      tagline: 'Outdoor Architectural Excellence',
      industry: 'Landscape & Hardscape',
      focus: false,
      description: 'Designing and building elite outdoor environments.'
    },
    {
      name: 'All Granite & Stone',
      tagline: 'Exotic Surfaces & Custom Fabrication',
      industry: 'Stone Industry',
      focus: false,
      description: 'Quality stone fabrication and installation for luxury projects.'
    }
  ]

  return (
    <div className="section-container relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-pixel text-white mb-6 glow-text-blue">BUSINESS_PORTFOLIO</h2>
        <p className="font-terminal text-2xl text-slate-400">SELECT_VENTURES_&_ENTERPRISES</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ventures.map((venture) => (
          <div
            key={venture.name}
            className={`pixel-border bg-black/40 p-8 group transition-all duration-500 ${venture.focus ? 'border-blue-500 shadow-[0_0_30px_rgba(0,242,255,0.1)]' : 'border-blue-900/40'
              }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                {venture.focus && (
                  <span className="inline-block px-2 py-1 bg-blue-500 text-black font-pixel text-[8px] mb-4 animate-pulse">
                    PRIORITY_FOCUS
                  </span>
                )}
                <h3 className={`text-2xl font-pixel mb-2 ${venture.focus ? 'text-blue-400' : 'text-white'}`}>
                  {venture.name}
                </h3>
                <div className="font-terminal text-blue-500/60 uppercase tracking-widest text-sm">
                  {venture.industry}
                </div>
              </div>
            </div>

            <p className="font-terminal text-xl text-slate-300 mb-8 leading-relaxed">
              {venture.description}
            </p>

            <div className="pt-6 border-t border-blue-900/20">
              <div className="font-terminal text-slate-500 text-sm">
                &gt; {venture.tagline}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ventures
