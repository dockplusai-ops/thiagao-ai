import { Database, Workflow, MessageSquare, Link } from 'lucide-react'

function DockPlus() {
  const solutions = [
    {
      icon: Database,
      title: 'AI-Powered CRM Systems',
      description: 'Custom CRM solutions enhanced with AI capabilities. Intelligent customer relationship management that adapts to your business needs and provides actionable insights.',
    },
    {
      icon: Workflow,
      title: 'Multi-Agent Automation',
      description: 'Advanced automation systems using multiple AI agents working in coordination. Streamline complex workflows and reduce operational overhead across your organization.',
    },
    {
      icon: MessageSquare,
      title: 'Marketing Automation (WhatsApp/Telegram)',
      description: 'Automated marketing campaigns delivered through messaging platforms. Engage customers directly via WhatsApp and Telegram with personalized, timely communications.',
    },
    {
      icon: Link,
      title: 'Enterprise Integration (n8n, APIs, Google Sheets)',
      description: 'Seamless integration of enterprise systems and tools. Connect n8n workflows, APIs, and Google Sheets to create unified business processes.',
    },
  ]

  const technologies = [
    'ChatGPT',
    'Claude',
    'n8n',
    'ManyChat',
    'Supabase',
    'Telegram API',
    'GoHighLevel',
    'Google Workspace',
    'Cursor',
    'Windsurf',
  ]

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Dock Plus AI Solutions
          </h2>
          <p className="text-xl text-slate-400">
            Enterprise automation and AI integration for modern businesses
          </p>
        </div>

        {/* Overview */}
        <div className="mb-16">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Dock Plus delivers enterprise-grade AI solutions and automation platforms designed to transform how modern businesses operate. We specialize in creating intelligent systems that integrate seamlessly with existing workflows, driving measurable results and operational excellence.
            </p>
            <p>
              Our focus spans AI solutions, marketing automation, and enterprise integration, helping organizations leverage cutting-edge technology to achieve their strategic objectives. From AI-powered CRM systems to multi-agent automation workflows, we build solutions that deliver real business value.
            </p>
            <p>
              With a proven track record of successful implementations, Dock Plus transforms businesses through intelligent automation, reducing manual overhead while increasing efficiency and customer engagement. Our solutions are built for scale, reliability, and long-term success.
            </p>
          </div>
        </div>

        {/* Core Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8">Core Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => {
              const Icon = solution.icon
              return (
                <div
                  key={solution.title}
                  className="bg-slate-900 border border-slate-800 p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold text-lg mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-6">Technology Stack</h3>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-slate-900 border border-slate-800 text-blue-600 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <div className="border-t border-slate-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-slate-300 text-lg">Active Projects</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white mb-2">Industries Served</div>
              <div className="text-slate-400">Construction, Hospitality, Tech</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DockPlus

