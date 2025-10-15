import { Metadata } from 'next'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
 
import ChocolateDripCanvas from '@/components/ChocolateDripCanvas'
import HeroSlider from '@/components/HeroSlider'
import { getHeroSlides, urlFor } from '@/lib/sanity'
 
import StatCounter from '@/components/StatCounter'
import ProductCard from '@/components/ProductCard'
import { BreadcrumbStructuredData } from '@/components/StructuredData'
import { getProducts } from '@/lib/sanity'

const ConveyorSection = dynamic(() => import('@/components/ConveyorSection'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Bisküvi Fabrikası | Lezzetin Adresi - Çikolata, Gofret, Kek',
  description: 'Türkiye\'nin en kaliteli bisküvi, çikolata, gofret, kek ve şekerleme ürünleri. 1995\'ten beri %100 doğal malzemelerle, usta işçilikle üretim. 120+ tarif, 30+ ülkeye ihracat.',
  keywords: [
    'bisküvi fabrikası',
    'en iyi bisküvi',
    'kaliteli çikolata',
    'fındıklı gofret',
    'taze kek',
    'şekerleme',
    'doğal bisküvi',
    'online bisküvi siparişi',
  ],
  alternates: {
    canonical: '/',
  },
}

export default async function HomePage() {
  const products = await getProducts()
  const heroSlides = (await getHeroSlides()).map((s: any) => ({
    title: s.title,
    subtitle: s.subtitle,
    image: s.image ? urlFor(s.image) : '/products/placeholder.jpg',
    primaryHref: s.primaryHref || '/urunler',
    secondaryHref: s.secondaryHref || '/hakkimizda',
    videoSrc: s.videoFile?.asset?.url || s.video?.asset?.url || s.videoUrl || undefined,
  }))
  
  const vitrinUrunler = products.filter(product => product.isFeatured)

  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Anasayfa', url: '/' }]} />
      <div className="overflow-hidden">
        {/* Hero Slider */}
        <section className="relative bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200">
          <HeroSlider slides={heroSlides} />
          <ChocolateDripCanvas />
        </section>

        {/* Conveyor Section */}
        <Suspense fallback={<div className="h-screen bg-choco-700" />}>
          <ConveyorSection />
        </Suspense>

        {/* Vitrin Ürünler */}
        <section className="py-20 bg-cream-50">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-serif font-bold text-center text-choco-900 mb-4">
              Öne Çıkan Lezzetler
            </h2>
            <p className="text-center text-choco-600 mb-12 max-w-2xl mx-auto">
              En çok sevilen, en kaliteli ürünlerimiz. Fındıklı gofret, sütlü çikolata, taze kek ve daha fazlası.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vitrinUrunler.slice(0, 6).map((urun, index) => (
                <ProductCard key={urun._id} urun={urun} index={index} />
              ))}
            </div>
          </div>
        </section>


        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-cream-50 to-cream-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <StatCounter end={120} label="Özel Tarif" suffix="+" />
              <StatCounter end={100} label="Kalite Garantisi" suffix="%" />
              <StatCounter end={30} label="Ülkeye İhracat" suffix="+" />
            </div>
          </div>
        </section>

        {/* Certificates and CTA kaldırıldı */}
      </div>
    </>
  )
}
