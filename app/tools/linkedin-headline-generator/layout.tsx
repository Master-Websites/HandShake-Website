import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Headline Generator — 10 Headline Ideas in Seconds',
  description:
    'Generate 10 compelling LinkedIn headline variations in different styles. Results-focused, authority, curiosity, and social proof — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-headline-generator',
  },
  openGraph: {
    title: 'Free LinkedIn Headline Generator',
    description:
      'Generate 10 compelling LinkedIn headline variations. Results-focused, authority, curiosity, and social proof styles — free.',
    url: 'https://byhandshake.com/tools/linkedin-headline-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
