'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'

const contacts = [
  { name: 'James Mitchell', time: '3:23 PM', preview: 'Thanks for connecting! I would love to learn more about...' },
  { name: 'Sarah Thompson', time: '3:23 PM', preview: 'Hey! I saw your post about sales automation and...', active: true },
  { name: 'Robert Anderson', time: '3:23 PM', preview: 'Absolutely! Let us schedule a quick call next week...' },
  { name: 'Emily Davis', time: '3:23 PM', preview: 'This looks interesting. Can you send over more details?' },
  { name: 'Michael Chen', time: '3:23 PM', preview: 'Hey! Quick question about your multi-sender feature...', unread: true },
  { name: 'Jessica Martinez', time: '3:23 PM', preview: 'I appreciate you reaching out. Our team is currently...' },
  { name: 'David Wilson', time: '3:23 PM', preview: 'Been looking for something like this for months!' },
  { name: 'Amanda Roberts', time: '3:23 PM', preview: 'Would love to see a demo. Are you available this Friday?' },
]

export function EditorMockup() {
  return (
    <div className="group [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] w-full h-[500px] sm:h-[600px] md:h-[720px] max-w-[1600px] mt-8 mr-auto ml-auto relative perspective-[2000px] px-4">
      <div className="transform-style-preserve-3d md:hover:rotate-x-0 md:hover:rotate-y-6 transition-transform duration-700 ease-out w-full h-full relative md:rotate-x-4 md:rotate-y-12">
        <div className="overflow-hidden flex select-none bg-[#050505] w-full h-full max-w-[1600px] border-white/10 border rounded-2xl md:rounded-3xl relative shadow-2xl">
          
          {/* Left Sidebar */}
          <div className="w-[240px] bg-[#0A0A0A] border-r border-white/5 flex flex-col">
            {/* Logo */}
            <div className="h-14 px-4 flex items-center border-b border-white/5">
              <Image 
                src="/logos/handshake-logo.svg" 
                alt="Handshake" 
                width={185}
                height={32}
                className="h-6 w-auto"
              />
            </div>

            {/* Workspace Selector */}
            <div className="p-3 border-b border-white/5">
              <button className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#1A1A1C] hover:bg-[#252527] transition-colors border border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">W</span>
                  </div>
                  <span className="text-xs font-medium text-white font-geist">Workspace 1</span>
                </div>
                <Icon icon="mdi:chevron-down" className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Search */}
            <div className="px-3 py-2">
              <div className="relative">
                <Icon icon="mdi:magnify" className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-[#1A1A1C] border border-white/5 rounded-lg py-1.5 pl-9 pr-3 text-xs text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-600 font-mono">⌘K</span>
              </div>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 overflow-y-auto px-2 py-2">
              <div className="mb-4">
                <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 font-geist">Accounts</div>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200">
                  <Icon icon="mdi:linkedin" className="w-4 h-4" />
                  <span className="text-xs font-medium font-geist">LinkedIn Accounts</span>
                </button>
              </div>

              <div className="mb-4">
                <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 font-geist">Leads</div>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200">
                  <Icon icon="mdi:account-group" className="w-4 h-4" />
                  <span className="text-xs font-medium font-geist">Leads</span>
                </button>
              </div>

              <div className="mb-4">
                <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 font-geist">Outreach</div>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200">
                  <Icon icon="mdi:chart-line" className="w-4 h-4" />
                  <span className="text-xs font-medium font-geist">Analytics</span>
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200">
                  <Icon icon="mdi:bullhorn" className="w-4 h-4" />
                  <span className="text-xs font-medium font-geist">Campaigns</span>
                </button>
                <button className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:email" className="w-4 h-4" />
                    <span className="text-xs font-medium font-geist">Unibox</span>
                  </div>
                  <span className="w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">2</span>
                </button>
              </div>

              <div className="mb-4">
                <div className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-600 font-geist">Agents</div>
                <button className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200">
                  <div className="flex items-center gap-2">
                    <Icon icon="mdi:robot" className="w-4 h-4" />
                    <span className="text-xs font-medium font-geist">Agent Ghost</span>
                  </div>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-bold uppercase font-geist">New</span>
                </button>
              </div>
            </nav>

            {/* Bottom Nav */}
            <div className="px-2 py-3 border-t border-white/5">
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200 mb-1">
                <Icon icon="mdi:account-group" className="w-4 h-4" />
                <span className="text-xs font-medium font-geist">Community</span>
              </button>
              <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200 mb-1">
                <Icon icon="mdi:cog" className="w-4 h-4" />
                <span className="text-xs font-medium font-geist">Settings</span>
              </button>
              <button className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-gray-200 mb-3">
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:lifebuoy" className="w-4 h-4" />
                  <span className="text-xs font-medium font-geist">Support</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
              </button>

              {/* User Profile */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-white font-geist">Jessica Davis</div>
                <div className="text-[10px] text-gray-500 truncate">jessica@growthteam.io</div>
              </div>
                <Icon icon="mdi:chevron-right" className="w-3.5 h-3.5 text-gray-600" />
              </div>
            </div>
          </div>

          {/* Top Bar */}
          <div className="flex-1 flex flex-col">
            <div className="h-14 px-6 flex items-center justify-between border-b border-white/5 bg-[#0A0A0A]">
              <div className="flex items-center gap-4">
                <h2 className="text-base font-semibold text-white font-geist">Unibox</h2>
                <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-white/5 transition-colors">
                  <span className="text-sm text-blue-400 font-geist">All messages</span>
                  <Icon icon="mdi:chevron-down" className="w-4 h-4 text-blue-400" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center text-gray-400 hover:text-white">
                  <Icon icon="mdi:circle-outline" className="w-4 h-4" />
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors text-white text-xs font-semibold font-geist">
                  New
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center text-gray-400 hover:text-white">
                  <Icon icon="mdi:archive" className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center text-gray-400 hover:text-white">
                  <Icon icon="mdi:bell-off" className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center text-gray-400 hover:text-white">
                  <Icon icon="mdi:star-outline" className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center text-gray-400 hover:text-white">
                  <Icon icon="mdi:dots-horizontal" className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Message List */}
              <div className="w-[280px] border-r border-white/5 overflow-y-auto">
                {/* Search Bar */}
                <div className="p-3 border-b border-white/5">
                  <div className="relative">
                    <Icon icon="mdi:magnify" className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-[#1A1A1C] border border-white/5 rounded-lg py-2 pl-9 pr-3 text-xs text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50"
                    />
                  </div>
                  <button className="w-full mt-2 flex items-center justify-center gap-2 py-1.5 rounded hover:bg-white/5 transition-colors text-gray-500 hover:text-gray-300">
                    <Icon icon="mdi:filter-variant" className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-geist">Filter</span>
                  </button>
                </div>

                {/* Contact List */}
                <div>
                  {contacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 px-4 py-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 ${
                        contact.active ? 'bg-blue-500/10 hover:bg-blue-500/15' : ''
                      }`}
                    >
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{contact.name.split(' ').map((n: string) => n[0]).join('')}</span>
                        </div>
                        {contact.unread && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-[#0A0A0A] flex items-center justify-center">
                            <span className="text-[9px] font-bold text-white">4</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className={`text-xs font-medium font-geist ${contact.active ? 'text-white' : 'text-gray-200'}`}>
                            {contact.name}
                          </span>
                          <span className="text-[10px] text-gray-500">{contact.time}</span>
                        </div>
                        <p className="text-[11px] text-gray-500 truncate font-geist">{contact.preview}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conversation Area */}
              <div className="flex-1 flex flex-col bg-[#000000]">
                {/* Conversation Header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                      <span className="text-sm font-bold text-white">ST</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white font-geist">Sarah Thompson</div>
                      <div className="text-xs text-gray-500 font-geist">VP of Sales @ TechVenture Solutions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center">
                      <Icon icon="mdi:circle-outline" className="w-4 h-4 text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center">
                      <span className="text-white text-lg">⋯</span>
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* Date Divider */}
                  <div className="flex items-center justify-center">
                    <span className="text-[10px] px-3 py-1 rounded-full bg-[#1A1A1C] text-gray-500 font-geist">Jan 12, 2025</span>
                  </div>

                  {/* Received Message - Outreach */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white">MR</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs font-semibold text-white font-geist">Marcus Rodriguez (Sender account)</span>
                        <span className="text-[10px] text-gray-600">8 min ago</span>
                      </div>
                      <div className="bg-[#1A1A1C] rounded-2xl rounded-tl-sm p-4 max-w-lg">
                        <p className="text-sm text-gray-300 leading-relaxed font-geist">
                          Hey Sarah! I noticed you&apos;re scaling the sales team at TechVenture and thought you might find this interesting. We help sales teams like yours scale LinkedIn outreach without hitting the dreaded weekly limits—using smart multi-sender rotation across your team&apos;s accounts. Would love to show you how we&apos;re helping teams 3x their pipeline. Up for a quick 15-min demo this week?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Follow-up message */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white">MR</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-xs font-semibold text-white font-geist">Marcus Rodriguez (Sender account)</span>
                        <span className="text-[10px] text-gray-600">8 min ago</span>
                      </div>
                      <div className="bg-[#1A1A1C] rounded-2xl rounded-tl-sm p-4 max-w-lg">
                        <p className="text-sm text-gray-300 leading-relaxed font-geist">
                          P.S. — We have a unified inbox so you never have to log in and out of multiple accounts again. Everything in one place 🚀
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Date Divider */}
                  <div className="flex items-center justify-center">
                    <span className="text-[10px] px-3 py-1 rounded-full bg-[#1A1A1C] text-gray-500 font-geist">Jan 15, 2025</span>
                  </div>

                  {/* Sent Message - Reply */}
                  <div className="flex gap-3 justify-end">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1 justify-end">
                        <span className="text-[10px] text-gray-600">8 min ago</span>
                        <span className="text-xs font-semibold text-white font-geist">Sarah Thompson</span>
                      </div>
                      <div className="bg-blue-600 rounded-2xl rounded-tr-sm p-4 max-w-lg ml-auto">
                        <p className="text-sm text-white leading-relaxed font-geist">
                          Hey Marcus! This actually sounds perfect for what we&apos;re trying to do. We&apos;ve been hitting our limits constantly and it&apos;s slowing down the whole team. I&apos;m definitely interested in seeing how the multi-sender rotation works. How about Thursday at 2pm EST? Also curious about the pricing—do you charge per seat or per sender account?
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white">ST</span>
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div className="px-6 py-4 border-t border-white/5">
                  <div className="flex items-center gap-2 bg-[#1A1A1C] rounded-xl border border-white/5 px-4 py-3">
                    <button className="text-gray-500 hover:text-gray-300 transition-colors">
                      <Icon icon="mdi:plus-circle" className="w-5 h-5" />
                    </button>
                    <input
                      type="text"
                      placeholder="Write your message here..."
                      className="flex-1 bg-transparent text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none font-geist"
                    />
                    <button className="text-gray-500 hover:text-gray-300 transition-colors">
                      <Icon icon="mdi:emoticon-outline" className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-300 transition-colors">
                      <Icon icon="mdi:expand-all" className="w-5 h-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-300 transition-colors">
                      <Icon icon="mdi:microphone" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

