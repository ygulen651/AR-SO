import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Geçici olarak mock data kullanıyoruz
const MOCK_MODE = false

export const client = MOCK_MODE ? null : createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4z1l646l',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Token ile doğrudan API'den çek (private dataset için gerekli)
  token: process.env.SANITY_API_TOKEN,
})

// Image URL builder
const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: any) {
  if (!builder) return '/products/placeholder.jpg'
  return builder
    .image(source)
    .width(1920)
    .quality(100)
    .auto('format')
    .url()
}

// Hero slider verilerini getir
export async function getHeroSlides() {
  if (MOCK_MODE) {
    return [
      {
        title: 'Sütlü Çikolatanın En Kremalisi',
        subtitle: "Ustaların elinden, %100 doğal malzemelerle hazırlanır.",
        image: { asset: { url: '/products/sutlu-cikolata.jpg' } },
        primaryHref: '/urunler',
        secondaryHref: '/hakkimizda',
        videoFile: { asset: { url: '' } },
      },
      {
        title: 'Fındıklı Gofrette İncecik Katlar',
        subtitle: 'Her lokmada tazelik ve çıtırlık.',
        image: { asset: { url: '/products/findikli-gofret.jpg' } },
        primaryHref: '/urunler',
        secondaryHref: '/hakkimizda',
        videoFile: { asset: { url: '' } },
      },
    ]
  }

  try {
    const data = await client.fetch(`
      *[_type == "siteSettings"][0]{
        heroSlides[]{
          title,
          subtitle,
          image,
          videoFile{
            asset->{url}
          },
          video{asset->{url}},
          videoUrl,
          primaryHref,
          secondaryHref
        }
      }
    `, {}, {
      next: { revalidate: 60 }
    })
    return data?.heroSlides || []
  } catch (error) {
    console.error('Hero slider verileri getirilemedi:', error)
    return []
  }
}

// Seçilen Malzemeler görselleri
export async function getConveyorVisuals() {
  try {
    const data = await client.fetch(`
      *[_type == "siteSettings"][0]{
        ingredientsVisuals{
          mainImage,
          floatingImages
        }
      }
    `, {}, {
      next: { revalidate: 60 }
    })
    return data?.ingredientsVisuals || { mainImage: null, floatingImages: [] }
  } catch (error) {
    console.error('Ingredients visuals getirilemedi:', error)
    return { mainImage: null, floatingImages: [] }
  }
}

// Kategorileri getir
export async function getCategories() {
  if (MOCK_MODE) {
    return [
      {
        _id: '1',
        name: 'Çikolata',
        slug: { current: 'cikolata' },
        description: 'Premium çikolata ürünlerimiz',
        icon: 'chocolate',
        color: '#8B4513',
        order: 1,
        isActive: true,
      },
      {
        _id: '2',
        name: 'Gofret',
        slug: { current: 'gofret' },
        description: 'Çıtır gofret çeşitlerimiz',
        icon: 'cookie',
        color: '#D2691E',
        order: 2,
        isActive: true,
      },
      {
        _id: '3',
        name: 'Kek',
        slug: { current: 'kek' },
        description: 'Taze kek ürünlerimiz',
        icon: 'cake',
        color: '#DEB887',
        order: 3,
        isActive: true,
      },
      {
        _id: '4',
        name: 'Şekerleme',
        slug: { current: 'sekerleme' },
        description: 'Lezzetli şekerleme çeşitlerimiz',
        icon: 'candy',
        color: '#FF69B4',
        order: 4,
        isActive: true,
      },
    ]
  }
  
  try {
    const categories = await client.fetch(`
      *[_type == "category" && isActive == true] | order(order asc) {
        _id,
        name,
        slug,
        description,
        icon,
        color,
        order
      }
    `)
    return categories
  } catch (error) {
    console.error('Kategoriler getirilemedi:', error)
    return []
  }
}

// Ürünleri getir
export async function getProducts() {
  if (MOCK_MODE) {
    return [
      {
        _id: '1',
        name: 'Bitter Çikolata',
        slug: { current: 'bitter-cikolata' },
        category: {
          _id: '1',
          name: 'Çikolata',
          slug: { current: 'cikolata' },
          icon: 'chocolate',
          color: '#8B4513'
        },
        image: { asset: { url: '/products/bitter-cikolata.jpg' }, alt: 'Bitter Çikolata' },
        price: 25.99,
        description: [{ children: [{ text: 'Premium bitter çikolata, %70 kakao içeriği ile' }] }],
        nutritionFacts: [],
        isFeatured: true,
        isNew: false,
        rating: 4.8
      },
      {
        _id: '2',
        name: 'Sütlü Çikolata',
        slug: { current: 'sutlu-cikolata' },
        category: {
          _id: '1',
          name: 'Çikolata',
          slug: { current: 'cikolata' },
          icon: 'chocolate',
          color: '#8B4513'
        },
        image: { asset: { url: '/products/sutlu-cikolata.jpg' }, alt: 'Sütlü Çikolata' },
        price: 22.99,
        description: [{ children: [{ text: 'Kremalı sütlü çikolata, yumuşak dokusu ile' }] }],
        nutritionFacts: [],
        isFeatured: true,
        isNew: true,
        rating: 4.6
      },
      {
        _id: '3',
        name: 'Fındıklı Gofret',
        slug: { current: 'findikli-gofret' },
        category: {
          _id: '2',
          name: 'Gofret',
          slug: { current: 'gofret' },
          icon: 'cookie',
          color: '#D2691E'
        },
        image: { asset: { url: '/products/findikli-gofret.jpg' }, alt: 'Fındıklı Gofret' },
        price: 18.99,
        description: [{ children: [{ text: 'Çıtır gofret, içinde taze fındık parçaları' }] }],
        nutritionFacts: [],
        isFeatured: false,
        isNew: false,
        rating: 4.5
      }
    ]
  }
  
  try {
    const products = await client.fetch(`
      *[_type == "product"] {
        _id,
        name,
        slug,
        category->{
          _id,
          name,
          slug,
          icon,
          color
        },
        "image": mainImage,
        images,
        price,
        description,
        nutritionFacts,
        isFeatured,
        isNew,
        rating
      }
    `)
    return products
  } catch (error) {
    console.error('Ürünler getirilemedi:', error)
    return []
  }
}

// Tek ürün getir
export async function getProduct(slug: string) {
  if (MOCK_MODE) {
    const products = await getProducts()
    return products.find(p => p.slug.current === slug) || null
  }
  
  try {
    const product = await client.fetch(`
      *[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        category->{
          _id,
          name,
          slug,
          icon,
          color
        },
        "image": mainImage,
        images,
        price,
        description,
        nutritionFacts,
        isFeatured,
        isNew,
        rating
      }
    `, { slug })
    return product
  } catch (error) {
    console.error('Ürün getirilemedi:', error)
    return null
  }
}

// Kategoriye göre ürünleri getir
export async function getProductsByCategory(categorySlug: string) {
  if (MOCK_MODE) {
    const products = await getProducts()
    return products.filter(p => p.category.slug.current === categorySlug)
  }
  
  try {
    const products = await client.fetch(`
      *[_type == "product" && category->slug.current == $categorySlug] {
        _id,
        name,
        slug,
        category->{
          _id,
          name,
          slug,
          icon,
          color
        },
        "image": mainImage,
        images,
        price,
        description,
        nutritionFacts,
        isFeatured,
        isNew,
        rating
      }
    `, { categorySlug })
    return products
  } catch (error) {
    console.error('Kategori ürünleri getirilemedi:', error)
    return []
  }
}