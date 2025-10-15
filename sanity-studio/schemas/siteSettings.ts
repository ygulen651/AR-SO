import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Adı',
      type: 'string',
      initialValue: 'Bisküvi Fabrikası',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Açıklaması',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'contact',
      title: 'İletişim Bilgileri',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Telefon',
          type: 'string',
        },
        {
          name: 'email',
          title: 'E-posta',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Adres',
          type: 'text',
          rows: 3,
        },
        {
          name: 'mapUrl',
          title: 'Harita URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Sosyal Medya',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Ana Sayfa Hero Bölümü',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Ana Başlık',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Alt Başlık',
          type: 'text',
          rows: 2,
        },
        {
          name: 'backgroundImage',
          title: 'Arka Plan Görseli',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'ctaText',
          title: 'CTA Buton Metni',
          type: 'string',
          initialValue: 'Ürünleri Keşfet',
        },
        {
          name: 'ctaLink',
          title: 'CTA Buton Linki',
          type: 'string',
          initialValue: '/urunler',
        },
      ],
    }),
    defineField({
      name: 'heroSlides',
      title: 'Hero Slider Görselleri',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Başlık', type: 'string' },
            { name: 'subtitle', title: 'Alt Başlık', type: 'text', rows: 2 },
            {
              name: 'image',
              title: 'Görsel',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'videoFile',
              title: 'Video (opsiyonel)',
              type: 'file',
              options: { accept: 'video/*' },
            },
            { name: 'primaryHref', title: 'Birincil Buton Linki', type: 'string', initialValue: '/urunler' },
            { name: 'secondaryHref', title: 'İkincil Buton Linki', type: 'string', initialValue: '/hakkimizda' },
          ],
          preview: {
            select: { title: 'title', media: 'image' },
          },
        },
      ],
    }),
    defineField({
      name: 'ingredientsVisuals',
      title: 'Seçilen Malzemeler Bölümü Görselleri',
      type: 'object',
      fields: [
        {
          name: 'mainImage',
          title: 'Ana Görsel',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'floatingImages',
          title: 'Yüzen Küçük Görseller',
          type: 'array',
          of: [
            {
              type: 'image',
              options: { hotspot: true },
            },
          ],
          options: { layout: 'grid' },
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'İstatistikler',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Sayı',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Etiket',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Genel SEO Ayarları',
      type: 'object',
      fields: [
        {
          name: 'defaultMetaTitle',
          title: 'Varsayılan Meta Başlık',
          type: 'string',
        },
        {
          name: 'defaultMetaDescription',
          title: 'Varsayılan Meta Açıklama',
          type: 'text',
          rows: 3,
        },
        {
          name: 'defaultKeywords',
          title: 'Varsayılan Anahtar Kelimeler',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'logo',
    },
  },
})
