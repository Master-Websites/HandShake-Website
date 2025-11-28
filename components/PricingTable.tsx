'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const plans = [
  {
    name: 'Solo',
    price: 99,
    senders: '1',
    tagline: 'Perfect for the individual founder',
    color: 'emerald',
    teamSeats: '1',
    unifiedInbox: true,
    dedicatedIP: false,
    prioritySupport: false,
  },
  {
    name: 'Growth',
    price: 199,
    senders: '5',
    tagline: 'For small teams ramping up',
    color: 'blue',
    teamSeats: '3',
    unifiedInbox: true,
    dedicatedIP: true,
    prioritySupport: false,
    popular: true,
  },
  {
    name: 'Business',
    price: 299,
    senders: '10',
    tagline: 'For established sales teams',
    color: 'purple',
    teamSeats: '5',
    unifiedInbox: true,
    dedicatedIP: true,
    prioritySupport: true,
  },
  {
    name: 'Agency',
    price: 499,
    senders: '20',
    tagline: 'The entry point for lead gen shops',
    color: 'indigo',
    teamSeats: '10',
    unifiedInbox: true,
    dedicatedIP: true,
    prioritySupport: true,
  },
]

export function PricingTable() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="border-y bg-black border-white/5 pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 items-center">
          <div className="inline-flex gap-2 bg-blue-500/10 border-blue-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 items-center">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase font-geist">
              Plans & Pricing
            </span>
          </div>
          <h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-jakarta mb-6 text-center">
            Transparent pricing for
            <span className="text-blue-500 font-jakarta font-medium"> every stage</span>
          </h2>
          <p className="text-lg mb-4 max-w-2xl mx-auto font-geist text-gray-400">
            Start building for free, then scale as you grow. Upgrade, downgrade, or cancel at any time with no hidden fees.
          </p>
        </div>

        {/* Mobile Pricing Cards */}
        <div className="lg:hidden space-y-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`group spotlight-card overflow-hidden relative ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-950/50 to-[#0A0A0A] border-2 border-blue-500/30' 
                  : 'bg-[#0A0A0A] border border-white/5'
              } rounded-3xl p-6 shadow-2xl transition-all duration-500 hover:border-white/10`}
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase text-blue-300 font-geist">
                    Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 font-jakarta ${
                  plan.color === 'emerald' ? 'text-emerald-400' :
                  plan.color === 'blue' ? 'text-blue-400' :
                  plan.color === 'purple' ? 'text-purple-400' :
                  'text-indigo-400'
                }`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 font-geist">{plan.tagline}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-white font-jakarta">${plan.price}</span>
                <span className="text-gray-500 text-sm font-geist">/month</span>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-white/5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-geist">Senders Included</span>
                  <span className="text-white font-semibold font-geist">{plan.senders}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-geist">Team Seats</span>
                  <span className="text-white font-semibold font-geist">{plan.teamSeats}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-geist">Unified Inbox</span>
                  <Icon icon="mdi:check" className={`w-5 h-5 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'purple' ? 'text-purple-500' : plan.color === 'emerald' ? 'text-emerald-500' : 'text-indigo-500'}`} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-geist">Dedicated IP Pool</span>
                  {plan.dedicatedIP ? (
                    <Icon icon="mdi:check" className={`w-5 h-5 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'purple' ? 'text-purple-500' : 'text-indigo-500'}`} />
                  ) : (
                    <Icon icon="mdi:close" className="text-gray-700 w-5 h-5" />
                  )}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400 font-geist">Priority Support</span>
                  {plan.prioritySupport ? (
                    <Icon icon="mdi:check" className={`w-5 h-5 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'purple' ? 'text-purple-500' : 'text-indigo-500'}`} />
                  ) : (
                    <Icon icon="mdi:close" className="text-gray-700 w-5 h-5" />
                  )}
                </div>
              </div>

              <button className={`w-full inline-flex text-sm font-semibold rounded-full px-8 py-3.5 items-center justify-center transition-all duration-300 text-white font-geist uppercase tracking-wide ${
                plan.popular 
                  ? 'bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02]'
                  : 'bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)]'
              }`}>
                {plan.popular ? 'Start Trial' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Pricing Table */}
        <div
          className="hidden lg:block group spotlight-card overflow-hidden overflow-x-auto shadow-black/50 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-[#0A0A0A] w-full border-white/5 border rounded-[32px] shadow-2xl relative mb-8"
          onMouseMove={handleMouseMove}
          style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
        >
          {/* Spotlight Effects */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)',
              zIndex: 1,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%)',
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              WebkitMaskComposite: 'xor',
              padding: '1px',
              zIndex: 50,
            }}
          />

          <div className="min-w-[1000px] grid grid-cols-5 divide-x divide-white/5 z-10 text-sm relative">
            {/* Feature Labels Column */}
            <div className="flex flex-col bg-gradient-to-br from-white/10 to-white/0">
              <div className="flex flex-col border-white/5 border-b pt-12 pr-6 pb-10 pl-6 justify-center">
                <h3 className="text-2xl font-semibold text-white tracking-tight font-jakarta">
                  Compare <span className="text-gray-500">Plans</span>
                </h3>
                <p className="text-xs mt-2 text-gray-500">All plans include core functionality.</p>
              </div>

              <div className="px-6 flex items-center font-geist border-b py-4 h-[4rem] text-gray-400 border-white/5">Senders Included</div>
              <div className="px-6 flex items-center font-geist border-b py-4 h-[4rem] text-gray-400 border-white/5">Team Seats</div>
              <div className="px-6 flex items-center font-geist border-b py-4 h-[4rem] text-gray-400 border-white/5">Unified Inbox</div>
              <div className="px-6 flex items-center font-geist border-b py-4 h-[4rem] text-gray-400 border-white/5">Dedicated IP Pool</div>
              <div className="px-6 flex items-center font-geist border-b py-4 h-[4rem] text-gray-400 border-white/5">Priority Support</div>
              <div className="h-24 px-6 flex items-center border-b border-white/5" />
            </div>

            {/* Plan Columns */}
            {plans.map((plan, idx) => (
              <div key={plan.name} className={`flex flex-col ${plan.popular ? 'relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)] rounded-2xl -m-0.5 pointer-events-none" />
                )}
                
                <div className={`h-10 flex items-center justify-center font-bold uppercase text-xs tracking-widest font-geist border-b border-white/5 ${
                  plan.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                  plan.color === 'blue' ? 'bg-blue-600 text-white' :
                  plan.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                  'bg-indigo-500/10 text-indigo-400'
                } ${plan.popular ? 'relative z-10' : ''}`}>
                  {plan.name}
                </div>

                <div className={`flex flex-col border-b py-6 items-center justify-center border-white/5 min-h-[160px] ${plan.popular ? 'relative z-10' : ''}`}>
                  <div className="text-3xl font-semibold text-white font-jakarta tracking-tight">${plan.price}</div>
                  <div className="text-xs font-geist mt-1 text-gray-500">Per Month</div>
                  <div className="text-[10px] font-geist mt-2 text-gray-600 max-w-[140px] text-center leading-relaxed">{plan.tagline}</div>
                </div>

                <div className={`flex items-center justify-center border-b font-medium font-geist py-4 h-[4rem] border-white/5 ${plan.popular ? 'text-white font-bold relative z-10' : 'text-gray-200'}`}>
                  {plan.senders} {plan.senders === '1' ? 'Sender' : 'Senders'}
                </div>
                <div className={`flex items-center justify-center border-b font-medium font-geist py-4 h-[4rem] border-white/5 ${plan.popular ? 'text-white font-bold relative z-10' : 'text-gray-200'}`}>
                  {plan.teamSeats} {plan.teamSeats === '1' ? 'Seat' : 'Seats'}
                </div>
                <div className={`flex items-center justify-center border-b py-4 h-[4rem] border-white/5 ${plan.popular ? 'relative z-10' : ''}`}>
                  <Icon icon="mdi:check" className={`w-5 h-5 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'purple' ? 'text-purple-500' : plan.color === 'emerald' ? 'text-emerald-500' : 'text-indigo-500'}`} />
                </div>
                <div className={`flex items-center justify-center border-b py-4 h-[4rem] border-white/5 ${plan.popular ? 'relative z-10' : ''}`}>
                  {plan.dedicatedIP ? (
                    <Icon icon="mdi:check" className={`w-5 h-5 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'purple' ? 'text-purple-500' : 'text-indigo-500'}`} />
                  ) : (
                    <Icon icon="mdi:close" className="text-gray-700 w-5 h-5" />
                  )}
                </div>
                <div className={`flex items-center justify-center border-b py-4 h-[4rem] border-white/5 ${plan.popular ? 'relative z-10' : ''}`}>
                  {plan.prioritySupport ? (
                    <Icon icon="mdi:check" className={`w-5 h-5 ${plan.color === 'blue' ? 'text-blue-500' : plan.color === 'purple' ? 'text-purple-500' : 'text-indigo-500'}`} />
                  ) : (
                    <Icon icon="mdi:close" className="text-gray-700 w-5 h-5" />
                  )}
                </div>
                <div className={`h-24 p-4 flex items-center justify-center border-b border-white/5 ${plan.popular ? 'relative z-10' : ''}`}>
                  <button className={`w-full inline-flex text-sm font-semibold rounded-full px-6 py-3.5 items-center justify-center transition-all duration-300 text-white font-geist uppercase tracking-wide ${
                    plan.popular 
                      ? 'bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02]'
                      : 'bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)]'
                  }`}>
                    {plan.popular ? 'Start Trial' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Plans Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
          {/* Scale Plan */}
          <div
            className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F0F11] to-[#000000] border border-blue-500/30 rounded-[32px] p-10 shadow-[0_0_60px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_rgba(59,130,246,0.5)] transition-all duration-500 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll flex flex-col"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            {/* Spotlight Effects */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.08), transparent 40%)',
                zIndex: 1,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.6), transparent 40%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px',
                zIndex: 50,
              }}
            />

            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase text-blue-300 font-geist">
                <Icon icon="mdi:fire" className="w-3 h-3" />
                High Volume
              </span>
            </div>

            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-white font-jakarta mb-2">Scale</h3>
                <p className="text-sm text-gray-400 font-geist">For high-volume operations</p>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold text-white font-jakarta">$999</span>
                <span className="text-gray-500 text-sm font-geist">/month</span>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500 shrink-0" />
                  <span><strong className="text-white">50 Senders</strong> included</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500 shrink-0" />
                  <span><strong className="text-white">Unlimited</strong> team seats</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Unified Inbox</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Dedicated IP Pool</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-blue-500 shrink-0" />
                  <span>Priority Support & SLA</span>
                </li>
              </ul>

              <button className="w-full inline-flex text-sm font-semibold rounded-full px-8 py-4 items-center justify-center transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide group/btn mt-auto">
                <span>Start 14-Day Trial</span>
                <Icon icon="mdi:arrow-right" className="ml-2 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Infinity Plan */}
          <div
            className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#1A0F1F] via-[#0F0F11] to-[#000000] border-2 border-purple-500/40 rounded-[32px] p-10 shadow-[0_0_80px_rgba(168,85,247,0.4)] hover:shadow-[0_0_100px_rgba(168,85,247,0.6)] transition-all duration-500 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll flex flex-col"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            {/* Spotlight Effects */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 40%)',
                zIndex: 1,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.8), transparent 40%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '2px',
                zIndex: 50,
              }}
            />

            {/* Animated glow behind */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/30 blur-[100px] rounded-full pointer-events-none animate-pulse" />

            <div className="absolute top-4 right-4 z-20">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/40 bg-purple-500/20 px-3 py-1 text-[10px] font-semibold tracking-wide uppercase text-purple-300 font-geist shadow-lg shadow-purple-500/20">
                <Icon icon="mdi:infinity" className="w-3 h-3" />
                Ultimate
              </span>
            </div>

            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-4">
                <h3 className="text-3xl font-bold text-white font-jakarta mb-2 flex items-center gap-2">
                  Infinity
                  <Icon icon="mdi:crown" className="w-6 h-6 text-purple-400" />
                </h3>
                <p className="text-sm text-gray-400 font-geist">The ultimate uncap</p>
              </div>

              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-jakarta">$1,999</span>
                <span className="text-gray-500 text-sm font-geist">/month</span>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span><strong className="text-white">Unlimited Senders</strong></span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span><strong className="text-white">Unlimited</strong> team seats</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>Unified Inbox</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>Dedicated IP Pool</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span>Priority Support & SLA</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span><strong className="text-white">White-label</strong> options</span>
                </li>
                <li className="flex items-center gap-3 text-gray-200 font-geist">
                  <Icon icon="mdi:check-circle" className="w-5 h-5 text-purple-500 shrink-0" />
                  <span><strong className="text-white">Dedicated</strong> account manager</span>
                </li>
              </ul>

              <button className="w-full inline-flex text-sm font-semibold rounded-full px-8 py-4 items-center justify-center transition-all duration-300 text-white font-geist bg-gradient-to-tr from-purple-500 via-purple-600 to-indigo-600 shadow-[0_4px_15px_rgba(168,85,247,0.4)] hover:shadow-[0_8px_25px_rgba(168,85,247,0.8)] hover:scale-[1.02] uppercase tracking-wide group/btn mt-auto">
                <span>Contact Sales</span>
                <Icon icon="mdi:arrow-right" className="ml-2 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

