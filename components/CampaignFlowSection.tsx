'use client'

import { useSpotlight } from '@/lib/hooks/useSpotlight'
import { Icon } from '@iconify/react'

export function CampaignFlowSection() {
  const { handleMouseMove } = useSpotlight()

  return (
    <section className="py-12 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(circle_at_center,black_50%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 mb-6">
            <Icon icon="mdi:workflow" className="w-3 h-3 text-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-blue-300">
              Campaign Automation
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6 px-4 leading-tight">
            Build Complex Outreach Sequences
            <span className="text-blue-500 font-jakarta font-medium"> Without Code</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 font-geist px-4">
            Visual flow builder with conditional logic, time delays, and multi-channel touchpoints. Set it once, let it run forever.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Features */}
          <div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Icon icon="mdi:routes" className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white font-geist mb-2">
                  If/Then Branching Logic
                </h3>
                <p className="text-sm text-gray-400 font-geist leading-relaxed">
                  Create different paths based on prospect actions—accepted connection, replied to message, or no response. Smart automation that adapts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Icon icon="mdi:clock-outline" className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white font-geist mb-2">
                  Smart Time Delays
                </h3>
                <p className="text-sm text-gray-400 font-geist leading-relaxed">
                  Wait 1 day, 3 days, or 2 weeks between steps. Handshake respects human timing to keep your outreach natural and avoid spam flags.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Icon icon="mdi:format-list-checks" className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white font-geist mb-2">
                  Multi-Touch Campaigns
                </h3>
                <p className="text-sm text-gray-400 font-geist leading-relaxed">
                  Combine connection requests, messages, InMails, profile views, and post engagement. Build sequences that actually convert.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <Icon icon="mdi:content-copy" className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white font-geist mb-2">
                  Template Library
                </h3>
                <p className="text-sm text-gray-400 font-geist leading-relaxed">
                  Start with proven sequences from our library. Clone, customize, and launch campaigns in minutes instead of hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Flow Builder Illustration */}
          <div
            className="group spotlight-card relative bg-gradient-to-br from-[#0F1419] via-[#0A0A0A] to-[#000000] border border-white/5 rounded-[32px] p-8 md:p-12 shadow-2xl transition-all duration-500 hover:border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll min-h-[500px] lg:min-h-[600px] overflow-visible"
            onMouseMove={handleMouseMove}
            style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
          >
            {/* Spotlight Effects */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]"
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

            {/* Dotted background pattern */}
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }} />

            <div className="relative z-10">
              {/* LinkedIn Senders Header */}
              <div className="bg-[#1A1D29]/80 backdrop-blur-sm border border-white/5 rounded-2xl px-4 py-3 mb-8 inline-flex items-center gap-3 shadow-lg">
                <span className="text-xs font-medium text-gray-400 font-geist">LinkedIn senders</span>
                <div className="flex -space-x-2">
                  {['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#6366f1'].map((color, idx) => (
                    <div
                      key={idx}
                      className="w-7 h-7 rounded-full border-2 border-[#1A1D29] flex items-center justify-center text-white text-[10px] font-bold transition-transform hover:scale-110 hover:z-10"
                      style={{ background: `linear-gradient(135deg, ${color}, ${color}dd)` }}
                    >
                      {String.fromCharCode(65 + idx)}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full border-2 border-[#1A1D29] bg-gray-700 flex items-center justify-center text-white text-[10px] font-bold">
                    +54
                  </div>
                </div>
              </div>

              {/* Flow Diagram */}
              <div className="relative flex flex-col items-center space-y-6">
                {/* Campaign Start */}
                <div className="bg-blue-600/20 border border-blue-500/30 rounded-xl px-5 py-3 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:rocket-launch" className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-white font-geist">Campaign Start</span>
                  </div>
                </div>

                {/* Connecting line */}
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-purple-500/50" />

                {/* Connection Request */}
                <div className="bg-[#1A1D29]/80 border border-white/10 rounded-xl px-5 py-3 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:account-plus" className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-white font-geist">Connection request</span>
                  </div>
                </div>

                {/* Branching */}
                <div className="relative flex items-center gap-8 w-full justify-center">
                  {/* Left branch - Not accepted */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-red-600/20 border border-red-500/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-md">
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:close-circle" className="w-3.5 h-3.5 text-red-400" />
                        <span className="text-xs font-medium text-gray-300 font-geist whitespace-nowrap">Not accepted</span>
                      </div>
                    </div>
                    
                    <div className="w-0.5 h-6 bg-red-500/30" />
                    
                    <div className="bg-[#1A1D29]/60 border border-white/5 rounded-lg px-3 py-2 text-xs text-gray-400 font-geist flex items-center gap-1.5">
                      <Icon icon="mdi:clock" className="w-3 h-3" />
                      1 Day
                    </div>
                  </div>

                  {/* Right branch - Accepted */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-md">
                      <div className="flex items-center gap-2">
                        <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-medium text-gray-300 font-geist">Accepted</span>
                      </div>
                    </div>
                    
                    <div className="w-0.5 h-6 bg-emerald-500/30" />
                    
                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-lg px-3 py-2 backdrop-blur-sm shadow-md">
                      <div className="flex items-center gap-1.5">
                        <Icon icon="mdi:email" className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-medium text-white font-geist">Send message</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center gap-3 flex-wrap justify-center mt-4">
                  <div className="bg-[#1A1D29]/60 border border-white/5 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      <Icon icon="mdi:thumb-up" className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-xs text-gray-400 font-geist">Like post</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1A1D29]/60 border border-white/5 rounded-lg px-3 py-2 backdrop-blur-sm">
                    <div className="flex items-center gap-1.5">
                      <Icon icon="mdi:email-fast" className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-xs text-gray-400 font-geist">InMail</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Integration Icons */}
              <div className="absolute -left-8 top-16 w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity hidden lg:flex">
                <Icon icon="mdi:google" className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -left-4 bottom-20 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity hidden lg:flex">
                <span className="text-xs font-bold text-white">API</span>
              </div>

              <div className="absolute -right-8 top-24 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity hidden lg:flex">
                <Icon icon="mdi:pipedrive" className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -right-6 bottom-32 w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity hidden lg:flex">
                <Icon icon="mdi:slack" className="w-6 h-6 text-white" />
              </div>

              <div className="absolute left-12 -bottom-6 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity hidden lg:flex">
                <Icon icon="mdi:microsoft" className="w-6 h-6 text-white" />
              </div>

              <div className="absolute right-16 -bottom-6 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg opacity-60 hover:opacity-100 transition-opacity hidden lg:flex">
                <Icon icon="mdi:hubspot" className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>

          {/* Right: Additional Info */}
          
        </div>
      </div>
    </section>
  )
}

