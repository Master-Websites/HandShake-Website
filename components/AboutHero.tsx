'use client'

export function AboutHero() {
  return (
    <section className="pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              About Us
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
            Building the Future of
            <br className="hidden sm:block" />
            <span className="text-blue-500 font-jakarta font-medium"> LinkedIn Automation</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
            We're on a mission to help businesses scale their LinkedIn outreach safely, efficiently, and compliantly.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-jakarta mb-2">10K+</div>
              <div className="text-sm text-gray-500 font-geist">Active Users</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-jakarta mb-2">500K+</div>
              <div className="text-sm text-gray-500 font-geist">Messages Daily</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-white font-jakarta mb-2">150+</div>
              <div className="text-sm text-gray-500 font-geist">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

