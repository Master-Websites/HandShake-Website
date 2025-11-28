'use client'

export function PricingHero() {
  return (
    <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Plans & Pricing
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
            Simple, Transparent Pricing.
            <br className="hidden sm:block" />
            <span className="text-blue-500 font-jakarta font-medium"> Scale as You Grow.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
            Start building for free, then scale as you grow. Upgrade, downgrade, or cancel at any time with no hidden fees.
          </p>

          <p className="text-xs sm:text-sm text-gray-500 font-medium font-geist tracking-wide">
            All plans include 14-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  )
}

