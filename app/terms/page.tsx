'use client'

import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalLayout } from '@/components/LegalLayout'

export default function TermsPage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: (
        <>
          <p>
            By accessing or using Handshake's LinkedIn automation platform ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Services.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you and Handshake Inc. We reserve the right to update these Terms at any time, and your continued use of the Services constitutes acceptance of any modifications.
          </p>
        </>
      ),
    },
    {
      id: 'service-description',
      title: 'Description of Services',
      content: (
        <>
          <p>
            Handshake provides a cloud-based LinkedIn automation platform that enables users to manage multiple LinkedIn accounts, automate outreach campaigns, and streamline their LinkedIn activities. Our Services include but are not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Multi-account LinkedIn management</li>
            <li>Automated connection requests and messaging</li>
            <li>Campaign flow builders and templates</li>
            <li>Unified inbox for team collaboration</li>
            <li>Analytics and reporting tools</li>
          </ul>
        </>
      ),
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      content: (
        <>
          <p>As a user of our Services, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with LinkedIn's Terms of Service and User Agreement</li>
            <li>Use the Services only for lawful purposes</li>
            <li>Not use the Services to send spam or unwanted messages</li>
            <li>Not attempt to circumvent usage limits or safety features</li>
            <li>Not reverse engineer or attempt to extract source code</li>
            <li>Not resell or redistribute the Services without permission</li>
          </ul>
        </>
      ),
    },
    {
      id: 'linkedin-compliance',
      title: 'LinkedIn Compliance',
      content: (
        <>
          <p>
            You acknowledge that LinkedIn imposes certain restrictions on automated activity. While our Services are designed to operate safely within LinkedIn's guidelines, you understand and accept that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>LinkedIn may modify its terms or policies at any time</li>
            <li>Use of automation tools carries inherent risks</li>
            <li>We cannot guarantee your LinkedIn account will not be restricted</li>
            <li>You are solely responsible for your LinkedIn account activities</li>
          </ul>
          <p>
            We implement safety features including rate limiting and human-like behavior patterns, but ultimate responsibility for compliance rests with you.
          </p>
        </>
      ),
    },
    {
      id: 'payment-terms',
      title: 'Payment and Subscription',
      content: (
        <>
          <p>
            <strong>Fees:</strong> Use of certain features requires payment of subscription fees. All fees are stated in USD and are non-refundable except as required by law or as stated in our refund policy.
          </p>
          <p>
            <strong>Billing:</strong> Subscription fees are billed in advance on a monthly or annual basis. You authorize us to charge your payment method for all fees.
          </p>
          <p>
            <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled before the renewal date. You can cancel anytime from your account settings.
          </p>
          <p>
            <strong>Refunds:</strong> We offer a 30-day money-back guarantee for first-time subscribers. Contact support to request a refund within 30 days of purchase.
          </p>
        </>
      ),
    },
    {
      id: 'account-termination',
      title: 'Account Suspension and Termination',
      content: (
        <>
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or for any other reason at our sole discretion.
          </p>
          <p>
            You may terminate your account at any time from your account settings. Upon termination, your access to the Services will cease, and we will delete your data in accordance with our Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Limitations of Liability',
      content: (
        <>
          <p>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, HANDSHAKE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
          </p>
          <p>
            OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
        </>
      ),
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: (
        <>
          <p>
            All content, features, and functionality of the Services are owned by Handshake and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You retain ownership of any content you submit through the Services. By submitting content, you grant us a license to use, store, and process that content to provide the Services.
          </p>
        </>
      ),
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Disputes',
      content: (
        <>
          <p>
            These Terms are governed by the laws of the State of California, without regard to conflict of law principles. Any disputes arising from these Terms or the Services shall be resolved through binding arbitration in San Francisco, California.
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: (
        <>
          <p>
            For questions about these Terms, please contact us at legal@handshake.com or by mail at 123 Market Street, San Francisco, CA 94103.
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <LegalLayout title="Terms of Service" lastUpdated="November 28, 2024" sections={sections} />
      <Footer />
    </>
  )
}

