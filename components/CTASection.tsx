'use client'

export function CTASection() {
  return (
    <section className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 relative">
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4 sm:mb-6 font-jakarta font-medium">
          Ready to build the future?
        </h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto font-geist text-gray-400 px-4">
          Join thousands of designers and developers creating the next generation of 3D web experiences today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://app.byhandshake.com/signup" className="btn-shimmer inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-3.5 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75">
            Start Scaling
          </a>
          <a href="/pricing" className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-3.5 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950">
            View Pricing
          </a>
        </div>
      </div>
    </section>
  )
}

