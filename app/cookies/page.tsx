import type { Metadata } from 'next'

import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalLayout } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How Handshake uses cookies and similar tracking technologies.',
  alternates: {
    canonical: 'https://byhandshake.com/cookies',
  },
  openGraph: {
    url: 'https://byhandshake.com/cookies',
    title: 'Cookie Policy | Handshake',
    description: 'How Handshake uses cookies and similar tracking technologies.',
  },
}

export default function CookiesPage() {
  const sections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies',
      content: (
        <>
          <p>
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Services.
          </p>
          <p>
            We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired).
          </p>
        </>
      ),
    },
    {
      id: 'types-of-cookies',
      title: 'Types of Cookies We Use',
      content: (
        <>
          <p>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, authentication, and session management. You cannot opt out of these cookies.
          </p>
          <p>
            <strong>Performance Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us improve website performance and user experience.
          </p>
          <p>
            <strong>Functional Cookies:</strong> These cookies remember your preferences and choices, such as language preferences, to provide enhanced, personalized features.
          </p>
          <p>
            <strong>Analytics Cookies:</strong> We use analytics services like Google Analytics to understand how users interact with our website. These cookies collect anonymous data about page views, traffic sources, and user behavior.
          </p>
          <p>
            <strong>Marketing Cookies:</strong> These cookies track your browsing activity to deliver relevant advertisements. They may be set by us or our advertising partners.
          </p>
        </>
      ),
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      content: (
        <>
          <p>We use the following third-party services that may set cookies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
            <li><strong>Stripe:</strong> For payment processing</li>
            <li><strong>Intercom:</strong> For customer support chat</li>
            <li><strong>LinkedIn:</strong> For LinkedIn integration features</li>
          </ul>
          <p>
            These third parties have their own cookie policies. We recommend reviewing their privacy policies for more information.
          </p>
        </>
      ),
    },
    {
      id: 'managing-cookies',
      title: 'Managing Cookies',
      content: (
        <>
          <p>
            You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
          </p>
          <p>
            <strong>Browser Settings:</strong> You can control cookies through your browser settings. Here are links to cookie management guides for popular browsers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
            <li>Microsoft Edge</li>
          </ul>
          <p>
            Please note that blocking all cookies may affect your ability to use certain features of our website.
          </p>
        </>
      ),
    },
    {
      id: 'do-not-track',
      title: 'Do Not Track Signals',
      content: (
        <>
          <p>
            Some browsers include a "Do Not Track" (DNT) feature that signals websites you visit that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. We do not currently respond to DNT signals, but we are monitoring developments in this area.
          </p>
        </>
      ),
    },
    {
      id: 'cookie-consent',
      title: 'Cookie Consent',
      content: (
        <>
          <p>
            When you first visit our website, you will see a cookie banner asking for your consent to use non-essential cookies. You can customize your cookie preferences or accept/reject all cookies.
          </p>
          <p>
            You can change your cookie preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
          </p>
        </>
      ),
    },
    {
      id: 'updates',
      title: 'Updates to This Policy',
      content: (
        <>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. We encourage you to review this policy periodically.
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <LegalLayout title="Cookie Policy" lastUpdated="November 28, 2024" sections={sections} />
      <Footer />
    </>
  )
}

