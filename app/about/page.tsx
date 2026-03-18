import type { Metadata } from 'next'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { AboutHero } from '@/components/AboutHero'
import { AboutStory } from '@/components/AboutStory'
import { AboutValues } from '@/components/AboutValues'
import { AboutTeam } from '@/components/AboutTeam'
import { PricingCTA } from '@/components/PricingCTA'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the team behind Handshake — building the operating system for LinkedIn outreach at scale.',
  alternates: {
    canonical: 'https://byhandshake.com/about',
  },
  openGraph: {
    url: 'https://byhandshake.com/about',
    title: 'About | Handshake',
    description:
      'Meet the team behind Handshake — building the operating system for LinkedIn outreach at scale.',
  },
}

export default function AboutPage() {
  return (
    <>
      <ScrollAnimationProvider />
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
