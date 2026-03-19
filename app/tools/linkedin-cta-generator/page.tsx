'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
type Goal = 'get-comments' | 'drive-traffic' | 'book-calls' | 'grow-followers'

/* ───────── Generator ───────── */
function generateCTAs(goal: Goal, context: string): string[] {
  const templates: Record<Goal, ((ctx: string) => string)[]> = {
    'get-comments': [
      (ctx) => `What's your take on ${ctx}? Drop your answer below 👇`,
      (ctx) => `Agree or disagree? I'd love to hear your perspective on ${ctx}.`,
      (ctx) => `What's the #1 thing you'd change about ${ctx}? Comment below.`,
      (ctx) => `Hot take: most people get ${ctx} wrong. Prove me wrong in the comments 🔥`,
      (ctx) => `If you could give one piece of advice about ${ctx}, what would it be?`,
      (ctx) => `Tag someone who needs to hear this about ${ctx}. Seriously.`,
      (ctx) => `Finish this sentence: "The biggest mistake in ${ctx} is ___"`,
      (ctx) => `I'm curious — how are you approaching ${ctx} right now? Share below.`,
      (ctx) => `Which resonated most with you? Comment 1, 2, or 3 and tell me why.`,
      (ctx) => `Unpopular opinion? Share your contrarian take on ${ctx} below 👇`,
      (ctx) => `What's the one thing about ${ctx} you wish someone told you sooner?`,
      (ctx) => `Rate your confidence with ${ctx} from 1–10. Be honest!`,
    ],
    'drive-traffic': [
      (ctx) => `Want the full breakdown of ${ctx}? Link in comments 👇`,
      (ctx) => `I wrote a deep dive on ${ctx}. Check the link in the first comment.`,
      (ctx) => `This post barely scratches the surface of ${ctx}. Full guide → link in comments.`,
      (ctx) => `Curious about ${ctx}? I put together a free resource. Grab it → link in comments.`,
      (ctx) => `I've compiled everything I know about ${ctx} into one guide. Link below ⬇️`,
      (ctx) => `Want the full playbook on ${ctx}? Drop a "🔥" and I'll send you the link.`,
      (ctx) => `The ${ctx} cheat sheet is live. Link in the first comment — save it for later.`,
      (ctx) => `Stop guessing about ${ctx}. I wrote the definitive guide → comments.`,
      (ctx) => `Full case study on ${ctx} with all the numbers. Link in comments 📊`,
      (ctx) => `I'm sharing my exact ${ctx} framework for free. Grab it → link in comments.`,
      (ctx) => `Everything in this post comes from our ${ctx} report. Full PDF in comments.`,
      (ctx) => `Bookmark this post about ${ctx}. And check the link in comments for more.`,
    ],
    'book-calls': [
      (ctx) => `Want to talk about how this applies to your ${ctx}? DM me "strategy" and let's chat.`,
      (ctx) => `If ${ctx} is keeping you up at night, let's fix it. Book a free call → link in bio.`,
      (ctx) => `I'm opening 5 free strategy calls this week for ${ctx}. DM me "call" to grab a spot.`,
      (ctx) => `Stop struggling with ${ctx} alone. Let's talk — DM me "help" and I'll send my calendar.`,
      (ctx) => `Want personalized advice on ${ctx}? Comment "interested" and I'll reach out.`,
      (ctx) => `I help people solve ${ctx} every day. If that's you, DM me "let's go" 🚀`,
      (ctx) => `Ready to take your ${ctx} to the next level? Let's talk. Link to my calendar in bio.`,
      (ctx) => `Struggling with ${ctx}? I've got 3 free audit slots this week. DM me "audit."`,
      (ctx) => `This ${ctx} strategy has generated millions for our clients. Want to see if it works for you? DM me.`,
      (ctx) => `If you nodded along to any of this ${ctx} advice, let's talk. Seriously. DM me "ready."`,
      (ctx) => `I'm looking for 3 people serious about ${ctx} to work with this month. DM me if that's you.`,
      (ctx) => `The first step to fixing ${ctx}? A conversation. My DMs are open — let's chat.`,
    ],
    'grow-followers': [
      (ctx) => `If you found this ${ctx} content useful, follow me for more like it.`,
      (ctx) => `I post about ${ctx} daily. Hit follow so you don't miss the next one.`,
      (ctx) => `♻️ Repost this to help someone in your network with ${ctx}. Follow for more.`,
      (ctx) => `This is just 1 of 100+ posts I've written about ${ctx}. Follow along.`,
      (ctx) => `Found this valuable? I share ${ctx} insights every day. Follow for your daily dose.`,
      (ctx) => `Like this ${ctx} breakdown? There's more where this came from → follow me.`,
      (ctx) => `Save this post for later. And follow me for daily ${ctx} tips you can actually use.`,
      (ctx) => `I'm on a mission to simplify ${ctx} for everyone. Follow the journey.`,
      (ctx) => `If ${ctx} matters to you, we should be connected. Follow + let's grow together.`,
      (ctx) => `New here? I break down ${ctx} in simple, actionable posts. Follow and see for yourself.`,
      (ctx) => `Don't just like this — follow me so the algorithm shows you more ${ctx} content.`,
      (ctx) => `🔔 Turn on notifications for my profile if you want ${ctx} content in your feed daily.`,
    ],
  }

  const fns = templates[goal]
  /* Pick 10 unique ones */
  const shuffled = [...fns].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 10).map((fn) => fn(context))
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is a CTA on LinkedIn?',
    a: 'A CTA (Call to Action) is the closing line of your LinkedIn post that tells readers what to do next — comment, click a link, follow you, or DM you. Strong CTAs can double your engagement.',
  },
  {
    q: 'Where should I put the CTA in my LinkedIn post?',
    a: 'Always at the end of your post. Your CTA should be the last thing people read. Some creators also add a soft CTA in the middle (e.g., "more on this below") to keep people scrolling.',
  },
  {
    q: 'What type of CTA gets the most engagement on LinkedIn?',
    a: 'Questions and opinion-based CTAs get the most comments. "Agree or disagree?" and "What would you add?" consistently outperform generic CTAs like "Like if you agree." Make it easy and interesting to respond.',
  },
  {
    q: 'Should every LinkedIn post have a CTA?',
    a: 'Yes, every post should end with some direction. Even if it\'s just "Follow for more" or a question. Posts without CTAs leave engagement on the table. Match the CTA to your goal for that specific post.',
  },
  {
    q: 'How do I make my LinkedIn CTA feel natural?',
    a: 'Tie the CTA to the content of your post. If you shared tips, ask which one resonated. If you told a story, ask if they\'ve experienced something similar. The best CTAs feel like a natural extension of the conversation.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:target-bold-duotone', text: 'Match your CTA to your goal — comments, traffic, calls, or followers need different CTAs' },
  { icon: 'solar:chat-round-dots-bold-duotone', text: 'Questions outperform statements — "What do you think?" beats "Like if you agree"' },
  { icon: 'solar:minimalistic-magnifer-bold-duotone', text: 'Be specific — "Comment your #1 tip" is better than "Comment below"' },
  { icon: 'solar:emoji-funny-circle-bold-duotone', text: 'Use emojis sparingly to draw attention — one 👇 or 🔥 is enough' },
  { icon: 'solar:user-plus-bold-duotone', text: 'DM-based CTAs (e.g., "DM me \'strategy\'") feel exclusive and get high conversion' },
  { icon: 'solar:refresh-bold-duotone', text: 'Rotate CTA types — don\'t use the same one on every post or it loses impact' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn CTA Generator',
    description:
      'Free tool to generate 10 compelling LinkedIn call-to-action variations for any goal — comments, traffic, calls, or followers.',
    url: 'https://byhandshake.com/tools/linkedin-cta-generator',
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
export default function LinkedInCTAGenerator() {
  const [goal, setGoal] = useState<Goal>('get-comments')
  const [context, setContext] = useState('')
  const [ctas, setCtas] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = context.trim().length > 0

  function handleGenerate() {
    if (!canGenerate) return
    setCtas(generateCTAs(goal, context))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  const goals: { value: Goal; label: string; icon: string }[] = [
    { value: 'get-comments', label: 'Get Comments', icon: 'solar:chat-round-dots-bold-duotone' },
    { value: 'drive-traffic', label: 'Drive Traffic', icon: 'solar:link-bold-duotone' },
    { value: 'book-calls', label: 'Book Calls', icon: 'solar:phone-bold-duotone' },
    { value: 'grow-followers', label: 'Grow Followers', icon: 'solar:user-plus-bold-duotone' },
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
              <Icon icon="solar:target-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn CTA Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 10 compelling call-to-action variations for your LinkedIn posts. Get comments, drive traffic, book calls, or grow your following.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Your Goal</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {goals.map((g) => (
                    <button
                      key={g.value}
                      onClick={() => setGoal(g.value)}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                        goal === g.value
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <Icon icon={g.icon} className="w-3.5 h-3.5" />
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Post Topic / Context</label>
                <input
                  type="text"
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="e.g. cold outreach, personal branding, B2B sales strategies"
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
              Generate 10 CTAs
            </button>
          </div>

          {/* ── Results ── */}
          {ctas.length > 0 && (
            <div className="space-y-3 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white mb-1">Your CTAs</h2>
              {ctas.map((cta, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-900/50 px-5 py-3.5 hover:border-blue-500/30 transition-colors"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-xs font-medium text-gray-400 font-geist">
                    {i + 1}
                  </span>
                  <p className="flex-1 text-sm text-gray-300 font-geist">{cta}</p>
                  <button
                    onClick={() => handleCopy(cta, i)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                  >
                    <Icon
                      icon={copied === i ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                      className="w-3.5 h-3.5"
                    />
                    {copied === i ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              What CTAs Work on LinkedIn
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
              Post Your CTAs Across Multiple LinkedIn Accounts
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Write once, post everywhere. Handshake lets you manage and schedule posts with perfect CTAs from multiple LinkedIn accounts.
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
