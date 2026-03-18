import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { getAllUseCases } from '@/lib/seo-pages'

export const metadata: Metadata = {
  title: 'LinkedIn Automation by Industry',
  description:
    'Discover how teams in 50+ industries use LinkedIn automation to generate leads, book meetings, and grow pipeline with Handshake.',
  alternates: {
    canonical: 'https://byhandshake.com/use-cases',
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: 'https://byhandshake.com/use-cases',
    title: 'LinkedIn Automation by Industry | Handshake',
    description:
      'Discover how teams in 50+ industries use LinkedIn automation to generate leads, book meetings, and grow pipeline with Handshake.',
  },
}

export default function UseCasesPage() {
  const useCases = getAllUseCases()

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
                <Icon icon="solar:buildings-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
                  Use Cases
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
                LinkedIn Automation for<br className="hidden sm:block" />
                <span className="text-blue-500">Every Industry</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
                See how teams in 50+ industries use Handshake to scale LinkedIn outreach, book more meetings, and build predictable pipelines.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28 md:pb-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {useCases.length === 0 ? (
              <p className="text-center text-gray-500 font-geist">Use cases coming soon.</p>
            ) : (
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {useCases.map((uc, idx) => (
                  <Link
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group block [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll"
                    style={{ animationDelay: `${0.05 * idx}s` }}
                  >
                    <article className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)] h-full">
                      <h2 className="text-base sm:text-lg font-medium text-white tracking-tight font-jakarta mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {uc.title}
                      </h2>
                      <p className="text-sm text-gray-400 font-geist leading-relaxed line-clamp-2 mb-3">
                        {uc.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 font-geist group-hover:gap-2.5 transition-all duration-300">
                        Learn more
                        <Icon icon="solar:arrow-right-linear" className="w-3 h-3" />
                      </span>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
