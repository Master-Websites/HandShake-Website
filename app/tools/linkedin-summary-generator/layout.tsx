import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Summary Generator — Write Your About Section',
  description:
    'Generate 3 compelling LinkedIn About section variations. Storyteller, results-driven, and authority styles — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-summary-generator',
  },
  openGraph: {
    title: 'Free LinkedIn Summary Generator',
    description:
      'Generate 3 compelling LinkedIn About section variations in different styles. Free — no signup required.',
    url: 'https://byhandshake.com/tools/linkedin-summary-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
