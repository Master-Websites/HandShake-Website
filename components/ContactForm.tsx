'use client'

import { useState } from 'react'
import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

export function ContactForm() {
  const { handleMouseMove } = useSpotlight()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: 'general',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="group spotlight-card overflow-hidden relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 sm:p-10 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            {/* Spotlight Effects */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 40%)',
                zIndex: 1,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px',
                zIndex: 50,
              }}
            />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white font-jakarta mb-2">Send us a message</h2>
              <p className="text-sm sm:text-base text-gray-400 font-geist mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mb-4">
                    <Icon icon="mdi:check" className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-jakarta mb-2">Message sent!</h3>
                  <p className="text-gray-400 font-geist text-center">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 font-geist mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.name ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white font-geist focus:outline-none focus:border-blue-500 transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-400 font-geist">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 font-geist mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.email ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white font-geist focus:outline-none focus:border-blue-500 transition-colors`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-400 font-geist">{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 font-geist mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white font-geist focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 font-geist mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white font-geist focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 font-geist mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white font-geist focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="sales">Sales</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="billing">Billing</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 font-geist mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-black/50 border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } rounded-xl text-white font-geist focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-400 font-geist">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 text-white text-sm font-semibold rounded-full shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 font-geist uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon icon="mdi:loading" className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon icon="mdi:send" className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info Illustration */}
          <div className="space-y-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
            <div
              className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:border-white/10"
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 40%)',
                  zIndex: 1,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                  <Icon icon="mdi:email" className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white font-jakarta mb-2">Email Us</h3>
                <p className="text-gray-400 font-geist mb-4 text-sm">
                  Send us an email anytime and we'll get back to you within 24 hours.
                </p>
                <a
                  href="mailto:hello@handshake.com"
                  className="text-blue-400 hover:text-blue-300 font-geist font-semibold transition-colors inline-flex items-center gap-2"
                >
                  hello@handshake.com
                  <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div
              className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:border-white/10"
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.06), transparent 40%)',
                  zIndex: 1,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                  <Icon icon="mdi:clock" className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white font-jakarta mb-2">Support Hours</h3>
                <p className="text-gray-400 font-geist mb-4 text-sm">
                  Our team is available during business hours to assist you.
                </p>
                <div className="space-y-2 text-sm font-geist">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Weekend</span>
                    <span className="text-white font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:border-white/10"
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(16,185,129,0.06), transparent 40%)',
                  zIndex: 1,
                }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                  <Icon icon="mdi:chat" className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white font-jakarta mb-2">Live Chat</h3>
                <p className="text-gray-400 font-geist mb-4 text-sm">
                  Get instant answers from our support team through live chat.
                </p>
                <button className="text-emerald-400 hover:text-emerald-300 font-geist font-semibold transition-colors inline-flex items-center gap-2">
                  Start Chat
                  <Icon icon="mdi:arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

