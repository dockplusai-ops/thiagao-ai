import Terminal from './Terminal'

function Hero() {
  const photoUrl = 'https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762042597/gemini-2.5-flash-image_Create_a_realistic_professional_portrait_of_me_sitting_at_an_office_desk_with_a_-0_hqdm4c.jpg'

  return (
    <section className="relative bg-slate-950 min-h-screen flex items-center pt-20">
      {/* Subtle texture pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content - 60% */}
          <div className="lg:col-span-3 space-y-6">
            {/* Small Label */}
            <div className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              AI SOLUTIONS & ENTERPRISE AUTOMATION
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Thiago Roberts
            </h1>

            {/* Title */}
            <div className="text-blue-600 text-2xl md:text-3xl font-semibold">
              THIAGAO A.I
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Transforming enterprises through intelligent automation and AI integration
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="px-8 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          {/* Right Side - 40% */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-end space-y-6">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={photoUrl}
                alt="Thiago Roberts - Enterprise AI Solutions Specialist"
                className="w-full h-auto border border-slate-700 object-cover rounded-sm"
              />
            </div>
            {/* Terminal Component */}
            <div className="w-full max-w-md lg:max-w-lg">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

