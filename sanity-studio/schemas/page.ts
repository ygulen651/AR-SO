import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Sayfa',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sayfa Başlığı',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageType',
      title: 'Sayfa Tipi',
      type: 'string',
      options: {
        list: [
          {title: 'Hakkımızda', value: 'about'},
          {title: 'İletişim', value: 'contact'},
          {title: 'Genel Sayfa', value: 'general'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Sayfa İçeriği',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Başlık', value: 'h1'},
            {title: 'Alt Başlık', value: 'h2'},
            {title: 'Küçük Başlık', value: 'h3'},
          ],
          lists: [
            {title: 'Madde İşareti', value: 'bullet'},
            {title: 'Numara', value: 'number'},
          ],
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Görsel',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isPublished',
      title: 'Yayında',
      type: 'boolean',
      initialValue: false,
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
      title: 'title',
      subtitle: 'pageType',
      media: 'heroImage',
    },
  },
})
