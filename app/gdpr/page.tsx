import type { Metadata } from 'next'

import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { LegalLayout } from '@/components/LegalLayout'

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description: 'How Handshake complies with the General Data Protection Regulation.',
  alternates: {
    canonical: 'https://byhandshake.com/gdpr',
  },
  openGraph: {
    url: 'https://byhandshake.com/gdpr',
    title: 'GDPR Compliance | Handshake',
    description: 'How Handshake complies with the General Data Protection Regulation.',
  },
}

export default function GDPRPage() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: (
        <>
          <p>
            The General Data Protection Regulation (GDPR) is a comprehensive data protection law in the European Union that came into effect on May 25, 2018. This page outlines how Handshake complies with GDPR requirements and explains your rights under GDPR.
          </p>
          <p>
            We are committed to protecting the privacy and security of personal data for all users, including those in the EU/EEA.
          </p>
        </>
      ),
    },
    {
      id: 'data-controller',
      title: 'Data Controller',
      content: (
        <>
          <p>
            For the purposes of GDPR, Handshake Inc. is the data controller responsible for your personal data. Our contact details are:
          </p>
          <p>
            <strong>Handshake Inc.</strong><br />
            123 Market Street<br />
            San Francisco, CA 94103<br />
            Email: dpo@handshake.com
          </p>
        </>
      ),
    },
    {
      id: 'legal-basis',
      title: 'Legal Basis for Processing',
      content: (
        <>
          <p>We process your personal data under the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contract Performance:</strong> To provide our Services as agreed in our Terms of Service</li>
            <li><strong>Consent:</strong> When you have given explicit consent for specific processing activities</li>
            <li><strong>Legitimate Interests:</strong> To improve our Services, prevent fraud, and ensure security</li>
            <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations</li>
          </ul>
        </>
      ),
    },
    {
      id: 'your-rights',
      title: 'Your GDPR Rights',
      content: (
        <>
          <p>Under GDPR, you have the following rights:</p>
          <p>
            <strong>Right to Access:</strong> You can request a copy of the personal data we hold about you.
          </p>
          <p>
            <strong>Right to Rectification:</strong> You can ask us to correct inaccurate or incomplete data.
          </p>
          <p>
            <strong>Right to Erasure ("Right to be Forgotten"):</strong> You can request deletion of your personal data in certain circumstances.
          </p>
          <p>
            <strong>Right to Restriction:</strong> You can ask us to restrict processing of your data in certain situations.
          </p>
          <p>
            <strong>Right to Data Portability:</strong> You can request your data in a structured, machine-readable format.
          </p>
          <p>
            <strong>Right to Object:</strong> You can object to processing based on legitimate interests or for direct marketing.
          </p>
          <p>
            <strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you can withdraw it at any time.
          </p>
          <p>
            <strong>Right to Lodge a Complaint:</strong> You can file a complaint with your local data protection authority.
          </p>
        </>
      ),
    },
    {
      id: 'exercising-rights',
      title: 'Exercising Your Rights',
      content: (
        <>
          <p>
            To exercise any of your GDPR rights, please contact us at dpo@handshake.com or use the data management tools in your account settings.
          </p>
          <p>
            We will respond to your request within one month. In complex cases, we may extend this period by two additional months and will inform you of the extension.
          </p>
          <p>
            We may ask you to verify your identity before processing your request to ensure the security of your data.
          </p>
        </>
      ),
    },
    {
      id: 'data-transfers',
      title: 'International Data Transfers',
      content: (
        <>
          <p>
            Your personal data may be transferred to and processed in countries outside the EU/EEA, including the United States. We ensure appropriate safeguards are in place for such transfers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Standard Contractual Clauses approved by the European Commission</li>
            <li>Adequacy decisions by the European Commission</li>
            <li>Other legally approved transfer mechanisms</li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: (
        <>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
          </p>
          <p>
            When you close your account, we will delete or anonymize your data within 90 days, unless retention is required for legal compliance or legitimate business purposes.
          </p>
        </>
      ),
    },
    {
      id: 'data-security',
      title: 'Data Security Measures',
      content: (
        <>
          <p>
            We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of personal data in transit and at rest</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Employee training on data protection</li>
            <li>Incident response procedures</li>
          </ul>
        </>
      ),
    },
    {
      id: 'data-breach',
      title: 'Data Breach Notification',
      content: (
        <>
          <p>
            In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours of becoming aware of the breach, as required by GDPR.
          </p>
        </>
      ),
    },
    {
      id: 'dpo',
      title: 'Data Protection Officer',
      content: (
        <>
          <p>
            We have appointed a Data Protection Officer (DPO) to oversee our GDPR compliance. You can contact our DPO at:
          </p>
          <p>
            Email: dpo@handshake.com<br />
            Address: Data Protection Officer, Handshake Inc., 123 Market Street, San Francisco, CA 94103
          </p>
        </>
      ),
    },
  ]

  return (
    <>
      <BackgroundEffect />
      <Navbar />
      <LegalLayout title="GDPR Compliance" lastUpdated="November 28, 2024" sections={sections} />
      <Footer />
    </>
  )
}

