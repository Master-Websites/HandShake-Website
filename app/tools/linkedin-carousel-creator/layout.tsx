import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free LinkedIn Carousel Creator — Plan Slides That Get Saved',
  description:
    'Plan and outline LinkedIn carousel posts with slide-by-slide content. Best practices for hooks, flow, and CTAs — free, no signup required.',
  alternates: {
    canonical: 'https://byhandshake.com/tools/linkedin-carousel-creator',
  },
  openGraph: {
    title: 'Free LinkedIn Carousel Creator',
    description:
      'Plan LinkedIn carousel posts slide by slide. Hook on slide 1, one idea per slide, CTA on the last — free tool.',
    url: 'https://byhandshake.com/tools/linkedin-carousel-creator',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
