'use client'

import { useEffect } from 'react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { EditorMockup } from '@/components/EditorMockup'
import { LogoCarousel } from '@/components/LogoCarousel'
import { ComparisonSection } from '@/components/ComparisonSection'
import { FeaturesGrid } from '@/components/FeaturesGrid'
import { CampaignFlowSection } from '@/components/CampaignFlowSection'
import { BentoSection } from '@/components/BentoSection'
import { TestimonialsFan } from '@/components/TestimonialsFan'
import { PricingTable } from '@/components/PricingTable'
import { PricingCTA } from '@/components/PricingCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
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
      <Hero />
      <EditorMockup />
      
      <ComparisonSection />
      <FeaturesGrid />
      <CampaignFlowSection />
      <BentoSection />
      <TestimonialsFan />
      <PricingTable />
      <PricingCTA />
      <Footer />
    </>
  )
}

