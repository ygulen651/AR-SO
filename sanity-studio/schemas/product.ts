import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Ürün',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ürün Adı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'reference',
      to: {type: 'category'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Kısa Açıklama',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'description',
      title: 'Detaylı Açıklama',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Başlık', value: 'h2'},
            {title: 'Alt Başlık', value: 'h3'},
          ],
          lists: [
            {title: 'Madde İşareti', value: 'bullet'},
            {title: 'Numara', value: 'number'},
          ],
        },
      ],
    }),
    defineField({
      name: 'images',
      title: 'Ürün Görselleri',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              description: 'Görsel açıklaması (SEO için önemli)',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Ürün listesinde görünecek ana görsel',
    }),
    defineField({
      name: 'nutritionFacts',
      title: 'Besin Değerleri',
      type: 'object',
      fields: [
        {
          name: 'calories',
          title: 'Kalori (100g)',
          type: 'number',
        },
        {
          name: 'protein',
          title: 'Protein (g)',
          type: 'number',
        },
        {
          name: 'carbohydrates',
          title: 'Karbonhidrat (g)',
          type: 'number',
        },
        {
          name: 'fat',
          title: 'Yağ (g)',
          type: 'number',
        },
        {
          name: 'sugar',
          title: 'Şeker (g)',
          type: 'number',
        },
        {
          name: 'fiber',
          title: 'Lif (g)',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'ingredients',
      title: 'İçindekiler',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'allergens',
      title: 'Alerjenler',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'price',
      title: 'Fiyat (₺)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'weight',
      title: 'Ağırlık (g)',
      type: 'number',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Öne Çıkarılsın mı?',
      type: 'boolean',
      description: 'Ana sayfada öne çıkan ürünler bölümünde gösterilsin',
    }),
    defineField({
      name: 'isNew',
      title: 'Yeni Ürün',
      type: 'boolean',
      description: 'Yeni ürün rozeti gösterilsin',
    }),
    defineField({
      name: 'rating',
      title: 'Puan (1-5)',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'stock',
      title: 'Stok Durumu',
      type: 'string',
      options: {
        list: [
          {title: 'Stokta', value: 'in-stock'},
          {title: 'Stokta Yok', value: 'out-of-stock'},
          {title: 'Az Kaldı', value: 'low-stock'},
        ],
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO Ayarları',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Başlık',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Açıklama',
          type: 'text',
          rows: 3,
        },
        {
          name: 'keywords',
          title: 'Anahtar Kelimeler',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'mainImage',
      subtitle: 'category.name',
    },
  },
})
