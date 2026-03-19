import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn CTA Generator — 10 Call-to-Action Ideas Instantly',
  description:
    'Generate 10 compelling LinkedIn CTA variations for any goal — get comments, drive traffic, book calls, or grow followers. Free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-cta-generator',
  },
  openGraph: {
    title: 'Free LinkedIn CTA Generator',
    description:
      'Generate 10 LinkedIn call-to-action variations for comments, traffic, calls, or follower growth — free tool.',
    url: 'https://byhandshake.com/tools/linkedin-cta-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
