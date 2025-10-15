import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategori',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Kategori Adı',
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
      name: 'description',
      title: 'Kategori Açıklaması',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Kategori Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'icon',
      title: 'İkon',
      type: 'string',
      description: 'Lucide React ikon adı (örn: cookie, cake, candy)',
    }),
    defineField({
      name: 'color',
      title: 'Renk',
      type: 'string',
      description: 'Kategori için hex renk kodu',
      validation: (Rule) => Rule.regex(/^#[0-9A-F]{6}$/i),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sıralama',
      type: 'number',
      description: 'Kategorilerin sıralanması için sayı (küçük sayı önce görünür)',
    }),
    defineField({
      name: 'isActive',
      title: 'Aktif',
      type: 'boolean',
      description: 'Kategori aktif mi?',
      initialValue: true,
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
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'description',
    },
  },
})
