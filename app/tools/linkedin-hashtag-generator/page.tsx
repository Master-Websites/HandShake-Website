'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
type PostType = 'thought-leadership' | 'case-study' | 'tips' | 'question'
type Reach = 'broad' | 'medium' | 'niche'
interface Hashtag { tag: string; reach: Reach; followers: string }

/* ───────── Hashtag pools ───────── */
const hashtagPools: Record<string, Record<Reach, { tag: string; followers: string }[]>> = {
  default: {
    broad: [
      { tag: 'LinkedIn', followers: '35M+' },
      { tag: 'Business', followers: '20M+' },
      { tag: 'Networking', followers: '15M+' },
      { tag: 'Entrepreneurship', followers: '12M+' },
      { tag: 'Marketing', followers: '20M+' },
      { tag: 'Innovation', followers: '10M+' },
      { tag: 'Leadership', followers: '15M+' },
      { tag: 'Growth', followers: '8M+' },
    ],
    medium: [
      { tag: 'ContentMarketing', followers: '2M+' },
      { tag: 'DigitalMarketing', followers: '3M+' },
      { tag: 'PersonalBranding', followers: '1.5M+' },
      { tag: 'StartupLife', followers: '1M+' },
      { tag: 'B2B', followers: '800K+' },
      { tag: 'SalesStrategy', followers: '500K+' },
      { tag: 'ProfessionalDevelopment', followers: '2M+' },
      { tag: 'CareerGrowth', followers: '1.5M+' },
    ],
    niche: [
      { tag: 'LinkedInTips', followers: '200K+' },
      { tag: 'ThoughtLeadership', followers: '300K+' },
      { tag: 'GrowthHacking', followers: '250K+' },
      { tag: 'ContentStrategy', followers: '180K+' },
      { tag: 'LinkedInCreator', followers: '50K+' },
      { tag: 'B2BSales', followers: '150K+' },
      { tag: 'SocialSelling', followers: '100K+' },
      { tag: 'LeadGeneration', followers: '200K+' },
    ],
  },
  saas: {
    broad: [
      { tag: 'SaaS', followers: '3M+' },
      { tag: 'Technology', followers: '25M+' },
      { tag: 'Software', followers: '5M+' },
      { tag: 'CloudComputing', followers: '4M+' },
      { tag: 'TechStartups', followers: '2M+' },
      { tag: 'AI', followers: '10M+' },
    ],
    medium: [
      { tag: 'ProductManagement', followers: '1.5M+' },
      { tag: 'StartupGrowth', followers: '500K+' },
      { tag: 'SaaSMarketing', followers: '200K+' },
      { tag: 'CustomerSuccess', followers: '300K+' },
      { tag: 'ProductLedGrowth', followers: '150K+' },
      { tag: 'DevOps', followers: '800K+' },
    ],
    niche: [
      { tag: 'SaaSFounder', followers: '50K+' },
      { tag: 'PLG', followers: '30K+' },
      { tag: 'SaaSGrowth', followers: '80K+' },
      { tag: 'MRR', followers: '20K+' },
      { tag: 'ChurnRate', followers: '15K+' },
      { tag: 'B2BSaaS', followers: '100K+' },
    ],
  },
  sales: {
    broad: [
      { tag: 'Sales', followers: '10M+' },
      { tag: 'Marketing', followers: '20M+' },
      { tag: 'Business', followers: '20M+' },
      { tag: 'Revenue', followers: '2M+' },
      { tag: 'Entrepreneurship', followers: '12M+' },
      { tag: 'Growth', followers: '8M+' },
    ],
    medium: [
      { tag: 'SalesStrategy', followers: '500K+' },
      { tag: 'B2BSales', followers: '150K+' },
      { tag: 'ColdOutreach', followers: '100K+' },
      { tag: 'SalesEnablement', followers: '200K+' },
      { tag: 'SocialSelling', followers: '100K+' },
      { tag: 'SalesDevelopment', followers: '150K+' },
    ],
    niche: [
      { tag: 'ColdEmail', followers: '50K+' },
      { tag: 'OutboundSales', followers: '60K+' },
      { tag: 'SDR', followers: '40K+' },
      { tag: 'SalesTips', followers: '80K+' },
      { tag: 'PipelineGeneration', followers: '30K+' },
      { tag: 'ABM', followers: '70K+' },
    ],
  },
  hr: {
    broad: [
      { tag: 'HR', followers: '5M+' },
      { tag: 'Hiring', followers: '3M+' },
      { tag: 'Leadership', followers: '15M+' },
      { tag: 'Careers', followers: '8M+' },
      { tag: 'WorkLifeBalance', followers: '3M+' },
      { tag: 'Management', followers: '5M+' },
    ],
    medium: [
      { tag: 'TalentAcquisition', followers: '1M+' },
      { tag: 'EmployerBranding', followers: '500K+' },
      { tag: 'PeopleAnalytics', followers: '200K+' },
      { tag: 'RemoteWork', followers: '1.5M+' },
      { tag: 'Recruitment', followers: '2M+' },
      { tag: 'HRTech', followers: '300K+' },
    ],
    niche: [
      { tag: 'HiringTips', followers: '80K+' },
      { tag: 'TechRecruiting', followers: '60K+' },
      { tag: 'EmployeeExperience', followers: '150K+' },
      { tag: 'PeopleOps', followers: '40K+' },
      { tag: 'DEI', followers: '200K+' },
      { tag: 'HRLeadership', followers: '50K+' },
    ],
  },
}

const postTypeHashtags: Record<PostType, { tag: string; followers: string; reach: Reach }[]> = {
  'thought-leadership': [
    { tag: 'ThoughtLeadership', followers: '300K+', reach: 'niche' },
    { tag: 'FutureOfWork', followers: '1M+', reach: 'medium' },
    { tag: 'Innovation', followers: '10M+', reach: 'broad' },
  ],
  'case-study': [
    { tag: 'CaseStudy', followers: '100K+', reach: 'niche' },
    { tag: 'SuccessStory', followers: '200K+', reach: 'niche' },
    { tag: 'Results', followers: '500K+', reach: 'medium' },
  ],
  tips: [
    { tag: 'Tips', followers: '5M+', reach: 'broad' },
    { tag: 'HowTo', followers: '2M+', reach: 'medium' },
    { tag: 'ProTips', followers: '150K+', reach: 'niche' },
  ],
  question: [
    { tag: 'Discussion', followers: '1M+', reach: 'medium' },
    { tag: 'WhatDoYouThink', followers: '50K+', reach: 'niche' },
    { tag: 'OpenQuestion', followers: '30K+', reach: 'niche' },
  ],
}

/* ───────── Generator ───────── */
function generateHashtags(topic: string, postType: PostType): Hashtag[] {
  /* Determine which pool to use based on topic keywords */
  const lower = topic.toLowerCase()
  let poolKey = 'default'
  if (/saas|software|tech|cloud|ai|startup/.test(lower)) poolKey = 'saas'
  else if (/sales|outreach|cold|pipeline|revenue|prospect/.test(lower)) poolKey = 'sales'
  else if (/hr|recruit|hiring|talent|people|employee/.test(lower)) poolKey = 'hr'

  const pool = hashtagPools[poolKey]

  /* Pick from each reach tier */
  const broad = pool.broad.sort(() => Math.random() - 0.5).slice(0, 4)
  const medium = pool.medium.sort(() => Math.random() - 0.5).slice(0, 5)
  const niche = pool.niche.sort(() => Math.random() - 0.5).slice(0, 5)

  /* Add post-type specific hashtags */
  const typeSpecific = postTypeHashtags[postType]

  /* Build topic-based hashtag */
  const topicTag = topic
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '')

  const all: Hashtag[] = [
    ...broad.map((h) => ({ tag: h.tag, reach: 'broad' as Reach, followers: h.followers })),
    ...medium.map((h) => ({ tag: h.tag, reach: 'medium' as Reach, followers: h.followers })),
    ...niche.map((h) => ({ tag: h.tag, reach: 'niche' as Reach, followers: h.followers })),
    ...typeSpecific.map((h) => ({ tag: h.tag, reach: h.reach, followers: h.followers })),
    { tag: topicTag, reach: 'niche', followers: 'Custom' },
  ]

  /* Deduplicate */
  const seen = new Set<string>()
  const unique = all.filter((h) => {
    const key = h.tag.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })

  /* Sort: broad → medium → niche */
  const order: Record<Reach, number> = { broad: 0, medium: 1, niche: 2 }
  return unique.sort((a, b) => order[a.reach] - order[b.reach]).slice(0, 20)
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'How many hashtags should I use on LinkedIn?',
    a: 'LinkedIn recommends 3–5 hashtags per post. Using more than 10 can actually hurt reach. Mix broad hashtags for discoverability with niche hashtags for targeting the right audience.',
  },
  {
    q: 'Do LinkedIn hashtags actually help with reach?',
    a: 'Yes. Hashtags make your post discoverable to people who follow those topics, even if they don\'t follow you. Posts with hashtags get 12-15% more impressions on average.',
  },
  {
    q: 'Should I put hashtags in the post or in the comments?',
    a: 'Put them in the post itself. LinkedIn\'s algorithm indexes hashtags in the original post for discovery. Hashtags in comments don\'t help with discoverability.',
  },
  {
    q: 'What is the difference between broad and niche hashtags?',
    a: 'Broad hashtags (e.g., #Marketing, 20M+ followers) get you visibility but more competition. Niche hashtags (e.g., #B2BSaaSSales, 50K followers) have less competition but a more targeted audience. Use a mix of both.',
  },
  {
    q: 'Can I create my own branded hashtag on LinkedIn?',
    a: 'Absolutely. Creating a branded hashtag (e.g., #YourCompanyInsights) helps you build a content library and makes it easy for followers to find all your posts on a topic. Encourage your team to use it.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:hashtag-bold-duotone', text: 'Use 3–5 hashtags per post — more than 10 can reduce reach' },
  { icon: 'solar:graph-up-bold-duotone', text: 'Mix broad (1M+), medium (100K–1M), and niche (<100K) hashtags' },
  { icon: 'solar:eye-bold-duotone', text: 'Follow your own hashtags to see what content performs well' },
  { icon: 'solar:users-group-rounded-bold-duotone', text: 'Use hashtags your target audience follows, not just your industry' },
  { icon: 'solar:flag-bold-duotone', text: 'Create a branded hashtag for your company or content series' },
  { icon: 'solar:refresh-bold-duotone', text: 'Rotate hashtags between posts — don\'t copy-paste the same set every time' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Hashtag Generator',
    description:
      'Free tool to generate 15-20 relevant LinkedIn hashtags sorted by estimated reach with a mix of broad, medium, and niche tags.',
    url: 'https://byhandshake.com/tools/linkedin-hashtag-generator',
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
export default function LinkedInHashtagGenerator() {
  const [topic, setTopic] = useState('')
  const [postType, setPostType] = useState<PostType>('thought-leadership')
  const [hashtags, setHashtags] = useState<Hashtag[]>([])
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = topic.trim().length > 0

  function handleGenerate() {
    if (!canGenerate) return
    setHashtags(generateHashtags(topic, postType))
  }

  function handleCopyAll() {
    const text = hashtags.map((h) => `#${h.tag}`).join(' ')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const postTypes: { value: PostType; label: string }[] = [
    { value: 'thought-leadership', label: 'Thought Leadership' },
    { value: 'case-study', label: 'Case Study' },
    { value: 'tips', label: 'Tips & How-To' },
    { value: 'question', label: 'Question / Poll' },
  ]

  const reachColors: Record<Reach, string> = {
    broad: 'text-green-400 bg-green-500/10 border-green-500/20',
    medium: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    niche: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  }

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
              <Icon icon="solar:hashtag-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Hashtag Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 15–20 relevant hashtags for your LinkedIn posts. Sorted by reach with a smart mix of broad, medium, and niche tags.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Topic / Industry</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="e.g. B2B SaaS sales, HR recruiting, AI marketing"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Post Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {postTypes.map((pt) => (
                    <button
                      key={pt.value}
                      onClick={() => setPostType(pt.value)}
                      className={`rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                        postType === pt.value
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {pt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_15px_rgba(0,123,255,0.4)]"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4" />
              Generate Hashtags
            </button>
          </div>

          {/* ── Results ── */}
          {hashtags.length > 0 && (
            <div className="mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-jakarta font-semibold text-white">Your Hashtags</h2>
                <button
                  onClick={handleCopyAll}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                >
                  <Icon
                    icon={copied ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                    className="w-3.5 h-3.5"
                  />
                  {copied ? 'Copied!' : 'Copy All'}
                </button>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-geist">
                  <span className="w-2 h-2 rounded-full bg-green-400" /> Broad (1M+)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-geist">
                  <span className="w-2 h-2 rounded-full bg-yellow-400" /> Medium (100K–1M)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-geist">
                  <span className="w-2 h-2 rounded-full bg-purple-400" /> Niche (&lt;100K)
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {hashtags.map((h) => (
                  <span
                    key={h.tag}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium font-geist border ${reachColors[h.reach]}`}
                  >
                    #{h.tag}
                    <span className="opacity-60 text-[10px]">{h.followers}</span>
                  </span>
                ))}
              </div>

              {/* Copy-ready text */}
              <div className="mt-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4">
                <p className="text-sm text-gray-300 font-geist break-all">
                  {hashtags.map((h) => `#${h.tag}`).join(' ')}
                </p>
              </div>
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              LinkedIn Hashtag Strategy
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
              Post with the Right Hashtags Across All Your Accounts
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Handshake lets you manage hashtag strategies and publish to multiple LinkedIn accounts from one dashboard.
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
