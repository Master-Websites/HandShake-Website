'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

/* ───────── Boolean builder ───────── */
function buildBooleanSearch(
  titles: string,
  industries: string,
  companySizes: string,
  locations: string,
  includeKw: string,
  excludeKw: string
): { query: string; description: string } {
  const parts: string[] = []
  const descParts: string[] = []

  const titleList = titles
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (titleList.length > 0) {
    const titleQuery = titleList.length === 1 ? `"${titleList[0]}"` : `(${titleList.map((t) => `"${t}"`).join(' OR ')})`
    parts.push(titleQuery)
    descParts.push(`${titleList.join(', ')} roles`)
  }

  const industryList = industries
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (industryList.length > 0) {
    const indQuery = industryList.length === 1 ? `"${industryList[0]}"` : `(${industryList.map((t) => `"${t}"`).join(' OR ')})`
    parts.push(indQuery)
    descParts.push(`in ${industryList.join(', ')}`)
  }

  const sizeList = companySizes
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (sizeList.length > 0) {
    const sizeQuery = sizeList.length === 1 ? `"${sizeList[0]}"` : `(${sizeList.map((t) => `"${t}"`).join(' OR ')})`
    parts.push(sizeQuery)
    descParts.push(`at ${sizeList.join(', ')} companies`)
  }

  const locationList = locations
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (locationList.length > 0) {
    const locQuery = locationList.length === 1 ? `"${locationList[0]}"` : `(${locationList.map((t) => `"${t}"`).join(' OR ')})`
    parts.push(locQuery)
    descParts.push(`located in ${locationList.join(', ')}`)
  }

  const includeList = includeKw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (includeList.length > 0) {
    includeList.forEach((kw) => parts.push(`"${kw}"`))
    descParts.push(`mentioning ${includeList.join(', ')}`)
  }

  const excludeList = excludeKw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
  if (excludeList.length > 0) {
    excludeList.forEach((kw) => parts.push(`NOT "${kw}"`))
    descParts.push(`excluding ${excludeList.join(', ')}`)
  }

  const query = parts.join(' AND ')
  const description = descParts.length > 0 ? descParts.join(', ') : 'all LinkedIn profiles'

  return { query, description }
}

/* ───────── Syntax reference ───────── */
const syntaxRef = [
  {
    operator: 'AND',
    example: '"Sales Manager" AND "SaaS"',
    desc: 'Both terms must appear. Narrows your search.',
  },
  {
    operator: 'OR',
    example: '"VP Sales" OR "Head of Sales"',
    desc: 'Either term can appear. Broadens your search.',
  },
  {
    operator: 'NOT',
    example: '"Marketing" NOT "Intern"',
    desc: 'Excludes profiles with the term. Filters noise.',
  },
  {
    operator: '" "',
    example: '"Account Executive"',
    desc: 'Exact phrase match. Essential for multi-word titles.',
  },
  {
    operator: '( )',
    example: '("VP" OR "Director") AND "Sales"',
    desc: 'Groups terms. Controls operator precedence.',
  },
]

/* ───────── FAQ data ───────── */
const faqs = [
  {
    q: 'What is a LinkedIn boolean search?',
    a: 'Boolean search is a method of combining keywords with operators like AND, OR, and NOT to produce more relevant search results. On LinkedIn, you can use boolean search in the main search bar or within Sales Navigator to find specific types of professionals.',
  },
  {
    q: 'Where do I paste the boolean search string on LinkedIn?',
    a: 'Paste the generated boolean search string directly into LinkedIn\'s main search bar and select "People" from the results filter. For more advanced filtering, use LinkedIn Sales Navigator\'s lead search with the boolean string.',
  },
  {
    q: 'How many boolean operators can I use in a LinkedIn search?',
    a: 'LinkedIn supports AND, OR, NOT, quotes for exact phrases, and parentheses for grouping. There\'s no strict limit on operators, but extremely long queries may not parse correctly. Keep it under ~500 characters for best results.',
  },
  {
    q: 'Can I save my boolean searches on LinkedIn?',
    a: 'On LinkedIn Sales Navigator, you can save searches and get alerts for new profiles matching your criteria. On the free LinkedIn, you\'ll need to copy and save your boolean strings externally — which is exactly what this tool helps with.',
  },
  {
    q: 'How do I use boolean search with Handshake?',
    a: 'Build your boolean search here, find matching prospects on LinkedIn, then use Handshake to send personalized connection requests and messages at scale from multiple accounts. The combination of precise targeting + multi-sender outreach is incredibly effective.',
  },
]

/* ───────── Schema ───────── */
const pageSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'LinkedIn Boolean Search Builder',
    description:
      'Free tool to build advanced LinkedIn boolean search strings with AND/OR/NOT operators.',
    url: 'https://byhandshake.com/tools/linkedin-boolean-search-builder',
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
export default function LinkedInBooleanSearchBuilder() {
  const [titles, setTitles] = useState('')
  const [industries, setIndustries] = useState('')
  const [companySizes, setCompanySizes] = useState('')
  const [locations, setLocations] = useState('')
  const [includeKw, setIncludeKw] = useState('')
  const [excludeKw, setExcludeKw] = useState('')
  const [result, setResult] = useState<{ query: string; description: string } | null>(null)
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const canGenerate = titles || industries || locations || includeKw

  function handleGenerate() {
    if (!canGenerate) return
    setResult(buildBooleanSearch(titles, industries, companySizes, locations, includeKw, excludeKw))
  }

  function handleCopy(text: string) {
    navigator.clipboard.writeText(text)
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
              <Icon icon="solar:magnifer-bold-duotone" className="w-3.5 h-3.5" />
              Free Tool
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-jakarta font-bold text-white tracking-tight mb-4">
              LinkedIn Boolean Search Builder
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
              Build advanced LinkedIn search strings in seconds. Combine job titles, industries, locations, and keywords — then copy and paste into LinkedIn.
            </p>
          </div>

          {/* ── Form ── */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/60 backdrop-blur-sm p-6 sm:p-8 mb-8 [animation:fadeSlideIn_0.8s_ease-out_0.25s_both]">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { label: 'Job Titles (comma-separated)', value: titles, set: setTitles, placeholder: 'VP of Sales, Head of Sales, Sales Director' },
                { label: 'Industries (comma-separated)', value: industries, set: setIndustries, placeholder: 'SaaS, FinTech, Healthcare' },
                { label: 'Company Sizes (comma-separated)', value: companySizes, set: setCompanySizes, placeholder: 'Startup, Mid-market, Enterprise' },
                { label: 'Locations (comma-separated)', value: locations, set: setLocations, placeholder: 'United States, United Kingdom, Canada' },
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
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Keywords to Include</label>
                <input
                  type="text"
                  value={includeKw}
                  onChange={(e) => setIncludeKw(e.target.value)}
                  placeholder="B2B, outbound, pipeline"
                  className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-4 py-2.5 text-sm text-white placeholder-gray-500 font-geist focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 font-geist mb-1.5">Keywords to Exclude</label>
                <input
                  type="text"
                  value={excludeKw}
                  onChange={(e) => setExcludeKw(e.target.value)}
                  placeholder="Intern, Student, Retired"
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
              Build Search String
            </button>
          </div>

          {/* ── Result ── */}
          {result && (
            <div className="mb-14 [animation:fadeSlideIn_0.4s_ease-out_both]">
              <h2 className="text-xl font-jakarta font-semibold text-white mb-4">Your Boolean Search String</h2>
              <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <code className="text-sm text-blue-300 font-mono leading-relaxed flex-1 break-all">
                    {result.query}
                  </code>
                  <button
                    onClick={() => handleCopy(result.query)}
                    className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 transition-colors font-geist"
                  >
                    <Icon
                      icon={copied ? 'solar:check-circle-bold-duotone' : 'solar:copy-bold-duotone'}
                      className="w-3.5 h-3.5"
                    />
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400 font-geist">
                    <span className="text-gray-300 font-medium">This search will find:</span>{' '}
                    {result.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ── Syntax Reference ── */}
          <div className="mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">
            <h2 className="text-2xl font-jakarta font-semibold text-white mb-6">
              Boolean Search Syntax Reference
            </h2>
            <div className="space-y-3">
              {syntaxRef.map((s) => (
                <div
                  key={s.operator}
                  className="rounded-xl border border-gray-800 bg-gray-900/40 p-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold shrink-0">
                      {s.operator}
                    </span>
                    <div className="flex-1 min-w-0">
                      <code className="text-xs text-gray-300 font-mono block mb-1">{s.example}</code>
                      <p className="text-sm text-gray-500 font-geist">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-950/50 to-gray-900/50 p-8 sm:p-12 mb-14 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both]">
            <h2 className="text-2xl sm:text-3xl font-jakarta font-bold text-white mb-3">
              Found Your Prospects? Reach Them at Scale
            </h2>
            <p className="text-gray-400 font-geist mb-6 max-w-xl mx-auto">
              Use your boolean search to find prospects, then let Handshake send personalized outreach from multiple LinkedIn accounts automatically.
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
