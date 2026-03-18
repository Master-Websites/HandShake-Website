import type { Metadata } from 'next'
import { Icon } from '@iconify/react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'
import { AffiliateFAQ } from '@/components/AffiliateFAQ'
import { faqs } from '@/lib/affiliate-faqs'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description:
    'Earn 30% recurring commissions by referring customers to Handshake. Join our affiliate program — free to apply, no cap on earnings, monthly payouts.',
  alternates: {
    canonical: 'https://byhandshake.com/affiliate',
  },
  openGraph: {
    url: 'https://byhandshake.com/affiliate',
    title: 'Affiliate Program | Handshake',
    description:
      'Earn 30% recurring commissions by referring customers to Handshake. Join our affiliate program — free to apply, no cap on earnings, monthly payouts.',
  },
}

const benefits = [
  {
    icon: 'solar:dollar-bold-duotone',
    title: '30% Recurring',
    description: "Earn 30% of every referred customer's monthly subscription—for life. Your income grows over time.",
  },
  {
    icon: 'solar:infinity-bold-duotone',
    title: 'Unlimited Earnings',
    description: "There's no cap. Refer 10 customers, earn up to $5000. Refer 100, earn $50,000. Simple math.",
  },
  {
    icon: 'solar:clock-circle-bold-duotone',
    title: '90-Day Cookie',
    description: 'Long tracking window means you get credit even if your referral takes time to decide.',
  },
  {
    icon: 'solar:chart-bold-duotone',
    title: 'Real-Time Dashboard',
    description: 'Track every click, signup, and conversion. Know exactly how your campaigns perform.',
  },
  {
    icon: 'solar:hand-money-bold-duotone',
    title: 'Monthly Payouts',
    description: 'Get paid on the 15th of every month via PayPal or bank transfer. Reliable and consistent.',
  },
  {
    icon: 'solar:documents-bold-duotone',
    title: 'Marketing Assets',
    description: 'Banners, email templates, social posts—everything you need to start promoting immediately.',
  },
]

const steps = [
  { number: '01', title: 'Apply to Join', description: 'Fill out a quick application. We review all applications within 24 hours.' },
  { number: '02', title: 'Get Your Link', description: 'Once approved, grab your unique referral link and marketing materials from the dashboard.' },
  { number: '03', title: 'Share & Promote', description: 'Share your link on social media, blogs, newsletters, or anywhere your audience hangs out.' },
  { number: '04', title: 'Earn 30% Monthly', description: "When someone signs up through your link and becomes a paying customer, you earn 30% of their subscription every month." },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function AffiliatePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                <Icon icon="solar:hand-money-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">Affiliate Program</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
                Earn <span className="text-blue-500">30%</span> Monthly<br className="hidden sm:block" />For Every Customer You Refer
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
                Join the Handshake affiliate program and earn recurring commissions. Get 30% of every customer&apos;s subscription, every single month, for as long as they stay.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide group">
                  Join the Program
                  <Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#how-it-works" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] uppercase tracking-wide">
                  See How It Works
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-6 font-medium font-geist tracking-wide">Free to join &bull; No minimum followers &bull; Recurring commissions</p>
            </div>
          </div>
        </section>

        {/* Commission Highlight */}
        <section className="py-12 sm:py-16 md:py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <div className="relative bg-gradient-to-br from-blue-950/50 to-[#0A0A0A] border border-blue-500/20 rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight font-jakarta mb-4">The Math is Simple</h2>
                    <p className="text-base sm:text-lg text-gray-400 font-geist mb-6">You send traffic. They convert. You get paid—every single month. 30% of their subscription goes straight to you, for as long as they&apos;re a customer.</p>
                    <div className="flex items-center gap-6 flex-wrap">
                      {['Recurring revenue', 'No caps', 'Monthly payouts'].map((t) => (
                        <div key={t} className="flex items-center gap-2"><Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-400" /><span className="text-sm text-gray-300 font-geist">{t}</span></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 text-center shadow-2xl">
                      <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white font-jakarta mb-2">30%</div>
                      <div className="text-lg text-gray-400 font-geist">monthly recurring</div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="text-sm text-gray-500 font-geist">10 customers = <span className="text-blue-400 font-semibold">Up to $5000</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 sm:py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                <Icon icon="solar:star-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">Program Benefits</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">Why Partners Love Us</h2>
              <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">We built this program for affiliates who hate the runaround. High commissions, real support, no games.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              {benefits.map((b, i) => (
                <div key={i} className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon icon={b.icon} className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white font-geist mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-400 font-geist leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-12 sm:py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                <Icon icon="solar:routing-bold-duotone" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">How It Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">Four Steps to Your First Commission</h2>
              <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">Getting started takes less than 5 minutes. Here&apos;s exactly how the program works.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
              {steps.map((s, i) => (
                <div key={i} className="relative">
                  <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 h-full hover:border-blue-500/30 transition-all duration-300">
                    <div className="text-4xl font-bold text-blue-500/20 font-jakarta mb-4">{s.number}</div>
                    <h3 className="text-lg font-semibold text-white font-geist mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-400 font-geist leading-relaxed">{s.description}</p>
                  </div>
                  {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"><Icon icon="mdi:chevron-right" className="w-6 h-6 text-blue-500/30" /></div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-12 sm:py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                  <Icon icon="solar:users-group-rounded-bold-duotone" className="w-3 h-3 text-blue-400" />
                  <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">Perfect For</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">Built for People Who Get Results</h2>
                <p className="text-base sm:text-lg text-gray-400 font-geist mb-8">Whether you run a newsletter, have a YouTube channel, or just know a lot of sales teams—if you can drive traffic, we want you in the program.</p>
                <div className="space-y-4">
                  {[
                    { title: 'Content Creators', desc: 'YouTubers, bloggers, and podcasters in the B2B space' },
                    { title: 'Agency Owners', desc: "Recommend us to clients you can't service directly" },
                    { title: 'Sales Consultants', desc: 'Help your network level up their outbound' },
                    { title: 'Community Leaders', desc: 'Share with your Slack groups, Discord servers, or newsletters' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0"><Icon icon="solar:check-read-bold-duotone" className="text-sm" /></div>
                      <div><h4 className="text-white font-medium font-geist">{item.title}</h4><p className="text-sm font-geist text-gray-500">{item.desc}</p></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
                <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <div className="text-sm text-gray-500 font-geist mb-2">Average affiliate earnings</div>
                      <div className="text-4xl sm:text-5xl font-bold text-white font-jakarta">$1,200<span className="text-lg text-gray-500">/mo</span></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-white/5"><span className="text-sm text-gray-400 font-geist">Top 10% affiliates</span><span className="text-sm font-semibold text-blue-400 font-geist">$5,000+/mo</span></div>
                      <div className="flex justify-between items-center py-3 border-b border-white/5"><span className="text-sm text-gray-400 font-geist">Average conversion rate</span><span className="text-sm font-semibold text-white font-geist">8.2%</span></div>
                      <div className="flex justify-between items-center py-3"><span className="text-sm text-gray-400 font-geist">Payout reliability</span><span className="text-sm font-semibold text-emerald-400 font-geist">100% on-time</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                <Icon icon="mdi:help-circle" className="w-3 h-3 text-blue-400" />
                <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <p className="text-base sm:text-lg text-gray-400 font-geist">Everything you need to know about the affiliate program</p>
            </div>
            <AffiliateFAQ />
            <div className="mt-12 text-center [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
              <p className="text-gray-400 font-geist mb-4">Still have questions?</p>
              <a href="mailto:affiliates@byhandshake.com" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold font-geist transition-colors">Email our affiliate team<Icon icon="mdi:arrow-right" className="w-4 h-4" /></a>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-jakarta mb-6">Ready to Start Earning?</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-geist mb-10 max-w-2xl mx-auto">Join the Handshake affiliate program today. Application takes 2 minutes. Approvals happen within 24 hours. Your first commission could be days away.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href="https://handshake.tolt.io/login" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide group">
                  Join the Affiliate Program<Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500 font-geist flex-wrap">
                {['Free to join', '30% recurring', 'Monthly payouts'].map((t) => (
                  <div key={t} className="flex items-center gap-2"><Icon icon="mdi:check-circle" className="w-4 h-4 text-blue-400" /><span>{t}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
