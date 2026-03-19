'use client'

import { useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const resourcesLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Guides', href: '/guides' },
  { label: 'Templates', href: '/templates' },
  { label: 'Tools', href: '/tools' },
  { label: 'Compare', href: '/compare' },
  { label: 'Use Cases', href: '/use-cases' },
]

export function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setResourcesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setResourcesOpen(false), 150)
  }

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
          <Link href="/affiliate" className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white">
            <span className="absolute -top-1 -left-0.5 inline-flex items-center justify-center w-[25px] h-[12px] rounded-full text-[8px] font-semibold bg-orange-500/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm">Hot</span>
            Affiliate
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
          </Link>

          {/* Resources Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setResourcesOpen((prev) => !prev)}
              className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white flex items-center gap-1"
            >
              Resources
              <Icon
                icon="solar:alt-arrow-down-linear"
                className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`}
              />
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl border border-gray-700/50 bg-gray-900/95 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden transition-all duration-200 ${
                resourcesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {resourcesLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setResourcesOpen(false)}
                  className="block px-4 py-2.5 text-sm font-geist text-gray-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <a href="https://outbound.community/" target="_blank" rel="noopener noreferrer" className="nav-link relative px-2 xl:px-3 py-2 transition-colors duration-300 font-geist text-gray-300 hover:text-white">
            Community
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-transparent transition-all duration-300 nav-indicator" />
          </a>
        </div>

        <div className="relative flex items-center gap-2 shrink-0">
          <a href="https://app.byhandshake.com/login" className="hidden sm:inline-flex items-center justify-center px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-[11px] sm:text-xs md:text-sm font-semibold text-gray-300 hover:text-white transition-colors duration-300 font-geist">
            Login
          </a>
          <a href="https://app.byhandshake.com/signup" className="group relative inline-flex items-center justify-center gap-1 sm:gap-1.5 overflow-hidden rounded-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 text-[11px] sm:text-xs md:text-sm font-semibold shadow-[0_2px_10px_rgba(0,123,255,0.3)] sm:shadow-[0_4px_15px_rgba(0,123,255,0.4)] hover:shadow-[0_8px_25px_rgba(0,123,255,0.8)] hover:scale-[1.02] transition-all duration-300 text-white font-geist bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-800 hover:bg-gradient-to-tr hover:from-blue-300 hover:via-blue-500 hover:to-blue-700 active:shadow-inner active:shadow-blue-900/50 active:scale-[0.98] active:duration-75">
            <span className="relative z-10 font-geist hidden md:inline">Start Scaling</span>
            <span className="relative z-10 font-geist md:hidden">Start</span>
            <Icon icon="solar:arrow-right-up-bold-duotone" className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300 w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}

