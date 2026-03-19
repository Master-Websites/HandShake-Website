import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Connection Request Generator — Personalized Templates',
  description:
    'Generate 5 personalized LinkedIn connection request templates under 300 characters. Free tool — no signup required. Get copy-ready messages instantly.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-connection-request-generator',
  },
  openGraph: {
    title: 'Free LinkedIn Connection Request Generator',
    description:
      'Generate 5 personalized LinkedIn connection request templates under 300 characters. Free — no signup required.',
    url: 'https://byhandshake.com/tools/linkedin-connection-request-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
