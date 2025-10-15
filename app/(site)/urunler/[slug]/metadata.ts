import { Metadata } from 'next'
import { getUrunBySlug } from '@/lib/products'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const urun = getUrunBySlug(params.slug)

  if (!urun) {
    return {
      title: 'Ürün Bulunamadı',
    }
  }

  return {
    title: `${urun.ad} | Bisküvi Fabrikası`,
    description: urun.aciklama,
    openGraph: {
      title: urun.ad,
      description: urun.ozet,
      type: 'website',
      images: [
        {
          url: urun.gorseller[0] || '/products/placeholder.jpg',
          width: 600,
          height: 600,
          alt: urun.ad,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: urun.ad,
      description: urun.ozet,
      images: [urun.gorseller[0] || '/products/placeholder.jpg'],
    },
  }
}

