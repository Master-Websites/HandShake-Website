import type { Metadata } from 'next'

import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalLayout } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Handshake collects, uses, and protects your personal information.',
  alternates: {
    canonical: 'https://byhandshake.com/privacy',
  },
  openGraph: {
    url: 'https://byhandshake.com/privacy',
    title: 'Privacy Policy | Handshake',
    description: 'How Handshake collects, uses, and protects your personal information.',
  },
}

export default function PrivacyPage() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p>
            This Privacy Policy describes how Handshake Inc. ("we", "us", or "our") collects, uses, and shares your personal information when you use our LinkedIn automation platform and related services (collectively, the "Services").
          </p>
          <p>
            We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This policy outlines our privacy practices and explains your rights regarding your personal data.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      content: (
        <>
          <p>
            <strong>Account Information:</strong> When you create an account, we collect your name, email address, company name, and password.
          </p>
          <p>
            <strong>LinkedIn Account Data:</strong> To provide our automation services, you authorize us to access certain LinkedIn account information including your profile data, connections, messages, and activity logs.
          </p>
          <p>
            <strong>Usage Data:</strong> We automatically collect information about how you interact with our Services, including log data, device information, IP addresses, browser type, and pages visited.
          </p>
          <p>
            <strong>Payment Information:</strong> When you subscribe to our paid plans, our payment processor collects your billing information. We do not store complete credit card numbers.
          </p>
        </>
      ),
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      content: (
        <>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our Services</li>
            <li>Process your transactions and manage your subscription</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Respond to your comments, questions, and provide customer service</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, prevent, and address technical issues and fraud</li>
            <li>Comply with legal obligations</li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing and Disclosure',
      content: (
        <>
          <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
          <p>
            <strong>Service Providers:</strong> We work with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.
          </p>
          <p>
            <strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.
          </p>
          <p>
            <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
          </p>
          <p>
            <strong>With Your Consent:</strong> We may share information with your explicit consent for specific purposes.
          </p>
        </>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: (
        <>
          <p>
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Secure cloud infrastructure with redundancy</li>
            <li>Employee training on data protection practices</li>
          </ul>
          <p>
            However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
        </>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      content: (
        <>
          <p>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your data</li>
            <li><strong>Restriction:</strong> Request restriction of processing</li>
          </ul>
          <p>
            To exercise these rights, please contact us at privacy@handshake.com.
          </p>
        </>
      ),
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: (
        <>
          <p>
            We retain your personal information for as long as necessary to provide our Services and fulfill the purposes outlined in this Privacy Policy. When you close your account, we will delete or anonymize your data within 90 days, unless we are required to retain it for legal, regulatory, or legitimate business purposes.
          </p>
        </>
      ),
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      content: (
        <>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from your jurisdiction.
          </p>
          <p>
            When we transfer data internationally, we ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission.
          </p>
        </>
      ),
    },
    {
      id: 'children',
      title: "Children's Privacy",
      content: (
        <>
          <p>
            Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email. Your continued use of our Services after changes become effective constitutes acceptance of the revised policy.
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <LegalLayout title="Privacy Policy" lastUpdated="November 28, 2024" sections={sections} />
      <Footer />
    </>
  )
}

