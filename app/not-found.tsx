import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-cream-100">
      <div className="text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold font-serif text-choco-900 mb-4">404</h1>
          <h2 className="text-3xl font-serif font-bold text-choco-700 mb-2">
            Sayfa Bulunamadı
          </h2>
          <p className="text-choco-600 text-lg">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-caramel-500 to-gold-400 text-white"
          >
            <Link href="/">
              <Home className="mr-2" />
              Anasayfaya Dön
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-choco-900">
            <Link href="/urunler">
              <ArrowLeft className="mr-2" />
              Ürünlere Git
            </Link>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4">
          <div className="w-16 h-16 bg-caramel-500/30 rounded-full animate-gentle-pulse" />
          <div className="w-12 h-12 bg-gold-400/30 rounded-full animate-gentle-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-20 h-20 bg-choco-900/20 rounded-full animate-gentle-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  )
}

