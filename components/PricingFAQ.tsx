'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer:
      'Start with any plan without entering a credit card. You get full access to all features for 14 days. After the trial, you can choose to upgrade to a paid plan or continue with limited features on our free tier.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer:
      'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you get instant access to new features. When downgrading, changes take effect at the start of your next billing cycle, and you keep access to premium features until then.',
  },
  {
    question: 'What happens if I exceed my sender limit?',
    answer:
      'If you need more senders, you can easily add them for $15/month per additional sender. Alternatively, you can upgrade to a higher plan that includes more senders. We\'ll notify you before you reach your limit.',
  },
  {
    question: 'Is my LinkedIn account safe?',
    answer:
      'Yes! Handshake uses cloud-based automation that mimics human behavior with randomized delays, smart rate limiting, and dedicated IP pools. We stay well within LinkedIn\'s guidelines to keep your accounts safe.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and for Enterprise plans, we can arrange invoice-based billing and wire transfers.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'We offer a 30-day money-back guarantee. If you\'re not satisfied within the first 30 days, contact our support team for a full refund. After 30 days, refunds are handled on a case-by-case basis.',
  },
  {
    question: 'What\'s included in Priority Support?',
    answer:
      'Priority Support includes faster response times (under 4 hours), a dedicated Slack channel, access to our premium knowledge base, and priority for feature requests. Enterprise plans also include a dedicated account manager.',
  },
  {
    question: 'Can I get a custom plan for my agency?',
    answer:
      'Yes! If our standard plans don\'t fit your needs, we can create a custom plan with specific sender limits, team seats, and features. Contact our sales team to discuss your requirements.',
  },
  {
    question: 'What does "Unified Inbox" mean?',
    answer:
      'The Unified Inbox consolidates all conversations from all your sender accounts into one place. Your team can view, respond to, and manage all LinkedIn messages without switching between accounts.',
  },
  {
    question: 'Do annual plans auto-renew?',
    answer:
      'Yes, annual plans auto-renew at the end of each year to ensure uninterrupted service. You can cancel auto-renewal at any time from your account settings. We\'ll send you a reminder 30 days before renewal.',
  },
]

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:help-circle" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              FAQ
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist">
            Everything you need to know about pricing and plans
          </p>
        </div>

        <div className="space-y-4 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left group"
              >
                <span className="text-base sm:text-lg font-semibold text-white font-geist group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <Icon
                  icon="mdi:chevron-down"
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 shrink-0 ${
                    openIndex === idx ? 'rotate-180 text-blue-400' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-sm sm:text-base text-gray-400 font-geist leading-relaxed border-t border-white/5 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
          <p className="text-gray-400 font-geist mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold font-geist transition-colors"
          >
            Contact our sales team
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

