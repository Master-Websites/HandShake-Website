'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Summary generators ───────── */
function generateSummaries(
  name: string,
  role: string,
  years: string,
  achievements: string[],
  audience: string,
  cta: string
): { style: string; summary: string }[] {
  const firstName = name.split(' ')[0] || name
  const validAchievements = achievements.filter((a) => a.trim())
  const achievementBlock = validAchievements.map((a) => `✅ ${a}`).join('\n')
  const achievementInline = validAchievements.join(', ')

  const summaries = [
    {
      style: 'Storyteller',
      summary: `${years} years ago, I made a decision that changed everything — I went all-in on ${role.toLowerCase()}.

Since then, I've had the privilege of working with incredible teams and driving real results:

${achievementBlock}

But here's what I've learned: success isn't just about numbers. It's about building genuine relationships and solving real problems for real people.

Today, I help ${audience} navigate the same challenges I once faced. Because the best advice doesn't come from textbooks — it comes from experience.

${cta}

Let's connect — I'm always up for a good conversation about ${role.toLowerCase()} and what it takes to win.`,
    },
    {
      style: 'Results-Driven',
      summary: `${role} with ${years}+ years of experience delivering measurable impact.

Here's what I bring to the table:

${achievementBlock}

I specialize in helping ${audience} achieve their goals through proven strategies, data-driven decisions, and relentless execution.

My approach is simple: understand the problem deeply, move fast, measure everything, and iterate. No fluff, no vanity metrics — just results that matter.

${cta}

Want to chat? I'm always open to connecting with fellow professionals who are serious about growth.`,
    },
    {
      style: 'Authority',
      summary: `As a ${role} with ${years} years in the industry, I've built a reputation for ${achievementInline.toLowerCase()}.

My expertise spans the full spectrum of ${role.toLowerCase()} — from strategy to execution. I've worked with ${audience} across multiple verticals, and the pattern is always the same: the fundamentals win.

What sets me apart:
${achievementBlock}

I share insights on ${role.toLowerCase()} regularly here on LinkedIn. If you're a ${audience.toLowerCase()} looking to level up, follow along — I post actionable strategies based on real-world experience, not theory.

${cta}`,
    },
  ]

  return summaries.map((s) => ({
    style: s.style,
    summary: s.summary.length > 2600 ? s.summary.slice(0, 2597) + '...' : s.summary,
  }))
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is the character limit for LinkedIn\'s About section?',
    a: 'LinkedIn\'s About (Summary) section has a 2,600 character limit. This includes spaces and line breaks. Aim to use most of this space — profiles with detailed summaries get significantly more profile views.',
  },
  {
    q: 'What should I include in my LinkedIn summary?',
    a: 'A great LinkedIn summary includes: who you are, what you do, who you help, key achievements or results, your unique value proposition, and a clear call-to-action. Write in first person for a personal touch.',
  },
  {
    q: 'Should I write my LinkedIn summary in first or third person?',
    a: 'Write in first person ("I help..." vs "Jane helps..."). First person feels more authentic and approachable. Third person can come across as detached. The exception is very senior executives where third person may be expected.',
  },
  {
    q: 'How often should I update my LinkedIn summary?',
    a: 'Update your summary whenever you have new achievements, change roles, or shift your target audience. A good practice is to review it quarterly. Keep it current — an outdated summary undermines your credibility.',
  },
  {
    q: 'Does LinkedIn SEO apply to the About section?',
    a: 'Yes! LinkedIn\'s search algorithm indexes your About section. Include relevant keywords that your target audience might search for. Use them naturally — keyword stuffing hurts readability and won\'t help rankings.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:user-speak-bold-duotone', text: 'Write in first person — it feels more authentic and personal' },
  { icon: 'solar:fire-bold-duotone', text: 'Open with a hook — your first 3 lines appear before "See more"' },
  { icon: 'solar:graph-up-bold-duotone', text: 'Include specific numbers and results to build credibility' },
  { icon: 'solar:target-bold-duotone', text: 'Mention who you help (your target audience) explicitly' },
  { icon: 'solar:link-round-bold-duotone', text: 'End with a clear CTA — tell readers what to do next' },
  { icon: 'solar:text-bold-duotone', text: 'Use line breaks and white space — no one reads walls of text' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Summary Generator',
    description:
      'Free tool to generate 3 compelling LinkedIn About section variations in storyteller, results-driven, and authority styles.',
    url: 'https://byhandshake.com/tools/linkedin-summary-generator',
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
  Storyteller: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  'Results-Driven': 'text-green-400 bg-green-500/10 border-green-500/30',
  Authority: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
}

/* ───────── Page component ───────── */
export default function LinkedInSummaryGenerator() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [years, setYears] = useState('')
  const [achievements, setAchievements] = useState(['', '', ''])
  const [audience, setAudience] = useState('')
  const [cta, setCta] = useState('')
  const [summaries, setSummaries] = useState<{ style: string; summary: string }[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = name && role && years && achievements.some((a) => a.trim()) && audience

  function handleGenerate() {
    if (!canGenerate) return
    setSummaries(generateSummaries(name, role, years, achievements, audience, cta || 'Let\'s connect!'))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  function updateAchievement(index: number, value: string) {
    const updated = [...achievements]
    updated[index] = value
    setAchievements(updated)
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
              <Icon icon="solar:document-text-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Summary Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 3 compelling &quot;About&quot; section variations — storyteller, results-driven, and authority styles. Under 2,600 characters.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: 'Your Name', value: name, set: setName, placeholder: 'Jane Smith' },
                { label: 'Your Role', value: role, set: setRole, placeholder: 'Head of Sales' },
                { label: 'Years of Experience', value: years, set: setYears, placeholder: '8' },
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
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Key Achievements</label>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <input
                    key={i}
                    type="text"
                    value={a}
                    onChange={(e) => updateAchievement(i, e.target.value)}
                    placeholder={`Achievement ${i + 1} (e.g. "Grew pipeline from $2M to $10M in 18 months")`}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                ))}
              </div>
            </div>

            <div className="mt-5">
              <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">
                Call to Action <span className="text-gray-600">(optional)</span>
              </label>
              <input
                type="text"
                value={cta}
                onChange={(e) => setCta(e.target.value)}
                placeholder='e.g. "DM me to chat about scaling your outbound engine."'
                className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_15px_rgba(0,123,255,0.4)]"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4" />
              Generate 3 Summaries
            </button>
          </div>

          {/* ── Results ── */}
          {summaries.length > 0 && (
            <div className="space-y-4 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white">Your LinkedIn Summaries</h2>
              {summaries.map((s, i) => (
                <div
                  key={i}
                  className="relative rounded-xl border border-gray-800 bg-gray-900/50 p-5 group hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <span
                      className={`inline-block text-[10px] font-semibold font-geist uppercase tracking-wider px-2 py-0.5 rounded-md border ${styleColors[s.style] || 'text-gray-400 bg-gray-500/10 border-gray-500/30'}`}
                    >
                      {s.style}
                    </span>
                    <button
                      onClick={() => handleCopy(s.summary, i)}
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
                    {s.summary}
                  </p>
                  <span
                    className={`block text-right text-xs font-geist mt-2 ${
                      s.summary.length > 2600 ? 'text-red-400' : s.summary.length > 2300 ? 'text-yellow-400' : 'text-gray-600'
                    }`}
                  >
                    {s.summary.length.toLocaleString()}/2,600 chars
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Tips for a Standout LinkedIn Summary
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
              Great Profile. Now Scale Your Outreach.
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              An optimized profile is step one. Handshake lets you leverage it across multiple LinkedIn accounts to reach more prospects automatically.
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
