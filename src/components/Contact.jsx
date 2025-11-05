import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    projectType: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const projectTypes = [
    'AI & Automation',
    'Website Development',
    'Marketing Automation',
    'CRM Integration',
    'Business Consultation',
    'Other',
  ]

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateWhatsApp = (phone) => {
    if (!phone) return true // Optional field
    const re = /^\+1 \d{3}-\d{3}-\d{4}$/
    return re.test(phone)
  }

  const formatWhatsApp = (value) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '')
    
    // Format as +1 xxx-xxx-xxxx
    if (digits.length === 0) return ''
    if (digits.length <= 1) return `+${digits}`
    if (digits.length <= 4) return `+1 ${digits.slice(1)}`
    if (digits.length <= 7) return `+1 ${digits.slice(1, 4)}-${digits.slice(4)}`
    return `+1 ${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7, 11)}`
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'whatsapp') {
      setFormData({ ...formData, [name]: formatWhatsApp(value) })
    } else {
      setFormData({ ...formData, [name]: value })
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.whatsapp && !validateWhatsApp(formData.whatsapp)) {
      newErrors.whatsapp = 'Please enter a valid WhatsApp number (+1 xxx-xxx-xxxx)'
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    const newErrors = { ...errors }

    if (name === 'fullName') {
      if (!value.trim()) {
        newErrors.fullName = 'Full name is required'
      } else if (value.trim().length < 2) {
        newErrors.fullName = 'Full name must be at least 2 characters'
      } else {
        delete newErrors.fullName
      }
    } else if (name === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(value)) {
        newErrors.email = 'Please enter a valid email address'
      } else {
        delete newErrors.email
      }
    } else if (name === 'whatsapp') {
      if (value && !validateWhatsApp(value)) {
        newErrors.whatsapp = 'Please enter a valid WhatsApp number (+1 xxx-xxx-xxxx)'
      } else {
        delete newErrors.whatsapp
      }
    } else if (name === 'projectType') {
      if (!value) {
        newErrors.projectType = 'Please select a project type'
      } else {
        delete newErrors.projectType
      }
    } else if (name === 'message') {
      if (!value.trim()) {
        newErrors.message = 'Message is required'
      } else if (value.trim().length < 10) {
        newErrors.message = 'Message must be at least 10 characters'
      } else {
        delete newErrors.message
      }
    }

    setErrors(newErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setIsSuccess(false)

    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', formData)
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        projectType: '',
        message: '',
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1000)
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-400">
            Tell me about your project and I'll get back to you within 24 hours
          </p>
        </div>

        {/* Success Message */}
            {isSuccess && (
          <div className="mb-6 p-4 bg-green-900/20 border border-green-700 text-green-400 text-sm">
            Thank you! I'll get back to you within 24 hours.
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-slate-400 text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-slate-900 border ${
                errors.fullName ? 'border-red-500' : 'border-slate-800'
              } text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors`}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-slate-400 text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-slate-900 border ${
                errors.email ? 'border-red-500' : 'border-slate-800'
              } text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* WhatsApp Number */}
          <div>
            <label htmlFor="whatsapp" className="block text-slate-400 text-sm font-medium mb-2">
              WhatsApp Number (Optional)
            </label>
            <input
              type="text"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-slate-900 border ${
                errors.whatsapp ? 'border-red-500' : 'border-slate-800'
              } text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors`}
              placeholder="+1 xxx-xxx-xxxx"
              maxLength={17}
            />
            {errors.whatsapp && (
              <p className="mt-1 text-sm text-red-500">{errors.whatsapp}</p>
            )}
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-slate-400 text-sm font-medium mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 bg-slate-900 border ${
                errors.projectType ? 'border-red-500' : 'border-slate-800'
              } text-white focus:outline-none focus:border-blue-600 transition-colors`}
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-500">{errors.projectType}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-slate-400 text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 bg-slate-900 border ${
                errors.message ? 'border-red-500' : 'border-slate-800'
              } text-white placeholder-slate-500 focus:outline-none focus:border-blue-600 transition-colors resize-none`}
              placeholder="Tell me about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

