'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Headline generators ───────── */
function generateHeadlines(
  name: string,
  role: string,
  company: string,
  audience: string,
  skill: string
): { style: string; headline: string }[] {
  const firstName = name.split(' ')[0] || name

  const raw = [
    // Results-focused
    { style: 'Results-Focused', headline: `${role} | Helping ${audience} achieve measurable results through ${skill}` },
    { style: 'Results-Focused', headline: `${role} at ${company} → Driving growth for ${audience} with ${skill}` },
    // Authority
    { style: 'Authority', headline: `${role} | ${skill} Expert | Building the future at ${company}` },
    { style: 'Authority', headline: `Senior ${role} @ ${company} | Thought leader in ${skill} for ${audience}` },
    // Curiosity
    { style: 'Curiosity', headline: `What if ${audience} could 10x their results? | ${role} at ${company}` },
    { style: 'Curiosity', headline: `${role} exploring the intersection of ${skill} & growth | ${company}` },
    // Social Proof
    { style: 'Social Proof', headline: `${role} at ${company} | Trusted by ${audience} for ${skill}` },
    { style: 'Social Proof', headline: `${role} | ${company} | Helping 1000+ ${audience} level up with ${skill}` },
    // Value Prop
    { style: 'Value Proposition', headline: `I help ${audience} master ${skill} | ${role} @ ${company}` },
    { style: 'Value Proposition', headline: `${role} → ${skill} for ${audience} | Let's connect at ${company}` },
  ]

  return raw.map((h) => ({
    style: h.style,
    headline: h.headline.length > 120 ? h.headline.slice(0, 117) + '...' : h.headline,
  }))
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is the character limit for a LinkedIn headline?',
    a: 'LinkedIn headlines are limited to 120 characters. Your headline appears in search results, connection requests, and comments — so every character counts. Aim for clarity and impact within this limit.',
  },
  {
    q: 'Why is the LinkedIn headline important?',
    a: 'Your headline is the first thing people see after your name. It appears in search results, suggested connections, and every comment you make. A compelling headline can increase profile views by 30% or more.',
  },
  {
    q: 'Should I include my company name in my headline?',
    a: 'Including your company name adds credibility, especially if the company is well-known. However, prioritize value and outcomes over branding. Lead with what you do for your audience.',
  },
  {
    q: 'How often should I update my LinkedIn headline?',
    a: 'Update your headline whenever you change roles, refine your positioning, or shift your target audience. Quarterly reviews are a good practice. Testing different headlines can help you find what resonates best.',
  },
  {
    q: 'Can I use emojis in my LinkedIn headline?',
    a: 'Yes, emojis can help your headline stand out in search results. Use them sparingly — 1-2 max. Stick to professional ones like ✅ 🚀 📈 💡. Avoid anything that looks unprofessional for your industry.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:target-bold-duotone', text: 'Lead with value — what you DO for others, not just your title' },
  { icon: 'solar:user-check-bold-duotone', text: 'Include your target audience so the right people find you' },
  { icon: 'solar:magnifer-bold-duotone', text: 'Use keywords your audience would search for on LinkedIn' },
  { icon: 'solar:ruler-bold-duotone', text: 'Stay under 120 characters — LinkedIn truncates anything longer' },
  { icon: 'solar:star-bold-duotone', text: 'Use the pipe "|" to separate different value points cleanly' },
  { icon: 'solar:refresh-bold-duotone', text: 'A/B test headlines monthly — track profile views as your metric' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Headline Generator',
    description:
      'Free tool to generate 10 compelling LinkedIn headline variations in different styles.',
    url: 'https://byhandshake.com/tools/linkedin-headline-generator',
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

/* ───────── Style colors ───────── */
const styleColors: Record<string, string> = {
  'Results-Focused': 'text-green-400 bg-green-500/10 border-green-500/30',
  Authority: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  Curiosity: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'Social Proof': 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  'Value Proposition': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
}

/* ───────── Page component ───────── */
export default function LinkedInHeadlineGenerator() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [company, setCompany] = useState('')
  const [audience, setAudience] = useState('')
  const [skill, setSkill] = useState('')
  const [headlines, setHeadlines] = useState<{ style: string; headline: string }[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = name && role && company && audience && skill

  function handleGenerate() {
    if (!canGenerate) return
    setHeadlines(generateHeadlines(name, role, company, audience, skill))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
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
              <Icon icon="solar:text-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Headline Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 10 compelling LinkedIn headline variations in different styles — results-focused, authority, curiosity, and social proof.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: 'Your Name', value: name, set: setName, placeholder: 'Jane Smith' },
                { label: 'Your Role', value: role, set: setRole, placeholder: 'Head of Sales' },
                { label: 'Company', value: company, set: setCompany, placeholder: 'Acme Corp' },
                { label: 'Target Audience', value: audience, set: setAudience, placeholder: 'B2B SaaS founders' },
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
                  Key Skill or Value Proposition
                </label>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="e.g. pipeline generation, revenue ops, cold outreach"
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
              Generate 10 Headlines
            </button>
          </div>

          {/* ── Results ── */}
          {headlines.length > 0 && (
            <div className="space-y-3 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white mb-1">Your LinkedIn Headlines</h2>
              <p className="text-sm text-gray-500 font-geist mb-4">Sorted by style. Pick your favorite and paste it into your LinkedIn profile.</p>
              {headlines.map((h, i) => (
                <div
                  key={i}
                  className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-4 group hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block text-[10px] font-semibold font-geist uppercase tracking-wider px-2 py-0.5 rounded-md border mb-2 ${styleColors[h.style] || 'text-gray-400 bg-gray-500/10 border-gray-500/30'}`}
                      >
                        {h.style}
                      </span>
                      <p className="text-sm text-gray-200 font-geist leading-relaxed">{h.headline}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(h.headline, i)}
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
                    className={`block text-right text-xs font-geist mt-1 ${
                      h.headline.length > 120 ? 'text-red-400' : h.headline.length > 100 ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    {h.headline.length}/120 chars
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Tips for an Optimized LinkedIn Headline
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
              Optimize Profiles Across Multiple Accounts
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Managing multiple LinkedIn profiles? Handshake lets you optimize and manage outreach across all your accounts from one dashboard.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Optimizing — Free
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
