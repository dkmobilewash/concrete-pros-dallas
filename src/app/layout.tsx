import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { site } from '@/data/site'
import './globals.css'

// Self-hosted via next/font: eliminates the render-blocking Google Fonts
// stylesheet (better LCP) and auto-generates size-adjust/ascent-override
// fallback metrics to prevent font-swap layout shift (better CLS).
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: 'Dallas Concrete Pros',
    template: '%s | Dallas Concrete Pros',
  },
  description:
    'Professional concrete contracting for driveways, patios, foundations, and more throughout Dallas and the surrounding areas.',
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1C1C1E',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-brand-charcoal">
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
