import { ExternalLink } from 'lucide-react'

function Portfolio() {
  const projects = [
    {
      name: 'ALL_GRANITE_AND_STONE',
      url: 'https://allgraniteandstone.com',
      description: 'PREMIUM_STONE_FABRICATION_INTERFACE',
      tech: ['WEB', 'SEO'],
    },
    {
      name: 'CHEESEBREAD_BAKERY',
      url: 'https://www.brcapecod.com',
      description: 'BRAZILIAN_GASTRONOMY_DIGITAL_HOME',
      tech: ['DESIGN', 'BRAND'],
    },
    {
      name: 'ROBERTS_LANDSCAPE',
      url: 'https://roberts-ldc.com',
      description: 'OUTDOOR_ARCHITECTURAL_SHOWCASE',
      tech: ['FULLSTACK', 'VISUAL'],
    },
  ]

  return (
    <div className="section-container relative z-10">
      <div className="flex justify-between items-end mb-16 border-b-2 border-blue-900/40 pb-8">
        <div>
          <h2 className="text-3xl font-pixel text-white mb-2 glow-text-blue">WORK_ARCHIVE</h2>
          <p className="font-terminal text-xl text-slate-400">SELECT_SUCCESSFUL_DEPLOYMENTS</p>
        </div>
        <div className="hidden md:block font-terminal text-blue-500/50 text-right">
          STORAGE: 74% FULL<br />
          SECTOR: 0x82A
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="group pixel-border bg-slate-950 border-slate-700 hover:border-blue-500 transition-colors"
          >
            {/* Visual Placeholder for high-end look */}
            <div className="aspect-video bg-blue-900/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="font-pixel text-[8px] text-blue-500/30">PREVIEW_NOT_AVAILABLE</div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] opacity-40"></div>
              {/* Animated Scanline for each card */}
              <div className="scanline"></div>
            </div>

            <div className="p-6">
              <h3 className="font-pixel text-sm text-white mb-4 group-hover:text-blue-400">
                {project.name}
              </h3>
              <p className="font-terminal text-lg text-slate-500 mb-6 h-12 overflow-hidden">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black border border-blue-900 text-blue-500 font-terminal text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-8bit w-full text-center py-2 px-0 !text-[8px]"
              >
                OPEN_SOURCE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
