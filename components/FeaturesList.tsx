'use client'

import { Icon } from '@iconify/react'

const featureCategories = [
  {
    category: 'Automation & Workflows',
    icon: 'mdi:robot',
    color: 'blue',
    features: [
      'Visual campaign flow builder',
      'Multi-step sequences',
      'Conditional branching logic',
      'Time-based delays',
      'Connection request automation',
      'Follow-up message automation',
      'InMail campaigns',
      'Profile view automation',
      'Post engagement automation',
      'Smart scheduling',
    ],
  },
  {
    category: 'Account Management',
    icon: 'mdi:account-cog',
    color: 'purple',
    features: [
      'Multi-account support',
      'Smart sender rotation',
      'Account health monitoring',
      'Dedicated IP pools',
      'Session management',
      'Proxy support',
      'Account warmup sequences',
      'Activity rate limiting',
    ],
  },
  {
    category: 'Inbox & Communications',
    icon: 'mdi:message',
    color: 'emerald',
    features: [
      'Unified inbox across accounts',
      'Team collaboration',
      'Conversation assignment',
      'Internal notes & tags',
      'Canned responses',
      'Email notifications',
      'Slack integration',
      'Real-time sync',
    ],
  },
  {
    category: 'Analytics & Reporting',
    icon: 'mdi:chart-box',
    color: 'orange',
    features: [
      'Campaign performance metrics',
      'Connection acceptance rates',
      'Reply rate tracking',
      'Conversion tracking',
      'Custom dashboards',
      'CSV/PDF exports',
      'A/B testing results',
      'Real-time analytics',
      'Team performance reports',
    ],
  },
  {
    category: 'Personalization',
    icon: 'mdi:account-edit',
    color: 'pink',
    features: [
      'Dynamic variables',
      'Custom fields',
      'Template library',
      'Personalization tags',
      'Conditional content',
      'LinkedIn profile data merge',
      'Company data enrichment',
      'Spintax support',
    ],
  },
  {
    category: 'Safety & Compliance',
    icon: 'mdi:shield-check',
    color: 'red',
    features: [
      'Human-like behavior simulation',
      'Randomized delays',
      'Daily limits enforcement',
      'LinkedIn TOS compliance',
      'Cloud-based execution',
      'No browser extensions',
      'Account safety scoring',
      'Automatic throttling',
    ],
  },
]

export function FeaturesList() {
  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:format-list-checks" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Complete Feature Set
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            Everything You Need,
            <span className="text-blue-500 font-jakarta font-medium"> All in One Place</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
            Comprehensive features designed for modern LinkedIn automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 [animation:fadeSlideIn_0.8s_ease-out_${0.2 + idx * 0.05}s_both] animate-on-scroll"
            >
              <div
                className={`w-12 h-12 rounded-xl ${
                  category.color === 'blue'
                    ? 'bg-blue-500/10 border-blue-500/20'
                    : category.color === 'purple'
                    ? 'bg-purple-500/10 border-purple-500/20'
                    : category.color === 'emerald'
                    ? 'bg-emerald-500/10 border-emerald-500/20'
                    : category.color === 'orange'
                    ? 'bg-orange-500/10 border-orange-500/20'
                    : category.color === 'pink'
                    ? 'bg-pink-500/10 border-pink-500/20'
                    : 'bg-red-500/10 border-red-500/20'
                } border flex items-center justify-center mb-4`}
              >
                <Icon
                  icon={category.icon}
                  className={`w-6 h-6 ${
                    category.color === 'blue'
                      ? 'text-blue-400'
                      : category.color === 'purple'
                      ? 'text-purple-400'
                      : category.color === 'emerald'
                      ? 'text-emerald-400'
                      : category.color === 'orange'
                      ? 'text-orange-400'
                      : category.color === 'pink'
                      ? 'text-pink-400'
                      : 'text-red-400'
                  }`}
                />
              </div>

              <h3 className="text-lg font-semibold text-white font-jakarta mb-4">{category.category}</h3>

              <ul className="space-y-2">
                {category.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2 text-sm text-gray-400 font-geist">
                    <Icon
                      icon="mdi:check-circle"
                      className={`w-4 h-4 shrink-0 mt-0.5 ${
                        category.color === 'blue'
                          ? 'text-blue-500'
                          : category.color === 'purple'
                          ? 'text-purple-500'
                          : category.color === 'emerald'
                          ? 'text-emerald-500'
                          : category.color === 'orange'
                          ? 'text-orange-500'
                          : category.color === 'pink'
                          ? 'text-pink-500'
                          : 'text-red-500'
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

