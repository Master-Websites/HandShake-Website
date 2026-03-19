'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Template generators ───────── */
function generateTemplates(
  yourName: string,
  yourRole: string,
  targetName: string,
  targetRole: string,
  reason: string
): string[] {
  const first = targetName.split(' ')[0] || targetName
  const yourFirst = yourName.split(' ')[0] || yourName

  return [
    `Hi ${first}, I'm ${yourFirst} — ${yourRole}. ${reason}. Would love to connect and exchange ideas!`,
    `Hey ${first}! Came across your profile as a ${targetRole} — ${reason}. Let's connect? Always great to meet people in the space. – ${yourFirst}`,
    `${first}, fellow professional here 👋 I'm a ${yourRole} and ${reason.toLowerCase()}. Excited to learn from your experience as a ${targetRole}. Let's connect!`,
    `Hi ${first}, I noticed your work as a ${targetRole}. I'm ${yourFirst} (${yourRole}) — ${reason.toLowerCase()}. Would be great to stay in touch and share insights.`,
    `Hey ${first}! I'm ${yourFirst}, ${yourRole}. ${reason}. Your background as a ${targetRole} really stood out. Let's connect and see how we can help each other!`,
  ].map((t) => (t.length > 300 ? t.slice(0, 297) + '...' : t))
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What makes a good LinkedIn connection request?',
    a: "A great connection request is short (under 300 characters), personalized, mentions a clear reason for connecting, and avoids generic phrases like \"I'd like to add you to my network.\" Always reference something specific about the person.",
  },
  {
    q: 'How many connection requests can I send per day on LinkedIn?',
    a: 'LinkedIn allows roughly 100 connection requests per week for most accounts. Sending too many too fast can trigger restrictions. Using multi-sender rotation tools like Handshake lets you scale safely across multiple accounts.',
  },
  {
    q: 'Should I always include a note with my connection request?',
    a: "Yes — personalized connection requests have 2-3× higher acceptance rates. A short, relevant note shows you're not just spamming and gives the recipient a reason to accept.",
  },
  {
    q: "What's the ideal length for a LinkedIn connection request?",
    a: 'LinkedIn limits connection request notes to 300 characters. Aim for 150–280 characters: enough to be personal but short enough to read in seconds.',
  },
  {
    q: 'How do I personalize connection requests at scale?',
    a: 'Use dynamic variables like first name, role, company, and reason for connecting. Tools like Handshake let you create templates with merge fields and rotate across multiple sender accounts automatically.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:user-check-bold-duotone', text: "Use their first name — never \"Dear Sir/Madam\"" },
  { icon: 'solar:target-bold-duotone', text: 'Mention a specific reason for connecting' },
  { icon: 'solar:clock-circle-bold-duotone', text: 'Keep it under 300 characters' },
  { icon: 'solar:chat-round-check-bold-duotone', text: 'Avoid salesy language in the first message' },
  { icon: 'solar:link-round-bold-duotone', text: 'Reference mutual connections or shared interests' },
  { icon: 'solar:lightbulb-bold-duotone', text: "End with a soft call-to-action (\"Let's connect!\")" },
]

/* ───────── Schema (injected via dangerouslySetInnerHTML in client component) ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Connection Request Generator',
    description:
      'Free tool to generate 5 personalized LinkedIn connection request templates under 300 characters.',
    url: 'https://byhandshake.com/tools/linkedin-connection-request-generator',
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
export default function ConnectionRequestGenerator() {
  const [yourName, setYourName] = useState('')
  const [yourRole, setYourRole] = useState('')
  const [targetName, setTargetName] = useState('')
  const [targetRole, setTargetRole] = useState('')
  const [reason, setReason] = useState('')
  const [templates, setTemplates] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = yourName && yourRole && targetName && targetRole && reason

  function handleGenerate() {
    if (!canGenerate) return
    setTemplates(generateTemplates(yourName, yourRole, targetName, targetRole, reason))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <>
      {/* JSON-LD */}
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
              <Icon icon="solar:chat-round-dots-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Connection Request Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 5 personalized connection request templates under 300 characters. Fill in your details and get copy-ready messages instantly.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: 'Your Name', value: yourName, set: setYourName, placeholder: 'Jane Smith' },
                { label: 'Your Role', value: yourRole, set: setYourRole, placeholder: 'SDR at Acme Corp' },
                { label: "Target's Name", value: targetName, set: setTargetName, placeholder: 'John Doe' },
                { label: "Target's Role", value: targetRole, set: setTargetRole, placeholder: 'VP of Sales at TechCo' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">{f.label}</label>
                  <input
                    type="text"
                    value={f.value}
                    onChange={(e) => f.set(e.target.value)}
                    placeholder={f.placeholder}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">
                  Reason for Connecting
                </label>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g. I saw your talk on SaaS growth strategies"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_15px_rgba(0,123,255,0.4)]"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4" />
              Generate 5 Templates
            </button>
          </div>

          {/* ── Results ── */}
          {templates.length > 0 && (
            <div className="space-y-4 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white">Your Connection Request Templates</h2>
              {templates.map((t, i) => (
                <div
                  key={i}
                  className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-5 group hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm text-gray-300 font-geist leading-relaxed flex-1">{t}</p>
                    <button
                      onClick={() => handleCopy(t, i)}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                    >
                      <Icon
                        icon={copied === i ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                        className="w-3.5 h-3.5"
                      />
                      {copied === i ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <span className="block text-right text-xs text-gray-600 font-geist mt-2">
                    {t.length}/300 chars
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Tips for a Great Connection Request
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
              Scale Your LinkedIn Outreach with Handshake
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Send personalized connection requests from multiple LinkedIn accounts simultaneously. Automated rotation, unified inbox, unlimited leads.
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
