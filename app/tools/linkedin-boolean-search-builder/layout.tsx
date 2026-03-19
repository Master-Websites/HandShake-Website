import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Boolean Search Builder — Find Your Ideal Prospects',
  description:
    'Build advanced LinkedIn boolean search strings instantly. Combine job titles, industries, locations, and keywords with AND/OR/NOT operators — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-boolean-search-builder',
  },
  openGraph: {
    title: 'Free LinkedIn Boolean Search Builder',
    description:
      'Build advanced LinkedIn boolean search strings instantly. Combine job titles, industries, locations, and keywords — free.',
    url: 'https://byhandshake.com/tools/linkedin-boolean-search-builder',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
