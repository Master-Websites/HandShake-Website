import type { Metadata } from 'next'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { PricingHero } from '@/components/PricingHero'
import { PricingPlans } from '@/components/PricingPlans'
import { PricingComparison } from '@/components/PricingComparison'
import { PricingFAQ } from '@/components/PricingFAQ'
import { PricingCTA } from '@/components/PricingCTA'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for LinkedIn automation. Start with 1 sender at $69/mo, scale to unlimited. All plans include unlimited team seats and workspaces.',
  alternates: {
    canonical: 'https://byhandshake.com/pricing',
  },
  openGraph: {
    url: 'https://byhandshake.com/pricing',
    title: 'Pricing | Handshake',
    description:
      'Simple, transparent pricing for LinkedIn automation. Start with 1 sender at $69/mo, scale to unlimited. All plans include unlimited team seats and workspaces.',
  },
}

export default function PricingPage() {
  return (
    <>
      <ScrollAnimationProvider />
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
