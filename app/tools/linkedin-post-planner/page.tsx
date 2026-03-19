'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
type ContentType = 'thought-leadership' | 'case-study' | 'tips' | 'polls' | 'carousels'

interface CalendarEntry {
  day: string
  time: string
  contentType: ContentType
  suggestion: string
}

/* ───────── Content labels ───────── */
const contentLabels: Record<ContentType, { label: string; icon: string; color: string }> = {
  'thought-leadership': { label: 'Thought Leadership', icon: 'solar:lightbulb-bold-duotone', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
  'case-study': { label: 'Case Study', icon: 'solar:graph-up-bold-duotone', color: 'text-green-400 bg-green-500/10 border-green-500/20' },
  tips: { label: 'Tips & How-To', icon: 'solar:checklist-bold-duotone', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
  polls: { label: 'Poll', icon: 'solar:chart-bold-duotone', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  carousels: { label: 'Carousel', icon: 'solar:slider-vertical-bold-duotone', color: 'text-pink-400 bg-pink-500/10 border-pink-500/20' },
}

/* ───────── Suggestions ───────── */
const suggestions: Record<ContentType, string[]> = {
  'thought-leadership': [
    'Share a contrarian take on an industry trend',
    'Predict where your industry is heading in 12 months',
    'Break down a complex concept into simple principles',
    'Share your philosophy on leadership or strategy',
    'Challenge a common "best practice" in your space',
    'Comment on a recent industry news story with your perspective',
    'Share a framework you use for decision-making',
  ],
  'case-study': [
    'Share a before/after story with specific metrics',
    'Document a process improvement and its results',
    'Break down how you helped a client overcome a challenge',
    'Share a "lessons from failure" post-mortem',
    'Highlight a customer success story with data',
    'Show a side-by-side comparison of old vs. new approach',
    'Walk through the ROI of a specific initiative',
  ],
  tips: [
    'Share 5 quick tips your audience can use today',
    'Create a "do this, not that" comparison post',
    'List the tools/resources you use daily',
    'Share a step-by-step guide for a common task',
    'Compile your top productivity hacks',
    'Create a checklist for a common process',
    'Share shortcuts or hidden features in popular tools',
  ],
  polls: [
    'Ask about your audience\'s biggest challenge this quarter',
    'Poll on a trending industry topic (agree/disagree)',
    'Ask what content format they prefer',
    'Run a "this or that" poll on tools/approaches',
    'Ask about their biggest priority for next month',
    'Poll on an industry prediction (agree/disagree/too early)',
    'Ask what skill they want to develop most',
  ],
  carousels: [
    'Create a "7 mistakes to avoid" carousel',
    'Build a step-by-step process walkthrough',
    'Share a data-driven insight with charts/stats per slide',
    'Create a "myths vs. reality" carousel for your industry',
    'Build a resource list carousel with recommendations',
    'Share a timeline or evolution of a concept',
    'Create a comparison carousel (tool A vs. tool B)',
  ],
}

/* ───────── Optimal posting schedule ───────── */
const daySchedule = [
  { day: 'Monday', time: '8:00 AM', priority: 3 },
  { day: 'Tuesday', time: '9:00 AM', priority: 1 },
  { day: 'Wednesday', time: '8:30 AM', priority: 2 },
  { day: 'Thursday', time: '9:00 AM', priority: 1 },
  { day: 'Friday', time: '8:00 AM', priority: 4 },
  { day: 'Saturday', time: '10:00 AM', priority: 5 },
  { day: 'Sunday', time: '10:00 AM', priority: 6 },
]

/* ───────── Generator ───────── */
function generateCalendar(postsPerWeek: number, selectedTypes: ContentType[]): CalendarEntry[] {
  if (selectedTypes.length === 0) return []

  /* Sort days by priority (best engagement days first) */
  const sortedDays = [...daySchedule].sort((a, b) => a.priority - b.priority).slice(0, postsPerWeek)

  /* Re-sort by day order for the calendar */
  const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  sortedDays.sort((a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day))

  /* Distribute content types evenly */
  const calendar: CalendarEntry[] = sortedDays.map((slot, i) => {
    const contentType = selectedTypes[i % selectedTypes.length]
    const typeSuggestions = suggestions[contentType]
    const suggestion = typeSuggestions[Math.floor(Math.random() * typeSuggestions.length)]

    return {
      day: slot.day,
      time: slot.time,
      contentType,
      suggestion,
    }
  })

  return calendar
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'How many times should I post on LinkedIn per week?',
    a: 'For most professionals, 3–5 posts per week is the sweet spot. This balances consistency with quality. 1–2 posts works if you\'re just starting. More than 7 per week can dilute engagement per post.',
  },
  {
    q: 'What is the best day to post on LinkedIn?',
    a: 'Tuesday, Wednesday, and Thursday consistently get the highest engagement. Tuesday and Thursday mornings (8–10 AM) are peak times. Monday afternoons and Friday mornings can also work well.',
  },
  {
    q: 'What content types perform best on LinkedIn?',
    a: 'Carousels and polls tend to get the highest engagement. Thought leadership posts build authority. Case studies drive conversions. The best strategy is a mix of formats to keep your audience engaged.',
  },
  {
    q: 'Should I post at the same time every day?',
    a: 'Consistency in timing helps train your audience to expect your content. However, varying your posting time slightly (within a 1–2 hour window) can help you reach different segments of your audience.',
  },
  {
    q: 'How do I maintain consistency with LinkedIn posting?',
    a: 'Batch-create content in advance. Use a content calendar (like this tool) to plan ahead. Tools like Handshake can schedule posts across multiple accounts so you never miss a posting day.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:calendar-bold-duotone', text: 'Consistency beats frequency — better to post 3x reliably than 7x sporadically' },
  { icon: 'solar:clock-circle-bold-duotone', text: 'Post between 8–10 AM in your audience\'s timezone for peak engagement' },
  { icon: 'solar:shuffle-bold-duotone', text: 'Mix content formats — don\'t post the same type every day' },
  { icon: 'solar:pen-new-round-bold-duotone', text: 'Batch-create content weekly so you\'re never scrambling for ideas' },
  { icon: 'solar:chat-round-dots-bold-duotone', text: 'Engage with comments for 30 min after posting to boost reach' },
  { icon: 'solar:graph-up-bold-duotone', text: 'Review analytics weekly — double down on content types that perform' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Post Scheduler Planner',
    description:
      'Free tool to plan your weekly LinkedIn content calendar with suggested days, times, and content type distribution.',
    url: 'https://byhandshake.com/tools/linkedin-post-planner',
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
export default function LinkedInPostPlanner() {
  const [postsPerWeek, setPostsPerWeek] = useState(3)
  const [selectedTypes, setSelectedTypes] = useState<ContentType[]>(['thought-leadership', 'tips', 'carousels'])
  const [calendar, setCalendar] = useState<CalendarEntry[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function toggleType(type: ContentType) {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const canGenerate = selectedTypes.length > 0

  function handleGenerate() {
    if (!canGenerate) return
    setCalendar(generateCalendar(postsPerWeek, selectedTypes))
  }

  function handleDownload() {
    const lines: string[] = []
    lines.push('LINKEDIN WEEKLY CONTENT CALENDAR')
    lines.push(`Posts per week: ${postsPerWeek}`)
    lines.push(`Content types: ${selectedTypes.map((t) => contentLabels[t].label).join(', ')}`)
    lines.push('')
    lines.push('━'.repeat(60))
    calendar.forEach((entry) => {
      lines.push(`${entry.day} @ ${entry.time} — ${contentLabels[entry.contentType].label}`)
      lines.push(`  💡 ${entry.suggestion}`)
      lines.push('')
    })
    lines.push('━'.repeat(60))
    lines.push('')
    lines.push('Content Distribution:')
    const counts: Record<string, number> = {}
    calendar.forEach((e) => {
      counts[e.contentType] = (counts[e.contentType] || 0) + 1
    })
    Object.entries(counts).forEach(([type, count]) => {
      lines.push(`  ${contentLabels[type as ContentType].label}: ${count}x/week (${Math.round((count / postsPerWeek) * 100)}%)`)
    })
    lines.push('')
    lines.push('Generated by Handshake — byhandshake.com/tools/linkedin-post-planner')

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'linkedin-content-calendar.txt'
    a.click()
    URL.revokeObjectURL(url)
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
              <Icon icon="solar:calendar-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Post Scheduler Planner
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Plan your weekly LinkedIn content calendar. Choose your frequency and content types — get a ready-to-use schedule with suggestions.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Posts Per Week</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                    <button
                      key={n}
                      onClick={() => setPostsPerWeek(n)}
                      className={`flex-1 rounded-lg px-2 py-2.5 text-xs font-medium font-geist border transition-colors ${
                        postsPerWeek === n
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Content Types (select at least 1)</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(Object.keys(contentLabels) as ContentType[]).map((type) => {
                    const info = contentLabels[type]
                    const selected = selectedTypes.includes(type)
                    return (
                      <button
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                          selected
                            ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                            : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                        }`}
                      >
                        <Icon icon={info.icon} className="w-3.5 h-3.5" />
                        {info.label}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-[0_4px_15px_rgba(0,123,255,0.4)]"
            >
              <Icon icon="solar:magic-stick-3-bold-duotone" className="w-4 h-4" />
              Generate Calendar
            </button>
          </div>

          {/* ── Calendar Results ── */}
          {calendar.length > 0 && (
            <div className="mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-jakarta font-semibold text-white">Your Weekly Calendar</h2>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                >
                  <Icon icon="solar:download-bold-duotone" className="w-3.5 h-3.5" />
                  Download as Text
                </button>
              </div>

              <div className="space-y-3">
                {calendar.map((entry, i) => {
                  const info = contentLabels[entry.contentType]
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-xl border border-gray-800 bg-gray-900/50 p-4 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="shrink-0 text-center">
                        <span className="block text-sm font-semibold text-white font-jakarta">{entry.day}</span>
                        <span className="block text-xs text-gray-500 font-geist">{entry.time}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium font-geist border ${info.color} mb-1.5`}>
                          <Icon icon={info.icon} className="w-3 h-3" />
                          {info.label}
                        </span>
                        <p className="text-sm text-gray-300 font-geist">{entry.suggestion}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Distribution */}
              <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <h3 className="text-sm font-semibold text-white font-jakarta mb-3">Content Distribution</h3>
                <div className="space-y-2">
                  {(() => {
                    const counts: Record<string, number> = {}
                    calendar.forEach((e) => { counts[e.contentType] = (counts[e.contentType] || 0) + 1 })
                    return Object.entries(counts).map(([type, count]) => {
                      const info = contentLabels[type as ContentType]
                      const pct = Math.round((count / calendar.length) * 100)
                      return (
                        <div key={type} className="flex items-center gap-3">
                          <span className="text-xs text-gray-400 font-geist w-32 shrink-0">{info.label}</span>
                          <div className="flex-1 bg-gray-800 rounded-full h-2 overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="text-xs text-gray-400 font-geist shrink-0">{count}x ({pct}%)</span>
                        </div>
                      )
                    })
                  })()}
                </div>
              </div>
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Content Planning Tips
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
              Schedule and Publish Your Calendar with Handshake
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Turn your content plan into reality. Handshake lets you schedule posts across multiple LinkedIn accounts and never miss a posting day.
            </p>
            <a
              href="https://app.byhandshake.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300"
            >
              Start Scheduling — Free
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
