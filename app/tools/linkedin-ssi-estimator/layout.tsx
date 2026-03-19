import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn SSI Score Estimator — Estimate Your Social Selling Index',
  description:
    'Estimate your LinkedIn Social Selling Index (SSI) with our checklist-based scorer. 20 questions across 4 categories with personalized recommendations — free.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-ssi-estimator',
  },
  openGraph: {
    title: 'Free LinkedIn SSI Score Estimator',
    description:
      'Estimate your LinkedIn SSI score across 4 categories. 20-question checklist with category breakdowns and recommendations — free tool.',
    url: 'https://byhandshake.com/tools/linkedin-ssi-estimator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
