import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Character Counter — Check All LinkedIn Limits',
  description:
    'Real-time character counter for LinkedIn posts, headlines, summaries, connection requests, and InMails. Color-coded warnings — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-character-counter',
  },
  openGraph: {
    title: 'Free LinkedIn Character Counter',
    description:
      'Real-time character counter for all LinkedIn fields. Posts, headlines, summaries, connection requests, InMails — free.',
    url: 'https://byhandshake.com/tools/linkedin-character-counter',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
