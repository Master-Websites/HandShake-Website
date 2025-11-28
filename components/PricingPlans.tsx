'use client'

import { useState } from 'react'
import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const plans = [
  {
    name: 'Solo',
    price: 99,
    yearlyPrice: 79,
    senders: '1',
    tagline: 'Perfect for the individual founder',
    color: 'emerald',
    teamSeats: '1',
    features: [
      '1 LinkedIn sender account',
      '1 team seat',
      'Unified inbox',
      'Basic analytics',
      'Email support',
      'Campaign templates',
    ],
  },
  {
    name: 'Growth',
    price: 199,
    yearlyPrice: 159,
    senders: '5',
    tagline: 'For small teams ramping up',
    color: 'blue',
    teamSeats: '3',
    popular: true,
    features: [
      '5 LinkedIn sender accounts',
      '3 team seats',
      'Unified inbox',
      'Dedicated IP pool',
      'Advanced analytics',
      'Priority email support',
      'Custom templates',
      'A/B testing',
    ],
  },
  {
    name: 'Business',
    price: 299,
    yearlyPrice: 239,
    senders: '10',
    tagline: 'For established sales teams',
    color: 'purple',
    teamSeats: '5',
    features: [
      '10 LinkedIn sender accounts',
      '5 team seats',
      'Unified inbox',
      'Dedicated IP pool',
      'Advanced analytics & reporting',
      'Priority support',
      'Custom integrations',
      'Team collaboration tools',
      'Smart scheduling',
    ],
  },
  {
    name: 'Agency',
    price: 499,
    yearlyPrice: 399,
    senders: '20',
    tagline: 'The entry point for lead gen shops',
    color: 'indigo',
    teamSeats: '10',
    features: [
      '20 LinkedIn sender accounts',
      '10 team seats',
      'Unified inbox',
      'Dedicated IP pool',
      'White-label options',
      'Priority support & SLA',
      'Advanced automation',
      'Multi-workspace management',
      'Custom reporting',
      'API access',
    ],
  },
  {
    name: 'Scale',
    price: 999,
    yearlyPrice: 799,
    senders: '50',
    tagline: 'For high-volume operations',
    color: 'blue',
    teamSeats: 'Unlimited',
    highlight: true,
    features: [
      '50 LinkedIn sender accounts',
      'Unlimited team seats',
      'Unified inbox',
      'Dedicated IP pool',
      'Priority support & SLA',
      'Advanced automation',
      'Custom integrations',
      'Dedicated account manager',
      'Onboarding & training',
    ],
  },
  {
    name: 'Infinity',
    price: 1999,
    yearlyPrice: 1599,
    senders: 'Unlimited',
    tagline: 'The ultimate uncap',
    color: 'purple',
    teamSeats: 'Unlimited',
    premium: true,
    features: [
      'Unlimited LinkedIn sender accounts',
      'Unlimited team seats',
      'Unified inbox',
      'Dedicated IP pool',
      'White-label options',
      'Priority support & SLA',
      'Dedicated account manager',
      'Custom development',
      'Enterprise security',
      'SSO & SAML',
    ],
  },
]

export function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false)
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-4 bg-[#0A0A0A] border border-white/10 rounded-full p-1.5">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-geist transition-all duration-300 ${
                !isYearly
                  ? 'bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold font-geist transition-all duration-300 flex items-center gap-2 ${
                isYearly
                  ? 'bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Yearly
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`group spotlight-card overflow-hidden relative ${
                plan.premium
                  ? 'bg-gradient-to-br from-[#1A0F1F] via-[#0F0F11] to-[#000000] border-2 border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.3)] hover:shadow-[0_0_80px_rgba(168,85,247,0.5)]'
                  : plan.highlight
                  ? 'bg-gradient-to-br from-[#0F1419] to-[#000000] border-2 border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.3)] hover:shadow-[0_0_70px_rgba(59,130,246,0.5)]'
                  : plan.popular
                  ? 'bg-gradient-to-br from-blue-950/50 to-[#0A0A0A] border-2 border-blue-500/30 lg:scale-105'
                  : 'bg-[#0A0A0A] border border-white/5'
              } rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_${0.3 + idx * 0.1}s_both] animate-on-scroll flex flex-col`}
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              {/* Premium glow effect for Infinity */}
              {plan.premium && (
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/30 blur-[100px] rounded-full pointer-events-none animate-pulse" />
              )}

              {/* Spotlight Effects */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    plan.premium
                      ? 'rgba(168,85,247,0.1)'
                      : plan.highlight
                      ? 'rgba(59,130,246,0.08)'
                      : 'rgba(59,130,246,0.06)'
                  }, transparent 40%)`,
                  zIndex: 1,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    plan.premium
                      ? 'rgba(168,85,247,0.6)'
                      : plan.highlight
                      ? 'rgba(59,130,246,0.5)'
                      : 'rgba(59,130,246,0.4)'
                  }, transparent 40%)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: plan.premium ? '2px' : '1px',
                  zIndex: 50,
                }}
              />

              <div className="relative z-10 flex flex-col flex-1">
                {plan.popular && (
                  <div className="absolute -top-4 right-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase text-blue-300 font-geist">
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.highlight && (
                  <div className="absolute -top-4 right-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase text-blue-300 font-geist">
                      <Icon icon="mdi:fire" className="w-3 h-3" />
                      High Volume
                    </span>
                  </div>
                )}
                {plan.premium && (
                  <div className="absolute -top-4 right-0">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase text-purple-300 font-geist">
                      <Icon icon="mdi:infinity" className="w-3 h-3" />
                      Ultimate
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 font-jakarta flex items-center gap-2 ${
                      plan.color === 'emerald'
                        ? 'text-emerald-400'
                        : plan.color === 'blue'
                        ? 'text-blue-400'
                        : plan.color === 'purple'
                        ? plan.premium
                          ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'
                          : 'text-purple-400'
                        : 'text-indigo-400'
                    }`}
                  >
                    {plan.name}
                    {plan.premium && <Icon icon="mdi:crown" className="w-5 h-5 text-purple-400" />}
                  </h3>
                  <p className="text-sm text-gray-500 font-geist">{plan.tagline}</p>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white font-jakarta">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-gray-500 text-sm font-geist">/month</span>
                </div>
                {isYearly && (
                  <p className="text-xs text-emerald-400 mb-6 font-geist">
                    ${(plan.yearlyPrice * 12).toLocaleString()} billed annually
                  </p>
                )}

                <ul className="space-y-3 mb-8 mt-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 font-geist">
                      <Icon
                        icon="mdi:check-circle"
                        className={`w-5 h-5 shrink-0 mt-0.5 ${
                          plan.color === 'emerald'
                            ? 'text-emerald-500'
                            : plan.color === 'blue'
                            ? 'text-blue-500'
                            : plan.color === 'purple'
                            ? 'text-purple-500'
                            : 'text-indigo-500'
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full inline-flex text-sm font-semibold rounded-full px-8 py-3.5 items-center justify-center transition-all duration-300 text-white font-geist uppercase tracking-wide group/btn mt-auto ${
                    plan.premium
                      ? 'bg-gradient-to-tr from-purple-500 via-purple-600 to-indigo-600 shadow-[0_4px_15px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.8)] hover:scale-[1.02]'
                      : plan.highlight
                      ? 'bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02]'
                      : plan.popular
                      ? 'bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02]'
                      : 'bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)]'
                  }`}
                >
                  {plan.premium ? (
                    <>
                      Contact Sales
                      <Icon icon="mdi:arrow-right" className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </>
                  ) : plan.highlight ? (
                    <>
                      Start 14-Day Trial
                      <Icon icon="mdi:arrow-right" className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </>
                  ) : plan.popular ? (
                    'Start Free Trial'
                  ) : (
                    'Get Started'
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

