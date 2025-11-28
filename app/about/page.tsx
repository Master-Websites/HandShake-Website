'use client'

import { useEffect } from 'react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AboutHero } from '@/components/AboutHero'
import { AboutStory } from '@/components/AboutStory'
import { AboutValues } from '@/components/AboutValues'
import { AboutTeam } from '@/components/AboutTeam'
import { PricingCTA } from '@/components/PricingCTA'

export default function AboutPage() {
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
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <PricingCTA />
      </main>
      <Footer />
    </>
  )
}

