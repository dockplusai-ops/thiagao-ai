import { ExternalLink } from 'lucide-react'

function Portfolio() {
  const projects = [
    {
      name: 'All Granite & Stone',
      url: 'https://allgraniteandstone.com',
      description: 'Premium stone fabrication company website with service showcase and contact integration',
      tech: ['Web Development', 'SEO'],
      image: 'https://via.placeholder.com/800x450/1e293b/ffffff?text=All+Granite+%26+Stone',
    },
    {
      name: 'Cheesebread Bakery Café',
      url: 'https://www.brcapecod.com',
      description: 'Brazilian bakery-café with menu, catering services, and location information',
      tech: ['Web Design', 'Brand Integration'],
      image: 'https://via.placeholder.com/800x450/1e293b/ffffff?text=Cheesebread+Bakery+Café',
    },
    {
      name: 'Roberts Landscape Construction',
      url: 'https://roberts-ldc.com',
      description: 'Landscape and hardscape company showcasing premium outdoor projects',
      tech: ['Portfolio Site', 'Visual Design'],
      image: 'https://via.placeholder.com/800x450/1e293b/ffffff?text=Roberts+Landscape+Construction',
    },
  ]

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Selected Work</h2>
          <p className="text-xl text-slate-400">
            Websites and digital solutions delivered
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors overflow-hidden"
            >
              {/* Screenshot */}
              <div className="aspect-video bg-slate-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-semibold text-xl mb-2">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Visit Site Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio

