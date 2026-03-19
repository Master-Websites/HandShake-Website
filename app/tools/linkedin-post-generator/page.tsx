'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
type Tone = 'professional' | 'casual' | 'bold'
type CTAType = 'question' | 'link' | 'comment'

/* ───────── Post generators ───────── */
function generatePosts(
  topic: string,
  points: string[],
  tone: Tone,
  ctaType: CTAType
): string[] {
  const validPoints = points.filter((p) => p.trim())
  const bulletBlock = validPoints.map((p) => `→ ${p}`).join('\n')

  const ctas: Record<CTAType, string[]> = {
    question: [
      `What's your take on ${topic.toLowerCase()}? Drop your thoughts below 👇`,
      `Agree or disagree? I'd love to hear your perspective on this.`,
      `What would you add to this list? Comment below.`,
    ],
    link: [
      `Want to dive deeper? Link in comments 👇`,
      `I wrote more about this — check the link in comments.`,
      `Full breakdown in the comments. Worth a read.`,
    ],
    comment: [
      `Like this? ♻️ Repost to help others. Follow me for more on ${topic.toLowerCase()}.`,
      `Found this useful? Save it for later and share with your network.`,
      `If this resonated, repost it. Someone in your network needs to see this.`,
    ],
  }

  const posts: string[] = []

  if (tone === 'professional') {
    posts.push(
      `${topic} — here's what most people get wrong.\n\nAfter working in this space, I've noticed a pattern:\n\n${bulletBlock}\n\nThe key takeaway? Execution beats theory every time.\n\n${ctas[ctaType][0]}`
    )
    posts.push(
      `Let's talk about ${topic.toLowerCase()}.\n\nMost professionals overlook these fundamentals:\n\n${bulletBlock}\n\nMaster these, and you're already ahead of 90% of your peers.\n\n${ctas[ctaType][1]}`
    )
    posts.push(
      `I've been thinking a lot about ${topic.toLowerCase()} lately.\n\nHere are 3 insights that changed my approach:\n\n${bulletBlock}\n\nThe best time to act on this was yesterday. The second best time is today.\n\n${ctas[ctaType][2]}`
    )
  } else if (tone === 'casual') {
    posts.push(
      `Hot take: most people overthink ${topic.toLowerCase()}.\n\nHere's what actually works:\n\n${bulletBlock}\n\nSimple? Yes. Easy? No. But that's the point.\n\n${ctas[ctaType][0]}`
    )
    posts.push(
      `Can we talk about ${topic.toLowerCase()} for a sec?\n\nI keep seeing the same mistakes over and over.\n\nSo here are 3 things I wish someone told me earlier:\n\n${bulletBlock}\n\nHonestly, #2 was a game-changer for me.\n\n${ctas[ctaType][1]}`
    )
    posts.push(
      `3 things about ${topic.toLowerCase()} I learned the hard way 👇\n\n${bulletBlock}\n\nTook me way too long to figure these out. Don't make the same mistake.\n\n${ctas[ctaType][2]}`
    )
  } else {
    // bold
    posts.push(
      `UNPOPULAR OPINION: ${topic} is broken.\n\nHere's the truth nobody's talking about:\n\n${bulletBlock}\n\nYou can disagree. But the data doesn't lie.\n\n${ctas[ctaType][0]}`
    )
    posts.push(
      `Stop doing ${topic.toLowerCase()} the old way.\n\nSeriously. It's 2025.\n\n${bulletBlock}\n\nThe playbook has changed. Adapt or get left behind.\n\n${ctas[ctaType][1]}`
    )
    posts.push(
      `I'm going to say something controversial about ${topic.toLowerCase()}.\n\nReady?\n\n${bulletBlock}\n\nMost people won't act on this. The ones who do? They'll win.\n\n${ctas[ctaType][2]}`
    )
  }

  return posts
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What makes a LinkedIn post go viral?',
    a: 'Viral LinkedIn posts typically have a strong hook in the first 2 lines, use short paragraphs, include a personal story or data point, and end with a clear call-to-action. Engagement in the first 60 minutes heavily impacts reach.',
  },
  {
    q: 'How long should a LinkedIn post be?',
    a: 'LinkedIn posts can be up to 3,000 characters. Posts between 1,200–1,800 characters tend to perform best — long enough to provide value, short enough to keep attention. Always front-load the most important points.',
  },
  {
    q: 'What is the best time to post on LinkedIn?',
    a: 'Generally, Tuesday through Thursday between 8–10 AM in your target audience\'s timezone. However, consistency matters more than perfect timing. Post when your audience is most active.',
  },
  {
    q: 'Should I use hashtags on LinkedIn?',
    a: 'Yes, but sparingly. Use 3–5 relevant hashtags at the end of your post. Mix broad hashtags (#Leadership) with niche ones (#B2BSaaSSales) to maximize discoverability without looking spammy.',
  },
  {
    q: 'How often should I post on LinkedIn?',
    a: 'For maximum growth, aim for 3–5 posts per week. Consistency beats frequency — it\'s better to post 3 quality posts weekly than 7 mediocre ones. Use tools like Handshake to schedule and manage multiple profiles.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:fire-bold-duotone', text: 'Start with a hook — your first 2 lines determine if people click "see more"' },
  { icon: 'solar:document-text-bold-duotone', text: 'Use short paragraphs (1–2 lines) with white space between them' },
  { icon: 'solar:users-group-rounded-bold-duotone', text: 'Write for a specific person, not "everyone"' },
  { icon: 'solar:graph-up-bold-duotone', text: 'Include data, numbers, or specific results when possible' },
  { icon: 'solar:chat-round-dots-bold-duotone', text: 'End every post with a question or clear CTA to drive comments' },
  { icon: 'solar:clock-circle-bold-duotone', text: 'Reply to every comment within the first hour to boost reach' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Post Generator',
    description:
      'Free tool to generate 3 high-performing LinkedIn post variations from your topic and key points.',
    url: 'https://byhandshake.com/tools/linkedin-post-generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
]

/* ───────── Page component ───────── */
export default function LinkedInPostGenerator() {
  const [topic, setTopic] = useState('')
  const [points, setPoints] = useState(['', '', ''])
  const [tone, setTone] = useState<Tone>('professional')
  const [ctaType, setCtaType] = useState<CTAType>('question')
  const [posts, setPosts] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = topic && points.some((p) => p.trim())

  function handleGenerate() {
    if (!canGenerate) return
    setPosts(generatePosts(topic, points, tone, ctaType))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  function updatePoint(index: number, value: string) {
    const updated = [...points]
    updated[index] = value
    setPoints(updated)
  }

  const tones: { value: Tone; label: string; icon: string }[] = [
    { value: 'professional', label: 'Professional', icon: 'solar:briefcase-bold-duotone' },
    { value: 'casual', label: 'Casual', icon: 'solar:chat-square-like-bold-duotone' },
    { value: 'bold', label: 'Bold', icon: 'solar:fire-bold-duotone' },
  ]

  const ctaTypes: { value: CTAType; label: string }[] = [
    { value: 'question', label: 'Ask a Question' },
    { value: 'link', label: 'Link in Comments' },
    { value: 'comment', label: 'Repost / Share' },
  ]

  return (
    <>
      {pageSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <BackgroundEffect />
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* ── Header ── */}
          <div className="text-center mb-10 sm:mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium font-geist mb-6">
              <Icon icon="solar:pen-new-round-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Post Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 3 high-performing LinkedIn post variations from your topic and key points. Pick your tone, choose a CTA — done.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. Cold outreach strategies for B2B SaaS"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Key Points</label>
                <div className="space-y-3">
                  {points.map((p, i) => (
                    <input
                      key={i}
                      type="text"
                      value={p}
                      onChange={(e) => updatePoint(i, e.target.value)}
                      placeholder={`Key point ${i + 1}`}
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Tone</label>
                  <div className="flex gap-2">
                    {tones.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => setTone(t.value)}
                        className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                          tone === t.value
                            ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                            : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                        }`}
                      >
                        <Icon icon={t.icon} className="w-3.5 h-3.5" />
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">CTA Type</label>
                  <select
                    value={ctaType}
                    onChange={(e) => setCtaType(e.target.value as CTAType)}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    {ctaTypes.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_15px_rgba(0,123,255,0.4)]"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4" />
              Generate 3 Posts
            </button>
          </div>

          {/* ── Results ── */}
          {posts.length > 0 && (
            <div className="space-y-4 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white">Your LinkedIn Posts</h2>
              {posts.map((post, i) => (
                <div
                  key={i}
                  className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-5 group hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-gray-300 font-geist leading-relaxed flex-1 whitespace-pre-line">
                      {post}
                    </p>
                    <button
                      onClick={() => handleCopy(post, i)}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                    >
                      <Icon
                        icon={copied === i ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                        className="w-3.5 h-3.5"
                      />
                      {copied === i ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <span
                    className={`block text-right text-xs font-geist mt-2 ${
                      post.length > 3000 ? 'text-red-400' : post.length > 2700 ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    {post.length}/3,000 chars
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Tips for Viral LinkedIn Posts
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {tips.map((tip) => (
                <div
                  key={tip.text}
                  className="flex items-start gap-3 rounded-xl border border-gray-800 bg-gray-900/40 p-4"
                >
                  <Icon icon={tip.icon} className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300 font-geist">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-gray-900/50 p-8 sm:p-12 mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <h2 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-3">
              Post to Multiple LinkedIn Accounts with Handshake
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Schedule and publish LinkedIn posts from multiple accounts simultaneously. Build your brand across your entire team with one dashboard.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Posting — Free
              <Icon icon="solar:arrow-right-up-bold-duotone" className="w-4 h-4" />
            </a>
          </div>

          {/* ── FAQ ── */}
          <div className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/40 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-white font-geist pr-4">{faq.q}</span>
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60 pb-4' : 'max-h-0'}`}
                  >
                    <p className="px-5 text-sm text-gray-400 font-geist leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
