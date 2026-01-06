import { Terminal, Globe, Cpu, Layout, Share2, Code2, Gamepad2 } from 'lucide-react'

function DockPlus() {
  const services = [
    {
      icon: Cpu,
      title: 'AI_INTEGRATION',
      tech: 'Python / LLMs / Agents',
      desc: 'Building intelligent workflows and autonomous agents for enterprise efficiency.'
    },
    {
      icon: Layout,
      title: 'PREMIUM_SITES',
      tech: 'React / Next.js / Vite',
      desc: 'Architecting high-performance websites and landing pages with cutting-edge design.'
    },
    {
      icon: Share2,
      title: 'MARKETING_AUTO',
      tech: 'n8n / API / CRMs',
      desc: 'Scaling communication via WhatsApp, Telegram, and automated email pipelines.'
    },
    {
      icon: Gamepad2,
      title: 'GAME_DEV',
      tech: 'Pixel Art / Canvas',
      desc: 'Creating interactive digital experiences and gamified marketing solutions.'
    }
  ]

  return (
    <div className="section-container relative z-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
        {/* Left: Brand Identity */}
        <div className="lg:w-1/3 space-y-8 sticky top-32">
          <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-pixel text-[10px]">
            CORE_FOCUS: DOCKPLUSAI.DEV
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-white leading-tight">
            DOCKPLUS <br />
            <span className="text-blue-500">AI SOLUTIONS</span>
          </h2>

          <p className="font-terminal text-lg md:text-xl lg:text-2xl text-slate-400 leading-relaxed">
            We are operating at full speed in the AI world. DockPlus is a global hardware and software integration firm
            specializing in automation and future-tech.
          </p>

          <div className="flex items-center space-x-4 text-blue-500">
            <Globe className="w-5 h-5 md:w-6 md:h-6 animate-spin-slow" />
            <span className="font-terminal text-base md:text-xl tracking-widest">GLOBAL_OPERATIONS_ACTIVE</span>
          </div>

          <div className="pt-8">
            <a
              href="https://dockplusai.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-8bit !bg-blue-600 !text-white"
            >
              VISIT_HQ_PORTAL
            </a>
          </div>
        </div>

        {/* Right: Technical Capabilities */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="pixel-border border-blue-900/20 bg-slate-950/50 p-6 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 bg-blue-900/20 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-black transition-all">
                <s.icon size={24} />
              </div>
              <h3 className="font-pixel text-sm text-blue-400 mb-4">{s.title}</h3>
              <p className="font-terminal text-base md:text-lg text-slate-400 mb-6">{s.desc}</p>
              <div className="font-terminal text-blue-500/40 text-sm border-t border-blue-900/10 pt-4">
                STACK: {s.tech}
              </div>
            </div>
          ))}

          {/* Specialization List */}
          <div className="md:col-span-2 mt-8 p-8 border-2 border-blue-500/10 bg-blue-500/5">
            <div className="font-pixel text-[8px] text-blue-500/50 mb-6 tracking-widest uppercase">DOMAIN_EXPERTISE</div>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {['AI_ENGINEERING', 'PYTHON_ARCH', 'UI/UX_GAMIFICATION', 'IT_AUTOMATION', 'LANDING_PAGES', 'MARKETING_SYSTEMS'].map(tag => (
                <span key={tag} className="font-terminal text-base md:text-lg lg:text-xl text-slate-200 border-b border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DockPlus
