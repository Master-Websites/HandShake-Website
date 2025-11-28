'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'

export function BentoSection() {
  return (
    <section className="overflow-visible bg-center pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24 relative">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 overflow-visible">
          <div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6">
              Ready to fill your pipeline?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-md font-geist text-gray-400">
              Join the fastest growing sales teams and start booking more meetings today.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Icon icon="solar:check-read-bold-duotone" className="text-sm" />
                </div>
                <div>
                  <h4 className="text-white font-medium font-geist">Cloud-Based Safety</h4>
                  <p className="text-sm font-geist text-gray-500">
                    Dedicated IP addresses for every account.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Icon icon="solar:check-read-bold-duotone" className="text-sm" />
                </div>
                <div>
                  <h4 className="text-white font-medium font-geist">A/B Testing</h4>
                  <p className="text-sm font-geist text-gray-500">
                    Test subject lines and message copy automatically.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Icon icon="solar:check-read-bold-duotone" className="text-sm" />
                </div>
                <div>
                  <h4 className="text-white font-medium font-geist">Native Integrations</h4>
                  <p className="text-sm font-geist text-gray-500">
                    Sync seamlessly with HubSpot, Salesforce, and Pipedrive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="flex [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll w-full relative items-center justify-center overflow-visible">
            <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
            
            <div className="relative w-full max-w-xl overflow-visible" style={{ perspective: '1600px' }}>
              <div className="relative transform-gpu transform-style-preserve-3d -rotate-y-10 rotate-x-5 hover:-rotate-y-5 hover:rotate-x-0 transition-transform duration-700 ease-out w-full overflow-visible">
                <div className="font-sans bg-[#09090B] rounded-xl p-1 relative shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_50px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.1)_inset] ring-1 ring-white/5 overflow-visible">
                  <div className="bg-[#0C0C0E] rounded-lg overflow-hidden flex flex-col h-full min-h-[500px]">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-[#0C0C0E] px-4 py-3 border-b border-white/5 select-none">
                      <div className="flex items-center gap-4">
                        <div className="flex gap-1.5 group">
                          <div className="w-2.5 h-2.5 rounded-full border border-white/5 group-hover:bg-[#FF5F57] transition-colors bg-gray-700/50" />
                          <div className="w-2.5 h-2.5 rounded-full border border-white/5 group-hover:bg-[#FEBC2E] transition-colors bg-gray-700/50" />
                          <div className="w-2.5 h-2.5 rounded-full border border-white/5 group-hover:bg-[#28C840] transition-colors bg-gray-700/50" />
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-medium">
                          <Icon icon="mdi:chart-line" className="text-blue-400 text-sm" />
                          <span className="font-geist text-gray-300">Campaign Dashboard</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 p-5 bg-[#0C0C0E]">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        <div className="bg-[#1A1A1C] rounded-lg p-3 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase font-geist mb-1">Active Senders</div>
                          <div className="text-2xl font-bold text-white font-jakarta">12</div>
                          <div className="text-[9px] text-emerald-400 font-geist mt-1">↑ 3 this week</div>
                        </div>
                        <div className="bg-[#1A1A1C] rounded-lg p-3 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase font-geist mb-1">Sent Today</div>
                          <div className="text-2xl font-bold text-white font-jakarta">847</div>
                          <div className="text-[9px] text-blue-400 font-geist mt-1">67% of limit</div>
                        </div>
                        <div className="bg-[#1A1A1C] rounded-lg p-3 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase font-geist mb-1">Reply Rate</div>
                          <div className="text-2xl font-bold text-white font-jakarta">32%</div>
                          <div className="text-[9px] text-emerald-400 font-geist mt-1">↑ 8% vs avg</div>
                        </div>
                      </div>

                      {/* Active Campaigns */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-gray-300 font-geist">Active Campaigns</span>
                          <span className="text-[10px] text-gray-600 font-geist">3 running</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-[#1A1A1C] rounded-lg p-3 border border-blue-500/20 hover:border-blue-500/40 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-medium text-white font-geist">CEO Outreach Q1</span>
                              <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-geist">Active</span>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] text-gray-500">
                              <span className="font-geist">234 sent</span>
                              <span className="font-geist">•</span>
                              <span className="font-geist">18 replies</span>
                              <span className="font-geist">•</span>
                              <span className="text-blue-400 font-geist">5 senders</span>
                            </div>
                          </div>
                          
                          <div className="bg-[#1A1A1C] rounded-lg p-3 border border-white/5 hover:border-white/10 transition-colors">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-medium text-white font-geist">Partner Outreach</span>
                              <span className="text-[9px] px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 font-geist">Warmup</span>
                            </div>
                            <div className="flex items-center gap-4 text-[10px] text-gray-500">
                              <span className="font-geist">89 sent</span>
                              <span className="font-geist">•</span>
                              <span className="font-geist">12 replies</span>
                              <span className="font-geist">•</span>
                              <span className="text-blue-400 font-geist">3 senders</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sender Accounts */}
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-gray-300 font-geist">Sender Pool</span>
                          <button className="text-[10px] text-blue-400 hover:text-blue-300 font-geist">+ Add Sender</button>
                        </div>
                        <div className="flex -space-x-2">
                          {['JD', 'MR', 'ST', 'AW', 'KC', '+7'].map((initials, idx) => (
                            <div
                              key={idx}
                              className="w-8 h-8 rounded-full border-2 border-[#0C0C0E] bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center hover:z-10 hover:scale-110 transition-transform cursor-pointer"
                            >
                              <span className="text-[10px] font-bold text-white font-geist">{initials}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Live Activity Indicator */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-[#1A1A1C]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/5 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                          <span className="text-[10px] text-gray-400 font-geist">Live: 3 messages sent in last 5 min</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats Badge */}
                  <div className="absolute -right-16 top-20 bg-[#141415] border border-white/10 px-4 py-3 rounded-lg shadow-2xl transform rotate-[4deg] animate-float z-50 hidden lg:block">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-500 uppercase font-geist mb-1">This Month</span>
                      <span className="text-xl font-bold text-white font-jakarta">2,847</span>
                      <span className="text-[9px] text-emerald-400 font-geist">Messages Sent</span>
                    </div>
                  </div>

                  {/* Floating Account Badge */}
                  <div className="absolute -left-12 bottom-16 bg-[#141415] border border-white/10 px-3 py-2 rounded-lg shadow-2xl transform rotate-[-4deg] animate-float z-50 hidden lg:flex items-center gap-3" style={{ animationDelay: '1s' }}>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-[#141415] bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">A</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-[#141415] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">J</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-[#141415] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">K</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-medium leading-none font-geist text-gray-400">3 accounts</span>
                      <span className="text-[8px] leading-none mt-0.5 font-geist text-gray-600">rotating now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

