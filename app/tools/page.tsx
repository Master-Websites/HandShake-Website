import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Free LinkedIn Tools — Outreach Calculator, Profile Score & More',
  description:
    'Free LinkedIn tools to optimize your outreach. Generate connection requests, calculate outreach ROI, and score your LinkedIn profile — all free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools',
  },
  openGraph: {
    title: 'Free LinkedIn Tools — Outreach Calculator, Profile Score & More',
    description:
      'Free LinkedIn tools to optimize your outreach. Generate connection requests, calculate outreach ROI, and score your LinkedIn profile.',
    url: 'https://byhandshake.com/tools',
    type: 'website',
  },
}

const tools = [
  {
    title: 'LinkedIn Connection Request Generator',
    description:
      'Generate 5 personalized connection request templates under 300 characters. Just fill in your details and get copy-ready messages instantly.',
    href: '/tools/linkedin-connection-request-generator',
    icon: 'solar:chat-round-dots-bold-duotone',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'LinkedIn Outreach ROI Calculator',
    description:
      'Calculate your projected pipeline value, meetings booked, and revenue from LinkedIn outreach based on your current metrics.',
    href: '/tools/linkedin-outreach-roi-calculator',
    icon: 'solar:calculator-bold-duotone',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'LinkedIn Profile Optimization Score',
    description:
      'Score your LinkedIn profile out of 100 with our checklist-based scorer. Get personalized recommendations to improve your profile.',
    href: '/tools/linkedin-profile-score',
    icon: 'solar:chart-bold-duotone',
    color: 'from-green-500 to-emerald-500',
  },
]

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free LinkedIn Tools',
  description:
    'Free LinkedIn tools to optimize your outreach strategy — connection request generator, ROI calculator, and profile scorer.',
  url: 'https://byhandshake.com/tools',
  mainEntity: tools.map((tool) => ({
    '@type': 'WebApplication',
    name: tool.title,
    url: `https://byhandshake.com${tool.href}`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  })),
}

export default function ToolsHub() {
  return (
    <>
      <JsonLd data={collectionSchema} />
      <BackgroundEffect />
      <Navbar />
      <main className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium font-geist mb-6">
              <Icon icon="solar:tools-bold-duotone" className="w-3.5 h-3.5" />
              Free Tools
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              Free LinkedIn Outreach Tools
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Optimize your LinkedIn outreach strategy with our free tools. No signup required — just actionable results.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both]">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative rounded-2xl border border-gray-800 bg-gray-900/50 p-6 sm:p-8 backdrop-blur-sm hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} mb-5`}
                >
                  <Icon icon={tool.icon} className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-lg font-jakarta font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {tool.title}
                </h2>
                <p className="text-sm text-gray-400 font-geist leading-relaxed mb-4">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 font-geist group-hover:gap-2.5 transition-all">
                  Try it free
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
