'use client'

import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Animated counter hook ───────── */
function useAnimatedCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0)
  const prev = useRef(0)

  useEffect(() => {
    const start = prev.current
    const diff = target - start
    if (diff === 0) return
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      const current = Math.round(start + diff * eased)
      setValue(current)
      if (progress < 1) requestAnimationFrame(tick)
      else prev.current = target
    }

    requestAnimationFrame(tick)
  }, [target, duration])

  return value
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'How is the LinkedIn outreach ROI calculated?',
    a: 'We take your inputs — number of LinkedIn accounts, connections per week, and conversion rates — and project monthly outcomes: total connections, conversations (based on acceptance + reply rates), meetings, and pipeline value based on your average deal size.',
  },
  {
    q: 'What is a good LinkedIn connection acceptance rate?',
    a: 'Typically 20-40% for targeted outreach. Highly personalized messages to well-targeted prospects can achieve 40-60%. Generic requests usually see 10-15%.',
  },
  {
    q: 'How many LinkedIn accounts can I use with Handshake?',
    a: 'Handshake supports unlimited LinkedIn accounts with automatic multi-sender rotation. You can scale from 1 to 50+ accounts across unlimited workspaces.',
  },
  {
    q: 'What does multi-sender rotation mean for ROI?',
    a: 'Instead of being limited to ~100 connection requests per week from one account, multi-sender rotation spreads outreach across multiple accounts. This multiplies your reach while keeping each account within safe limits.',
  },
  {
    q: 'How much does Handshake cost compared to the projected revenue?',
    a: 'Handshake plans start at $79/month. Most teams see ROI within the first week — even one closed deal from LinkedIn outreach typically covers months of subscription costs.',
  },
]

/* ───────── Schemas ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Outreach ROI Calculator',
    description:
      'Free calculator to project your LinkedIn outreach ROI — connections, conversations, meetings, pipeline value, and revenue.',
    url: 'https://byhandshake.com/tools/linkedin-outreach-roi-calculator',
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

/* ───────── Constants ───────── */
const HANDSHAKE_MONTHLY = 79

/* ───────── Page component ───────── */
export default function ROICalculator() {
  const [accounts, setAccounts] = useState(3)
  const [connectionsPerWeek, setConnectionsPerWeek] = useState(80)
  const [acceptanceRate, setAcceptanceRate] = useState(30)
  const [replyRate, setReplyRate] = useState(25)
  const [meetingRate, setMeetingRate] = useState(20)
  const [dealSize, setDealSize] = useState(5000)
  const [calculated, setCalculated] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Calculations
  const totalConnectionsMonth = accounts * connectionsPerWeek * 4
  const accepted = Math.round(totalConnectionsMonth * (acceptanceRate / 100))
  const conversations = Math.round(accepted * (replyRate / 100))
  const meetings = Math.round(conversations * (meetingRate / 100))
  const pipelineValue = meetings * dealSize
  const projectedRevenue = Math.round(pipelineValue * 0.25) // 25% close rate
  const roi = HANDSHAKE_MONTHLY > 0 ? Math.round(((projectedRevenue - HANDSHAKE_MONTHLY) / HANDSHAKE_MONTHLY) * 100) : 0

  // Animated values
  const animConnections = useAnimatedCounter(calculated ? totalConnectionsMonth : 0)
  const animConversations = useAnimatedCounter(calculated ? conversations : 0)
  const animMeetings = useAnimatedCounter(calculated ? meetings : 0)
  const animPipeline = useAnimatedCounter(calculated ? pipelineValue : 0)
  const animRevenue = useAnimatedCounter(calculated ? projectedRevenue : 0)
  const animROI = useAnimatedCounter(calculated ? roi : 0)

  function formatCurrency(n: number) {
    if (n >= 1_000_000) return '$' + (n / 1_000_000).toFixed(1) + 'M'
    if (n >= 1000) return '$' + (n / 1000).toFixed(1) + 'K'
    return '$' + n.toLocaleString()
  }

  const results = [
    { label: 'Connections / Month', value: animConnections.toLocaleString(), icon: 'solar:users-group-rounded-bold-duotone', color: 'text-blue-400' },
    { label: 'Conversations', value: animConversations.toLocaleString(), icon: 'solar:chat-round-dots-bold-duotone', color: 'text-cyan-400' },
    { label: 'Meetings Booked', value: animMeetings.toLocaleString(), icon: 'solar:calendar-mark-bold-duotone', color: 'text-purple-400' },
    { label: 'Pipeline Value', value: formatCurrency(animPipeline), icon: 'solar:wallet-money-bold-duotone', color: 'text-green-400' },
    { label: 'Projected Revenue', value: formatCurrency(animRevenue), icon: 'solar:cash-out-bold-duotone', color: 'text-emerald-400' },
    { label: 'ROI vs Handshake', value: `${animROI.toLocaleString()}%`, icon: 'solar:graph-up-bold-duotone', color: 'text-orange-400' },
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium font-geist mb-6">
              <Icon icon="solar:calculator-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Outreach ROI Calculator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Calculate your projected pipeline value, meetings booked, and revenue from LinkedIn outreach. See exactly what scaling your outreach could deliver.
            </p>
          </div>

          {/* ── Inputs ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: 'LinkedIn Accounts', value: accounts, set: setAccounts, min: 1, max: 100, step: 1, suffix: '' },
                { label: 'Connections / Week / Account', value: connectionsPerWeek, set: setConnectionsPerWeek, min: 10, max: 100, step: 5, suffix: '' },
                { label: 'Acceptance Rate', value: acceptanceRate, set: setAcceptanceRate, min: 5, max: 80, step: 5, suffix: '%' },
                { label: 'Reply Rate', value: replyRate, set: setReplyRate, min: 5, max: 60, step: 5, suffix: '%' },
                { label: 'Meeting Rate', value: meetingRate, set: setMeetingRate, min: 5, max: 50, step: 5, suffix: '%' },
                { label: 'Average Deal Size', value: dealSize, set: setDealSize, min: 500, max: 100000, step: 500, suffix: '$', prefix: true },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-2">
                    {f.label}
                  </label>
                  <div className="relative">
                    {f.prefix && (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-geist">$</span>
                    )}
                    <input
                      type="number"
                      value={f.value}
                      onChange={(e) => f.set(Number(e.target.value))}
                      min={f.min}
                      max={f.max}
                      step={f.step}
                      className={`w-full rounded-lg border border-gray-700 bg-gray-800/50 ${f.prefix ? 'pl-7' : 'px-4'} pr-${f.suffix && !f.prefix ? '8' : '4'} py-2.5 text-sm text-white font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors`}
                    />
                    {f.suffix && !f.prefix && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 font-geist">
                        {f.suffix}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCalculated(true)}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              <Icon icon="solar:calculator-bold-duotone" className="w-4 h-4" />
              Calculate ROI
            </button>
          </div>

          {/* ── Results ── */}
          {calculated && (
            <div className="mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white mb-6">Your Projected Results</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 text-center hover:border-blue-500/30 transition-colors"
                  >
                    <Icon icon={r.icon} className={`w-8 h-8 ${r.color} mx-auto mb-3`} />
                    <p className={`text-2xl sm:text-3xl font-jakarta font-bold ${r.color} mb-1`}>
                      {r.value}
                    </p>
                    <p className="text-xs text-gray-500 font-geist">{r.label}</p>
                  </div>
                ))}
              </div>

              {/* Handshake ROI comparison */}
              <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-950/30 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-300 font-geist">
                    <span className="text-white font-semibold">Handshake subscription:</span> ${HANDSHAKE_MONTHLY}/mo
                  </p>
                  <p className="text-sm text-gray-400 font-geist mt-1">
                    Projected monthly revenue: <span className="text-emerald-400 font-semibold">{formatCurrency(projectedRevenue)}</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-jakarta font-bold text-orange-400">{roi.toLocaleString()}%</p>
                  <p className="text-xs text-gray-500 font-geist">Return on Investment</p>
                </div>
              </div>
            </div>
          )}

          {/* ── CTA ── */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-gray-900/50 p-8 sm:p-12 mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <h2 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-3">
              Start Scaling with Handshake
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Turn these projections into reality. Multi-sender rotation, unified inbox, unlimited leads — start your free trial today.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Scaling — Free
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
