'use client'

import { Icon } from '@iconify/react'

export function ComparisonSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative border-t border-white/5 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6 px-4">
            Stop Punishing Your Growth with
            <span className="text-blue-500"> "Per-Seat" Pricing</span>.
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist px-4">
            Most tools charge you more as you grow. Handshake is built to help you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <div className="group relative bg-[#0A0A0A] border border-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll hover:border-white/10 transition-colors">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 font-jakarta mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                <Icon icon="mdi:close" className="w-4 h-4" />
              </span>
              The Industry Standard
            </h3>
            <ul className="space-y-3 sm:space-y-5">
              <li className="flex items-start gap-3 text-gray-400 font-geist">
                <Icon icon="mdi:close" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Charge per user/seat
                  <span className="text-gray-500"> ($50-$100 each)</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-geist">
                <Icon icon="mdi:close" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Limits on active leads/campaigns</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-geist">
                <Icon icon="mdi:close" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>Risky browser extensions</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 font-geist">
                <Icon icon="mdi:close" className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>
                  Fragmented inboxes
                  <span className="text-gray-500"> (logging in/out)</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="group relative bg-blue-950/10 border border-blue-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none" />
            
            <h3 className="text-xl font-semibold text-white font-jakarta mb-8 flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Icon icon="mdi:check" className="w-4 h-4" />
              </span>
              The Handshake Standard
            </h3>
            
            <ul className="space-y-5 relative z-10">
              <li className="flex items-start gap-3 text-gray-200 font-geist">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="mdi:check" className="w-3 h-3 text-blue-400" />
                </div>
                <span>
                  Unlimited Leads & Workspaces
                  <span className="text-blue-200/60 font-medium"> (All Plans)</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-200 font-geist">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="mdi:check" className="w-3 h-3 text-blue-400" />
                </div>
                <span>
                  Multi-Sender Rotation
                  <span className="text-blue-200/60 font-medium"> (Sender Pools)</span>
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-200 font-geist">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="mdi:check" className="w-3 h-3 text-blue-400" />
                </div>
                <span>Cloud-Based dedicated IPs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200 font-geist">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon icon="mdi:check" className="w-3 h-3 text-blue-400" />
                </div>
                <span>One Unified Inbox for 50+ accounts</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

