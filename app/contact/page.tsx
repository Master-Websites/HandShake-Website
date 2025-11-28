'use client'

import { useEffect } from 'react'
import { BackgroundEffect } from '@/components/BackgroundEffect'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ContactHero } from '@/components/ContactHero'
import { ContactForm } from '@/components/ContactForm'
import { ContactMethods } from '@/components/ContactMethods'

export default function ContactPage() {
  useEffect(() => {
    // Initialize scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
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

