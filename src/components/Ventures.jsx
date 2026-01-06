function Ventures() {
  const ventures = [
    {
      name: 'Thiagao Landscape Construction & Design',
      tagline: 'Rooted in Excellence',
      industry: 'Landscape & Hardscape',
      comingSoon: false,
    },
    {
      name: 'Cheesebread Bakery Café',
      tagline: 'Hyannis, MA',
      industry: 'Food & Hospitality',
      comingSoon: false,
    },
    {
      name: 'Cape Codder Home Improvement',
      tagline: 'Residential Construction & Remodeling',
      industry: 'Construction',
      comingSoon: false,
    },
    {
      name: 'All Granite & Stone',
      tagline: 'Marble, Granite & Quartz',
      industry: 'Stone Fabrication',
      comingSoon: false,
    },
    {
      name: 'Bread & Roses Bookstore Café',
      tagline: 'Culture & Community',
      industry: 'Culture & Hospitality',
      comingSoon: true,
    },
    {
      name: 'DockPlus AI Solutions',
      tagline: 'Enterprise Automation',
      industry: 'Technology',
      comingSoon: false,
    },
  ]

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Business Ventures</h2>
          <p className="text-xl text-slate-400">
            Building excellence across multiple industries
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture) => (
            <div
              key={venture.name}
              className="bg-slate-900 border border-slate-800 p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white font-semibold text-lg pr-4">
                  {venture.name}
                </h3>
                {venture.comingSoon && (
                  <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs font-medium whitespace-nowrap">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-sm mb-3">
                {venture.tagline}
              </p>
              <div className="text-blue-600 text-sm font-medium">
                {venture.industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Ventures

