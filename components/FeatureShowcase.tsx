'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const features = [
  {
    badge: 'Multi-Account',
    title: 'Sender Account Rotation',
    description:
      'Distribute outreach across multiple LinkedIn accounts to stay under radar. Our smart rotation ensures each account operates within safe limits while maximizing your reach.',
    icon: 'mdi:account-multiple',
    color: 'blue',
    stats: [
      { label: 'Max Senders', value: 'Unlimited' },
      { label: 'Auto Rotation', value: 'Smart' },
      { label: 'Safety Score', value: '99.8%' },
    ],
  },
  {
    badge: 'Automation',
    title: 'Visual Campaign Builder',
    description:
      'Create sophisticated multi-step campaigns with our intuitive flow builder. Add conditional logic, time delays, and multi-channel touchpoints without writing a single line of code.',
    icon: 'mdi:workflow',
    color: 'purple',
    stats: [
      { label: 'Campaign Steps', value: 'Unlimited' },
      { label: 'Branching Logic', value: 'If/Then' },
      { label: 'Channels', value: 'Multi' },
    ],
  },
  {
    badge: 'Unified Inbox',
    title: 'Centralized Conversations',
    description:
      'Manage all LinkedIn messages from multiple accounts in one unified inbox. Collaborate with your team, assign conversations, and never miss a reply.',
    icon: 'mdi:email-multiple',
    color: 'emerald',
    stats: [
      { label: 'Team Collab', value: 'Real-time' },
      { label: 'Auto-Assign', value: 'Smart' },
      { label: 'Response Time', value: '<2 hrs' },
    ],
  },
  {
    badge: 'Analytics',
    title: 'Advanced Reporting',
    description:
      'Track every metric that matters. From connection acceptance rates to reply rates, our analytics dashboard gives you deep insights into campaign performance.',
    icon: 'mdi:chart-line',
    color: 'blue',
    stats: [
      { label: 'Custom Reports', value: 'Unlimited' },
      { label: 'Export Data', value: 'CSV/PDF' },
      { label: 'Real-time', value: 'Live' },
    ],
  },
]

export function FeatureShowcase() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`mb-20 last:mb-0 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div
                className={`[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll ${
                  idx % 2 === 0 ? '' : 'lg:order-2'
                }`}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
                  <Icon icon="mdi:star" className="w-3 h-3 text-blue-400" />
                  <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
                    {feature.badge}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight font-jakarta mb-4">
                  {feature.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-400 font-geist mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {feature.stats.map((stat, statIdx) => (
                    <div key={statIdx}>
                      <div className="text-2xl font-bold text-white font-jakarta mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-500 font-geist">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Illustration Card */}
              <div
                className={`group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-[32px] p-8 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll min-h-[400px] flex items-center justify-center ${
                  idx % 2 === 0 ? '' : 'lg:order-1'
                }`}
                onMouseMove={handleMouseMove}
                style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
              >
                {/* Spotlight Effects */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                      feature.color === 'blue'
                        ? 'rgba(59,130,246,0.08)'
                        : feature.color === 'purple'
                        ? 'rgba(168,85,247,0.08)'
                        : 'rgba(16,185,129,0.08)'
                    }, transparent 40%)`,
                    zIndex: 1,
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                      feature.color === 'blue'
                        ? 'rgba(59,130,246,0.4)'
                        : feature.color === 'purple'
                        ? 'rgba(168,85,247,0.4)'
                        : 'rgba(16,185,129,0.4)'
                    }, transparent 40%)`,
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px',
                    zIndex: 50,
                  }}
                />

                {/* Different Illustration for each feature */}
                <div className="relative z-10 w-full">
                  {/* Multi-Account - Sender Dashboard */}
                  {feature.badge === 'Multi-Account' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-semibold text-white font-geist">LinkedIn Accounts</h4>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-semibold font-geist">
                          <Icon icon="mdi:plus" className="w-4 h-4" />
                          Add Account
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { initials: 'JD', name: 'John Davis', status: 'Active', messages: 23 },
                          { initials: 'SK', name: 'Sarah Kim', status: 'Active', messages: 18 },
                          { initials: 'MR', name: 'Marcus R.', status: 'Paused', messages: 0 },
                          { initials: 'AL', name: 'Anna Lee', status: 'Active', messages: 31 },
                        ].map((account, i) => (
                          <div key={i} className="bg-[#1A1A1C] border border-white/10 rounded-xl p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className="text-xs font-bold text-white">{account.initials}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-white font-geist truncate">{account.name}</div>
                                <div className={`text-xs font-geist ${account.status === 'Active' ? 'text-emerald-400' : 'text-gray-500'}`}>
                                  {account.status}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-gray-500 font-geist">Today</span>
                              <span className="text-blue-400 font-semibold font-geist">{account.messages} msgs</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Automation - Workflow */}
                  {feature.badge === 'Automation' && (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <Icon icon="mdi:rocket-launch" className="w-4 h-4 text-blue-400" />
                          <span className="text-xs font-medium text-white font-geist">Start Campaign</span>
                        </div>
                      </div>
                      
                      <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />
                      
                      <div className="bg-[#1A1A1C]/80 border border-white/10 rounded-xl px-4 py-2">
                        <div className="flex items-center gap-2">
                          <Icon icon="mdi:account-plus" className="w-4 h-4 text-gray-400" />
                          <span className="text-xs font-medium text-white font-geist">Send Connection</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-6">
                        <div className="flex flex-col items-center space-y-2">
                          <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg px-3 py-1.5">
                            <div className="flex items-center gap-1.5">
                              <Icon icon="mdi:check-circle" className="w-3 h-3 text-emerald-400" />
                              <span className="text-xs font-medium text-gray-300 font-geist">Accepted</span>
                            </div>
                          </div>
                          <div className="w-0.5 h-4 bg-emerald-500/30" />
                          <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-1.5">
                            <Icon icon="mdi:email" className="w-3 h-3 text-blue-400" />
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center space-y-2">
                          <div className="bg-red-600/20 border border-red-500/30 rounded-lg px-3 py-1.5">
                            <div className="flex items-center gap-1.5">
                              <Icon icon="mdi:close-circle" className="w-3 h-3 text-red-400" />
                              <span className="text-xs font-medium text-gray-300 font-geist whitespace-nowrap">No Reply</span>
                            </div>
                          </div>
                          <div className="w-0.5 h-4 bg-red-500/30" />
                          <div className="bg-[#1A1A1C]/60 border border-white/5 rounded-lg px-2 py-1 text-xs text-gray-400 font-geist flex items-center gap-1">
                            <Icon icon="mdi:clock" className="w-3 h-3" />
                            Wait 3d
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Unified Inbox */}
                  {feature.badge === 'Unified Inbox' && (
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden">
                      <div className="border-b border-white/10 px-4 py-2 flex items-center justify-between">
                        <span className="text-xs font-semibold text-white font-geist">Inbox</span>
                        <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">8</span>
                      </div>
                      <div className="divide-y divide-white/5">
                        {[
                          { name: 'Sarah Thompson', time: '2m', preview: 'Thanks for reaching out! I would...', unread: true },
                          { name: 'James Mitchell', time: '1h', preview: 'This looks interesting. Can you...' },
                          { name: 'Emily Davis', time: '3h', preview: 'Let me discuss with my team and...' },
                        ].map((msg, i) => (
                          <div key={i} className={`flex items-center gap-3 px-4 py-3 ${msg.unread ? 'bg-blue-500/5' : ''}`}>
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shrink-0">
                              <span className="text-[10px] font-bold text-white">{msg.name.split(' ').map(n => n[0]).join('')}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <span className={`text-xs font-medium font-geist ${msg.unread ? 'text-white' : 'text-gray-300'}`}>{msg.name}</span>
                                <span className="text-[10px] text-gray-500">{msg.time}</span>
                              </div>
                              <p className="text-[11px] text-gray-500 truncate font-geist">{msg.preview}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Analytics Dashboard */}
                  {feature.badge === 'Analytics' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        {[
                          { label: 'Acceptance Rate', value: '34.2%', trend: '+5.3%', color: 'emerald' },
                          { label: 'Reply Rate', value: '12.8%', trend: '+2.1%', color: 'blue' },
                          { label: 'Conversions', value: '47', trend: '+12', color: 'purple' },
                        ].map((stat, i) => (
                          <div key={i} className="bg-[#1A1A1C] border border-white/10 rounded-xl p-3">
                            <div className="text-[10px] text-gray-500 font-geist mb-1">{stat.label}</div>
                            <div className="text-lg font-bold text-white font-jakarta">{stat.value}</div>
                            <div className={`text-xs font-semibold font-geist ${
                              stat.color === 'emerald' ? 'text-emerald-400' : stat.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                            }`}>
                              {stat.trend}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-[#1A1A1C] border border-white/10 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-white font-geist">Campaign Performance</span>
                          <span className="text-[10px] text-gray-500 font-geist">Last 7 days</span>
                        </div>
                        <div className="h-24 flex items-end justify-between gap-1">
                          {[40, 65, 45, 80, 60, 85, 70].map((height, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-blue-500 to-blue-600 rounded-t" style={{ height: `${height}%` }} />
                          ))}
                        </div>
                        <div className="flex items-center justify-between mt-2 text-[10px] text-gray-600 font-geist">
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

