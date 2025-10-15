import { Metadata } from 'next'
import { FAQStructuredData } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Hakkımızda - Hikayemiz, Değerlerimiz ve Vizyonumuz',
  description: '1995\'ten beri kalite ve lezzet konusunda ödün vermeden, geleneksel tariflerimizi modern teknoloji ile buluşturuyoruz. ISO 9001, ISO 22000, BRC ve HACCP sertifikalı üretim.',
  keywords: [
    'bisküvi fabrikası hakkında',
    'şirket hikayesi',
    'kalite sertifikaları',
    'ISO 9001',
    'ISO 22000',
    'BRC',
    'HACCP',
    'bisküvi üretimi',
  ],
  openGraph: {
    title: 'Hakkımızda | Bisküvi Fabrikası',
    description: '1995\'ten beri kalite ve lezzet konusunda ödün vermeden üretim yapıyoruz.',
    type: 'website',
  },
  alternates: {
    canonical: '/hakkimizda',
  },
}

const faqs = [
  {
    question: 'Bisküvi Fabrikası ne zaman kuruldu?',
    answer: 'Bisküvi Fabrikası 1995 yılında İstanbul\'da küçük bir atölye olarak kuruldu ve bugün modern tesislerimizde üretim yapmaktayız.',
  },
  {
    question: 'Hangi sertifikalara sahipsiniz?',
    answer: 'ISO 9001, ISO 22000, BRC ve HACCP sertifikalarına sahibiz. Tüm ürünlerimiz en yüksek kalite standartlarında üretilmektedir.',
  },
  {
    question: 'Kaç ülkeye ihracat yapıyorsunuz?',
    answer: '30\'dan fazla ülkeye ihracat yapıyoruz ve Türk lezzetlerini dünya ile buluşturuyoruz.',
  },
]

export default function HakkimizdaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQStructuredData faqs={faqs} />
      {children}
    </>
  )
}

