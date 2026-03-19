import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn InMail Template Generator — 3 Templates in Seconds',
  description:
    'Generate 3 personalized LinkedIn InMail templates with subject lines. Recruit, sell, partner, or network — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-inmail-generator',
  },
  openGraph: {
    title: 'Free LinkedIn InMail Template Generator',
    description:
      'Generate 3 LinkedIn InMail templates with subject lines for recruiting, sales, partnerships, and networking — free tool.',
    url: 'https://byhandshake.com/tools/linkedin-inmail-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
