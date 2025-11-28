'use client'

import { Icon } from '@iconify/react'

export function PricingCTA() {
  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight font-jakarta mb-6">
            Ready to Scale Your Outreach?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 font-geist mb-10 max-w-2xl mx-auto">
            Join thousands of sales teams and agencies using Handshake to automate their LinkedIn outreach safely and effectively.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] uppercase tracking-wide group">
              Start 14-Day Free Trial
              <Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-8 py-4 items-center justify-center gap-2 transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] uppercase tracking-wide">
              <Icon icon="mdi:email" className="w-4 h-4" />
              Contact Sales
            </button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500 font-geist flex-wrap">
            <div className="flex items-center gap-2">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-blue-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-blue-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="mdi:check-circle" className="w-4 h-4 text-blue-400" />
              <span>30-day money-back</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-jakarta mb-2">10K+</div>
            <div className="text-sm text-gray-500 font-geist">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-jakarta mb-2">500K+</div>
            <div className="text-sm text-gray-500 font-geist">Messages Sent</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-jakarta mb-2">98%</div>
            <div className="text-sm text-gray-500 font-geist">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-jakarta mb-2">24/7</div>
            <div className="text-sm text-gray-500 font-geist">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

