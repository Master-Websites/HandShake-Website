import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Hashtag Generator — Find the Best Hashtags for Your Posts',
  description:
    'Generate 15-20 relevant LinkedIn hashtags sorted by estimated reach. Mix of broad, medium, and niche hashtags for maximum discoverability — free tool.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-hashtag-generator',
  },
  openGraph: {
    title: 'Free LinkedIn Hashtag Generator',
    description:
      'Generate the best LinkedIn hashtags for your posts. Broad, medium, and niche mix for maximum reach — free, no signup required.',
    url: 'https://byhandshake.com/tools/linkedin-hashtag-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
