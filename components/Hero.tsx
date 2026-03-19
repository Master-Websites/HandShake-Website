'use client'

export function Hero() {
  return (
    <main className="flex-grow pt-24 sm:pt-32 md:pt-40 pb-8 sm:pb-16 relative">
      {/* Aurora gradient background */}
      <div className="aurora-bg" />
      <div className="sm:px-6 lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
        <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] text-center max-w-4xl mr-auto mb-8 sm:mb-12 md:mb-16 ml-auto">
          <div className="inline-flex gap-2 bg-blue-500/10 border-blue-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 items-center">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase font-geist">
              New: Handshake 2.0 is live
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] font-jakarta font-medium px-2">
            The Operating System for
            <br className="hidden sm:block" />
            <span className="text-shimmer">High-Volume LinkedIn Outbound.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed font-geist text-gray-400 px-4">
            Scale your outreach safely with multi-sender rotation. Manage
            unlimited workspaces, unlimited leads, and unified conversations—all
            from one dashboard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://app.byhandshake.com/signup" className="btn-shimmer inline-flex sm:w-auto transition-all duration-300 hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75 text-sm font-semibold text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_4px_15px_rgba(0,123,255,0.4)] items-center justify-center">
              Start Scaling
            </a>
            <a href="#pricing" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-3.5 items-center justify-center transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950">
              View Pricing
            </a>
          </div>
          
          <p className="text-xs text-gray-500 mt-6 font-medium font-geist tracking-wide">
            30-day money-back guarantee • Cancel anytime • Premium Handshake Proxies
          </p>
        </div>
      </div>
    </main>
  )
}

