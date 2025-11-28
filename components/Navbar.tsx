'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed z-50 -translate-x-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl top-2 sm:top-3 left-1/2">
      <div className="flex transition-all duration-500 shadow-black/50 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] bg-gray-900/10 w-full h-12 sm:h-14 border-gray-700/50 border rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-2xl backdrop-blur-xl items-center justify-between">
        <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500/50 to-indigo-500/50 opacity-0 pointer-events-none" />

        <Link href="/" className="flex items-center cursor-pointer transition-transform hover:scale-105 relative shrink-0">
          {/* Full logo with text for medium screens and up */}
          <Image 
            src="/logos/handshake-logo.svg" 
            alt="Handshake" 
            width={185}
            height={32}
            className="hidden md:block h-6 sm:h-7 lg:h-8 w-auto"
            priority
          />
          {/* Icon only for small screens */}
          <Image 
            src="/logos/handshake-icon.svg" 
            alt="Handshake" 
            width={38}
            height={32}
            className="block md:hidden h-7 w-auto"
            priority
          />
        </Link>

        <div className="relative hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
          <Link href="/features" className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white">
            Features
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
          </Link>
          <Link href="/pricing" className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white">
            Pricing
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
          </Link>
          <Link href="/about" className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white">
            About
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
          </Link>
          <Link href="/contact" className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white">
            Contact
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
          </Link>
        </div>

        <div className="relative flex items-center gap-2 shrink-0">
          <button className="group relative inline-flex items-center justify-center gap-1 sm:gap-1.5 overflow-hidden rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 text-[11px] sm:text-xs md:text-sm font-semibold shadow-[0_2px_10px_rgba(0,123,255,0.3)] sm:shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75">
            <span className="relative z-10 font-geist hidden md:inline">Start Free Trial</span>
            <span className="relative z-10 font-geist md:hidden">Start Trial</span>
            <Icon icon="solar:arrow-right-up-bold-duotone" className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}

