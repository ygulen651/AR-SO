import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { OrganizationStructuredData, WebsiteStructuredData } from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biskuvifabrikasi.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bisküvi Fabrikası | Lezzetin Adresi - Çikolata, Gofret, Kek ve Şekerleme',
    template: '%s | Bisküvi Fabrikası',
  },
  description: 'Türkiye\'nin en kaliteli bisküvi, çikolata, gofret, kek ve şekerleme ürünleri. 1995\'ten beri %100 doğal malzemelerle, usta işçilikle üretim yapıyoruz. 30+ ülkeye ihracat.',
  keywords: [
    'bisküvi fabrikası',
    'bisküvi',
    'çikolata',
    'gofret',
    'kek',
    'şekerleme',
    'kaliteli bisküvi',
    'fındıklı gofret',
    'çikolatalı bisküvi',
    'türk bisküvisi',
    'bisküvi üretimi',
    'tatlı ürünleri',
  ],
  authors: [{ name: 'Bisküvi Fabrikası', url: siteUrl }],
  creator: 'Bisküvi Fabrikası',
  publisher: 'Bisküvi Fabrikası',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    siteName: 'Bisküvi Fabrikası',
    title: 'Bisküvi Fabrikası | Lezzetin Adresi',
    description: 'Türkiye\'nin en kaliteli bisküvi, çikolata, gofret, kek ve şekerleme ürünleri. 1995\'ten beri %100 doğal malzemelerle üretim.',
    images: [
      {
        url: '/icon-512.svg',
        width: 512,
        height: 512,
        alt: 'Bisküvi Fabrikası Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bisküvi Fabrikası | Lezzetin Adresi',
    description: 'Türkiye\'nin en kaliteli bisküvi, çikolata, gofret, kek ve şekerleme ürünleri.',
    creator: '@biskuvifabrikasi',
    images: ['/icon-512.svg'],
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Google Search Console verification (kullanıcı ekleyecek)
    // google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <OrganizationStructuredData />
        <WebsiteStructuredData />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className={`${inter.className} antialiased bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200 text-choco-900 selection:bg-caramel-500/20 selection:text-choco-900`}>
        {children}
      </body>
    </html>
  )
}

