import type { Metadata } from 'next'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ContactHero } from '@/components/ContactHero'
import { ContactForm } from '@/components/ContactForm'
import { ContactMethods } from '@/components/ContactMethods'
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with the Handshake team. We'd love to hear from you — whether you have questions, feedback, or need support.",
  alternates: {
    canonical: 'https://byhandshake.com/contact',
  },
  openGraph: {
    url: 'https://byhandshake.com/contact',
    title: 'Contact | Handshake',
    description:
      "Get in touch with the Handshake team. We'd love to hear from you — whether you have questions, feedback, or need support.",
  },
}

export default function ContactPage() {
  return (
    <>
      <ScrollAnimationProvider />
      <BackgroundEffect />
      <Navbar />
      <main className="flex-grow">
        <ContactHero />
        <ContactForm />
        <ContactMethods />
      </main>
      <Footer />
    </>
  )
}
