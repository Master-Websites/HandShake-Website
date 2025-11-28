'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const methods = [
  {
    icon: 'mdi:briefcase',
    title: 'Sales',
    description: 'Interested in Handshake for your team? Talk to our sales team about custom plans and enterprise features.',
    cta: 'Contact Sales',
    href: 'mailto:sales@handshake.com',
    color: 'blue',
  },
  {
    icon: 'mdi:lifebuoy',
    title: 'Technical Support',
    description: 'Having technical issues? Our support team is here to help you troubleshoot and resolve any problems.',
    cta: 'Get Support',
    href: 'mailto:support@handshake.com',
    color: 'emerald',
  },
  {
    icon: 'mdi:handshake',
    title: 'Partnerships',
    description: 'Interested in partnering with Handshake? Let\'s explore how we can work together to grow.',
    cta: 'Become a Partner',
    href: 'mailto:partners@handshake.com',
    color: 'purple',
  },
]

export function ContactMethods() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:account-group" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              How Can We Help?
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            Choose Your Department
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
            Connect with the right team for your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className="group spotlight-card overflow-hidden relative bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_${0.2 + idx * 0.1}s_both] animate-on-scroll flex flex-col"
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              {/* Spotlight Effects */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    method.color === 'blue'
                      ? 'rgba(59,130,246,0.06)'
                      : method.color === 'emerald'
                      ? 'rgba(16,185,129,0.06)'
                      : 'rgba(168,85,247,0.06)'
                  }, transparent 40%)`,
                  zIndex: 1,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    method.color === 'blue'
                      ? 'rgba(59,130,246,0.4)'
                      : method.color === 'emerald'
                      ? 'rgba(16,185,129,0.4)'
                      : 'rgba(168,85,247,0.4)'
                  }, transparent 40%)`,
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                  zIndex: 50,
                }}
              />

              <div className="relative z-10 flex flex-col flex-1">
                <div
                  className={`w-14 h-14 rounded-xl ${
                    method.color === 'blue'
                      ? 'bg-blue-500/10 border-blue-500/20'
                      : method.color === 'emerald'
                      ? 'bg-emerald-500/10 border-emerald-500/20'
                      : 'bg-purple-500/10 border-purple-500/20'
                  } border flex items-center justify-center mb-6`}
                >
                  <Icon
                    icon={method.icon}
                    className={`w-7 h-7 ${
                      method.color === 'blue'
                        ? 'text-blue-400'
                        : method.color === 'emerald'
                        ? 'text-emerald-400'
                        : 'text-purple-400'
                    }`}
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white font-jakarta mb-3">{method.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 font-geist mb-6 flex-1">{method.description}</p>

                <a
                  href={method.href}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-geist transition-all duration-300 group/btn ${
                    method.color === 'blue'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40'
                      : method.color === 'emerald'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40'
                      : 'bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40'
                  }`}
                >
                  {method.cta}
                  <Icon
                    icon="mdi:arrow-right"
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
          <h3 className="text-xl font-semibold text-white font-jakarta mb-6">Connect With Us</h3>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Icon icon="mdi:twitter" className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 group"
            >
              <Icon
                icon="mdi:linkedin"
                className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
            >
              <Icon
                icon="mdi:discord"
                className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors"
              />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center hover:border-gray-500/50 hover:bg-gray-500/10 transition-all duration-300 group"
            >
              <Icon icon="mdi:github" className="w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

