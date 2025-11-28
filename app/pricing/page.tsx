'use client'

import { useEffect } from 'react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PricingHero } from '@/components/PricingHero'
import { PricingPlans } from '@/components/PricingPlans'
import { PricingComparison } from '@/components/PricingComparison'
import { PricingFAQ } from '@/components/PricingFAQ'
import { PricingCTA } from '@/components/PricingCTA'

export default function PricingPage() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <main className="flex-grow">
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </>
  )
}

