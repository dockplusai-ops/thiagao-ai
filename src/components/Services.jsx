import { Brain, Workflow, Users, Code, MessageSquare, Briefcase } from 'lucide-react'

function Services() {
  const services = [
    {
      icon: Brain,
      name: 'AI Integration & Orchestration',
      description: 'Seamless integration of AI technologies into existing enterprise systems. Strategic orchestration of AI workflows.',
    },
    {
      icon: Workflow,
      name: 'Enterprise Automation (n8n)',
      description: 'Custom automation workflows using n8n. Streamline business processes and reduce manual overhead.',
    },
    {
      icon: Users,
      name: 'CRM Development & Integration',
      description: 'Custom CRM solutions tailored to your business. Integration with existing tools and platforms.',
    },
    {
      icon: Code,
      name: 'Landing Pages & Web Development',
      description: 'Professional web presence with optimized landing pages. Modern, responsive, and conversion-focused.',
    },
    {
      icon: MessageSquare,
      name: 'Marketing Automation (WhatsApp/Telegram)',
      description: 'Automated marketing campaigns via messaging platforms. Engage customers through WhatsApp and Telegram.',
    },
    {
      icon: Briefcase,
      name: 'Business Strategy & Consulting',
      description: 'Strategic guidance for business growth. Technology consulting aligned with your business objectives.',
    },
  ]

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl font-semibold text-white mb-12">Core Services</h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="bg-slate-900 border border-slate-800 p-6 hover:border-blue-600 transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {service.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services

