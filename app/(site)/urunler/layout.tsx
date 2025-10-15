import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ürünlerimiz - Çikolata, Gofret, Kek, Şekerleme',
  description: 'Kaliteli bisküvi, çikolata, gofret, kek ve şekerleme ürünlerimizi keşfedin. Fındıklı gofret, çikolatalı bisküvi, muzlu kek ve daha fazlası. Taze ve doğal ürünler.',
  keywords: [
    'bisküvi ürünleri',
    'çikolatalı ürünler',
    'gofret çeşitleri',
    'kek çeşitleri',
    'şekerleme',
    'fındıklı gofret',
    'sütlü çikolata',
    'bitter çikolata',
  ],
  openGraph: {
    title: 'Ürünlerimiz | Bisküvi Fabrikası',
    description: 'Çikolata, gofret, kek ve şekerleme kategorilerinde kaliteli ürünlerimizi keşfedin.',
    type: 'website',
  },
  alternates: {
    canonical: '/urunler',
  },
}

export default function UrunlerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

