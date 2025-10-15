import { createClient } from '@sanity/client'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// Ana dizindeki .env.local dosyasını yükle
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
config({ path: join(__dirname, '..', '.env.local') })

const client = createClient({
  projectId: '4z1l646l',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skj7AXZf7PtNG5VrITXfkg9ZhbOobybzE5rvwqRUeZ60P5kjNs0cRjtdyKFt5AJohmj43d99sQwO6CwsX8gpkmqzYI7gclqXnGWlb7j3TGf7KZ2TtDNtnF2gKJaq72rwxZvrny'
})

console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
console.log('Token exists:', !!process.env.SANITY_API_TOKEN)

const categories = [
  {
    _type: 'category',
    name: 'Çikolata',
    slug: {
      _type: 'slug',
      current: 'cikolata'
    },
    description: 'Premium çikolata ürünlerimiz',
    icon: 'chocolate',
    color: '#8B4513',
    sortOrder: 1,
    isActive: true,
    seo: {
      metaTitle: 'Çikolata Ürünleri - Bisküvi Fabrikası',
      metaDescription: 'Premium çikolata ürünlerimizi keşfedin. Taze, kaliteli ve lezzetli çikolata çeşitleri.'
    }
  },
  {
    _type: 'category',
    name: 'Gofret',
    slug: {
      _type: 'slug',
      current: 'gofret'
    },
    description: 'Çıtır gofret çeşitlerimiz',
    icon: 'cookie',
    color: '#D2691E',
    sortOrder: 2,
    isActive: true,
    seo: {
      metaTitle: 'Gofret Ürünleri - Bisküvi Fabrikası',
      metaDescription: 'Çıtır ve lezzetli gofret çeşitlerimizi keşfedin. Taze üretim, premium kalite.'
    }
  },
  {
    _type: 'category',
    name: 'Kek',
    slug: {
      _type: 'slug',
      current: 'kek'
    },
    description: 'Taze kek ürünlerimiz',
    icon: 'cake',
    color: '#DEB887',
    sortOrder: 3,
    isActive: true,
    seo: {
      metaTitle: 'Kek Ürünleri - Bisküvi Fabrikası',
      metaDescription: 'Taze ve lezzetli kek çeşitlerimizi keşfedin. Ev yapımı tadında kekler.'
    }
  },
  {
    _type: 'category',
    name: 'Şekerleme',
    slug: {
      _type: 'slug',
      current: 'sekerleme'
    },
    description: 'Lezzetli şekerleme çeşitlerimiz',
    icon: 'candy',
    color: '#FF69B4',
    sortOrder: 4,
    isActive: true,
    seo: {
      metaTitle: 'Şekerleme Ürünleri - Bisküvi Fabrikası',
      metaDescription: 'Renkli ve lezzetli şekerleme çeşitlerimizi keşfedin. Çocukların favorisi.'
    }
  }
]

async function addCategories() {
  try {
    console.log('Kategoriler ekleniyor...')
    
    for (const category of categories) {
      const result = await client.create(category)
      console.log(`✅ ${category.name} kategorisi eklendi:`, result._id)
    }
    
    console.log('🎉 Tüm kategoriler başarıyla eklendi!')
  } catch (error) {
    console.error('❌ Hata:', error.message)
  }
}

addCategories()
