'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is a LinkedIn carousel post?',
    a: 'A LinkedIn carousel is a multi-slide document (PDF) shared as a post. Users swipe through slides, making it one of the highest-engagement formats on LinkedIn. Carousels get 1.6x more reach than text-only posts on average.',
  },
  {
    q: 'How many slides should a LinkedIn carousel have?',
    a: 'The sweet spot is 6–10 slides. Fewer than 5 feels thin; more than 12 risks losing attention. Start with a hook slide, deliver value in 4–8 content slides, and end with a CTA.',
  },
  {
    q: 'What makes a good carousel hook slide?',
    a: 'A great hook slide uses a bold statement, surprising statistic, or provocative question. Keep text large (under 10 words), use contrast, and make people curious enough to swipe.',
  },
  {
    q: 'Do I need design tools to create LinkedIn carousels?',
    a: 'You can use Canva, Google Slides, or even PowerPoint — export as PDF and upload to LinkedIn. This tool helps you plan the content and structure before designing.',
  },
  {
    q: 'How do carousels perform compared to other LinkedIn post types?',
    a: 'LinkedIn carousels consistently outperform text and image posts for saves and shares. They average 2–3x more engagement because the swipe mechanic increases dwell time, which signals quality to the algorithm.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:fire-bold-duotone', text: 'Slide 1 is your hook — use a bold claim, number, or question to stop the scroll' },
  { icon: 'solar:document-text-bold-duotone', text: 'One idea per slide. If you need two sentences, you need two slides.' },
  { icon: 'solar:eye-bold-duotone', text: 'Keep text large and readable — no more than 30 words per slide' },
  { icon: 'solar:pallete-2-bold-duotone', text: 'Use consistent branding: same fonts, colors, and layout across all slides' },
  { icon: 'solar:hand-shake-bold-duotone', text: 'End with a clear CTA — follow, comment, save, or visit a link' },
  { icon: 'solar:graph-up-bold-duotone', text: 'Add a "swipe →" indicator on the first few slides to train the behavior' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Carousel Creator',
    description:
      'Free tool to plan and outline LinkedIn carousel posts with slide-by-slide content, best practices, and preview.',
    url: 'https://byhandshake.com/tools/linkedin-carousel-creator',
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
export default function LinkedInCarouselCreator() {
  const [title, setTitle] = useState('')
  const [slideCount, setSlideCount] = useState(6)
  const [slides, setSlides] = useState<string[]>(Array(6).fill(''))
  const [ctaText, setCtaText] = useState('')
  const [generated, setGenerated] = useState(false)
  const [previewIdx, setPreviewIdx] = useState(0)
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  function handleSlideCountChange(count: number) {
    setSlideCount(count)
    setSlides((prev) => {
      if (count > prev.length) return [...prev, ...Array(count - prev.length).fill('')]
      return prev.slice(0, count)
    })
    setGenerated(false)
  }

  function updateSlide(index: number, value: string) {
    const updated = [...slides]
    updated[index] = value
    setSlides(updated)
    setGenerated(false)
  }

  const canGenerate = title.trim() && slides.some((s) => s.trim()) && ctaText.trim()

  function handleGenerate() {
    if (!canGenerate) return
    setGenerated(true)
    setPreviewIdx(0)
  }

  /* Build the full outline with all slides */
  function getFullOutline(): string {
    const validSlides = slides.filter((s) => s.trim())
    const lines: string[] = []
    lines.push(`📑 LINKEDIN CAROUSEL OUTLINE`)
    lines.push(`Title: ${title}`)
    lines.push(`Total Slides: ${validSlides.length + 2}`)
    lines.push(``)
    lines.push(`━━━ SLIDE 1 — HOOK ━━━`)
    lines.push(title)
    lines.push(``)
    validSlides.forEach((s, i) => {
      lines.push(`━━━ SLIDE ${i + 2} — CONTENT ━━━`)
      lines.push(s)
      lines.push(``)
    })
    lines.push(`━━━ SLIDE ${validSlides.length + 2} — CTA ━━━`)
    lines.push(ctaText)
    return lines.join('\n')
  }

  /* All slides for preview including hook and CTA */
  function getAllPreviewSlides(): { label: string; content: string }[] {
    const validSlides = slides.filter((s) => s.trim())
    const all: { label: string; content: string }[] = [
      { label: 'Slide 1 — Hook', content: title },
    ]
    validSlides.forEach((s, i) => {
      all.push({ label: `Slide ${i + 2} — Content`, content: s })
    })
    all.push({ label: `Slide ${validSlides.length + 2} — CTA`, content: ctaText })
    return all
  }

  function handleCopy() {
    navigator.clipboard.writeText(getFullOutline())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
              <Icon icon="solar:slider-vertical-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Carousel Creator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Plan your LinkedIn carousel slide by slide. Outline the hook, content, and CTA — then preview and copy your carousel plan.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">
                  Carousel Title / Hook (Slide 1)
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => { setTitle(e.target.value); setGenerated(false) }}
                  placeholder="e.g. 7 Cold Email Mistakes That Kill Your Reply Rate"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">
                  Number of Content Slides
                </label>
                <div className="flex gap-2">
                  {[5, 6, 7, 8].map((n) => (
                    <button
                      key={n}
                      onClick={() => handleSlideCountChange(n)}
                      className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                        slideCount === n
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      {n} slides
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">
                  Slide Contents
                </label>
                <div className="space-y-3">
                  {slides.map((s, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="shrink-0 mt-2.5 w-7 h-7 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-medium text-gray-400 font-geist">
                        {i + 2}
                      </span>
                      <textarea
                        value={s}
                        onChange={(e) => updateSlide(i, e.target.value)}
                        placeholder={`Content for slide ${i + 2}…`}
                        rows={2}
                        className="flex-1 rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">
                  CTA Slide (Last Slide)
                </label>
                <input
                  type="text"
                  value={ctaText}
                  onChange={(e) => { setCtaText(e.target.value); setGenerated(false) }}
                  placeholder="e.g. Follow me for more cold outreach tips → DM 'strategy' for my free playbook"
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
              Generate Carousel Outline
            </button>
          </div>

          {/* ── Preview ── */}
          {generated && (
            <div className="mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-jakarta font-semibold text-white">Carousel Preview</h2>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                >
                  <Icon
                    icon={copied ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                    className="w-3.5 h-3.5"
                  />
                  {copied ? 'Copied!' : 'Copy Full Outline'}
                </button>
              </div>

              {/* Slide viewer */}
              {(() => {
                const allSlides = getAllPreviewSlides()
                const current = allSlides[previewIdx]
                return (
                  <div className="rounded-xl border border-gray-800 bg-gray-900/50 overflow-hidden">
                    {/* Slide */}
                    <div className="aspect-[4/3] sm:aspect-[16/9] flex flex-col items-center justify-center p-8 sm:p-12 text-center">
                      <span className="text-xs font-medium text-blue-400 font-geist mb-3">
                        {current.label}
                      </span>
                      <p className="text-lg sm:text-2xl font-jakarta font-semibold text-white leading-relaxed max-w-lg">
                        {current.content}
                      </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between px-5 py-3 border-t border-gray-800 bg-gray-900/80">
                      <button
                        onClick={() => setPreviewIdx(Math.max(0, previewIdx - 1))}
                        disabled={previewIdx === 0}
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 font-geist hover:text-white transition-colors disabled:opacity-30"
                      >
                        <Icon icon="solar:arrow-left-linear" className="w-4 h-4" />
                        Prev
                      </button>
                      <div className="flex gap-1.5">
                        {allSlides.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setPreviewIdx(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              i === previewIdx ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setPreviewIdx(Math.min(allSlides.length - 1, previewIdx + 1))}
                        disabled={previewIdx === allSlides.length - 1}
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-400 font-geist hover:text-white transition-colors disabled:opacity-30"
                      >
                        Next
                        <Icon icon="solar:arrow-right-linear" className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              })()}

              {/* Full outline text */}
              <div className="mt-4 rounded-xl border border-gray-800 bg-gray-900/50 p-5">
                <p className="text-sm text-gray-300 font-geist leading-relaxed whitespace-pre-line">
                  {getFullOutline()}
                </p>
              </div>
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Carousel Best Practices
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
              Publish Carousels Across Multiple LinkedIn Accounts
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Create once, post everywhere. Handshake lets you schedule and publish carousel posts from multiple LinkedIn accounts with one click.
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
