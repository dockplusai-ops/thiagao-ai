function About() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-white mb-12">About</h2>

        {/* Bio Paragraphs */}
        <div className="space-y-6 mb-12">
          <p className="text-slate-300 leading-relaxed">
            Based in Cape Cod, Massachusetts for 21 years
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            Family man: married 14 years, father of three sons (Nathan, Noah, Ethan)
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            Multi-business owner across construction, hospitality, and technology
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            Specialized in AI solutions, automation, and enterprise integration
          </p>
          
          <p className="text-slate-300 leading-relaxed">
            Faith-driven approach to business excellence
          </p>

          <p className="text-slate-300 leading-relaxed">
            Minister of worship and multi-instrumentalist, integrating faith and business values
          </p>
        </div>

        {/* Key Info List */}
        <div className="mb-12">
          <ul className="space-y-3">
            <li className="text-slate-300">
              <span className="text-slate-400">Location:</span> Cape Cod, Massachusetts
            </li>
            <li className="text-slate-300">
              <span className="text-slate-400">Experience:</span> 20+ years entrepreneurship
            </li>
            <li className="text-slate-300">
              <span className="text-slate-400">Focus:</span> AI & Enterprise Automation
            </li>
            <li className="text-slate-300">
              <span className="text-slate-400">Languages:</span> English, Portuguese, Spanish
            </li>
          </ul>
        </div>

        {/* Quote */}
        <div className="border-t border-slate-800 pt-12">
          <blockquote className="text-center text-xl md:text-2xl text-slate-400 leading-relaxed italic">
            "Excellence glorifies purpose. Business is a tool to serve people."
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export default About

