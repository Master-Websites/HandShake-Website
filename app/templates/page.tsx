import type { Metadata } from 'next'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { TemplatesGrid } from '@/components/TemplatesGrid'

export const metadata: Metadata = {
  title: 'Campaign Templates',
  description:
    'Browse proven LinkedIn outreach templates for lead generation, sales, networking, recruiting, and account-based marketing. Launch campaigns in minutes.',
  alternates: {
    canonical: 'https://byhandshake.com/templates',
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: 'https://byhandshake.com/templates',
    title: 'Campaign Templates | Handshake',
    description:
      'Browse proven LinkedIn outreach templates for lead generation, sales, networking, recruiting, and account-based marketing. Launch campaigns in minutes.',
  },
}

export default function TemplatesPage() {
  return (
    <>
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <main className="flex-grow">
        <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                <Icon icon="solar:document-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">Campaign Templates</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
                Launch Campaigns in<br className="hidden sm:block" /><span className="text-blue-500">Minutes, Not Days</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
                Battle-tested workflows from top-performing outbound teams. Pick a template, customize your messaging, and start booking meetings.
              </p>
            </div>
          </div>
        </section>
        <TemplatesGrid />
        <section className="py-12 sm:py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight font-jakarta mb-6">Can&apos;t Find What You Need?</h2>
              <p className="text-base sm:text-lg text-gray-400 font-geist mb-8 max-w-2xl mx-auto">Build custom workflows from scratch with our visual campaign builder. Or request a template and we&apos;ll build it for you.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://app.byhandshake.com/signup" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide group">
                  Start Building<Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="mailto:templates@byhandshake.com" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] uppercase tracking-wide">
                  Request a Template
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
