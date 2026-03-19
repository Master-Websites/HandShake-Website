'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Tab definitions ───────── */
const tabs = [
  { key: 'post', label: 'Post', limit: 3000, icon: 'solar:pen-new-round-bold-duotone', placeholder: 'Write your LinkedIn post here...' },
  { key: 'headline', label: 'Headline', limit: 120, icon: 'solar:text-bold-duotone', placeholder: 'Write your headline here...' },
  { key: 'summary', label: 'Summary', limit: 2600, icon: 'solar:document-text-bold-duotone', placeholder: 'Write your About section here...' },
  { key: 'connection', label: 'Connection', limit: 300, icon: 'solar:chat-round-dots-bold-duotone', placeholder: 'Write your connection request note here...' },
  { key: 'inmail-subject', label: 'InMail Subject', limit: 200, icon: 'solar:letter-bold-duotone', placeholder: 'Write your InMail subject line here...' },
  { key: 'inmail-body', label: 'InMail Body', limit: 1900, icon: 'solar:mailbox-bold-duotone', placeholder: 'Write your InMail body here...' },
] as const

type TabKey = (typeof tabs)[number]['key']

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What are the character limits on LinkedIn?',
    a: 'LinkedIn has different character limits for different fields: Posts (3,000), Headlines (120), About/Summary (2,600), Connection Request notes (300), InMail Subject (200), and InMail Body (1,900). Staying within these limits ensures your content displays correctly.',
  },
  {
    q: 'What happens if I exceed a LinkedIn character limit?',
    a: 'LinkedIn will truncate or prevent you from posting content that exceeds the character limit. For posts, content beyond 3,000 characters simply won\'t be accepted. For headlines, anything over 120 characters gets cut off in most views.',
  },
  {
    q: 'Do LinkedIn character limits include spaces?',
    a: 'Yes, LinkedIn character limits include spaces, punctuation, emojis, and line breaks. An emoji may count as 1-2 characters depending on the emoji. Always check your total character count including all formatting.',
  },
  {
    q: 'Why is character count important for LinkedIn?',
    a: 'Staying within character limits ensures your full message is visible. But beyond that, concise writing performs better on LinkedIn. Posts that are too long lose readers, and headlines that get truncated lose impact.',
  },
  {
    q: 'Do hashtags count toward LinkedIn character limits?',
    a: 'Yes, hashtags count toward the total character limit. Each hashtag (including the # symbol) uses characters from your allowance. Use 3-5 targeted hashtags and factor them into your character budget.',
  },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Character Counter',
    description:
      'Free real-time character counter for LinkedIn posts, headlines, summaries, connection requests, and InMails. Color-coded warnings.',
    url: 'https://byhandshake.com/tools/linkedin-character-counter',
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

/* ───────── Helpers ───────── */
function getColor(used: number, limit: number): string {
  const ratio = used / limit
  if (ratio >= 1) return 'text-red-400'
  if (ratio >= 0.9) return 'text-red-400'
  if (ratio >= 0.75) return 'text-yellow-400'
  return 'text-green-400'
}

function getBorderColor(used: number, limit: number): string {
  const ratio = used / limit
  if (ratio >= 1) return 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
  if (ratio >= 0.9) return 'border-red-500/30 focus:border-red-500 focus:ring-red-500'
  if (ratio >= 0.75) return 'border-yellow-500/30 focus:border-yellow-500 focus:ring-yellow-500'
  return 'border-gray-700 focus:border-blue-500 focus:ring-blue-500'
}

function getBarColor(used: number, limit: number): string {
  const ratio = used / limit
  if (ratio >= 1) return 'bg-red-500'
  if (ratio >= 0.9) return 'bg-red-400'
  if (ratio >= 0.75) return 'bg-yellow-400'
  return 'bg-green-400'
}

/* ───────── Limit reference ───────── */
const limitReference = [
  { field: 'Post', limit: '3,000', note: 'Only ~210 chars shown before "See more"' },
  { field: 'Headline', limit: '120', note: 'Visible everywhere — search, comments, requests' },
  { field: 'About / Summary', limit: '2,600', note: 'First ~300 chars shown before "See more"' },
  { field: 'Connection Request', limit: '300', note: 'Keep it personal and concise' },
  { field: 'InMail Subject', limit: '200', note: 'Appears in notification — make it count' },
  { field: 'InMail Body', limit: '1,900', note: 'Shorter InMails get higher response rates' },
]

/* ───────── Page component ───────── */
export default function LinkedInCharacterCounter() {
  const [activeTab, setActiveTab] = useState<TabKey>('post')
  const [texts, setTexts] = useState<Record<TabKey, string>>({
    post: '',
    headline: '',
    summary: '',
    connection: '',
    'inmail-subject': '',
    'inmail-body': '',
  })
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const currentTab = tabs.find((t) => t.key === activeTab)!
  const currentText = texts[activeTab]
  const charCount = currentText.length
  const remaining = currentTab.limit - charCount

  function handleCopy() {
    navigator.clipboard.writeText(currentText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleClear() {
    setTexts((prev) => ({ ...prev, [activeTab]: '' }))
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
              <Icon icon="solar:ruler-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Character Counter
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Real-time character counter for every LinkedIn field. Posts, headlines, summaries, connection requests, and InMails — with color-coded warnings.
            </p>
          </div>

          {/* ── Tabs ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium font-geist border transition-colors ${
                    activeTab === tab.key
                      ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                      : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                  }`}
                >
                  <Icon icon={tab.icon} className="w-3.5 h-3.5" />
                  {tab.label}
                  <span className="text-[10px] opacity-60">({tab.limit.toLocaleString()})</span>
                </button>
              ))}
            </div>

            {/* ── Textarea ── */}
            <div className="relative">
              <textarea
                value={currentText}
                onChange={(e) => setTexts((prev) => ({ ...prev, [activeTab]: e.target.value }))}
                placeholder={currentTab.placeholder}
                rows={activeTab === 'headline' || activeTab === 'inmail-subject' ? 3 : 8}
                className={`w-full rounded-lg bg-gray-800/50 px-4 py-3 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:ring-1 transition-colors resize-none ${getBorderColor(charCount, currentTab.limit)} border`}
              />
            </div>

            {/* ── Progress bar ── */}
            <div className="mt-3">
              <div className="w-full h-1.5 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${getBarColor(charCount, currentTab.limit)}`}
                  style={{ width: `${Math.min((charCount / currentTab.limit) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* ── Stats row ── */}
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-4">
                <span className={`text-sm font-geist font-medium ${getColor(charCount, currentTab.limit)}`}>
                  {charCount.toLocaleString()}/{currentTab.limit.toLocaleString()} characters
                </span>
                <span className={`text-sm font-geist ${remaining < 0 ? 'text-red-400 font-medium' : 'text-gray-500'}`}>
                  {remaining >= 0 ? `${remaining.toLocaleString()} remaining` : `${Math.abs(remaining).toLocaleString()} over limit!`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {currentText && (
                  <button
                    onClick={handleClear}
                    className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-400 border border-gray-700 bg-gray-800/50 hover:bg-gray-700/50 transition-colors font-geist"
                  >
                    <Icon icon="solar:trash-bin-minimalistic-bold-duotone" className="w-3 h-3" />
                    Clear
                  </button>
                )}
                {currentText && (
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                  >
                    <Icon
                      icon={copied ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                      className="w-3.5 h-3.5"
                    />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
            </div>

            {/* ── Warning ── */}
            {charCount > currentTab.limit && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-2.5">
                <Icon icon="solar:danger-triangle-bold-duotone" className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-sm text-red-300 font-geist">
                  Your text exceeds the {currentTab.limit.toLocaleString()} character limit by {(charCount - currentTab.limit).toLocaleString()} characters. LinkedIn will not accept this.
                </span>
              </div>
            )}
            {charCount > currentTab.limit * 0.9 && charCount <= currentTab.limit && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-yellow-500/10 border border-yellow-500/30 px-4 py-2.5">
                <Icon icon="solar:info-circle-bold-duotone" className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-sm text-yellow-300 font-geist">
                  You&apos;re approaching the {currentTab.limit.toLocaleString()} character limit. Only {remaining.toLocaleString()} characters remaining.
                </span>
              </div>
            )}
          </div>

          {/* ── Limit Reference ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              LinkedIn Character Limits Reference
            </h2>
            <div className="space-y-3">
              {limitReference.map((item) => (
                <div
                  key={item.field}
                  className="flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-gray-900/40 px-5 py-3.5"
                >
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-white font-geist">{item.field}</span>
                    <span className="block text-xs text-gray-500 font-geist mt-0.5">{item.note}</span>
                  </div>
                  <span className="text-sm font-mono font-bold text-blue-400 shrink-0">{item.limit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-gray-900/50 p-8 sm:p-12 mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <h2 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-3">
              Perfect Content. Now Send It at Scale.
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Crafted the perfect LinkedIn message? Use Handshake to send it from multiple accounts simultaneously. Automated rotation, unified inbox, unlimited leads.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Sending — Free
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
