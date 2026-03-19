import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Post Generator — Create Viral Posts in Seconds',
  description:
    'Generate 3 high-performing LinkedIn post variations from your topic and key points. Choose your tone and CTA — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-post-generator',
  },
  openGraph: {
    title: 'Free LinkedIn Post Generator',
    description:
      'Generate 3 high-performing LinkedIn post variations from your topic and key points. Free — no signup required.',
    url: 'https://byhandshake.com/tools/linkedin-post-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
