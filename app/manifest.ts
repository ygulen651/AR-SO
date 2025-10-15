import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Bisküvi Fabrikası',
    short_name: 'Bisküvi Fabrikası',
    description: 'Çikolata, gofret, kek ve şekerleme ürünleri',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF8F1',
    theme_color: '#E89B2D',
    icons: [
      {
        src: '/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}

