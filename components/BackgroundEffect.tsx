'use client'

import { useEffect } from 'react'

export function BackgroundEffect() {
  useEffect(() => {
    // Load UnicornStudio script
    if (typeof window !== 'undefined' && !(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false }
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js'
      script.onload = () => {
        if (!(window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init()
          ;(window as any).UnicornStudio.isInitialized = true
        }
      }
      document.head.appendChild(script)
    }
  }, [])

  return (
    <div
      className="aura-background-component top-0 w-full -z-10 absolute h-[800px]"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)',
      }}
    >
      <div
        data-us-project="7BChNsgjdoJkLPEpWhX3"
        className="absolute w-full h-full left-0 top-0 -z-10"
      />
    </div>
  )
}

