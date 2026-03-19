'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface AnimatedCounterProps {
  target: string // e.g. "10K+", "500K+", "98%", "24/7"
  className?: string
}

function parseTarget(target: string): { num: number; suffix: string; prefix: string } {
  // Handle special cases like "24/7"
  if (target === '24/7') return { num: 24, suffix: '/7', prefix: '' }
  
  const match = target.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)\s*([A-Za-z%+/]*)$/)
  if (!match) return { num: 0, suffix: target, prefix: '' }
  
  return {
    prefix: match[1] || '',
    num: parseFloat(match[2]),
    suffix: match[3] || '',
  }
}

export function AnimatedCounter({ target, className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const { num, suffix, prefix } = parseTarget(target)

  const animate = useCallback(() => {
    if (hasAnimated) return
    setHasAnimated(true)
    
    const duration = 1500
    const steps = 40
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current++
      // Ease-out curve
      const progress = current / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * num))
      
      if (current >= steps) {
        setCount(num)
        clearInterval(timer)
      }
    }, stepTime)
  }, [hasAnimated, num])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate])

  return (
    <div ref={ref} className={className}>
      {prefix}{count}{suffix}
    </div>
  )
}
