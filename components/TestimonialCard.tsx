'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  imageUrl: string
  className?: string
}

export function TestimonialCard({ quote, author, role, imageUrl, className = '' }: TestimonialCardProps) {
  const { handleMouseMove } = useSpotlight()

  return (
    <article
      className={`testimonial-card group/card w-full max-w-sm rounded-xl sm:rounded-2xl bg-[#0A0A0A] border border-white/5 px-5 sm:px-6 py-4 sm:py-5 text-left relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
    >
      {/* Spotlight Effects */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)',
          zIndex: 1,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10">
        <div className="mb-2 sm:mb-3 text-2xl sm:text-3xl leading-none text-white font-jakarta font-medium">"</div>
        <p className="mb-3 sm:mb-4 text-sm sm:text-base font-geist text-gray-300 leading-relaxed">{quote}</p>
        <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
          <div
            className="w-8 h-8 sm:w-9 sm:h-9 bg-cover bg-center border-white/20 border rounded-full"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div>
            <div className="text-xs sm:text-sm font-medium text-white font-geist">{author}</div>
            <div className="text-[10px] sm:text-xs font-geist text-gray-500">{role}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

