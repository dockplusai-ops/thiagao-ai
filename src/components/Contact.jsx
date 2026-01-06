import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectType: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
    }, 1500)
  }

  return (
    <div className="section-container relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-pixel mb-6 glow-text-blue">
            TRANSMIT_SIGNAL
          </h2>
          <p className="font-terminal text-2xl text-blue-300/70 tracking-widest">
            ESTABLISH_CONNECTION_WITH_CORE
          </p>
        </div>

        <div className="pixel-border bg-black/60 p-8 md:p-12 relative overflow-hidden">
          {/* Background grid for form */}
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(var(--neon-blue) 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

          {isSuccess ? (
            <div className="text-center py-12 space-y-6 relative z-10">
              <div className="text-blue-500 font-pixel text-4xl animate-bounce">OK!</div>
              <h3 className="font-pixel text-xl text-white">MESSAGE_RECEIVED</h3>
              <p className="font-terminal text-2xl text-slate-400">YOUR_SIGNAL_HAS_BEEN_LOGGED_AND_QUEUED.</p>
              <button
                onClick={() => setIsSuccess(false)}
                className="btn-8bit mt-8"
              >
                RETURN_TO_TERMINAL
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="font-pixel text-[10px] text-blue-400 block tracking-widest">IDENTIFIER_NAME</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-black border-2 border-slate-800 text-blue-400 font-terminal text-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ENTER_NAME"
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-pixel text-[10px] text-blue-400 block tracking-widest">COMMS_ADDRESS</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-black border-2 border-slate-800 text-blue-400 font-terminal text-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="ENTER_EMAIL"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-pixel text-[10px] text-blue-400 block tracking-widest">MISSION_DETAILS</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-black border-2 border-slate-800 text-blue-400 font-terminal text-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="DESCRIBE_OBJECTIVES"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-8bit w-full !py-4"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND_SIGNAL'}
                </button>
              </div>

              <div className="text-center font-terminal text-slate-600 text-sm italic">
                * ALL SIGNALS ARE ENCRYPTED VIA BIT-7 PROTOCOLS
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
