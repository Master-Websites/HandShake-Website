import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { JsonLd } from '@/components/JsonLd'
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://byhandshake.com/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://byhandshake.com/blog/${post.slug}`,
      title: `${post.title} | Handshake`,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/og-image.jpg'],
    },
  }
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl sm:text-4xl font-medium text-white tracking-tight font-jakarta mt-10 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight font-jakarta mt-8 mb-3" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg sm:text-xl font-medium text-white tracking-tight font-jakarta mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-base sm:text-lg text-gray-300 font-geist leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-gray-300 font-geist text-base sm:text-lg leading-relaxed" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-gray-300 font-geist text-base sm:text-lg leading-relaxed" {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className="text-gray-300 font-geist" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-blue-400 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors duration-200" {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-blue-500/40 pl-6 my-6 text-gray-400 italic font-geist" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-white/5 border border-white/10 rounded px-1.5 py-0.5 text-sm font-mono text-blue-300" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-6 overflow-x-auto mb-6 text-sm" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-10" />,
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 rounded-lg border border-gray-700">
      <table className="w-full text-sm text-left text-gray-300 font-geist" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="text-xs uppercase bg-gray-800 text-gray-400" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-gray-700" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 font-semibold text-white" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3" {...props} />
  ),
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://byhandshake.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Handshake',
      url: 'https://byhandshake.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://byhandshake.com/logos/handshake-logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://byhandshake.com/blog/${post.slug}`,
    },
    image: 'https://byhandshake.com/og-image.jpg',
    wordCount: post.content.trim().split(/\s+/).length,
    keywords: post.tags.join(', '),
  }

  return (
    <>
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <JsonLd data={articleSchema} />
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-8 sm:pb-12 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-400 font-geist transition-colors duration-200 mb-8"
              >
                <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
                Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-geist text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="w-1 h-1 rounded-full bg-gray-700" />
                <span>{post.readingTime} min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] font-jakarta font-medium mb-5">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-400 font-geist leading-relaxed mb-6">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-300 font-geist"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm font-bold font-jakarta">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-white font-geist">{post.author}</p>
                  <p className="text-xs text-gray-500 font-geist">Handshake</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-white/5 max-w-3xl mx-auto" />

        {/* Article body */}
        <article className="py-10 sm:py-14 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-8 sm:p-10 text-center">
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-4">
                Ready to Scale Your LinkedIn Outreach?
              </h2>
              <p className="text-base text-gray-400 font-geist mb-8 max-w-xl mx-auto">
                Handshake gives you multi-sender rotation, unlimited workspaces, and a unified inbox — everything you need to build a predictable B2B pipeline.
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

        {/* Related posts */}
        {related.length > 0 && (
          <section className="pb-20 sm:pb-28 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-jakarta mb-8 text-center">
                Keep Reading
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03]"
                  >
                    <div className="flex items-center gap-3 mb-3 text-xs font-geist text-gray-500">
                      <time dateTime={rel.date}>
                        {new Date(rel.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                      <span className="w-1 h-1 rounded-full bg-gray-700" />
                      <span>{rel.readingTime} min</span>
                    </div>
                    <h3 className="text-lg font-medium text-white tracking-tight font-jakarta mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-geist line-clamp-2">{rel.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
