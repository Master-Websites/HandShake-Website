'use client'

import { useState, useMemo } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Checklist items ───────── */
const checklistItems = [
  {
    id: 'photo',
    label: 'Professional profile photo',
    tip: 'Use a high-quality headshot with good lighting and a clean background. Profiles with photos get 21× more views.',
  },
  {
    id: 'banner',
    label: 'Custom banner image',
    tip: "Design a branded banner that communicates your value proposition or company. Don't leave it as the default LinkedIn blue.",
  },
  {
    id: 'headline',
    label: 'Keyword-rich headline',
    tip: "Go beyond your job title. Include keywords your target audience searches for, e.g., \"Helping B2B SaaS companies scale pipeline through LinkedIn outreach.\"",
  },
  {
    id: 'about',
    label: 'Compelling About section',
    tip: 'Write in first person. Lead with the problem you solve, who you help, and include a clear call-to-action. Aim for 3-5 short paragraphs.',
  },
  {
    id: 'featured',
    label: 'Featured section with content',
    tip: 'Pin your best posts, articles, case studies, or external links. This section is prime real estate — use it to showcase results.',
  },
  {
    id: 'experience',
    label: 'Experience with measurable results',
    tip: "Don't just list responsibilities. Include metrics: \"Increased pipeline by 340%\" or \"Booked 50+ meetings/month via LinkedIn.\"",
  },
  {
    id: 'connections',
    label: '500+ connections',
    tip: "Having 500+ connections signals credibility and expands your reach. It also means your profile shows \"500+\" instead of an exact number.",
  },
  {
    id: 'recommendations',
    label: 'At least 3 recommendations',
    tip: 'Ask clients, colleagues, or managers for specific recommendations. Quality social proof builds trust with prospects who visit your profile.',
  },
  {
    id: 'activity',
    label: 'Active in the last 7 days',
    tip: "Post, comment, or engage at least weekly. An active profile signals you're approachable and invested in your professional community.",
  },
  {
    id: 'url',
    label: 'Custom LinkedIn URL',
    tip: 'Change your URL from linkedin.com/in/john-doe-a1b2c3 to linkedin.com/in/johndoe. Cleaner, more professional, and better for SEO.',
  },
]

/* ───────── Score tiers ───────── */
function getScoreTier(score: number) {
  if (score >= 90) return { label: 'Outstanding', color: 'text-emerald-400', bg: 'bg-emerald-500', ring: 'ring-emerald-500/30' }
  if (score >= 70) return { label: 'Strong', color: 'text-blue-400', bg: 'bg-blue-500', ring: 'ring-blue-500/30' }
  if (score >= 50) return { label: 'Needs Work', color: 'text-yellow-400', bg: 'bg-yellow-500', ring: 'ring-yellow-500/30' }
  return { label: 'Weak', color: 'text-red-400', bg: 'bg-red-500', ring: 'ring-red-500/30' }
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'Why does my LinkedIn profile matter for outreach?',
    a: 'Your LinkedIn profile is your landing page. When you send a connection request or message, the first thing prospects do is visit your profile. A weak profile kills conversion rates before the conversation even starts.',
  },
  {
    q: "What's the most important element of a LinkedIn profile?",
    a: 'Your headline and profile photo are the most important — they appear in search results, connection requests, and messages. A strong headline with relevant keywords can double your acceptance rates.',
  },
  {
    q: 'How often should I update my LinkedIn profile?',
    a: 'Review your profile quarterly. Update your headline when your focus shifts, refresh your Featured section with recent wins, and keep your About section aligned with your current ICP.',
  },
  {
    q: 'Does having 500+ connections actually matter?',
    a: "Yes. LinkedIn shows \"500+\" for profiles above 500 connections, which signals credibility. It also dramatically increases your content's reach and the number of 2nd-degree connections you can message.",
  },
  {
    q: 'How does profile quality affect outreach response rates?',
    a: "Profiles scoring 80+ on optimization typically see 2-3× higher acceptance and reply rates compared to unoptimized profiles. It's the highest-leverage improvement you can make before scaling outreach.",
  },
]

/* ───────── Schemas ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Profile Optimization Score',
    description:
      'Free checklist-based LinkedIn profile scorer. Check off 10 profile elements, get your score out of 100, and receive personalized recommendations.',
    url: 'https://byhandshake.com/tools/linkedin-profile-score',
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
export default function ProfileScore() {
  const [checked, setChecked] = useState<Set<string>>(new Set())
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const score = checked.size * 10
  const tier = getScoreTier(score)

  const recommendations = useMemo(
    () => checklistItems.filter((item) => !checked.has(item.id)),
    [checked]
  )

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium font-geist mb-6">
              <Icon icon="solar:chart-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Profile Optimization Score
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Score your LinkedIn profile out of 100. Check off what you have, see your score, and get personalized recommendations to improve.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_300px] [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            {/* ── Checklist ── */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8">
              <h2 className="text-lg font-jakarta font-semibold text-white mb-5">Profile Checklist</h2>
              <div className="space-y-3">
                {checklistItems.map((item) => {
                  const isChecked = checked.has(item.id)
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      className={`w-full flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                        isChecked
                          ? 'border-blue-500/40 bg-blue-500/10'
                          : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                      }`}
                    >
                      <div
                        className={`shrink-0 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-600'
                        }`}
                      >
                        {isChecked && (
                          <Icon icon="solar:check-read-linear" className="w-3.5 h-3.5 text-white" />
                        )}
                      </div>
                      <span
                        className={`text-sm font-geist transition-colors ${
                          isChecked ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ── Score card (sticky) ── */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 text-center">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-geist mb-3">
                  Your Score
                </p>
                <div
                  className={`inline-flex items-center justify-center w-28 h-28 rounded-full ring-4 ${tier.ring} mb-4 transition-all duration-500`}
                >
                  <span className={`text-4xl font-jakarta font-bold ${tier.color}`}>
                    {score}
                  </span>
                </div>
                <p className={`text-lg font-jakarta font-semibold ${tier.color} mb-1`}>
                  {tier.label}
                </p>
                <p className="text-xs text-gray-500 font-geist">
                  {checked.size} of {checklistItems.length} items checked
                </p>

                {/* Progress bar */}
                <div className="mt-5 w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${tier.bg} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${score}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Recommendations ── */}
          {recommendations.length > 0 && (
            <div className="mt-10 [animation:fadeSlideIn_0.8s_ease-out_0.35s_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white mb-5">
                Recommendations to Improve
              </h2>
              <div className="space-y-3">
                {recommendations.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 flex items-start gap-3"
                  >
                    <Icon icon="solar:lightbulb-bold-duotone" className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white font-geist">{item.label}</p>
                      <p className="text-xs text-gray-400 font-geist mt-1 leading-relaxed">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {score === 100 && (
            <div className="mt-10 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-5 text-center [animation:fadeSlideIn_0.4s_ease-out_both]">
              <Icon icon="solar:cup-star-bold-duotone" className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <p className="text-lg font-jakarta font-semibold text-emerald-400">Perfect Score! 🎉</p>
              <p className="text-sm text-gray-400 font-geist mt-1">
                Your profile is fully optimized. Now it's time to scale your outreach.
              </p>
            </div>
          )}

          {/* ── CTA ── */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-gray-900/50 p-8 sm:p-12 mt-14 mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <h2 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-3">
              Your Profile Is Your Landing Page
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Now that your profile is optimized, start scaling your outreach with Handshake. Multi-sender rotation, unified inbox, unlimited leads.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Scaling with Handshake
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
