'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

export function AboutStory() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
              <Icon icon="mdi:book-open-page-variant" className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight font-jakarta mb-6">
              Born from Frustration,
              <span className="text-blue-500 font-jakarta font-medium"> Built for Scale</span>
            </h2>

            <div className="space-y-4 text-gray-400 font-geist text-base leading-relaxed">
              <p>
                Handshake was founded in 2020 when our team was running LinkedIn outbound campaigns for multiple clients. We were using various tools, but none of them could safely handle the volume we needed.
              </p>
              <p>
                Account bans were common. Manual switching between accounts was time-consuming. There was no unified inbox for team collaboration. We knew there had to be a better way.
              </p>
              <p>
                So we built Handshake—a platform designed from the ground up for high-volume, multi-account LinkedIn automation. Today, we help thousands of businesses worldwide scale their outreach safely and effectively.
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div
            className="group spotlight-card overflow-hidden relative bg-gradient-to-br from-[#0F1419] to-[#0A0A0A] border border-white/5 rounded-[32px] p-12 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll min-h-[400px] flex items-center justify-center"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            {/* Spotlight Effects */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.08), transparent 40%)',
                zIndex: 1,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude',
                WebkitMaskComposite: 'xor',
                padding: '1px',
                zIndex: 50,
              }}
            />

            {/* Timeline Illustration */}
            <div className="relative z-10 w-full">
              <div className="space-y-8">
                {[
                  { year: '2020', title: 'Founded', desc: 'Started with a vision' },
                  { year: '2021', title: '1K Users', desc: 'First thousand users' },
                  { year: '2022', title: 'Enterprise', desc: 'Launched enterprise tier' },
                  { year: '2023', title: '10K Users', desc: 'Hit major milestone' },
                  { year: '2024', title: 'Global', desc: '150+ countries' },
                ].map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-16 text-right">
                      <span className="text-2xl font-bold text-blue-400 font-jakarta">{milestone.year}</span>
                    </div>
                    <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent" />
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white font-jakarta mb-1">{milestone.title}</h4>
                      <p className="text-sm text-gray-400 font-geist">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="group spotlight-card overflow-hidden relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.06), transparent 40%)',
                zIndex: 1,
              }}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Icon icon="mdi:target" className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white font-jakarta mb-4">Our Mission</h3>
              <p className="text-gray-400 font-geist leading-relaxed">
                To democratize LinkedIn automation by making enterprise-grade outreach tools accessible to businesses of all sizes, while maintaining the highest standards of safety and compliance.
              </p>
            </div>
          </div>

          <div
            className="group spotlight-card overflow-hidden relative bg-[#0A0A0A] border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(168,85,247,0.06), transparent 40%)',
                zIndex: 1,
              }}
            />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <Icon icon="mdi:lightbulb" className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white font-jakarta mb-4">Our Vision</h3>
              <p className="text-gray-400 font-geist leading-relaxed">
                To become the world's most trusted LinkedIn automation platform, empowering millions of businesses to build meaningful professional relationships at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

