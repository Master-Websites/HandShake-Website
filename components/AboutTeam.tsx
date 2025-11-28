'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

const team = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Co-Founder',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    bio: 'Former VP of Sales at a Fortune 500 company. Passionate about scaling B2B outreach.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-Founder',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Ex-Google engineer with 10+ years building scalable automation platforms.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Product',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    bio: 'Product leader with experience at Salesforce and HubSpot. User-obsessed.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Emily Watson',
    role: 'VP of Engineering',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    bio: 'Infrastructure expert who scaled systems at Amazon. Cloud architecture specialist.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'David Kim',
    role: 'Head of Customer Success',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    bio: 'Customer-first mindset with 8 years in SaaS support. Loves solving problems.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Lisa Patel',
    role: 'Head of Marketing',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
    bio: 'Growth marketing expert. Former head of marketing at a Series B startup.',
    socials: { linkedin: '#', twitter: '#' },
  },
]

export function AboutTeam() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:account-group" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Our Team
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
            Meet the Team
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist max-w-2xl mx-auto">
            A diverse group of builders, dreamers, and problem-solvers united by a common mission
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group spotlight-card overflow-hidden relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_${0.2 + idx * 0.05}s_both] animate-on-scroll"
              onMouseMove={handleMouseMove}
              style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
            >
              {/* Spotlight Effects */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 40%)',
                  zIndex: 1,
                }}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                  zIndex: 50,
                }}
              />

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full bg-[#0A0A0A]"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white font-jakarta mb-1">{member.name}</h3>
                <p className="text-sm text-blue-400 font-geist mb-3">{member.role}</p>
                <p className="text-sm text-gray-400 font-geist leading-relaxed mb-4">{member.bio}</p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.socials.linkedin}
                    className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                  >
                    <Icon icon="mdi:linkedin" className="w-4 h-4 text-blue-400" />
                  </a>
                  <a
                    href={member.socials.twitter}
                    className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center hover:bg-blue-500/20 transition-colors"
                  >
                    <Icon icon="mdi:twitter" className="w-4 h-4 text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us CTA */}
        <div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
          <div className="inline-block bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-2xl p-8 sm:p-12">
            <Icon icon="mdi:rocket-launch" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-white font-jakarta mb-3">Join Our Team</h3>
            <p className="text-gray-400 font-geist mb-6 max-w-md mx-auto">
              We're always looking for talented people who are passionate about building great products.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 text-white text-sm font-semibold rounded-full shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 font-geist uppercase tracking-wide"
            >
              View Open Positions
              <Icon icon="mdi:arrow-right" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

