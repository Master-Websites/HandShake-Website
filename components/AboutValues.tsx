'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const values = [
  {
    icon: 'mdi:shield-check',
    title: 'Safety First',
    description: 'We prioritize account safety above all else. Our cloud-based infrastructure and smart rate limiting keep your LinkedIn accounts secure.',
    color: 'blue',
  },
  {
    icon: 'mdi:account-heart',
    title: 'Customer Success',
    description: 'Your success is our success. We provide dedicated support, comprehensive documentation, and ongoing training to help you achieve your goals.',
    color: 'emerald',
  },
  {
    icon: 'mdi:lightbulb-on',
    title: 'Innovation',
    description: 'We continuously push boundaries to deliver cutting-edge automation features that help you stay ahead of the competition.',
    color: 'purple',
  },
  {
    icon: 'mdi:scale-balance',
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We believe in honest communication, clear pricing, and building long-term relationships with our customers.',
    color: 'orange',
  },
  {
    icon: 'mdi:rocket-launch',
    title: 'Results-Driven',
    description: 'We focus on features that deliver real ROI. Every tool we build is designed to help you generate more leads and close more deals.',
    color: 'pink',
  },
  {
    icon: 'mdi:earth',
    title: 'Global Impact',
    description: 'We\'re building tools for a global audience. Our platform supports users in 150+ countries, helping businesses worldwide connect and grow.',
    color: 'cyan',
  },
]

export function AboutValues() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:heart" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Our Values
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            What We Stand For
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group spotlight-card overflow-hidden relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_${0.2 + idx * 0.05}s_both] animate-on-scroll"
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              {/* Spotlight Effects */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    value.color === 'blue'
                      ? 'rgba(59,130,246,0.06)'
                      : value.color === 'emerald'
                      ? 'rgba(16,185,129,0.06)'
                      : value.color === 'purple'
                      ? 'rgba(168,85,247,0.06)'
                      : value.color === 'orange'
                      ? 'rgba(251,146,60,0.06)'
                      : value.color === 'pink'
                      ? 'rgba(236,72,153,0.06)'
                      : 'rgba(6,182,212,0.06)'
                  }, transparent 40%)`,
                  zIndex: 1,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    value.color === 'blue'
                      ? 'rgba(59,130,246,0.4)'
                      : value.color === 'emerald'
                      ? 'rgba(16,185,129,0.4)'
                      : value.color === 'purple'
                      ? 'rgba(168,85,247,0.4)'
                      : value.color === 'orange'
                      ? 'rgba(251,146,60,0.4)'
                      : value.color === 'pink'
                      ? 'rgba(236,72,153,0.4)'
                      : 'rgba(6,182,212,0.4)'
                  }, transparent 40%)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                  zIndex: 50,
                }}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl ${
                    value.color === 'blue'
                      ? 'bg-blue-500/10 border-blue-500/20'
                      : value.color === 'emerald'
                      ? 'bg-emerald-500/10 border-emerald-500/20'
                      : value.color === 'purple'
                      ? 'bg-purple-500/10 border-purple-500/20'
                      : value.color === 'orange'
                      ? 'bg-orange-500/10 border-orange-500/20'
                      : value.color === 'pink'
                      ? 'bg-pink-500/10 border-pink-500/20'
                      : 'bg-cyan-500/10 border-cyan-500/20'
                  } border flex items-center justify-center mb-6`}
                >
                  <Icon
                    icon={value.icon}
                    className={`w-7 h-7 ${
                      value.color === 'blue'
                        ? 'text-blue-400'
                        : value.color === 'emerald'
                        ? 'text-emerald-400'
                        : value.color === 'purple'
                        ? 'text-purple-400'
                        : value.color === 'orange'
                        ? 'text-orange-400'
                        : value.color === 'pink'
                        ? 'text-pink-400'
                        : 'text-cyan-400'
                    }`}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white font-jakarta mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 font-geist leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

