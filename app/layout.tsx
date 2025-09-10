import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'shakn | Modern Web Çözümleri',
  description: 'Premium web tasarım ve geliştirme hizmetleri. Modern teknolojiler ile işinizi dijitalde büyütün.',
  keywords: 'web tasarım, web geliştirme, dijital çözümler, SEO, performans optimizasyonu, shakn',
  authors: [{ name: 'shakn' }],
  openGraph: {
    title: 'shakn - Modern Web Çözümleri',
    description: 'Premium dijital deneyimler',
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'shakn - Modern Web Çözümleri',
    description: 'Premium dijital deneyimler',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}