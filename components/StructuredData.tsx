export function OrganizationStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bisküvi Fabrikası',
    url: 'https://biskuvifabrikasi.com',
    logo: 'https://biskuvifabrikasi.com/icon-512.png',
    description: 'Çikolata, gofret, kek ve şekerleme ürünleri üreten lider fabrika',
    foundingDate: '1995',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'İstanbul',
      addressCountry: 'TR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90-212-XXX-XX-XX',
      contactType: 'customer service',
      email: 'info@biskuvifabrikasi.com',
      availableLanguage: ['Turkish'],
    },
    sameAs: [
      'https://facebook.com/biskuvifabrikasi',
      'https://instagram.com/biskuvifabrikasi',
      'https://twitter.com/biskuvifabrikasi',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function ProductStructuredData({
  name,
  description,
  image,
  price,
  category,
  nutritionInfo,
}: {
  name: string
  description: string
  image: string
  price?: string
  category: string
  nutritionInfo?: {
    calories: string
    protein: string
    carbohydrate: string
    fat: string
  }
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: `https://biskuvifabrikasi.com${image}`,
    category,
    brand: {
      '@type': 'Brand',
      name: 'Bisküvi Fabrikası',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Bisküvi Fabrikası',
    },
    ...(price && {
      offers: {
        '@type': 'Offer',
        price,
        priceCurrency: 'TRY',
        availability: 'https://schema.org/InStock',
      },
    }),
    ...(nutritionInfo && {
      nutrition: {
        '@type': 'NutritionInformation',
        calories: nutritionInfo.calories,
        proteinContent: nutritionInfo.protein,
        carbohydrateContent: nutritionInfo.carbohydrate,
        fatContent: nutritionInfo.fat,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function BreadcrumbStructuredData({ items }: { items: { name: string; url: string }[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://biskuvifabrikasi.com${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQStructuredData({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function WebsiteStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bisküvi Fabrikası',
    url: 'https://biskuvifabrikasi.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://biskuvifabrikasi.com/urunler?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

