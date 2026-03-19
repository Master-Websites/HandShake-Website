import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Profile Optimization Score — Rate Your Profile /100',
  description:
    'Score your LinkedIn profile out of 100 with our free checklist-based scorer. Get personalized recommendations to optimize your profile for outreach.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-profile-score',
  },
  openGraph: {
    title: 'Free LinkedIn Profile Optimization Score',
    description:
      'Score your LinkedIn profile out of 100. Get personalized recommendations to optimize your profile for outreach.',
    url: 'https://byhandshake.com/tools/linkedin-profile-score',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
