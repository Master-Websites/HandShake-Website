'use client'

import { FeatureCard } from './FeatureCard'
import { Icon } from '@iconify/react'

export function FeaturesGrid() {
  return (
    <section className="py-12 sm:py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-black -z-20" />
      <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-white/5 border-b pb-8 sm:pb-12 mb-8 sm:mb-12 md:mb-16 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-8 items-start justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta mb-4 sm:mb-6 leading-tight text-left">
              Everything you need to
              <span className="text-blue-500 font-jakarta font-medium"> dominate LinkedIn</span>
            </h2>
            <p className="leading-relaxed text-base sm:text-lg mt-4 sm:mt-6 font-geist text-gray-400">
              Scale your LinkedIn outreach with intelligent automation. From multi-sender rotation to unified inbox management, Handshake gives you the complete toolkit to reach more prospects safely.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a href="https://app.byhandshake.com/signup" className="btn-shimmer group inline-flex w-full sm:w-auto text-sm font-semibold rounded-full px-6 py-3 items-center justify-center transition-all duration-300 text-white font-geist bg-blue-950 border border-blue-600 shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:border-blue-300 hover:shadow-[0_0_40px_rgba(0,123,255,0.8)] focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-950 gap-2">
              <span className="font-geist">Start Scaling</span>
              <Icon icon="mdi:arrow-right" className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <FeatureCard
                  badge="Multi-Account Orchestration"
                  gradient
                  title="One Dashboard. All Your Clients."
                  description="Manage unlimited LinkedIn accounts across multiple clients or teams from a single interface. Switch between workspaces instantly without ever logging out."
                  bullets={[
                    { title: 'Unlimited Workspaces', description: 'Separate environments for each client.' },
                    { title: 'Instant Switching', description: 'Jump between accounts in one click.' },
                    { title: 'Centralized Billing', description: 'One subscription, unlimited accounts.' },
                  ]}
                  illustration={
                    <div className="absolute bottom-0 right-0 translate-x-16 translate-y-12 w-80 h-80 opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-6 group-hover:-translate-x-4">
                      <svg viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                        {/* Central Hub */}
                        <circle cx="120" cy="120" r="20" fill="#3b82f6" className="animate-pulse" />
                        <circle cx="120" cy="120" r="28" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3" />
                        
                        {/* Account Nodes */}
                        <g className="transition-transform duration-700 ease-out group-hover:scale-110 origin-center">
                          {/* Top */}
                          <circle cx="120" cy="40" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="120" cy="40" r="10" fill="#52525b" />
                          <path d="M120 120 L120 56" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Top Right */}
                          <circle cx="180" cy="70" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="180" cy="70" r="10" fill="#52525b" />
                          <path d="M120 120 L168 78" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Right */}
                          <circle cx="200" cy="120" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="200" cy="120" r="10" fill="#52525b" />
                          <path d="M140 120 L184 120" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Bottom Right */}
                          <circle cx="180" cy="170" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="180" cy="170" r="10" fill="#52525b" />
                          <path d="M120 120 L168 162" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Bottom */}
                          <circle cx="120" cy="200" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="120" cy="200" r="10" fill="#52525b" />
                          <path d="M120 140 L120 184" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Bottom Left */}
                          <circle cx="60" cy="170" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="60" cy="170" r="10" fill="#52525b" />
                          <path d="M120 120 L72 162" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Left */}
                          <circle cx="40" cy="120" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="40" cy="120" r="10" fill="#52525b" />
                          <path d="M100 120 L56 120" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                          
                          {/* Top Left */}
                          <circle cx="60" cy="70" r="16" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
                          <circle cx="60" cy="70" r="10" fill="#52525b" />
                          <path d="M120 120 L72 78" stroke="#3f3f46" strokeWidth="2" strokeDasharray="4 4" />
                        </g>
                      </svg>
                    </div>
                  }
                />

                <FeatureCard
                  badge="Smart Sender Rotation"
                  title="Bypass LinkedIn Limits. Safely."
                  description="Don't rely on one account. Connect a pool of senders to a single campaign. HandShake automatically rotates volume across accounts to keep activity natural while maximizing reach."
                  bullets={[
                    { title: 'Auto-Warmup', description: 'New accounts ramp gradually.' },
                    { title: 'Load Balancing', description: 'Auto-switch on limits.' },
                    { title: 'One Fixed Cost', description: "Don't pay per seat." },
                  ]}
                  illustration={
                    <div className="absolute bottom-0 right-0 translate-x-16 translate-y-16 w-72 h-72 opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-6 group-hover:-translate-x-4">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                        <path d="M40 40 L80 80" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />
                        <path d="M160 40 L120 80" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />
                        <path d="M100 20 L100 80" stroke="#3f3f46" strokeWidth="4" strokeLinecap="round" />
                        <path d="M70 80 L80 160 H120 L130 80 H70 Z" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                        <circle cx="100" cy="110" r="18" fill="#3b82f6" className="animate-pulse" />
                        <path d="M100 128 V185" stroke="url(#flow-gradient)" strokeWidth="6" strokeLinecap="round" strokeDasharray="4 4" />
                        <defs>
                          <linearGradient id="flow-gradient" x1="100" y1="128" x2="100" y2="185" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3b82f6" />
                            <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  }
                />

                <FeatureCard
                  badge="Unified Inbox"
                  title="Manage 50 Conversations. Zero Logins."
                  description="Stop tab-switching. View, label, and reply to messages from every single sender account in one centralized feed. Works with HubSpot, Pipedrive, and Salesforce."
                  illustration={
                    <div className="absolute bottom-0 right-0 translate-x-12 translate-y-12 w-80 h-64 opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4 group-hover:-translate-x-4">
                      <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                        <rect x="20" y="40" width="260" height="200" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
                        <rect x="20" y="40" width="60" height="200" rx="8" fill="#0f0f11" />
                        <circle cx="50" cy="70" r="12" fill="#3f3f46" className="group-hover:fill-blue-500 transition-colors" />
                        <circle cx="50" cy="105" r="12" fill="#27272a" />
                        <circle cx="50" cy="140" r="12" fill="#27272a" />
                        <rect x="90" y="60" width="120" height="10" rx="2" fill="#27272a" />
                        <rect x="90" y="80" width="180" height="24" rx="4" fill="#27272a" />
                        <rect x="130" y="115" width="140" height="24" rx="4" fill="#3b82f6" fillOpacity="0.3" />
                      </svg>
                    </div>
                  }
                />

                <FeatureCard
                  badge="Built for Teams"
                  title="Unlimited Clients. Unlimited Workspaces."
                  description="Whether you are an agency with 50 clients or a sales team with 3 verticals, organize them into dedicated workspaces. Keep data separate, manage billing centrally."
                  illustration={
                    <div className="absolute bottom-0 right-0 translate-x-12 translate-y-8 w-72 h-72 opacity-90 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4 group-hover:-translate-x-4">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                        <rect x="40" y="40" width="140" height="140" rx="8" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
                        <rect x="40" y="40" width="140" height="32" rx="8" fill="#27272a" />
                        <path d="M60 56 H120" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
                        <path d="M160 56 L150 56" stroke="#71717a" strokeWidth="2" strokeLinecap="round" />
                        <g className="group-hover:translate-y-1 transition-transform duration-300">
                          <rect x="50" y="85" width="120" height="24" rx="4" fill="#3f3f46" fillOpacity="0.5" className="group-hover:fill-blue-500 group-hover:fill-opacity-0.2 transition-colors" />
                          <circle cx="65" cy="97" r="4" fill="#60a5fa" />
                          <rect x="80" y="93" width="60" height="8" rx="2" fill="#e4e4e7" />
                        </g>
                        <g transform="translate(0, 30)">
                          <rect x="50" y="85" width="120" height="24" rx="4" fill="transparent" />
                          <circle cx="65" cy="97" r="4" fill="#a855f7" />
                          <rect x="80" y="93" width="50" height="8" rx="2" fill="#71717a" />
                        </g>
                      </svg>
                    </div>
                  }
                />
          </div>
        </div>
      </div>
    </section>
  )
}

