'use client'

import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#02040a] border-t border-white/5 py-8 sm:py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center cursor-pointer transition-transform hover:scale-105 relative">
              <Image 
                src="/logos/handshake-logo.svg" 
                alt="Handshake" 
                width={185}
                height={32}
                className="h-7 w-auto"
              />
            </Link>
            <p className="max-w-xs font-geist text-gray-500 mt-2 sm:mt-4 text-xs sm:text-sm">
              The #1 LinkedIn Automation Platform for Agencies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 font-geist text-xs sm:text-sm">Product</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-500 text-xs sm:text-sm">
              <li>
                <a href="/features" className="hover:text-blue-400 transition-colors font-geist">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-blue-400 transition-colors font-geist">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/templates" className="hover:text-blue-400 transition-colors font-geist">
                  Templates
                </a>
              </li>
              <li>
                <a href="/affiliate" className="hover:text-blue-400 transition-colors font-geist">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>
          
          
          <div>
            <h4 className="font-semibold text-white mb-3 sm:mb-4 font-geist text-xs sm:text-sm">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-500 text-xs sm:text-sm">
              <li>
                <a href="/privacy" className="hover:text-blue-400 transition-colors font-geist">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-blue-400 transition-colors font-geist">
                  Terms
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-blue-400 transition-colors font-geist">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/gdpr" className="hover:text-blue-400 transition-colors font-geist">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/5 gap-4">
          <p className="font-geist text-gray-600 text-xs sm:text-sm">
            © 2026 Handshake Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/company/byhandshake/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-gray-500">
              <Icon icon="mdi:linkedin" className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

