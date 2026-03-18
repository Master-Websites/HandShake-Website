import type { Metadata } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { JsonLd } from '@/components/JsonLd'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://byhandshake.com'),
  title: {
    default: 'Handshake — Multi-Account LinkedIn Automation',
    template: '%s | Handshake',
  },
  description:
    'Scale your outreach safely with multi-sender rotation. Manage unlimited workspaces, unlimited leads, and unified conversations — all from one dashboard.',
  keywords: [
    'LinkedIn automation',
    'LinkedIn outreach',
    'multi-sender rotation',
    'LinkedIn lead generation',
    'B2B outreach',
    'LinkedIn messaging',
    'sales automation',
    'agency outreach tool',
    'LinkedIn campaign management',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Handshake',
    title: 'Handshake — Multi-Account LinkedIn Automation',
    description:
      'Scale your outreach safely with multi-sender rotation. Manage unlimited workspaces, unlimited leads, and unified conversations — all from one dashboard.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Handshake — Multi-Account LinkedIn Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handshake — Multi-Account LinkedIn Automation',
    description:
      'Scale your outreach safely with multi-sender rotation. Manage unlimited workspaces, unlimited leads, and unified conversations — all from one dashboard.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/logos/handshake-icon.svg',
    apple: '/logos/handshake-icon.svg',
  },
  alternates: {
    canonical: 'https://byhandshake.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Handshake',
  url: 'https://byhandshake.com',
  logo: 'https://byhandshake.com/logos/handshake-logo.svg',
  sameAs: ['https://www.linkedin.com/company/byhandshake/'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://code.iconify.design/3/3.1.0/iconify.min.js"
          strategy="afterInteractive"
        />
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="8c3db14f-028d-4dcb-9cc8-a42fbe5193d9";
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
        <Script
          id="plausible-analytics"
          src="https://analytics.leadcart.io/js/pa-Peaxg0-dLkb9wes_e778k.js"
          strategy="afterInteractive"
        />
        <Script
          id="plausible-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init();
            `,
          }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${geist.variable} antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-black selection:text-blue-100`}
      >
        <JsonLd data={organizationSchema} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
