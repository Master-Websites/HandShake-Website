import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { JsonLd } from '@/components/JsonLd'
import { getTemplateBySlug, getAllTemplateSlugs } from '@/lib/seo-pages'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllTemplateSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = getTemplateBySlug(slug)
  if (!page) return {}

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://byhandshake.com/templates/${page.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://byhandshake.com/templates/${page.slug}`,
      title: `${page.title} | Handshake`,
      description: page.description,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: ['/og-image.jpg'],
    },
  }
}

export default async function TemplateDetailPage({ params }: PageProps) {
  const { slug } = await params
  const page = getTemplateBySlug(slug)
  if (!page) notFound()

  const { sections, faqs, relatedPages } = page

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: page.title,
    numberOfItems: sections.templates.length,
    itemListElement: sections.templates.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      description: t.whenToUse,
    })),
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://byhandshake.com' },
      { '@type': 'ListItem', position: 2, name: 'Templates', item: 'https://byhandshake.com/templates' },
      { '@type': 'ListItem', position: 3, name: page.title, item: `https://byhandshake.com/templates/${page.slug}` },
    ],
  }

  return (
    <>
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <JsonLd data={itemListSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-8 sm:pb-12 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <Link
                href="/templates"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-400 font-geist transition-colors duration-200 mb-8"
              >
                <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
                All Templates
              </Link>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 mb-6">
                <Icon icon="solar:document-bold-duotone" className="w-3 h-3 text-purple-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-purple-300">
                  Copy-Paste Templates
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] font-jakarta font-medium mb-5">
                {page.title.replace(/ \(\d{4}\)/, '')}
              </h1>
              <p className="text-base sm:text-lg text-gray-400 font-geist leading-relaxed mb-4">
                {page.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500 font-geist">
                <span>{sections.templates.length} templates</span>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>Last updated: {new Date(page.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-white/5 max-w-3xl mx-auto" />

        {/* Content */}
        <article className="py-10 sm:py-14 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

            {/* Intro */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-6">
                {sections.intro.title}
              </h2>
              {sections.intro.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-300 font-geist leading-relaxed mb-6">{para}</p>
              ))}
            </section>

            {/* Templates */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-8">
                {sections.templates.length} Proven Templates
              </h2>
              <div className="space-y-8">
                {sections.templates.map((template, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden">
                    <div className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold font-jakarta text-xs">
                          {i + 1}
                        </span>
                        <h3 className="text-base font-medium text-white font-jakarta">{template.name}</h3>
                      </div>
                      <span className="text-xs font-medium text-blue-300 font-geist bg-blue-500/10 border border-blue-500/20 rounded-full px-2.5 py-0.5">
                        {template.expectedPerformance}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 mb-5">
                        <p className="text-sm sm:text-base text-gray-200 font-geist leading-relaxed whitespace-pre-wrap italic">
                          &ldquo;{template.text}&rdquo;
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-medium text-gray-500 font-geist uppercase tracking-wide mb-1.5">When to use</p>
                          <p className="text-sm text-gray-300 font-geist leading-relaxed">{template.whenToUse}</p>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-gray-500 font-geist uppercase tracking-wide mb-1.5">Personalization tips</p>
                          <p className="text-sm text-gray-300 font-geist leading-relaxed">{template.personalizationTips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Customize */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-6">
                {sections.customization.title}
              </h2>
              {sections.customization.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-300 font-geist leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formatBold(para) }} />
              ))}
            </section>

            {/* Sending at Scale */}
            <section className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-8">
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-6">
                {sections.sendingAtScale.title}
              </h2>
              {sections.sendingAtScale.content.split('\n\n').map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-300 font-geist leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formatBold(para) }} />
              ))}
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                    <h3 className="text-lg font-medium text-white font-jakarta mb-3">{faq.question}</h3>
                    <p className="text-sm text-gray-300 font-geist leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Pages */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-8">
                Related Resources
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedPages.guides.map((guideSlug) => (
                  <Link
                    key={guideSlug}
                    href={`/guides/${guideSlug}`}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03]"
                  >
                    <span className="text-xs font-medium text-blue-400 font-geist uppercase tracking-wide">Guide</span>
                    <h3 className="text-sm font-medium text-white font-jakarta mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {guideSlug.split('-').slice(2).join(' ').replace(/(^|\s)\S/g, (t) => t.toUpperCase())}
                    </h3>
                  </Link>
                ))}
                {relatedPages.templates.map((templateSlug) => (
                  <Link
                    key={templateSlug}
                    href={`/templates/${templateSlug}`}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03]"
                  >
                    <span className="text-xs font-medium text-purple-400 font-geist uppercase tracking-wide">Templates</span>
                    <h3 className="text-sm font-medium text-white font-jakarta mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {templateSlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </h3>
                  </Link>
                ))}
                {relatedPages.comparisons.map((compSlug) => (
                  <Link
                    key={compSlug}
                    href={`/compare/${compSlug}`}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03]"
                  >
                    <span className="text-xs font-medium text-emerald-400 font-geist uppercase tracking-wide">Comparison</span>
                    <h3 className="text-sm font-medium text-white font-jakarta mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {compSlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-4">
                Send These Templates at Scale
              </h2>
              <p className="text-base text-gray-400 font-geist mb-8 max-w-xl mx-auto">
                Deploy these templates across multiple LinkedIn accounts with Handshake. Multi-sender rotation, A/B testing, and a unified inbox — all included.
              </p>
              <a
                href="https://app.byhandshake.com/signup"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 uppercase tracking-wide group"
              >
                Start Free Trial
                <Icon icon="solar:arrow-right-up-bold-duotone" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function formatBold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-white">$1</strong>')
}
