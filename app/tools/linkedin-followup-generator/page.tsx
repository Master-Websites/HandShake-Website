'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
type Context = 'after-connection' | 'after-meeting' | 'after-no-reply' | 'after-event'

/* ───────── Generator ───────── */
function generateFollowUps(
  context: Context,
  product: string,
  targetInfo: string
): { message: string; label: string }[] {
  const templates: Record<Context, { message: string; label: string }[]> = {
    'after-connection': [
      {
        label: 'Warm & Value-First',
        message: `Hey! Thanks for connecting — I noticed ${targetInfo} and thought we might have some common ground.\n\nI work on ${product}, and I'd love to learn more about what you're focused on. No pitch — just believe in building real connections.\n\nAnything exciting you're working on right now?`,
      },
      {
        label: 'Direct & Curious',
        message: `Appreciate the connection! I saw ${targetInfo} — really interesting.\n\nI'm building ${product} and always looking to learn from people doing great work in the space. What's your biggest focus this quarter?\n\nHappy to share insights from our side too.`,
      },
      {
        label: 'Soft CTA',
        message: `Thanks for connecting! I came across your profile because ${targetInfo} — impressive stuff.\n\nI help professionals with ${product}. If that's ever relevant, I'd love to chat. If not, happy to just stay connected and share ideas.\n\nEither way — great to be in your network!`,
      },
    ],
    'after-meeting': [
      {
        label: 'Recap & Next Steps',
        message: `Great chatting with you! Really enjoyed our conversation about ${targetInfo}.\n\nAs I mentioned, ${product} — I think there's a real opportunity to explore this further.\n\nWould it make sense to schedule a follow-up this week? I can share some specific ideas based on what we discussed.\n\nLooking forward to it!`,
      },
      {
        label: 'Value Drop',
        message: `Loved our conversation! Your point about ${targetInfo} really stuck with me.\n\nI've been thinking about how ${product} could help with exactly that. I actually put together a quick outline — happy to share if you're interested.\n\nWhat does your week look like for a quick follow-up?`,
      },
      {
        label: 'Casual & Warm',
        message: `Hey! Just wanted to say thanks for the great conversation. It's rare to meet someone who really gets ${targetInfo}.\n\nI'll be thinking about how ${product} aligns with your goals. Let me know if you want to continue the discussion — no rush.\n\nGreat meeting you!`,
      },
    ],
    'after-no-reply': [
      {
        label: 'Gentle Bump',
        message: `Hi! I know things get busy — just wanted to bump my earlier message in case it got buried.\n\nI reached out about ${product}, which I thought might be relevant given ${targetInfo}.\n\nNo pressure at all — if the timing isn't right, just say the word. If it is, I'd love to chat for 10 minutes this week.`,
      },
      {
        label: 'New Angle',
        message: `Hey! I wanted to try a different approach. Rather than pitching, I thought I'd share something useful.\n\nGiven ${targetInfo}, I've seen teams like yours get great results with ${product}. I'd be happy to share how — no strings attached.\n\nWorth a quick conversation?`,
      },
      {
        label: 'Break-Up Style',
        message: `Hi! I've reached out a couple of times about ${product}, and I totally understand if it's not a priority right now.\n\nI don't want to be that person who keeps following up, so this will be my last message. If ${targetInfo} becomes a focus again, I'm always here.\n\nWishing you all the best!`,
      },
    ],
    'after-event': [
      {
        label: 'Event Reference',
        message: `Hey! Great connecting at the event. I really enjoyed the session on ${targetInfo} — lots of valuable takeaways.\n\nI work on ${product}, and based on what we discussed, I think there could be some interesting synergies.\n\nWould you be open to a quick chat this week to explore?`,
      },
      {
        label: 'Shared Experience',
        message: `It was great meeting you! That event had some incredible content — especially around ${targetInfo}.\n\nI've been working on ${product} and would love to continue our conversation. Sometimes the best connections come from these events.\n\nFree for a virtual coffee sometime this week?`,
      },
      {
        label: 'Quick & Personal',
        message: `Hey! Loved meeting you at the event. ${targetInfo} really resonated with me.\n\nI'd love to stay in touch — I work on ${product} and think we could learn a lot from each other.\n\nLet me know if you'd be up for connecting over a call sometime!`,
      },
    ],
  }

  return templates[context]
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'When should I send a LinkedIn follow-up message?',
    a: 'Send a follow-up within 24 hours after a connection or meeting. For no-reply situations, wait 3–5 business days before following up. Don\'t send more than 3 follow-ups total.',
  },
  {
    q: 'What is the LinkedIn connection message character limit?',
    a: 'LinkedIn connection messages are limited to 300 characters. InMail messages can be up to 1,900 characters. Regular messages between connections have no practical limit (up to ~8,000 characters).',
  },
  {
    q: 'How do I follow up without being annoying?',
    a: 'Add value in every follow-up — share an article, insight, or specific idea. Never send "just checking in" or "bumping this." Each message should give them a reason to respond.',
  },
  {
    q: 'What is the best follow-up strategy on LinkedIn?',
    a: 'Use a 3-touch framework: 1) Initial value-first message, 2) Follow-up with a new angle or resource after 3–5 days, 3) A respectful "break-up" message after another 5–7 days. Always personalize.',
  },
  {
    q: 'Should I follow up after someone accepts my connection request?',
    a: 'Absolutely. The moment someone accepts your request is when they\'re most receptive. Send a thank-you message with a genuine conversation starter within 24 hours.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:clock-circle-bold-duotone', text: 'Follow up within 24 hours of connecting — strike while the iron is hot' },
  { icon: 'solar:gift-bold-duotone', text: 'Lead with value every time — share an insight, resource, or specific idea' },
  { icon: 'solar:user-bold-duotone', text: 'Reference something specific about them — generic follow-ups get ignored' },
  { icon: 'solar:chat-round-dots-bold-duotone', text: 'Ask an easy-to-answer question to start a conversation' },
  { icon: 'solar:danger-triangle-bold-duotone', text: 'Never send "just checking in" — it screams "I have nothing valuable to say"' },
  { icon: 'solar:hand-shake-bold-duotone', text: 'Max 3 follow-ups. Know when to gracefully exit the conversation.' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Follow-Up Message Generator',
    description:
      'Free tool to generate 3 LinkedIn follow-up message variations for any context — after connection, meeting, no reply, or event.',
    url: 'https://byhandshake.com/tools/linkedin-followup-generator',
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
export default function LinkedInFollowUpGenerator() {
  const [context, setContext] = useState<Context>('after-connection')
  const [product, setProduct] = useState('')
  const [targetInfo, setTargetInfo] = useState('')
  const [results, setResults] = useState<{ message: string; label: string }[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const charLimit = context === 'after-connection' ? 300 : 1900

  const canGenerate = product.trim() && targetInfo.trim()

  function handleGenerate() {
    if (!canGenerate) return
    setResults(generateFollowUps(context, product, targetInfo))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  const contexts: { value: Context; label: string; icon: string }[] = [
    { value: 'after-connection', label: 'After Connection', icon: 'solar:user-plus-bold-duotone' },
    { value: 'after-meeting', label: 'After Meeting', icon: 'solar:calendar-bold-duotone' },
    { value: 'after-no-reply', label: 'After No Reply', icon: 'solar:inbox-bold-duotone' },
    { value: 'after-event', label: 'After Event', icon: 'solar:flag-bold-duotone' },
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
              <Icon icon="solar:reply-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Follow-Up Message Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 3 follow-up message variations for any situation — after connecting, a meeting, no reply, or an event.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Follow-Up Context</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {contexts.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setContext(c.value)}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                        context === c.value
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <Icon icon={c.icon} className="w-3.5 h-3.5" />
                      {c.label}
                    </button>
                  ))}
                </div>
                <p className="mt-1.5 text-xs text-gray-500 font-geist">
                  Character limit: {charLimit === 300 ? '300 (connection message)' : '1,900 (InMail/regular message)'}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Your Product / Service</label>
                <input
                  type="text"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  placeholder="e.g. automated LinkedIn outreach for B2B teams"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Target Info / Context</label>
                <textarea
                  value={targetInfo}
                  onChange={(e) => setTargetInfo(e.target.value)}
                  placeholder="e.g. they're a VP of Sales at a growing SaaS company, focused on scaling outbound"
                  rows={3}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_15px_rgba(0,123,255,0.4)]"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4" />
              Generate 3 Follow-Ups
            </button>
          </div>

          {/* ── Results ── */}
          {results.length > 0 && (
            <div className="space-y-4 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white">Your Follow-Up Messages</h2>
              {results.map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="text-xs font-medium text-blue-400 font-geist">{r.label}</span>
                    <button
                      onClick={() => handleCopy(r.message, i)}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                    >
                      <Icon
                        icon={copied === i ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                        className="w-3.5 h-3.5"
                      />
                      {copied === i ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-sm text-gray-300 font-geist leading-relaxed whitespace-pre-line">
                    {r.message}
                  </p>
                  <span
                    className={`block text-right text-xs font-geist mt-2 ${
                      r.message.length > charLimit ? 'text-red-400' : r.message.length > charLimit * 0.9 ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    {r.message.length}/{charLimit.toLocaleString()} chars
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Follow-Up Best Practices
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
              Automate Follow-Ups Across Multiple LinkedIn Accounts
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Never miss a follow-up again. Handshake helps you manage outreach sequences from multiple LinkedIn accounts in one place.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Outreach — Free
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
