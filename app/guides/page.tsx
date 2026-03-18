import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { getAllGuides } from '@/lib/seo-pages'

export const metadata: Metadata = {
  title: 'LinkedIn Outreach Guides',
  description:
    'Step-by-step guides on LinkedIn automation, multi-sender rotation, prospecting, personalization, and scaling outbound safely.',
  alternates: {
    canonical: 'https://byhandshake.com/guides',
  },
  openGraph: {
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    url: 'https://byhandshake.com/guides',
    title: 'LinkedIn Outreach Guides | Handshake',
    description:
      'Step-by-step guides on LinkedIn automation, multi-sender rotation, prospecting, personalization, and scaling outbound safely.',
  },
}

export default function GuidesPage() {
  const guides = getAllGuides()

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
                <Icon icon="solar:book-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
                  Guides
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
                LinkedIn Outreach<br className="hidden sm:block" />
                <span className="text-blue-500">How-To Guides</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
                Step-by-step guides on everything from setting up multi-sender rotation to personalizing outreach at scale. Practical, no fluff.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28 md:pb-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {guides.length === 0 ? (
              <p className="text-center text-gray-500 font-geist">Guides coming soon.</p>
            ) : (
              <div className="grid gap-6 sm:gap-8">
                {guides.map((guide, idx) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group block [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll"
                    style={{ animationDelay: `${0.1 * idx}s` }}
                  >
                    <article className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                      <h2 className="text-lg sm:text-xl font-medium text-white tracking-tight font-jakarta mb-2 group-hover:text-blue-400 transition-colors duration-300">
                        {guide.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-400 font-geist leading-relaxed mb-3 line-clamp-2">
                        {guide.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 font-geist group-hover:gap-2.5 transition-all duration-300">
                        Read guide
                        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
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
