import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
  title: 'Handshake - Multi-Account LinkedIn Automation',
  description: 'Scale your outreach safely with multi-sender rotation. Manage unlimited workspaces, unlimited leads, and unified conversations—all from one dashboard.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js" async></script>
      </head>
      <body className={`${jakarta.variable} ${geist.variable} antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-black selection:text-blue-100`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

