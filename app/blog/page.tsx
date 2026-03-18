import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'LinkedIn outreach strategies, multi-sender automation tips, and B2B growth playbooks from the Handshake team.',
  alternates: {
    canonical: 'https://byhandshake.com/blog',
  },
  openGraph: {
    url: 'https://byhandshake.com/blog',
    title: 'Blog | Handshake',
    description:
      'LinkedIn outreach strategies, multi-sender automation tips, and B2B growth playbooks from the Handshake team.',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

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
                <Icon icon="solar:pen-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
                  Blog
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
                Outreach Playbooks &<br className="hidden sm:block" />
                <span className="text-blue-500">Growth Strategies</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
                Actionable guides on LinkedIn automation, multi-sender rotation, and scaling B2B pipelines — straight from the team building it.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-28 md:pb-32 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500 font-geist">No posts yet. Check back soon.</p>
            ) : (
              <div className="grid gap-6 sm:gap-8">
                {posts.map((post, idx) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block [animation:fadeSlideIn_0.8s_ease-out_both] animate-on-scroll"
                    style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                  >
                    <article className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/[0.03] hover:shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-geist text-gray-500">
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
                      <h2 className="text-xl sm:text-2xl font-medium text-white tracking-tight font-jakarta mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-400 font-geist leading-relaxed mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-300 font-geist"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 font-geist group-hover:gap-2.5 transition-all duration-300">
                          Read more
                          <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                        </span>
                      </div>
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
