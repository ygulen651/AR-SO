# 🍪 Bisküvi Fabrikası - Kurulum Rehberi

## ✅ Kurulum Tamamlandı!

Tüm bağımlılıklar başarıyla yüklendi. Şimdi projeyi çalıştırabilirsiniz.

## 🚀 Projeyi Çalıştırma

### Development Modu
```bash
npm run dev
```

Tarayıcınızda açın: http://localhost:3000

### Production Build
```bash
npm run build
npm start
```

## 📂 Proje Yapısı

```
ariso/
├── app/                          # Next.js 14 App Router
│   ├── (site)/                  # Site grubu
│   │   ├── page.tsx            # Anasayfa
│   │   ├── urunler/            # Ürünler sayfaları
│   │   ├── hakkimizda/         # Hakkımızda
│   │   └── iletisim/           # İletişim
│   ├── api/                     # API routes
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
│
├── components/                  # React bileşenleri
│   ├── ui/                     # shadcn/ui bileşenleri
│   ├── AnimatedHeader.tsx      # Header
│   ├── ProductCard.tsx         # Ürün kartı
│   ├── ConveyorSection.tsx     # GSAP animasyonları
│   └── ...
│
├── lib/                         # Utilities
│   ├── products.ts             # Ürün verisi
│   └── utils.ts                # Helper fonksiyonlar
│
└── public/                      # Statik dosyalar
    └── products/               # Ürün görselleri
```

## 🎨 Özellikler

### Animasyonlar
- ✨ Framer Motion (mikro-etkileşimler)
- 🎬 GSAP + ScrollTrigger (sahne geçişleri)
- 🌊 Lenis (smooth scroll)
- 🎨 Çikolata damla canvas animasyonu

### Sayfalar
- 🏠 **Anasayfa**: Hero, konveyor animasyonları, vitrin ürünler
- 📦 **Ürünler**: Kategori filtreleri, arama, grid layout
- 🔍 **Ürün Detay**: Galeri, zoom, besin değerleri
- 📖 **Hakkımızda**: Timeline, değerler, fabrika bilgisi
- 📧 **İletişim**: Form validasyonu, iletişim bilgileri

### SEO Optimizasyonları
- 🔍 Structured Data (Organization, Product, Breadcrumb, FAQ)
- 📝 Gelişmiş meta tags
- 🗺️ Dinamik sitemap.xml
- 🤖 robots.txt
- 🔗 Canonical URLs
- 📱 Open Graph & Twitter Cards

### UI/UX
- 🎨 Çikolata temalı renk paleti
- 📱 Tam responsive tasarım
- ♿ Erişilebilirlik (WCAG 2.1)
- ⚡ Yüksek performans
- 🎯 Core Web Vitals optimize

## 🎨 Renk Paleti

- **Choco 900**: `#3A2316` - Koyu çikolata
- **Choco 700**: `#4B2E16` - Çikolata
- **Caramel 500**: `#E89B2D` - Karamel
- **Cream 50**: `#FFF8F1` - Krem
- **Gold 400**: `#D4AF37` - Altın

## 📊 Kategoriler

- 🍫 Çikolata (3 ürün)
- 🍪 Gofret (3 ürün)
- 🍰 Kek (3 ürün)
- 🍬 Şekerleme (3 ürün)

**Toplam: 12 ürün**

## 🔧 Teknolojiler

### Core
- ⚛️ Next.js 14 (App Router)
- 📘 TypeScript
- 🎨 TailwindCSS

### UI & Animasyon
- 🎭 Framer Motion
- 🎬 GSAP + ScrollTrigger
- 🌊 Lenis (smooth scroll)
- 🎨 shadcn/ui
- 🎯 Lucide Icons

### Form & Validation
- 📝 React Hook Form
- ✅ Zod

### SEO
- 🔍 next-seo
- 🗺️ next-sitemap
- 📊 Structured Data

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm run build
vercel deploy
```

### Diğer Platformlar
```bash
npm run build
npm start
```

## 📝 Notlar

- Tüm görseller SVG placeholder olarak oluşturuldu
- Gerçek görselleri `/public/products/` klasörüne ekleyebilirsiniz
- İletişim formu şu an console'a log yazıyor, email entegrasyonu eklenebilir
- Google Analytics için tracking ID ekleyebilirsiniz

## 🎯 Sonraki Adımlar

1. ✅ Gerçek ürün görselleri ekleyin
2. ✅ Email servis entegrasyonu (iletişim formu)
3. ✅ Google Analytics / Tag Manager
4. ✅ E-ticaret entegrasyonu (opsiyonel)
5. ✅ Admin paneli (opsiyonel)

## 🐛 Sorun Giderme

**TypeScript hataları görüyorsanız:**
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

**Port zaten kullanımda:**
```bash
npm run dev -- -p 3001
```

## 📞 Destek

Herhangi bir sorun için issue açabilirsiniz!

---

**Yapımcı**: Bisküvi Fabrikası Geliştirme Ekibi  
**Versiyon**: 1.0.0  
**Son Güncelleme**: 2025

