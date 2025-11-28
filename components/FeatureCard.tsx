'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { ReactNode } from 'react'

interface FeatureCardProps {
  badge?: string
  title: string
  description: string
  features?: string[]
  bullets?: { title: string; description: string }[]
  illustration: ReactNode
  gradient?: boolean
}

export function FeatureCard({
  badge,
  title,
  description,
  features,
  bullets,
  illustration,
  gradient = false,
}: FeatureCardProps) {
  const { handleMouseMove } = useSpotlight()

  return (
    <div className="perspective-[1600px]">
      <div
        className={`group spotlight-card overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 ${
          gradient ? 'bg-gradient-to-br from-[#121214] to-[#000000]/0' : 'bg-[#0A0A0A]'
        } border-white/5 border rounded-2xl sm:rounded-3xl md:rounded-[32px] relative shadow-2xl transition-all duration-700 hover:border-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] min-h-[360px] sm:min-h-[420px] flex flex-col transform-style-preserve-3d md:-rotate-y-3 md:rotate-x-2 md:hover:rotate-x-0 md:hover:rotate-y-0`}
        onMouseMove={handleMouseMove}
        style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
      >
      {/* Flashlight Effects */}
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

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none" />

      <div className="max-w-lg z-10 relative">
        {badge && (
          <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 sm:px-3 py-0.5 sm:py-1 mb-4 sm:mb-6">
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase text-blue-400 font-geist">
              {badge}
            </span>
          </div>
        )}
        
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white tracking-tight font-geist leading-tight mb-3 sm:mb-4">
          {title}
        </h3>
        
        <p className="leading-relaxed font-geist text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
          {description}
        </p>

        {features && (
          <ul className="space-y-3 sm:space-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2.5 sm:gap-3.5 text-xs sm:text-sm font-medium font-geist text-gray-300">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {bullets && (
          <ul className="space-y-2.5 sm:space-y-3.5">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 sm:gap-3.5 text-xs sm:text-sm font-medium font-geist text-gray-300 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span>
                  <strong className="text-white font-semibold">{bullet.title}:</strong> {bullet.description}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {illustration}
      </div>
    </div>
  )
}

