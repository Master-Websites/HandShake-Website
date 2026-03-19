import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Follow-Up Message Generator — 3 Templates Instantly',
  description:
    'Generate 3 LinkedIn follow-up message variations for any context — after connection, meeting, no reply, or event. Free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-followup-generator',
  },
  openGraph: {
    title: 'Free LinkedIn Follow-Up Message Generator',
    description:
      'Generate LinkedIn follow-up messages for connections, meetings, no-replies, and events — 3 variations, free tool.',
    url: 'https://byhandshake.com/tools/linkedin-followup-generator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
