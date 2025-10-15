import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Package, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import ProductGallery from '@/components/ProductGallery'
import ProductCard from '@/components/ProductCard'
import { getUrunBySlug, getUrunlerByKategori } from '@/lib/products'
import { ProductStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData'

export function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const urun = getUrunBySlug(params.slug)

  if (!urun) {
    return {
      title: 'Ürün Bulunamadı',
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://biskuvifabrikasi.com'
  const productUrl = `${siteUrl}/urunler/${urun.slug}`

  return {
    title: `${urun.ad} - ${urun.ozet}`,
    description: `${urun.aciklama} Besin değerleri: ${urun.besinDegerleri.enerji} enerji, ${urun.besinDegerleri.protein} protein. Online sipariş için tıklayın!`,
    keywords: [
      urun.ad.toLowerCase(),
      urun.kategori,
      'bisküvi',
      'çikolata',
      'gofret',
      'kek',
      'şekerleme',
      'kaliteli',
      'doğal',
      'lezzetli',
    ],
    openGraph: {
      title: `${urun.ad} | Bisküvi Fabrikası`,
      description: urun.aciklama,
      type: 'website',
      url: productUrl,
      images: [
        {
          url: urun.gorseller[0] || '/products/placeholder.jpg',
          width: 600,
          height: 600,
          alt: `${urun.ad} - Bisküvi Fabrikası`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${urun.ad} | Bisküvi Fabrikası`,
      description: urun.ozet,
      images: [urun.gorseller[0] || '/products/placeholder.jpg'],
    },
    alternates: {
      canonical: productUrl,
    },
  }
}

export default function UrunDetayPage({ params }: { params: { slug: string } }) {
  const urun = getUrunBySlug(params.slug)

  if (!urun) {
    notFound()
  }

  const benzerUrunler = getUrunlerByKategori(urun.kategori)
    .filter((u) => u.id !== urun.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen py-12">
      <ProductStructuredData
        name={urun.ad}
        description={urun.aciklama}
        image={urun.gorseller[0] || '/products/placeholder.jpg'}
        category={urun.kategori}
        nutritionInfo={{
          calories: urun.besinDegerleri.enerji,
          protein: urun.besinDegerleri.protein,
          carbohydrate: urun.besinDegerleri.karbonhidrat,
          fat: urun.besinDegerleri.yag,
        }}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Anasayfa', url: '/' },
          { name: 'Ürünler', url: '/urunler' },
          { name: urun.ad, url: `/urunler/${urun.slug}` },
        ]}
      />
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/urunler">
            <ArrowLeft className="mr-2" />
            Ürünlere Dön
          </Link>
        </Button>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Gallery */}
          <ProductGallery images={urun.gorseller} productName={urun.ad} />

          {/* Info */}
          <div>
            <div className="flex gap-2 mb-4">
              {urun.yeni && <Badge className="bg-gold-400 text-white">Yeni</Badge>}
              {urun.vitrin && <Badge className="bg-caramel-500 text-white">Vitrin</Badge>}
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-choco-900 mb-4">
              {urun.ad}
            </h1>

            <p className="text-xl text-choco-600 mb-6">{urun.ozet}</p>

            <p className="text-choco-700 mb-8 leading-relaxed">{urun.aciklama}</p>

            {/* Nutrition */}
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="nutrition">
                <AccordionTrigger className="text-lg font-semibold text-choco-900">
                  Besin Değerleri (100g)
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-cream-100 p-4 rounded-lg">
                      <p className="text-sm text-choco-600">Enerji</p>
                      <p className="text-lg font-semibold text-choco-900">{urun.besinDegerleri.enerji}</p>
                    </div>
                    <div className="bg-cream-100 p-4 rounded-lg">
                      <p className="text-sm text-choco-600">Protein</p>
                      <p className="text-lg font-semibold text-choco-900">{urun.besinDegerleri.protein}</p>
                    </div>
                    <div className="bg-cream-100 p-4 rounded-lg">
                      <p className="text-sm text-choco-600">Karbonhidrat</p>
                      <p className="text-lg font-semibold text-choco-900">{urun.besinDegerleri.karbonhidrat}</p>
                    </div>
                    <div className="bg-cream-100 p-4 rounded-lg">
                      <p className="text-sm text-choco-600">Yağ</p>
                      <p className="text-lg font-semibold text-choco-900">{urun.besinDegerleri.yag}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Actions */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1 bg-gradient-to-r from-caramel-500 to-gold-400 text-white">
                <Package className="mr-2" />
                Sipariş Ver
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-choco-900">
                <Heart className="mr-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {benzerUrunler.length > 0 && (
          <div>
            <h2 className="text-3xl font-serif font-bold text-choco-900 mb-8">
              Benzer Ürünler
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benzerUrunler.map((benzerUrun, index) => (
                <ProductCard key={benzerUrun.id} urun={benzerUrun} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

