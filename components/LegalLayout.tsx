'use client'

import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  sections: {
    id: string
    title: string
    content: React.ReactNode
  }[]
}

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:col-span-3 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-32">
              <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-white font-geist mb-4 uppercase tracking-wide">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-geist transition-colors ${
                        activeSection === section.id
                          ? 'bg-blue-500/10 text-blue-400 font-medium'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>

                {/* Print Button */}
                <button
                  onClick={() => window.print()}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-geist text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <Icon icon="mdi:printer" className="w-4 h-4" />
                  Print Document
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-9">
            <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 sm:p-12">
              {/* Header */}
              <div className="mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-jakarta mb-4">
                  {title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-geist">
                  <Icon icon="mdi:calendar" className="w-4 h-4" />
                  <span>Last Updated: {lastUpdated}</span>
                </div>
              </div>

              {/* Sections */}
              <div className="prose prose-invert max-w-none">
                {sections.map((section, idx) => (
                  <section key={section.id} id={section.id} className="mb-12 scroll-mt-32">
                    <h2 className="text-2xl font-semibold text-white font-jakarta mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-bold">
                        {idx + 1}
                      </span>
                      {section.title}
                    </h2>
                    <div className="text-gray-400 font-geist leading-relaxed space-y-4">
                      {section.content}
                    </div>
                  </section>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="text-xl font-semibold text-white font-jakarta mb-4">Questions?</h3>
                <p className="text-gray-400 font-geist mb-4">
                  If you have any questions about this policy, please contact us:
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400 font-geist">
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:legal@handshake.com" className="text-blue-400 hover:text-blue-300">
                      legal@handshake.com
                    </a>
                  </p>
                  <p className="text-gray-400 font-geist">
                    <strong className="text-white">Address:</strong> 123 Market Street, San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

