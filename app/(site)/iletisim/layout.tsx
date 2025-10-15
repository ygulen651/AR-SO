import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'İletişim - Bize Ulaşın, Sorularınızı Sorun',
  description: 'Bisküvi Fabrikası ile iletişime geçin. Telefon: +90 212 XXX XX XX, E-posta: info@biskuvifabrikasi.com. Organize Sanayi Bölgesi, İstanbul. Müşteri hizmetlerimiz size yardımcı olmaya hazır.',
  keywords: [
    'bisküvi fabrikası iletişim',
    'telefon',
    'e-posta',
    'adres',
    'müşteri hizmetleri',
    'sipariş',
    'toptan satış',
  ],
  openGraph: {
    title: 'İletişim | Bisküvi Fabrikası',
    description: 'Bizimle iletişime geçin. Sorularınız ve önerileriniz için bize ulaşın.',
    type: 'website',
  },
  alternates: {
    canonical: '/iletisim',
  },
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

