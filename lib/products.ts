export type Kategori = 'cikolata' | 'gofret' | 'kek' | 'sekerleme'

export interface Urun {
  id: string
  slug: string
  ad: string
  kategori: Kategori
  ozet: string
  aciklama: string
  besinDegerleri: {
    enerji: string
    protein: string
    karbonhidrat: string
    yag: string
  }
  gorseller: string[]
  vitrin: boolean
  yeni: boolean
  skor: number
}

export const urunler: Urun[] = [
  // Çikolata kategorisi
  {
    id: '1',
    slug: 'sutlu-cikolata-biskuvi',
    ad: 'Sütlü Çikolata Bisküvi',
    kategori: 'cikolata',
    ozet: 'Belçika çikolatasıyla kaplanmış çıtır bisküvi',
    aciklama: 'Özenle seçilmiş Belçika sütlü çikolatası ile kaplı, içi çıtır çıtır bisküvimiz. Her ısırıkta eriyen lezzet.',
    besinDegerleri: {
      enerji: '485 kcal',
      protein: '6.2g',
      karbonhidrat: '58g',
      yag: '24g',
    },
    gorseller: ['/products/sutlu-cikolata.jpg'],
    vitrin: true,
    yeni: false,
    skor: 95,
  },
  {
    id: '2',
    slug: 'bitter-cikolata-findikli',
    ad: 'Bitter Çikolata Fındıklı',
    kategori: 'cikolata',
    ozet: 'Kavrulmuş fındık ve %70 bitter çikolata',
    aciklama: 'Kavrulmuş Giresun fındığı ve %70 kakao oranına sahip bitter çikolata ile hazırlanmış premium bisküvi.',
    besinDegerleri: {
      enerji: '510 kcal',
      protein: '8.5g',
      karbonhidrat: '52g',
      yag: '28g',
    },
    gorseller: ['/products/bitter-cikolata.jpg'],
    vitrin: true,
    yeni: true,
    skor: 98,
  },
  {
    id: '3',
    slug: 'beyaz-cikolata-hindistancevizli',
    ad: 'Beyaz Çikolata Hindistancevizli',
    kategori: 'cikolata',
    ozet: 'Tropik lezzet: beyaz çikolata ve hindistancevizi',
    aciklama: 'Kremamsı beyaz çikolata ve rendelenmiş hindistancevizinin buluşması. Tropik bir lezzet deneyimi.',
    besinDegerleri: {
      enerji: '495 kcal',
      protein: '5.8g',
      karbonhidrat: '60g',
      yag: '25g',
    },
    gorseller: ['/products/beyaz-cikolata.jpg'],
    vitrin: false,
    yeni: false,
    skor: 88,
  },

  // Gofret kategorisi
  {
    id: '4',
    slug: 'klasik-findikli-gofret',
    ad: 'Klasik Fındıklı Gofret',
    kategori: 'gofret',
    ozet: 'Çıtır gofret, kremalı fındık aroması',
    aciklama: 'Nesiller boyu sevilen klasik fındıklı gofretimiz. 5 kat gofret, 4 kat fındık kreması.',
    besinDegerleri: {
      enerji: '520 kcal',
      protein: '7.2g',
      karbonhidrat: '62g',
      yag: '26g',
    },
    gorseller: ['/products/findikli-gofret.jpg'],
    vitrin: true,
    yeni: false,
    skor: 92,
  },
  {
    id: '5',
    slug: 'karamelli-gofret',
    ad: 'Karamelli Gofret',
    kategori: 'gofret',
    ozet: 'Tatlı karamel dolgulu çıtır gofret',
    aciklama: 'Ev yapımı karamel kreması ile doldurulmuş özel gofretimiz. Tatlı kaçamakları için ideal.',
    besinDegerleri: {
      enerji: '505 kcal',
      protein: '6.5g',
      karbonhidrat: '64g',
      yag: '24g',
    },
    gorseller: ['/products/karamelli-gofret.jpg'],
    vitrin: false,
    yeni: true,
    skor: 90,
  },
  {
    id: '6',
    slug: 'cikolatali-gofret',
    ad: 'Çikolatalı Gofret',
    kategori: 'gofret',
    ozet: 'Zengin çikolata kremalı gofret',
    aciklama: 'Belçika çikolatasından üretilmiş krem ile doldurulmuş, çikolata severlerin favorisi.',
    besinDegerleri: {
      enerji: '515 kcal',
      protein: '6.8g',
      karbonhidrat: '61g',
      yag: '27g',
    },
    gorseller: ['/products/cikolatali-gofret.jpg'],
    vitrin: true,
    yeni: false,
    skor: 94,
  },

  // Kek kategorisi
  {
    id: '7',
    slug: 'muzlu-kek',
    ad: 'Muzlu Kek',
    kategori: 'kek',
    ozet: 'Gerçek muz püresi ile hazırlanmış yumuşak kek',
    aciklama: 'Taze muz püresi, ceviz ve tarçın ile hazırlanan ev yapımı tadında kekimiz.',
    besinDegerleri: {
      enerji: '340 kcal',
      protein: '5.2g',
      karbonhidrat: '48g',
      yag: '14g',
    },
    gorseller: ['/products/muzlu-kek.jpg'],
    vitrin: false,
    yeni: false,
    skor: 87,
  },
  {
    id: '8',
    slug: 'cikolatali-sufle-kek',
    ad: 'Çikolatalı Sufle Kek',
    kategori: 'kek',
    ozet: 'Yumuşacık çikolatalı kek, içi akışkan',
    aciklama: 'Premium kakao ile yapılmış, içi akışkan çikolatalı sufle kek. Sıcak tüketilmesi önerilir.',
    besinDegerleri: {
      enerji: '385 kcal',
      protein: '6.8g',
      karbonhidrat: '42g',
      yag: '20g',
    },
    gorseller: ['/products/cikolatali-kek.jpg'],
    vitrin: true,
    yeni: true,
    skor: 96,
  },
  {
    id: '9',
    slug: 'limonlu-kek',
    ad: 'Limonlu Kek',
    kategori: 'kek',
    ozet: 'Ferahlatıcı limon aromalı kek',
    aciklama: 'Taze sıkılmış limon suyu ve limon kabuğu rendesi ile hazırlanan ferahlatıcı kekimiz.',
    besinDegerleri: {
      enerji: '320 kcal',
      protein: '4.5g',
      karbonhidrat: '46g',
      yag: '13g',
    },
    gorseller: ['/products/limonlu-kek.jpg'],
    vitrin: false,
    yeni: false,
    skor: 85,
  },

  // Şekerleme kategorisi
  {
    id: '10',
    slug: 'karamelli-sekerleme',
    ad: 'Karamelli Şekerleme',
    kategori: 'sekerleme',
    ozet: 'El yapımı karamel şekerleme',
    aciklama: 'Geleneksel yöntemlerle pişirilmiş, ağızda eriyen karamel şekerlemelerimiz.',
    besinDegerleri: {
      enerji: '420 kcal',
      protein: '2.5g',
      karbonhidrat: '78g',
      yag: '12g',
    },
    gorseller: ['/products/karamelli-sekerleme.jpg'],
    vitrin: false,
    yeni: false,
    skor: 82,
  },
  {
    id: '11',
    slug: 'cikolatali-draje',
    ad: 'Çikolatalı Draje',
    kategori: 'sekerleme',
    ozet: 'Renkli şeker kaplı çikolata',
    aciklama: 'İçi sütlü çikolata, dışı renkli şeker kaplı neşeli drajelerimiz. Çocukların favorisi.',
    besinDegerleri: {
      enerji: '465 kcal',
      protein: '5.5g',
      karbonhidrat: '68g',
      yag: '18g',
    },
    gorseller: ['/products/cikolatali-draje.jpg'],
    vitrin: true,
    yeni: false,
    skor: 89,
  },
  {
    id: '12',
    slug: 'findikli-nugat',
    ad: 'Fındıklı Nuga',
    kategori: 'sekerleme',
    ozet: 'Bademli ve fındıklı yumuşak nuga',
    aciklama: 'Türk fındığı ve Kaliforniya bademi ile hazırlanan geleneksel nuga şekerlemesi.',
    besinDegerleri: {
      enerji: '480 kcal',
      protein: '8.2g',
      karbonhidrat: '62g',
      yag: '22g',
    },
    gorseller: ['/products/findikli-nugat.jpg'],
    vitrin: false,
    yeni: true,
    skor: 91,
  },
]

export const kategoriler: { id: Kategori; ad: string }[] = [
  { id: 'cikolata', ad: 'Çikolata' },
  { id: 'gofret', ad: 'Gofret' },
  { id: 'kek', ad: 'Kek' },
  { id: 'sekerleme', ad: 'Şekerleme' },
]

export function getUrunBySlug(slug: string): Urun | undefined {
  return urunler.find(urun => urun.slug === slug)
}

export function getUrunlerByKategori(kategori: Kategori): Urun[] {
  return urunler.filter(urun => urun.kategori === kategori)
}

export function getVitrinUrunler(): Urun[] {
  return urunler.filter(urun => urun.vitrin).sort((a, b) => b.skor - a.skor)
}

export function getYeniUrunler(): Urun[] {
  return urunler.filter(urun => urun.yeni)
}

