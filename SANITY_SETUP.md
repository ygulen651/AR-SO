# Sanity CMS Kurulum Rehberi

## 1. Sanity Projesi Oluşturma

1. [sanity.io](https://www.sanity.io/) adresine gidin
2. "Get started for free" butonuna tıklayın
3. GitHub ile giriş yapın
4. Yeni proje oluşturun:
   - Project name: `biskivi-fabrikasi`
   - Dataset: `production`
   - Plan: `Free`

## 2. Proje ID'sini Alma

1. Sanity dashboard'da projenizi seçin
2. Settings > API > Project ID'yi kopyalayın

## 3. Environment Variables

`.env.local` dosyası oluşturun ve şu değerleri ekleyin:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=YOUR_API_TOKEN
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 4. Studio Kurulumu

```bash
cd sanity-studio
npm install
```

## 5. Studio Başlatma

```bash
cd sanity-studio
npm run dev
```

Studio `http://localhost:3333` adresinde açılacak.

## 6. İlk Veri Girişi

### Kategoriler Oluşturun:
1. Categories > Create
2. Şu kategorileri ekleyin:
   - **Çikolata** (icon: chocolate, color: #8B4513)
   - **Gofret** (icon: cookie, color: #D2691E)
   - **Kek** (icon: cake, color: #DEB887)
   - **Şekerleme** (icon: candy, color: #FF69B4)

### Ürünler Ekleyin:
1. Products > Create
2. Her kategori için en az 3 ürün ekleyin
3. Görselleri yükleyin
4. Besin değerlerini doldurun

### Site Ayarları:
1. Site Settings > Create
2. İletişim bilgilerini doldurun
3. Sosyal medya linklerini ekleyin
4. Hero bölümü ayarlarını yapın

## 7. API Token Alma

1. Sanity dashboard > Settings > API
2. "Add API token" butonuna tıklayın
3. Token name: `Next.js App`
4. Permissions: `Editor`
5. Token'ı kopyalayın ve `.env.local`'e ekleyin

## 8. Next.js Entegrasyonu

Ana projede Sanity'yi kullanmak için:

```bash
npm install @sanity/client @sanity/image-url
```

## Schema'lar

Proje şu schema'larla gelir:
- **Product**: Ürün bilgileri
- **Category**: Kategori bilgileri  
- **Page**: Sayfa içerikleri
- **SiteSettings**: Site genel ayarları

## Kullanım

```typescript
import { getProducts, getFeaturedProducts } from '@/lib/sanity'

// Tüm ürünleri getir
const products = await getProducts()

// Öne çıkan ürünleri getir
const featured = await getFeaturedProducts()

// Kategoriye göre ürünleri getir
const chocolateProducts = await getProductsByCategory('cikolata')
```
