import type { Metadata } from 'next'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FeaturesHero } from '@/components/FeaturesHero'
import { FeatureShowcase } from '@/components/FeatureShowcase'
import { CampaignFlowSection } from '@/components/CampaignFlowSection'
import { FeaturesList } from '@/components/FeaturesList'
import { FeaturesIntegrations } from '@/components/FeaturesIntegrations'
import { PricingCTA } from '@/components/PricingCTA'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Multi-sender rotation, unlimited workspaces, unified inbox, and campaign workflows. Everything you need to scale LinkedIn outreach safely.',
  alternates: {
    canonical: 'https://byhandshake.com/features',
  },
  openGraph: {
    url: 'https://byhandshake.com/features',
    title: 'Features | Handshake',
    description:
      'Multi-sender rotation, unlimited workspaces, unified inbox, and campaign workflows. Everything you need to scale LinkedIn outreach safely.',
  },
}

export default function FeaturesPage() {
  return (
    <>
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <main className="flex-grow">
        <FeaturesHero />
        <FeatureShowcase />
        <CampaignFlowSection />
        <FeaturesList />
        <FeaturesIntegrations />
        <PricingCTA />
      </main>
      <Footer />
    </>
  )
}
