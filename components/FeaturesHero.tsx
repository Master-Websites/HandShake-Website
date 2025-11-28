'use client'

export function FeaturesHero() {
  return (
    <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Features
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
            Everything You Need to
            <br className="hidden sm:block" />
            <span className="text-blue-500 font-jakarta font-medium"> Scale LinkedIn Outreach</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
            Powerful automation, intelligent workflows, and enterprise-grade safety features designed for high-volume LinkedIn outbound campaigns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide">
              Start Free Trial
            </button>
            <button className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] uppercase tracking-wide">
              See Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

