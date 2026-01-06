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
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    // TODO: Integrate with email service (EmailJS, Formspree, etc.)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      // Reset form after success
      setFormData({ fullName: '', email: '', projectType: '', message: '' })
      setErrors({})
    }, 1500)
  }

  return (
    <div className="section-container relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-pixel mb-4 md:mb-6 glow-text-blue">
            TRANSMIT_SIGNAL
          </h2>
          <p className="font-terminal text-lg md:text-xl lg:text-2xl text-blue-300/70 tracking-widest">
            ESTABLISH_CONNECTION_WITH_CORE
          </p>
        </div>

        <div className="pixel-border bg-black/60 p-6 md:p-8 lg:p-12 relative overflow-hidden">
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
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label 
                    htmlFor="fullName"
                    className="font-pixel text-[10px] text-blue-400 block tracking-widest"
                  >
                    IDENTIFIER_NAME
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    className={`w-full bg-black border-2 ${
                      errors.fullName ? 'border-red-500' : 'border-slate-800'
                    } text-blue-400 font-terminal text-lg md:text-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="ENTER_NAME"
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value })
                      if (errors.fullName) {
                        setErrors({ ...errors, fullName: '' })
                      }
                    }}
                    aria-invalid={errors.fullName ? 'true' : 'false'}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="font-terminal text-red-400 text-sm" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <label 
                    htmlFor="email"
                    className="font-pixel text-[10px] text-blue-400 block tracking-widest"
                  >
                    COMMS_ADDRESS
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    className={`w-full bg-black border-2 ${
                      errors.email ? 'border-red-500' : 'border-slate-800'
                    } text-blue-400 font-terminal text-lg md:text-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors`}
                    placeholder="ENTER_EMAIL"
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value })
                      if (errors.email) {
                        setErrors({ ...errors, email: '' })
                      }
                    }}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="font-terminal text-red-400 text-sm" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <label 
                  htmlFor="message"
                  className="font-pixel text-[10px] text-blue-400 block tracking-widest"
                >
                  MISSION_DETAILS
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  className={`w-full bg-black border-2 ${
                    errors.message ? 'border-red-500' : 'border-slate-800'
                  } text-blue-400 font-terminal text-lg md:text-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                  placeholder="DESCRIBE_OBJECTIVES"
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    if (errors.message) {
                      setErrors({ ...errors, message: '' })
                    }
                  }}
                  aria-invalid={errors.message ? 'true' : 'false'}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="font-terminal text-red-400 text-sm" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-8bit w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit contact form"
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
