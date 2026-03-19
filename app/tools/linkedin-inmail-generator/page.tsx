'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Types ───────── */
type Purpose = 'recruit' | 'sell' | 'partner' | 'network'

/* ───────── Generator ───────── */
function generateInMails(
  senderName: string,
  senderRole: string,
  targetName: string,
  targetRole: string,
  purpose: Purpose,
  valueProp: string
): { subject: string; body: string }[] {
  const senderFirst = senderName.split(' ')[0] || senderName
  const targetFirst = targetName.split(' ')[0] || targetName

  const templates: Record<Purpose, { subject: string; body: string }[]> = {
    recruit: [
      {
        subject: `${targetFirst}, your background caught my eye`,
        body: `Hi ${targetFirst},\n\nI came across your profile and was impressed by your experience as ${targetRole}. I'm ${senderName}, ${senderRole}, and we're building something exciting.\n\n${valueProp}\n\nI'd love to share more about this opportunity and hear about your career goals. Would you be open to a quick 15-minute chat this week?\n\nNo pressure either way — happy to connect regardless.\n\nBest,\n${senderFirst}`,
      },
      {
        subject: `Quick question about your next move, ${targetFirst}`,
        body: `Hi ${targetFirst},\n\nYour work as ${targetRole} stands out — especially in this market. I'm ${senderName} (${senderRole}), and I wanted to reach out because we have a role that aligns perfectly with your skill set.\n\n${valueProp}\n\nEven if you're not actively looking, I think this is worth a conversation. What does your calendar look like for a brief call?\n\nLooking forward to hearing from you.\n\n${senderFirst}`,
      },
      {
        subject: `${targetRole} opportunity — thought of you`,
        body: `${targetFirst},\n\nI know you're probably busy, so I'll keep this short. I'm ${senderFirst} (${senderRole}), and I'm hiring for a role where your expertise as ${targetRole} would be a huge asset.\n\n${valueProp}\n\nI'm not just trying to fill a seat — I genuinely think this could be a great fit. Worth 10 minutes to explore?\n\nEither way, happy to connect.\n\n${senderFirst}`,
      },
    ],
    sell: [
      {
        subject: `Idea for ${targetFirst} — re: ${targetRole}`,
        body: `Hi ${targetFirst},\n\nI've been following your work as ${targetRole} and had an idea I wanted to share.\n\nI'm ${senderName}, ${senderRole}. ${valueProp}\n\nI'm not trying to pitch you — I genuinely think this could help your team save time and get better results. Would you be open to a quick 15-minute call to see if it's a fit?\n\nIf not, no worries at all.\n\nBest,\n${senderFirst}`,
      },
      {
        subject: `${targetFirst}, quick question`,
        body: `Hi ${targetFirst},\n\nI noticed you're ${targetRole} — which tells me you're probably dealing with [common challenge in role]. I'm ${senderName} (${senderRole}), and we've been helping professionals like you solve exactly that.\n\n${valueProp}\n\nWould it make sense to hop on a quick call? I can share how others in your position are getting results.\n\nCheers,\n${senderFirst}`,
      },
      {
        subject: `Something that might help your team, ${targetFirst}`,
        body: `${targetFirst},\n\nI'll keep this brief — I know your inbox is busy.\n\nI'm ${senderFirst}, ${senderRole}. ${valueProp}\n\nI've seen this make a real difference for ${targetRole}s at similar companies. If you're curious, I'd love to show you in under 15 minutes.\n\nWorth a quick chat?\n\n${senderFirst}`,
      },
    ],
    partner: [
      {
        subject: `Partnership idea — ${senderName} × ${targetFirst}`,
        body: `Hi ${targetFirst},\n\nI'm ${senderName}, ${senderRole}. I've been following your work as ${targetRole} and I see a real opportunity for us to collaborate.\n\n${valueProp}\n\nI think combining our strengths could create something neither of us could do alone. Would you be open to exploring this over a quick call?\n\nExcited about the possibilities.\n\nBest,\n${senderFirst}`,
      },
      {
        subject: `${targetFirst} — potential collab?`,
        body: `Hi ${targetFirst},\n\nI've been thinking about strategic partnerships, and your profile as ${targetRole} immediately came to mind.\n\nI'm ${senderFirst} (${senderRole}). ${valueProp}\n\nOur audiences and offerings seem complementary. I'd love to brainstorm how we could create mutual value.\n\nAre you open to a 20-minute chat to explore this?\n\nLooking forward,\n${senderFirst}`,
      },
      {
        subject: `Stronger together? — ${senderFirst} + ${targetFirst}`,
        body: `${targetFirst},\n\nI'll cut to the chase — I think we should partner up.\n\nI'm ${senderFirst}, ${senderRole}. ${valueProp}\n\nYour work as ${targetRole} complements what we do perfectly. I have a few specific ideas on how we could drive results together.\n\nWorth a conversation?\n\n${senderFirst}`,
      },
    ],
    network: [
      {
        subject: `Fellow ${targetRole} — would love to connect`,
        body: `Hi ${targetFirst},\n\nI'm ${senderName}, ${senderRole}. I came across your profile and was genuinely impressed by your work as ${targetRole}.\n\n${valueProp}\n\nI'm always looking to connect with sharp people in the space. No agenda — just believe in building meaningful professional relationships.\n\nWould you be open to a quick virtual coffee sometime?\n\nBest,\n${senderFirst}`,
      },
      {
        subject: `${targetFirst}, your perspective would be valuable`,
        body: `Hi ${targetFirst},\n\nI've been expanding my network in our industry and your profile as ${targetRole} caught my attention.\n\nI'm ${senderFirst} (${senderRole}). ${valueProp}\n\nI'd love to hear your thoughts on where the industry is heading. Sometimes the best insights come from conversations, not articles.\n\nOpen to connecting?\n\n${senderFirst}`,
      },
      {
        subject: `Great to find another ${targetRole} — ${senderFirst}`,
        body: `${targetFirst},\n\nSimple note — I really respect what you're doing as ${targetRole}. I'm ${senderFirst}, ${senderRole}, and I've been intentional about connecting with people doing interesting work.\n\n${valueProp}\n\nNo pitch, no ask. Just think we could learn from each other. Happy to connect here or grab a quick call.\n\nCheers,\n${senderFirst}`,
      },
    ],
  }

  return templates[purpose]
}

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is a LinkedIn InMail?',
    a: 'LinkedIn InMail is a premium messaging feature that lets you contact anyone on LinkedIn, even people outside your network. It bypasses the connection request step and lands directly in their inbox.',
  },
  {
    q: 'What is the character limit for LinkedIn InMail?',
    a: 'LinkedIn InMail subject lines can be up to 200 characters, and the message body can be up to 1,900 characters. Keep subject lines concise (under 60 chars) for best open rates.',
  },
  {
    q: 'What is a good LinkedIn InMail response rate?',
    a: 'The average InMail response rate is around 10–25%. Personalized InMails with clear value propositions can achieve 30–40%+ response rates. Always reference something specific about the recipient.',
  },
  {
    q: 'When is the best time to send LinkedIn InMails?',
    a: 'Tuesday through Thursday between 8–10 AM in the recipient\'s timezone tends to perform best. Avoid Mondays (inbox overload) and Fridays (weekend mode). Early morning catches people during their LinkedIn browse.',
  },
  {
    q: 'How many InMails can I send per month?',
    a: 'LinkedIn Premium gives you 5 InMail credits per month, Sales Navigator gives 50, and Recruiter Lite gives 30. Unused credits roll over for up to 90 days. Credits are refunded if you get a response within 90 days.',
  },
]

/* ───────── Tips ───────── */
const tips = [
  { icon: 'solar:user-bold-duotone', text: 'Personalize the first line — reference their work, company, or a shared connection' },
  { icon: 'solar:letter-bold-duotone', text: 'Keep subject lines under 60 characters for maximum open rates' },
  { icon: 'solar:clock-circle-bold-duotone', text: 'Send Tuesday–Thursday mornings in the recipient\'s timezone' },
  { icon: 'solar:target-bold-duotone', text: 'Lead with value — explain what\'s in it for them before asking for anything' },
  { icon: 'solar:chat-round-dots-bold-duotone', text: 'End with a low-friction CTA: "Worth a quick chat?" beats "Schedule a demo"' },
  { icon: 'solar:document-text-bold-duotone', text: 'Keep it under 400 words — respect their time and you\'ll get more replies' },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn InMail Template Generator',
    description:
      'Free tool to generate 3 personalized LinkedIn InMail templates with subject lines for recruiting, sales, partnerships, and networking.',
    url: 'https://byhandshake.com/tools/linkedin-inmail-generator',
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
export default function LinkedInInMailGenerator() {
  const [senderName, setSenderName] = useState('')
  const [senderRole, setSenderRole] = useState('')
  const [targetName, setTargetName] = useState('')
  const [targetRole, setTargetRole] = useState('')
  const [purpose, setPurpose] = useState<Purpose>('sell')
  const [valueProp, setValueProp] = useState('')
  const [results, setResults] = useState<{ subject: string; body: string }[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = senderName && senderRole && targetName && targetRole && valueProp

  function handleGenerate() {
    if (!canGenerate) return
    setResults(generateInMails(senderName, senderRole, targetName, targetRole, purpose, valueProp))
  }

  function handleCopy(text: string, idx: number) {
    navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  const purposes: { value: Purpose; label: string; icon: string }[] = [
    { value: 'recruit', label: 'Recruit', icon: 'solar:users-group-rounded-bold-duotone' },
    { value: 'sell', label: 'Sell', icon: 'solar:cart-large-bold-duotone' },
    { value: 'partner', label: 'Partner', icon: 'solar:hand-shake-bold-duotone' },
    { value: 'network', label: 'Network', icon: 'solar:global-bold-duotone' },
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
              <Icon icon="solar:letter-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn InMail Template Generator
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Generate 3 personalized InMail templates with subject lines. Recruit, sell, partner, or network — just fill in the details.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Johnson"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Your Role</label>
                  <input
                    type="text"
                    value={senderRole}
                    onChange={(e) => setSenderRole(e.target.value)}
                    placeholder="e.g. Head of Sales at Acme Corp"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Target Name</label>
                  <input
                    type="text"
                    value={targetName}
                    onChange={(e) => setTargetName(e.target.value)}
                    placeholder="e.g. Alex Chen"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Target Role</label>
                  <input
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    placeholder="e.g. VP of Engineering at TechCo"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Purpose</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {purposes.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setPurpose(p.value)}
                      className={`inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-2.5 text-xs font-medium font-geist border transition-colors ${
                        purpose === p.value
                          ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                          : 'border-gray-700 bg-gray-800/50 text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <Icon icon={p.icon} className="w-3.5 h-3.5" />
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Key Value Proposition</label>
                <textarea
                  value={valueProp}
                  onChange={(e) => setValueProp(e.target.value)}
                  placeholder="e.g. We help B2B teams book 3x more meetings through automated LinkedIn outreach"
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
              Generate 3 InMail Templates
            </button>
          </div>

          {/* ── Results ── */}
          {results.length > 0 && (
            <div className="space-y-4 mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white">Your InMail Templates</h2>
              {results.map((tpl, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <span className="text-xs font-medium text-blue-400 font-geist">Subject Line</span>
                      <p className="text-sm text-white font-geist font-medium mt-0.5">{tpl.subject}</p>
                    </div>
                    <button
                      onClick={() => handleCopy(`Subject: ${tpl.subject}\n\n${tpl.body}`, i)}
                      className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                    >
                      <Icon
                        icon={copied === i ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                        className="w-3.5 h-3.5"
                      />
                      {copied === i ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="border-t border-gray-800 pt-3">
                    <p className="text-sm text-gray-300 font-geist leading-relaxed whitespace-pre-line">
                      {tpl.body}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-3">
                    <span className={`text-xs font-geist ${tpl.subject.length > 200 ? 'text-red-400' : tpl.subject.length > 160 ? 'text-yellow-400' : 'text-gray-600'}`}>
                      Subject: {tpl.subject.length}/200
                    </span>
                    <span className={`text-xs font-geist ${tpl.body.length > 1900 ? 'text-red-400' : tpl.body.length > 1700 ? 'text-yellow-400' : 'text-gray-600'}`}>
                      Body: {tpl.body.length}/1,900
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Tips ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              InMail Best Practices
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
              Automate LinkedIn Outreach at Scale with Handshake
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Send personalized messages from multiple LinkedIn accounts. Manage your entire outreach pipeline from one dashboard.
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
