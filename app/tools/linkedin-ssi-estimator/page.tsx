'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
interface Category {
  id: string
  title: string
  icon: string
  questions: string[]
  recommendations: string[]
}

/* ───────── SSI Categories ───────── */
const categories: Category[] = [
  {
    id: 'brand',
    title: 'Establish Your Professional Brand',
    icon: 'solar:user-bold-duotone',
    questions: [
      'I have a professional headshot as my profile photo',
      'My headline clearly communicates my value proposition (not just my job title)',
      'My About/Summary section is complete and compelling (500+ words)',
      'I have rich media (articles, presentations, links) in my Featured section',
      'I regularly share original content or insights on LinkedIn (2+ posts/week)',
    ],
    recommendations: [
      'Upload a high-quality, professional headshot — profiles with photos get 21x more views',
      'Rewrite your headline to show the value you provide, not just your title. Example: "Helping B2B teams book 3x more meetings" vs "Sales Manager"',
      'Expand your About section with your story, results, and a clear CTA. Use all 2,600 characters',
      'Add featured content — articles, videos, links to case studies. This is prime real estate',
      'Commit to posting 3–5 times per week. Consistency builds authority faster than perfection',
    ],
  },
  {
    id: 'find',
    title: 'Find the Right People',
    icon: 'solar:magnifer-bold-duotone',
    questions: [
      'I use LinkedIn Search or Sales Navigator to find prospects regularly',
      'I view 15+ profiles per week of potential connections or leads',
      'I use Boolean search operators to narrow down my ideal audience',
      'I leverage LinkedIn Groups relevant to my industry',
      'I review "People Also Viewed" and suggested connections weekly',
    ],
    recommendations: [
      'Spend 15 minutes daily using LinkedIn Search to identify and research ideal prospects',
      'View at least 15–20 profiles per week — many will view you back, creating warm leads',
      'Learn Boolean search (AND, OR, NOT) to build targeted prospect lists',
      'Join 3–5 active LinkedIn Groups in your industry and participate in discussions',
      'Check "People Also Viewed" on prospect profiles to discover similar leads',
    ],
  },
  {
    id: 'engage',
    title: 'Engage with Insights',
    icon: 'solar:chat-round-dots-bold-duotone',
    questions: [
      'I comment thoughtfully on other people\'s posts daily (not just "Great post!")',
      'I share industry news and articles with my own commentary',
      'I respond to all comments on my posts within 2 hours',
      'I engage with content from my prospects and target accounts',
      'I use LinkedIn reactions and save posts that are relevant to my network',
    ],
    recommendations: [
      'Leave 5–10 thoughtful comments daily on posts from your network and target accounts',
      'When sharing articles, always add your perspective — raw reshares get low engagement',
      'Reply to every comment on your posts within the first hour. This signals quality to the algorithm',
      'Create a list of 20 target accounts and engage with their content weekly',
      'Use the Save feature and revisit saved posts to reference in your own content',
    ],
  },
  {
    id: 'relationships',
    title: 'Build Relationships',
    icon: 'solar:hand-shake-bold-duotone',
    questions: [
      'I send personalized connection requests (not the default message)',
      'I have 500+ connections on LinkedIn',
      'I message new connections within 24 hours with a value-first approach',
      'I maintain relationships through regular check-ins (not just when I need something)',
      'I\'ve received or given LinkedIn recommendations in the past 3 months',
    ],
    recommendations: [
      'Always personalize connection requests. Reference their content, mutual connections, or shared interests',
      'Grow your network strategically — aim for 500+ connections in your target industry',
      'Send a follow-up message within 24 hours of a new connection. Thank them and start a real conversation',
      'Set a weekly reminder to check in with 5 connections. Share an article, congratulate them, or just say hi',
      'Ask for and give recommendations. They build trust and appear prominently on your profile',
    ],
  },
]

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is LinkedIn SSI (Social Selling Index)?',
    a: 'LinkedIn SSI is a score from 0–100 that measures how effective you are at establishing your professional brand, finding the right people, engaging with insights, and building relationships on LinkedIn. You can check your real SSI at linkedin.com/sales/ssi.',
  },
  {
    q: 'What is a good LinkedIn SSI score?',
    a: 'An SSI score above 70 is considered good, and above 80 is excellent. Top performers in social selling typically score 75+. The average LinkedIn user scores around 30–40.',
  },
  {
    q: 'How often does LinkedIn update my SSI score?',
    a: 'LinkedIn updates your SSI score daily. It reflects your activity over the past 90 days, so consistent effort will steadily improve your score over 1–3 months.',
  },
  {
    q: 'Does SSI score affect my LinkedIn reach?',
    a: 'While LinkedIn hasn\'t confirmed SSI directly impacts the algorithm, users with higher SSI scores tend to get more profile views, connection acceptance rates, and post engagement. The behaviors that improve SSI also improve reach.',
  },
  {
    q: 'How can I quickly improve my LinkedIn SSI score?',
    a: 'Focus on the lowest-scoring category first. Complete your profile (brand), search for prospects daily (find), comment on posts (engage), and send personalized connection requests (relationships). Consistent daily activity for 30 days can boost your score 20+ points.',
  },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn SSI Score Estimator',
    description:
      'Free checklist-based tool to estimate your LinkedIn Social Selling Index (SSI) score with category breakdowns and personalized recommendations.',
    url: 'https://byhandshake.com/tools/linkedin-ssi-estimator',
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
export default function LinkedInSSIEstimator() {
  /* answers[categoryIndex][questionIndex] = true/false */
  const [answers, setAnswers] = useState<boolean[][]>(
    categories.map((c) => Array(c.questions.length).fill(false))
  )
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function toggleAnswer(catIdx: number, qIdx: number) {
    setAnswers((prev) => {
      const copy = prev.map((arr) => [...arr])
      copy[catIdx][qIdx] = !copy[catIdx][qIdx]
      return copy
    })
    setSubmitted(false)
  }

  function getCategoryScore(catIdx: number): number {
    return answers[catIdx].filter(Boolean).length * 5
  }

  function getTotalScore(): number {
    return answers.reduce((total, cat) => total + cat.filter(Boolean).length * 5, 0)
  }

  function getScoreLabel(score: number): { label: string; color: string } {
    if (score >= 80) return { label: 'Excellent', color: 'text-green-400' }
    if (score >= 60) return { label: 'Good', color: 'text-blue-400' }
    if (score >= 40) return { label: 'Average', color: 'text-yellow-400' }
    return { label: 'Needs Work', color: 'text-red-400' }
  }

  function getCategoryColor(score: number): string {
    if (score >= 20) return 'text-green-400'
    if (score >= 15) return 'text-blue-400'
    if (score >= 10) return 'text-yellow-400'
    return 'text-red-400'
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
              <Icon icon="solar:chart-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn SSI Score Estimator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Estimate your LinkedIn Social Selling Index with our 20-question checklist. Get your score across 4 categories with personalized recommendations.
            </p>
          </div>

          {/* ── Checklist ── */}
          <div className="space-y-6 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            {categories.map((cat, catIdx) => (
              <div
                key={cat.id}
                className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Icon icon={cat.icon} className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-jakarta font-semibold text-white">{cat.title}</h2>
                    <span className="text-xs text-gray-500 font-geist">{getCategoryScore(catIdx)}/25 points</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {cat.questions.map((q, qIdx) => (
                    <label
                      key={qIdx}
                      className={`flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${
                        answers[catIdx][qIdx]
                          ? 'border-blue-500/30 bg-blue-500/5'
                          : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={answers[catIdx][qIdx]}
                        onChange={() => toggleAnswer(catIdx, qIdx)}
                        className="mt-0.5 h-4 w-4 rounded border-gray-600 bg-gray-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-0"
                      />
                      <span className="text-sm text-gray-300 font-geist">{q}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Calculate button ── */}
          <div className="text-center mb-8">
            <button
              onClick={() => setSubmitted(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              <Icon icon="solar:calculator-bold-duotone" className="w-4 h-4" />
              Calculate My SSI Score
            </button>
          </div>

          {/* ── Results ── */}
          {submitted && (
            <div className="mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              {/* Total Score */}
              <div className="text-center rounded-2xl border border-gray-800 bg-gray-900/60 p-8 sm:p-12 mb-6">
                <p className="text-sm text-gray-400 font-geist mb-2">Your Estimated SSI Score</p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className={`text-6xl sm:text-7xl font-jakarta font-bold ${getScoreLabel(getTotalScore()).color}`}>
                    {getTotalScore()}
                  </span>
                  <span className="text-2xl text-gray-600 font-jakarta font-bold">/100</span>
                </div>
                <span className={`text-lg font-geist font-medium ${getScoreLabel(getTotalScore()).color}`}>
                  {getScoreLabel(getTotalScore()).label}
                </span>
              </div>

              {/* Category Breakdown */}
              <div className="grid gap-4 sm:grid-cols-2 mb-6">
                {categories.map((cat, catIdx) => {
                  const score = getCategoryScore(catIdx)
                  return (
                    <div
                      key={cat.id}
                      className="rounded-xl border border-gray-800 bg-gray-900/50 p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Icon icon={cat.icon} className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-medium text-white font-jakarta">{cat.title}</span>
                        </div>
                        <span className={`text-lg font-bold font-jakarta ${getCategoryColor(score)}`}>
                          {score}/25
                        </span>
                      </div>
                      <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${(score / 25) * 100}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Recommendations */}
              <div className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 sm:p-8">
                <h3 className="text-xl font-jakarta font-semibold text-white mb-5">
                  Personalized Recommendations
                </h3>
                <div className="space-y-6">
                  {categories.map((cat, catIdx) => {
                    /* Show recommendations for unchecked items */
                    const unchecked = answers[catIdx]
                      .map((checked, qIdx) => ({ checked, qIdx }))
                      .filter((item) => !item.checked)

                    if (unchecked.length === 0) return (
                      <div key={cat.id} className="flex items-start gap-3">
                        <Icon icon="solar:check-circle-bold-duotone" className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium text-green-400 font-geist">{cat.title} — Perfect!</span>
                          <p className="text-xs text-gray-500 font-geist mt-0.5">You&apos;re nailing this category. Keep it up!</p>
                        </div>
                      </div>
                    )

                    return (
                      <div key={cat.id}>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon icon={cat.icon} className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-semibold text-white font-jakarta">{cat.title}</span>
                        </div>
                        <div className="space-y-2 pl-6">
                          {unchecked.map(({ qIdx }) => (
                            <div key={qIdx} className="flex items-start gap-2">
                              <Icon icon="solar:arrow-right-linear" className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-400 font-geist">
                                {cat.recommendations[qIdx]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ── CTA ── */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-gray-900/50 p-8 sm:p-12 mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <h2 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-3">
              Boost Your SSI Score with Handshake
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Post consistently, engage at scale, and build your professional brand across multiple LinkedIn accounts — all from one dashboard.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Improve Your Score — Free
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
