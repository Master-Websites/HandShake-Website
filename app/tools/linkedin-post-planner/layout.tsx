import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Post Scheduler Planner — Weekly Content Calendar',
  description:
    'Plan your weekly LinkedIn content calendar with suggested days, times, and content type distribution. Download as text — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-post-planner',
  },
  openGraph: {
    title: 'Free LinkedIn Post Scheduler Planner',
    description:
      'Generate a weekly LinkedIn content calendar with optimal posting times and content mix — free tool.',
    url: 'https://byhandshake.com/tools/linkedin-post-planner',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
