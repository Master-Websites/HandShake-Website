import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Outreach ROI Calculator — Project Your Pipeline Value',
  description:
    'Calculate your LinkedIn outreach ROI for free. Project connections, conversations, meetings, pipeline value, and revenue based on your outreach metrics.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-outreach-roi-calculator',
  },
  openGraph: {
    title: 'Free LinkedIn Outreach ROI Calculator',
    description:
      'Calculate your LinkedIn outreach ROI. Project connections, conversations, meetings, and pipeline value.',
    url: 'https://byhandshake.com/tools/linkedin-outreach-roi-calculator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
